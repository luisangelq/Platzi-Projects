
const onScrollForCategories = (setFixedCategory) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setFixedCategory(true);
    } else {
      setFixedCategory(false);
    }
  });

  return () => {
    window.removeEventListener("scroll", () => {});
  };
};

export { onScrollForCategories };
