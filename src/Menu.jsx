import { MenuItem } from "./MenuItem";

export const Menu = ({ items }) => {
  return (
    <section className="section-center">
      {items.map((menuItem) => {
        return <MenuItem menuItem={menuItem.id} {...menuItem} />;
      })}
    </section>
  );
};
