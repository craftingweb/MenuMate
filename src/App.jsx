import { Title } from "./Title";
import data from "./data";
import { useState } from "react";
import { Menu } from "./Menu";
import { Categories } from "./Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setSategories] = useState(allCategories);

  const categoriesHandler = (item) => {
    if (item === "all") {
      setMenuItems(data);
      return;
    }
    return setMenuItems(
      data.filter((items) => {
        return items.category === item;
      })
    );
  };

  return (
    <main>
      <section className="menu">
        <Title title="Our menu" />
        <Categories
          categories={categories}
          categoriesHandler={categoriesHandler}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
