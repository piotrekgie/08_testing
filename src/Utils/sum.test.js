import renderer from 'react-test-renderer';
import sum from "./sum";

it('should sum be correct', () => {
  const a = Math.random() * 100;
  const b = Math.random() * 100;

  expect(sum(a, b)).toEqual(a + b);
})