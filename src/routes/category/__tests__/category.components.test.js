import { screen } from '@testing-library/react';
import Category from '../category.component';
import { renderWithProviders } from '../../../utlis/test/test.utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    category: 'mens',
  }),
}));

describe('Category tests', () => {
  test('It should render a Spinner if isLoading is true', () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });
    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('It should render product if isLoading is false and there are items present', () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: 'mens',
              items: [
                { id: 1, name: 'Product 1' },
                { id: 2, name: 'Product 2' },
              ],
            },
          ],
        },
      },
    });

    const spinnerElement = screen.queryByTestId('spinner');
    expect(spinnerElement).toBeNull();
    const product1Element = screen.getByText(/Product 1/i);
    expect(product1Element).toBeInTheDocument();
  });
});
