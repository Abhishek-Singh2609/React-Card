import Product from "./Product.jsx";

function ProductTab() {
  let styles= {
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItem:"center",
    gap:"1rem",
  }
  return (
    <div style={styles}>
      <Product title="Logitech MX Master" idx={0}/>
      <Product title="Apple pencil (2 Gen)" idx={1}/>
      <Product title="Zebronics Zeb-transformer" idx={2}/>
      <Product title="Petronics Toad 23" idx={3}/>
    </div>
  );
}
export default ProductTab;
 