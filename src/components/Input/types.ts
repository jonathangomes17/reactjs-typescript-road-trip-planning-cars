interface IInput {
  id: string
  value?: string
  placeholder?: string
  error?: IInputError
  disabled?: boolean
}

interface IInputError {
  message: string
  dispatch: boolean
}

export default IInput
