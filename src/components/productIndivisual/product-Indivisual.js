const ProductIndividual = ({ phone }) => {
  const description = phone.description.split(",");

  return (
    <div className="product-individual">
      <img src={phone.image_url} alt={phone.phone_name} />
      <h5 className="product-individual-title">{phone.phone_name}</h5>
      <ul className="product-individual-list">
        <li>🔋{description[2]}</li>
        <li>📁{description[3]}</li>
        <li>⚡{description[4]}</li>
      </ul>
      <button>🛒 Add To Cart</button>
    </div>
  );
};

export default ProductIndividual;
