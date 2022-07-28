const base = (state = {isSignedIn: (typeof window !== undefined ? false : localStorage.getItem('jid') ? true : false) }, action:any) => {
    switch(action.type) {
        case "SET_IS_SIGNED_IN":
            return {
                ...state,
                isSignedIn: action.payload.isSignedIn
            }
        default: 
            return state;
    }
}

export default base;