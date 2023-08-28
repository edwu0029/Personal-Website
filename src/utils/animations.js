export const fadeIn = (dir) => {
  return {
    initial: {
      x: dir === "left" ? 50 : dir === "right" ? -50 : 0,
      y: dir === "up" ? 50 : dir === "down" ? -50 : 0,
      opacity: "0%",
    },
    show: {
      x: 0,
      y: 0,
      opacity: "100%",
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
};
