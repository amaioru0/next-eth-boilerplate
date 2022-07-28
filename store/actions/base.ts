// export const selectProfile = (id:Number) => (dispatch:any) => {
//     console.log("SELECT_PROFILE")
//     console.log(id)
//     dispatch({type: "SELECT_PROFILE", payload: { selectedProfile: id }})
// };

export const setIsSignedIn = (isSignedIn:boolean) => (dispatch:any) => {
    dispatch({type: "SET_IS_SIGNED_IN", payload: { isSignedIn: isSignedIn}})
}


export default {
    setIsSignedIn
}