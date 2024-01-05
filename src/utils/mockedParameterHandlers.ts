import { ParameterHandlerWithChannel, ParameterHandlerWithoutChannel } from '../types'

export const instanceParameterHandler: ParameterHandlerWithoutChannel = (parameter, value) => console.log(parameter, value)
export const channelParameterHandler: ParameterHandlerWithChannel = (parameter, channel, value) => console.log(parameter, channel, value)