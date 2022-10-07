import {Link} from 'react-router-dom';
import products from '../data';
import '../components/products.css'
const Products = () => {
  
  return (
    <>
      <section className='section'>
        <h2>products</h2>
        <div className='products n'>

          {
            products.map((product)=>{
              return <article className='k'  key={product.key}>
                  <h4 className='p'>{product.name}</h4>

                  <img className='m' src={product.image}/><br/>
                  <div className='p'>
                  <Link   to={`/products/${product.id}`}>more info</Link></div>
              </article>
            })
          }

        </div>
        <Link to='/' className='btn'>back home </Link>
      </section>
    </>
  );
};

export default Products;
