import { shallowMount } from '@vue/test-utils';
import Home from '../../src/views/Home.vue';

describe('Home.spec.js', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallowMount(Home);
    cmp.setData({
      games: [
        {
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
        },
      ],
    });
  });

  it('equals games to array with and element', () => {
    expect(cmp.vm.games).toEqual([{
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
    }]);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });
});
