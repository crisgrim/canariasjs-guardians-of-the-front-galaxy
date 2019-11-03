import { mount } from '@vue/test-utils';
import Game from '../../src/components/Game';

const createCmp = propsData => mount(Game, { propsData });

describe('Game.spec.js', () => {
  const game = {
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
  };
  let cmp;

  describe('Properties', () => {
    it('has a game property', () => {
      cmp = createCmp({ game });
      expect(cmp.props('game')).toEqual(game);
    });
  });

  describe('Validation', () => {
    const gameCmp = createCmp({ game }).vm.$options.props.game;

    it('game is of type object', () => {
      expect(gameCmp.type).toBe(Object);
    });

    it('game is required', () => {
      expect(gameCmp.required).toBeTruthy();
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cmp = createCmp({ game });
    });

    it('calls handleClick when click on game', () => {
      const handleClick = jest.fn();
      cmp.setMethods({ handleClick });
      cmp.find('.game').trigger('click');

      expect(handleClick).toBeCalled();
    });

    it('triggers a game-clicked event when a handleClick method is called', () => {
      const stub = jest.fn();
      cmp.vm.$on('game-clicked', stub);
      cmp.vm.handleClick();

      expect(stub).toBeCalledWith(game);
    });

    it('calls handlegameClick when @game-click happens', () => {
      cmp.find('.game').vm.$emit('game-clicked', game);

      expect(cmp.emitted()['game-clicked'][0]).toEqual([game]);
    });
  });
});
