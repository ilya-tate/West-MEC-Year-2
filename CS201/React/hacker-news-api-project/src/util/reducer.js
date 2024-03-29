export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING': {
        return ({ ...state, loading: true });
      }
    case 'SET_HITS': {
        return ({
          ...state,
          loading: false,
          page: 0,
          nbPages: action.payload.nbPages,
          hits: action.payload.hits
        });
      }
    case 'REMOVE_STORY': {
      const newHits = state.hits.filter((hit => hit.objectID !== action.payload));
      return ({
        ...state,
        hits: newHits
      });
    }
    case 'HANDLE_SEARCH': {
      return ({
        ...state,
        query: action.payload,
        page: 0
      });
    }
    case 'HANDLE_PAGE': {
      let newPage = state.page
      if (action.payload === 'inc') {
        newPage = state.page + 1;
        if (newPage + 1 > state.nbPages) {
          newPage = 0;
        }
      } else {
        newPage = state.page - 1;
        if (newPage < 0) {
          newPage = state.nbPages - 1;
        }
      }
      return ({
        ...state,
        page: newPage
      });
    }
    default:
      throw new Error(`No matching ${action.type} action type`);
  }
}
