export type ParameterHandlerWithChannel = (parameter: string, value: string | number | boolean, channel: number) => void
export type ParameterHandlerWithoutChannel = (parameter: string, value: string | number | boolean) => void
export type ParameterHandler = ParameterHandlerWithChannel | ParameterHandlerWithoutChannel

export interface DropdownOptions {
  objectId: string,
  name: string
}