import { i18n } from '@lingui/core'
import { Trans } from '@lingui/macro'

import { INSTRUCTIONS_TITLE } from '../../constants/strings'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title={i18n._(INSTRUCTIONS_TITLE)}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <Trans>
          Guess the word in 6 tries. After each guess, the color of the tiles
          will change to show how close your guess was to the word.
        </Trans>
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="F"
          status="correct"
        />
        <Cell value="A" isCompleted={true} />
        <Cell value="M" isCompleted={true} />
        <Cell value="B" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <Trans>The letter W is in the word and in the correct spot.</Trans>
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="D" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="present"
        />
        <Cell value="H" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <Trans>The letter N is in the word but in the wrong spot.</Trans>
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" isCompleted={true} />
        <Cell value="H" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="R" status="absent" />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <Trans>The letter R is not in the word in any spot.</Trans>
      </p>
    </BaseModal>
  )
}
