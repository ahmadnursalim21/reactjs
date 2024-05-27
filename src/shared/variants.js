export const fadeIn = (deraction, delay) => {
  return {
    hidden: {
      y: deraction === "up" ? 40 : deraction === "down" ? -40 : 0,
      opacity: 0,
      x: deraction === "left" ? 40 : deraction === "right" ? -40 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
