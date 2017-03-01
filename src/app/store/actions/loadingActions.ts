export const loadingStart = () => (store) => {
  store.dispatch({type: 'LOADING_START'});
};

export const loadingStop = (store) => {
  store.dispatch({type: 'LOADING_STOP'});
};

/*
export const agreementAccepted = () => {
  return {
    type: AGREEMENT_ACCEPTED
  }
};
export const agreementNotAccepted = () => {
  return {
    type: AGREEMENT_NOT_ACCEPTED
  }
};
export function fetchActiveUser(id) {
  return (dispatch) => {
    dispatch(requestActiveUser());
    return axios.get(`${api_url}/users/${id}`)
      .then((response) => {
        dispatch(receiveActiveUser(response.data['user']));
      })
  }
}*/
