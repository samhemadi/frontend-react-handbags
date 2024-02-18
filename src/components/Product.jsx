// eslint-disable-next-line react/prop-types
function Product({ label, image, imageAlt, title, price }) {
  return (
      <article>
          <span>{label}</span>
          <img src={image} alt={imageAlt}/>
          <p>{title}</p>
          <h4>{price},-</h4>
      </article>
  )
}

export default Product