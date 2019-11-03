import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Header from '../../src/components/Header.vue';

describe('Header.spec.js', () => {
  const cmp = shallowMount(Header, {
    stubs: {
      RouterLink: RouterLinkStub,
    },
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });

  it('has path properly', () => {
    expect(cmp.find(RouterLinkStub).props().to).toBe('/');
  });
});
