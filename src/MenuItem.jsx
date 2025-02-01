export const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article>
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{price}</span>
          <p className="item-text">{desc}</p>
        </header>
      </div>
    </article>
  );
};
