import { normalFunction, arrowFunctionGreeting, shortArrow, add } from '../basic';

describe('normalFunction', () => {
  test('returns greeting with parameter', () => {
    expect(normalFunction('World')).toBe('Hello, World');
    expect(normalFunction('TypeScript')).toBe('Hello, TypeScript');
  });
});

describe('arrowFunctionGreeting', () => {
  test('returns double of input number', () => {
    expect(arrowFunctionGreeting(10)).toBe(20);
    expect(arrowFunctionGreeting(5)).toBe(10);
    expect(arrowFunctionGreeting(0)).toBe(0);
  });
});

describe('shortArrow', () => {
  test('returns double of input number (short syntax)', () => {
    expect(shortArrow(5)).toBe(10);
    expect(shortArrow(3)).toBe(6);
    expect(shortArrow(-2)).toBe(-4);
  });
});

describe('add', () => {
  test('adds two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
  });
});