import { addition } from '../server';

describe('test addition', () => {
  test('return bien la bonne valuer', () => {
    expect(addition('1',2)).toBe(3)
  })
})