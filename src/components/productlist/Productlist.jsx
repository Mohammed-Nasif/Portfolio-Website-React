import Productcard from '../productcard/Productcard';
import './Productlist.css';

export default function Productlist({ products }) {
	return (
		<section className='container row product_list flex-wrap'>
			{products.map((product) => {
				return (
					<div className='col-lg-4 col-md-6 col-sm' key={product.id}>
						<Productcard product={product} />
					</div>
				);
			})}
		</section>
	);
}
