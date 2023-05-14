const ProductIndividual = ({ phone }) => {
  const description = phone.description.split(",");

  return (
    <div>
      <img src={phone.image_url} alt={phone.phone_name} />
      <h5>{phone.phone_name}</h5>
      <ul>
        <li>{description[2]}</li>
        <li>{description[3]}</li>
        <li>{description[4]}</li>
      </ul>
      <button>Add To Cart</button>
    </div>
  );
};

export default ProductIndividual;
