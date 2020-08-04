const defaultState = {
  loading: true,
  contact: [],
  charts: [],
  ticket: [],
  index: null,
  options: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_CONTACT': {
      const { payload } = action;
      return {
        ...state,
        contact: payload.contact,
        ticket: payload.ticket,
        charts: payload.data
      }
    }
    // DEFAULT
    default: {
      return {
        ...state,
      };
    }
  }
}

export default reducer;