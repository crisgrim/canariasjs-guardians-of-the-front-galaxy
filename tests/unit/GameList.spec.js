import { mount } from '@vue/test-utils';
import GamesList from '../../src/components/GamesList';
import Game from '../../src/components/Game';

describe('GamesList.spec.js', () => {
  const games = [{
    id: 0,
    title: 'God of war',
    year: 2018,
    publish: new Date(2018, 11, 1),
    started: false,
    ended: false,
    percentage: 0,
    estimated: 20,
    score: 8,
    hype: 10,
    categories: ['Adventure', 'Vikings', 'One Player'],
    image: 'https://static.promodescuentos.com/pepperpdimages/threads/thread_large/default/251090_1.jpg',
  }];

  let cmp;

  beforeEach(() => {
    cmp = mount(GamesList, {
      propsData: {
        games,
      },
    });
  });

  it('has received games as property', () => {
    expect(cmp.props().games).toEqual(games);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });

  it('is a GamesList component', () => {
    expect(cmp.is(GamesList)).toBe(true);
  });

  it('contains a game component', () => {
    expect(cmp.contains(Game)).toBe(true);
  });

  // Vue instance
  it('Both GamesList and game are vue instances', () => {
    expect(cmp.isVueInstance()).toBe(true);
    expect(cmp.find(Game).isVueInstance()).toBe(true);
  });

  // Structure
  it('game element exists', () => {
    expect(cmp.find('.game').exists()).toBe(true);
  });

  it('game is not empty', () => {
    expect(cmp.find(Game).isEmpty()).toBe(false);
  });

  it('game has a class attribute set to "game"', () => {
    expect(cmp.find(Game).attributes().class).toBe('game');
  });

  it('Calls handleGameClick when @game-click happens', () => {
    const stub = jest.fn();
    cmp.setMethods({ handleGameClick: stub });
    cmp.find('.game').vm.$emit('game-clicked', {
      id: 0,
      title: 'God of war',
      year: 2018,
      publish: new Date(2018, 11, 1),
      started: false,
      ended: false,
      percentage: 0,
      estimated: 20,
      score: 8,
      hype: 10,
      categories: ['Adventure', 'Vikings', 'One Player'],
      image: 'https://static.promodescuentos.com/pepperpdimages/threads/thread_large/default/251090_1.jpg',
    });

    expect(stub).toBeCalledWith({
      id: 0,
      title: 'God of war',
      year: 2018,
      publish: new Date(2018, 11, 1),
      started: false,
      ended: false,
      percentage: 0,
      estimated: 20,
      score: 8,
      hype: 10,
      categories: ['Adventure', 'Vikings', 'One Player'],
      image: 'https://static.promodescuentos.com/pepperpdimages/threads/thread_large/default/251090_1.jpg',
    });
  });
});
