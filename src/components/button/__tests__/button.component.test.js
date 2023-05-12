import { render, screen } from '@testing-library/react';
import Button from '../button.component';

describe('button tests', () => {
  test('should render base button when nothing is passed', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: black');
  });

  test('should render google button when passed google-sign-in buttonType', () => {
    render(<Button buttonType="google-sign-in" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: #4285f4');
  });

  test('should render inverted button when passed inverted buttonType', () => {
    render(<Button buttonType="inverted" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: white');
  });

  test('should be disabled if isLoading is true', () => {
    render(<Button isLoading={true} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled(true);
  });
});
