import dictionary from '../src/scripts/dictionary'

describe('Home', () => {
  test('retornar um objeto vazio', () => {
    expect(dictionary('')).toEqual({})
  })

  test('contar 1 para 1 palavra', () => {
    expect(dictionary('a')).toEqual({ a: 1 })
  })

  test('contar 2 para 2 palavras iguais', () => {
    expect(dictionary('a a')).toEqual({ a: 2 })
  })

  test('contar 2 para 2 palavras iguais, e 1 para uma diferente', () => {
    expect(dictionary('a b a')).toEqual({ a: 2, b: 1 })
  })
})
