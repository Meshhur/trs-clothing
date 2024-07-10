import { USER_ACTION_TYPES } from './User.types.js';
import { createAction } from '../../utils/reducer/reducer.utils.js';

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);