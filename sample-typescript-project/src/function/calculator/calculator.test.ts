import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator('test');
  });

  describe('コンストラクタ', () => {
    test('名前プロパティが設定される', () => {
      expect(calculator.name).toBe('test');
    });
  });

  describe('add メソッド', () => {
    test('正の数同士の足し算ができる', () => {
      expect(calculator.add(5, 3)).toBe(8);
    });

    test('負の数同士の足し算ができる', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('ゼロとの足し算ができる', () => {
      expect(calculator.add(5, 0)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('multiplication メソッド', () => {
    test('正の数同士の掛け算ができる', () => {
      expect(calculator.multiplication(4, 5)).toBe(20);
    });

    test('負の数を含む掛け算ができる', () => {
      expect(calculator.multiplication(-2, 3)).toBe(-6);
      expect(calculator.multiplication(-2, -3)).toBe(6);
    });

    test('ゼロとの掛け算ができる', () => {
      expect(calculator.multiplication(5, 0)).toBe(0);
      expect(calculator.multiplication(0, 0)).toBe(0);
    });
  });
});