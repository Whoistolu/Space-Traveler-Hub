import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import MyProfile from '../my_Profile';
import store from '../../redux/configureStore';

describe('Check that reserved rockets and missions renders corrrectly', () => {
  it('Reserve rocket and mission', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(screen.queryByText(/Fly a plane/)).toBeNull();
  });
});
