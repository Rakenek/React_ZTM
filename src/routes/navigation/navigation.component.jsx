import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { signOutUser } from '../../utlis/firebase/firebase.utils';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <div>
          <LogoContainer className="logo-container" to="/">
            <CrownLogo className="logo" />
          </LogoContainer>
        </div>
        <NavLinks className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
