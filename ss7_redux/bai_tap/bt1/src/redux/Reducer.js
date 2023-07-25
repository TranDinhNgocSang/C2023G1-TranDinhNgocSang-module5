const initialValue = {
    users : []
}

export const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'LIST':
            return {...state, users : action.payload}
        default:
            return state;
    }
}