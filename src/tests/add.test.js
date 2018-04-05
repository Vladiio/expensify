const add = (a, b) => a + b;

const generateGreeting = (name = "Anonymous") => `Hello, ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should generate greeting with provided name', () => {
  expect(
    generateGreeting('Vlad')
  ).toBe('Hello, Vlad!')
});

test('should generate greeting for no name', () => {
  expect(
    generateGreeting()
  ).toBe('Hello, Anonymous!')
})
