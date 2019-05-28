const initialState ={
    selectedId : 0,
    dropdownData: [
        {
            id:0,
            title: "Black"
        },
        {
            id:1,
            title: "White"
        },
        {
            id:2,
            title: "Red"
        }
    ]
};

/*
 * action types
 */
const dropdownChanged = 'DROPDOWN_CHANGED';
const formControlChanged = 'FORMCONTROL_CHANGED';

/*
 * action creators
 */

export const actionCreators = {
    dropdownChanged: selectedId => (dispatch, getState)=>{
        dispatch({type: dropdownChanged, selectedId});
    },

    formcontrolChanged: event => (dispatch, getState) =>{
        dispatch({type: formControlChanged, selectedId: event.target.value});
    }
}

export const reducer = (state, action) => {
    state = state || initialState;

    if(action.type === dropdownChanged || action.type === formControlChanged){
        return {
            ...state,
            selectedId: action.selectedId
        };
    }
    return state;
}