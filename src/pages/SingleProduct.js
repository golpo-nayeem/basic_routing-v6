import {Link,useParams} from 'react-router-dom';
import '../components/products.css'
import products from '../data';
const SingleProduct = () => {
  const{productId}=useParams();
  const product= products.find(product=>product.id===productId)
  const {image,name}=product;
  return (
    <section className='section product'>
      <img className='l' src={image} alt='name'/>
      <h2>{name}</h2>
      <Link to='/products'>back to products</Link>
    </section>
  );
};

export default SingleProduct;
