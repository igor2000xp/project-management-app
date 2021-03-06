import { createAction, props } from '@ngrx/store';
import { IUser } from '../state.models';

const actionSource = '[USER]';

export const getUsersAction = createAction(
  `${actionSource} GET ALL CURRENT USER`,
  props<{ token:string }>(),
);
export const getUsersActionSuccess = createAction(
  `${actionSource} GET ALL CURRENT USER, SUCCESS`,
  props<{ users:IUser[] }>(),
);
export const getUsersActionFailed = createAction(
  `${actionSource} GET ALL CURRENT USER, FAILED`,
);
export const getUserAction = createAction(
  `${actionSource} GET USER BY ID`,
);
export const getUserActionSuccess = createAction(
  `${actionSource} GET USER BY ID, SUCCESS`,
  props<{ user:IUser }>(),
);
export const createUserAction = createAction(
  `${actionSource} CREATE A USER RECORD`,
  props<{ currentUser:IUser }>(),
);
export const createUsersActionSuccess = createAction(
  `${actionSource} CREATE A USER RECORD, SUCCESS`,
  props<{ currentUser:IUser }>(),
);
export const createTokenAction = createAction(
  `${actionSource} CREATE A USER TOKEN`,
  props<{ currentUser:IUser }>(),
);
export const createTokenActionSuccess = createAction(
  `${actionSource} CREATE A USER TOKEN SUCCES`,
  props<{ currentUser:IUser }>(),
);
export const updateUserAction = createAction(
  `${actionSource} UPDATE THE USER RECORD`,
  props<{ token:string, id:string, user:IUser }>(),
);
export const updateUsersActionSuccess = createAction(
  `${actionSource} UPDATE THE USER RECORD, SUCCESS`,
  props<{ user:IUser }>(),
);
export const deleteUserAction = createAction(
  `${actionSource} DELETE THE USER RECORD`,
  props<{ token:string, id:string }>(),
);
export const deleteUsersActionSuccess = createAction(
  `${actionSource} DELETE THE USER RECORD, SUCCESS`,
  props<{ empty:null }>(),
);
