import { normalFunction, arrowFunctionGreeting, shortArrow, add } from '../basic';

describe('normalFunction', () => {
  test('パラメータを含む挨拶文を返す', () => {
    expect(normalFunction('World')).toBe('Hello, World');
    expect(normalFunction('TypeScript')).toBe('Hello, TypeScript');
  });
});

describe('arrowFunctionGreeting', () => {
  test('入力値の2倍を返す', () => {
    expect(arrowFunctionGreeting(10)).toBe(20);
    expect(arrowFunctionGreeting(5)).toBe(10);
    expect(arrowFunctionGreeting(0)).toBe(0);
  });
});

describe('shortArrow', () => {
  test('入力値の2倍を返す（短縮構文）', () => {
    expect(shortArrow(5)).toBe(10);
    expect(shortArrow(3)).toBe(6);
    expect(shortArrow(-2)).toBe(-4);
  });
});

describe('add', () => {
  test('2つの数値を正しく足し算する', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
  });
});