import { fail } from 'assert'

import { GAME_LOCALE } from './settings'
import { VALID_GUESSES } from './validGuesses'

const LOCALE_VALID_GUESSES = VALID_GUESSES[GAME_LOCALE]

describe('valid guesses', () => {
  test('words are unique', () => {
    const uniqueWords = Array.from(new Set(LOCALE_VALID_GUESSES))

    expect(LOCALE_VALID_GUESSES.length).toEqual(uniqueWords.length)

    if (uniqueWords.length !== LOCALE_VALID_GUESSES.length) {
      uniqueWords.forEach((w) => {
        const ww = LOCALE_VALID_GUESSES.filter((x) => x === w)
        if (ww.length > 1) {
          fail(`The word ${w} is not unique.`)
        }
      })
    }
  })
})
