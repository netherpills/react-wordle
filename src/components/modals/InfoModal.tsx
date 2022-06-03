import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="¿Cómo jugar?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Tenés que adivina la palabra de 5 letras en 6 intentos.
        Cada vez que probás una palabra diferente, el color de los espacios
        ira cambiando acorde a si la letra está en la palabra o no.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="J"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="R" />
        <Cell value="G" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra J está en la palabra y en el lugar correcto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="present"
        />
        <Cell value="N" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra N está en la palabra pero no en el lugar correcto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell isRevealing={true} isCompleted={true} value="T" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra T no se encuentra en ningún lugar de la palabra.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        El codigo original es de
        -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          cwackerfuss
        </a>{' '}
        Personalizado por
        -{' '}
        <a
          href="https://www.youtube.com/watch?v=pzo9nM2kEkM"
          className="underline font-bold"
        >
          tu mamá
        </a>{' '}
      </p>
    </BaseModal>
  )
}
