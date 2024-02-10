import bag_1 from "../assets/bag_1.png";

function Product(props) {
  return (
      <article>
          <span>{props.name}</span>
          <img src={props.image}/>
          <p>{props.title}</p>
          <h4>{props.price}</h4>
      </article>
  )
}

export default Product