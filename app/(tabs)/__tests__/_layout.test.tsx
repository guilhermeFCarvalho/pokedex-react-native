import { render, screen } from '@testing-library/react-native';
import { store } from '@/src/reducers/store'; 
import TabLayout from '../_layout';
import { Provider } from 'react-redux';

describe('TabLayout', () => {
  it('should render the favorites tab with the correct count', () => {
    render(
      <Provider store={store}>
        <TabLayout />
      </Provider>
    );

    const favoritesTab = screen.getByTestId('favorites-tab');
    expect(favoritesTab).toBeTruthy();

    const favoriteCountText = screen.getByTestId('favorite-count-text');
    expect(favoriteCountText).toBeTruthy();

    const favoriteCount = store.getState().favorites.favorites.length;
    expect(favoriteCountText).toHaveTextContent(favoriteCount.toString());
  });

  it('should render the home tab', () => {
    render(
      <Provider store={store}>
        <TabLayout />
      </Provider>
    );

    const homeTab = screen.getByText('Home');
    expect(homeTab).toBeTruthy();
  });

  it('should render the pokedex tab', () => {
    render(
      <Provider store={store}>
        <TabLayout />
      </Provider>
    );

    const pokedexTab = screen.getByText('Pokedex');
    expect(pokedexTab).toBeTruthy();
  });
});
