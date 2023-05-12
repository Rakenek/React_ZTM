import { screen, fireEvent } from '@testing-library/react';
import Navigation from '../navigation.component';
import { renderWithProviders } from '../../../utlis/test/test.utils';
import * as reactRedux from 'react-redux';
import { signOutStart } from '../../../store/user/user.actions';

describe('Navigation test', () => {
  test('It should render a Sign in lin if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();
  });

  test('It should render Sign Out if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: 123,
        },
      },
    });

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();
    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();
  });

  test('it should not render a cart dropdown if isCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const dropdownTextElement = screen.queryByText(/Your cart is empty/i);
    expect(dropdownTextElement).toBeNull();
  });

  test('it should render a cart dropdown if isCartOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const dropdownTextElement = screen.queryByText(/Your cart is empty/i);
    expect(dropdownTextElement).toBeInTheDocument();
  });

  // test('it should dispatch signOutStart action when clicking on the Sign Out Link', async () => {
  //   const mockDispatch = jest.fn();
  //   jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

  //   renderWithProviders(<Navigation />, {
  //     preloadedState: {
  //       user: {
  //         currentUser: {},
  //       },
  //     },
  //   });
  //   const signOutLinkElement = screen.getByText(/sign out/i);

  //   expect(signOutLinkElement).toBeInTheDocument();

  //   await fireEvent.click(signOutLinkElement);
  //   expect(mockDispatch).toHaveBeenCalled();
  //   const signOutAction = signOutStart();
  //   expect(mockDispatch).toHaveBeenCalledWith(signOutAction);
  //   mockDispatch.mockClear();
  // });
});
