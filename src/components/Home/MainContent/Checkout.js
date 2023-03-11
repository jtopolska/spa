import { useEffect } from 'react';
import { Box, Paper, Table, TableBody, TableHead, TableContainer, TableRow, TableCell } from '@mui/material';
// import { CloseRounded } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
// import { getCartIsOpen, showCart } from '../../redux/cartOpenSlice';
import { getCartItems, getTotalCost, clearAll, getCost } from '../../redux/cartSlice';
// import { Link } from 'react-router-dom';
// import CartItem from '../Navbar/Cart/CartItem';
import cls from './Checkout.module.css';
import CheckoutCart from './CheckoutCart';


const Checkout = () => {
    const dispatch = useDispatch();
    // const cartIsOpen = useSelector(getCartIsOpen);
    const cartItems = useSelector(getCartItems);
    const cost = useSelector(getCost);

    useEffect(() => {
        dispatch(getTotalCost());
    }, [cartItems, dispatch]);

    return (<>
        {cost === 0 
        ? '' : ( 
            <TableContainer component={Paper} sx={{ width: '80%', ml: '10%', mt: '100px', backgroundColor: 'black' }} >
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                    <TableRow>
                        <TableCell className={ cls.cellColor }>SERVICE (1 hour)</TableCell>
                        <TableCell align="right" className={ cls.cellColor }>PRICE</TableCell>
                        <TableCell align="right" className={ cls.cellColor }>QUANTITY</TableCell>
                        <TableCell align="right"className={ cls.cellColor }>SUBTOTAL</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {cartItems.map((item, i) => (
                        <CheckoutCart key={ i } item={ item }/>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer> 
        )}

        <Box onClick={ () => dispatch(clearAll()) } 
                sx={{ backgroundColor: 'black', px: 1.5, py: 3, fontFamily: `'Cormorant Garamond', serif`, fontStyle: 'italic', fontSize: '18px', cursor: 'pointer', color: 'white', width: '80%', ml: '10%' }}
        >
            { cost === 0 ? '' : 'Clear cart' }
        </Box>
        <Box sx={{ backgroundColor: 'black', px: 1.5, pt: 4, fontFamily: `'Josefin Sans', sans-serif`, letterSpacing: '3px', color: 'white', width: '80%', ml: '10%' }} 
        className={ cost === 0 ? cls.empty : cls.full }>
            { cost === 0 ? 'CART IS EMPTY' : `TOTAL: $${ cost }`}
        </Box>     
    </>);
}

export default Checkout;