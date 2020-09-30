import * as types from './types'
import {InitialState} from '../root-state'
import {NotificationAction} from './actions'
import {createNotification} from 'src/models/i-notification'

export function notificationReducer(
  state = InitialState.notifications,
  action: NotificationAction,
) {
  switch (action.type) {
    case types.ENQUEUE_SNACKBAR: return [
      ...state,
      createNotification(action.message, action.options),
    ]
    case types.REMOVE_SNACKBAR:
      return state.filter(n => n.key !== action.key)
    default: return state
  }
}