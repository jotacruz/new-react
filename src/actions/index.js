import { CHANGE_UPDATE_VALUE } from './actionsTypes';

export const changeValue = value => ({
    type: CHANGE_UPDATE_VALUE,
    payload: value  
})