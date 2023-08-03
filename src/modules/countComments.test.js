import countComments from './countComments.js';

document.querySelectorAll = jest.fn();

describe('countComments function', () => {
  test('should return 0 when no comment elements are present', () => {
    document.querySelectorAll.mockReturnValue([]);
    const result = countComments();
    expect(result).toBe(0);
  });

  test('should return the correct number of comment elements', () => {
    const mockCommentElements = [
      document.createElement('li'),
      document.createElement('li'),
    ];

    /* (mockReturnValue) method to specify what
     the mocked function should return when called.
    */
    document.querySelectorAll.mockReturnValue(mockCommentElements);

    const result = countComments();

    expect(result).toBe(mockCommentElements.length);
  });
});
