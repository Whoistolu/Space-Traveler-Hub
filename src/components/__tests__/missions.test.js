import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Missions from '../missions';
import store from '../../redux/configureStore';

describe('Check that mission component renders corrrectly', () => {
  it('Renders Mission elements', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(screen.queryByText(/Rockets/)).toBeNull();
  });
});
