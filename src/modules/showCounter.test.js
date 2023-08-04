import showCounter from './showCounter.js';

describe('showCounter', () => {
  it('should return the number of show divs in a section', () => {
    const section = {
      querySelectorAll: jest.fn(() => [
        {
          className: 'show-card',
        },
        {
          className: 'show-card',
        },
      ]),
    };

    expect(showCounter(section)).toEqual(2);
  });

  it('should return 0 if there are no show divs in a section', () => {
    const section = {
      querySelectorAll: jest.fn(() => []),
    };

    expect(showCounter(section)).toEqual(0);
  });
});