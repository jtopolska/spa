import { useEffect } from 'react';
import { Box, Drawer, List, Divider, ListItem } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { getCartIsOpen, showCart } from '../../../redux/cartOpenSlice';
import { getCartItems, getTotalCost, clearAll, getCost } from '../../../redux/cartSlice';
import CartItem from './CartItem';
import cls from './Cart.module.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartIsOpen = useSelector(getCartIsOpen);
    const cartItems = useSelector(getCartItems);
    const cost = useSelector(getCost);

    useEffect(() => {
        dispatch(getTotalCost());
    }, [cartItems, dispatch]);

    // const handleDrawerOpen = () => {
    //   dispatch(showCart(true))
    // };
    
    const handleDrawerClose = () => {
        dispatch(showCart(false))
    };

    const list = () => (
        <Box sx={{
            width: { xs: 280, sm: 300 },
            height: '100%',
            backgroundColor: 'black',
            color: 'white',
        }}
        role='presentation'
        // onClick={handleDrawerClose}
        // onKeyDown={handleDrawerClose}
        >
            <Box sx={{ textAlign: 'start' }}>
                <CloseRounded onClick={handleDrawerClose} className={ cls.close_btn } sx={{ color: 'white', m: 1 }}/>
            </Box>
            <List className={ cls.list } sx={{ backgroundColor: 'black' }}>
                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', p: { xs: 1, sm: 1.5 } }}>
                    {cartItems.map((item, i) => {
                    return (
                        <CartItem key={ i } item={ item } />
                    )
                })}
                </ListItem>
            </List>
            <Divider sx={{ borderColor: '#b9b4b0' }}/>
            <Box sx={{ backgroundColor: 'black', px: 1.5, pt: 4, fontFamily: `'Josefin Sans', sans-serif`, letterSpacing: '3px' }}>
                { cost === 0 ? 'CART IS EMPTY' : `TOTAL: $${ cost }`}
            </Box>
            <Box onClick={ () => dispatch(clearAll()) } 
                sx={{ backgroundColor: 'black', px: 1.5, py: 3, fontFamily: `'Cormorant Garamond', serif`, fontStyle: 'italic', cursor: 'pointer' }}
            >{ cost === 0 ? '' : 'Clear cart' }
            </Box>
        </Box>
    );

    return (
        <div className={ cls.cart }>
            <Drawer anchor='right'
                    open={cartIsOpen}
                    onClose={handleDrawerClose}
            >
                {list()}
            </Drawer>
        </div>
    );
}

export default Cart;