import { SpinnerOverlay, SpinnerContainer } from './spinner.style';

const Spinner = () => (
  <SpinnerOverlay data-testid="spinner">
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
