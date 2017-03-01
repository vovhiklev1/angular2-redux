export const loadingReducer = (state = null, action) => {
  debugger
  switch (action.type) {
    case 'LOADING_START':
      return [
       // ...state,
        true
        /*action.payload*/
      ]
    case 'LOADING_STOP':
      return [
       // ...state,
        false/*,
         action.payload*/
      ]
    default:
      return state
  }
}
