import { fail } from 'assert'

import { GAME_LOCALE } from './settings'
import { WORDS } from './wordlist'

const LOCALE_WORDS = WORDS[GAME_LOCALE]
// You may not want the list of solutions to be unique. In that case, disable this test
describe('wordlist', () => {
  test('words are unique', () => {
    const uniqueWords = Array.from(new Set(LOCALE_WORDS))

    expect(LOCALE_WORDS.length).toEqual(uniqueWords.length)

    if (uniqueWords.length !== LOCALE_WORDS.length) {
      uniqueWords.forEach((w) => {
        const ww = LOCALE_WORDS.filter((x) => x === w)
        if (ww.length > 1) {
          fail(`The word ${w} is not unique.`)
        }
      })
    }
  })
})
