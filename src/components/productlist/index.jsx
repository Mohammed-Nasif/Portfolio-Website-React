import Productcard from '../productcard';
import './productlist.css';

export default function Productlist({ products, countUp }) {
	return (
		<section className='container row justify-content-between product_list'>
			{products.map((product) => {
				return (
					<div className='col-4' key={product.id}>
						<Productcard product={product} countUp={countUp} />
					</div>
				);
			})}
		</section>
	);
}
