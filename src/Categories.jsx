export const Categories = ({ categories, categoriesHandler }) => {
  return (
    <div className="btn-container">
      {categories.map((item) => {
        return (
          <button
            className="btn"
            key={item}
            onClick={(item) => categoriesHandler(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
