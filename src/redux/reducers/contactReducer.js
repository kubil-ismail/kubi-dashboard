const defaultState = {
  loading: true,
  contact: [],
  detail: [],
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
        detail: payload.contact[0],
        contact: payload.contact,
        ticket: payload.ticket,
        charts: payload.data
      }
    }
    case 'DETAIL_CONTACT': {
      const { payload } = action;
      return {
        ...state,
        detail: payload.contact,
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