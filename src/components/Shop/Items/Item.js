import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import cls from './Item.module.css';

const Item = (props) => {
    const dispatch = useDispatch();
    let quantity = 1;

    return (
        <div className={ cls.item }>
            <img src={ `/images/${ props.item.image }.jpg` } alt='Spa service' />
            <button onClick={ () => dispatch(addToCart(props.item, quantity)) }>Add to cart</button>
            <p>{ props.item.title }</p>
            <p>$ { props.item.price }</p>
        </div>
    );
}
export default Item;