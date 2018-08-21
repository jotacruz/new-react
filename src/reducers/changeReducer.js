import { CHANGE_UPDATE_VALUE } from '../actions/actionsTypes';

const initialValue = {
    value: 'VALOR INICIAL'
}

export const changeReducer = (state = initialValue, action) => {
    switch (action.type){
        case CHANGE_UPDATE_VALUE:
            return {...state, value: action.payload}
        default:
            return state;
    }
}