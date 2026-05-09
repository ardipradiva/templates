import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function AnimatedCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 30 });

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.innerWidth < 1024) return;

    setVisible(true);

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener('mousemove', move);

    // Watch for hoverable elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [role="button"], .cursor-pointer').forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial pass
    document.querySelectorAll('a, button, [role="button"], .cursor-pointer').forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      >
        <motion.div
          animate={{
            width: hovering ? 48 : 32,
            height: hovering ? 48 : 32,
            opacity: hovering ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="rounded-full border border-accent-gold/50 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
      {/* Inner dot */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
      >
        <motion.div
          animate={{
            width: hovering ? 6 : 4,
            height: hovering ? 6 : 4,
          }}
          transition={{ duration: 0.15 }}
          className="rounded-full bg-accent-gold -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </>
  );
}
