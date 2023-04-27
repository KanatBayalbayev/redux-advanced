import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const items = [
  {
    id: "1",
    price: 7,
    title: "Tovar 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ducimus.",
  },
  {
    id: "2",
    price: 10,
    title: "Tovar 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ducimus.",
  },
  {
    id: "3",
    price: 15,
    title: "Tovar 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ducimus.",
  },
];

const Products = (props) => {
  return (
    <section className={styles.products}>
      <h2>В нашем магазине товары самого высокого качества</h2>
      <ul>
        {items.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
