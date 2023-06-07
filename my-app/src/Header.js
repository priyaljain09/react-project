const products = [
    { title: 'Apple', isFruit: false, id: 1 },
    { title: 'Mango', isFruit: false, id: 2 },
    { title: 'Banana', isFruit: true, id: 3 },
  ];
  
  export default function Fruits() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'red' : 'green'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }
  