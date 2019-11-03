import formatDate from '../../../src/utils/format-date';

describe('Tests Helper format-date.js', () => {
  it('Should get a formated date', () => {
    const date = new Date(2018, 11, 27);
    const formatedDate = formatDate(date);
    expect(formatedDate).toEqual('27/11/2018');
  });
  it('Should get a false return', () => {
    const formatedDate = formatDate();
    expect(formatedDate).toEqual(false);
  });
});
