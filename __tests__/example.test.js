function soma(a, b) {
  return a + b;
}

test('teste da soma se irá retorna o valor 9', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
