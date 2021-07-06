export const GET_PAGE = 'GET_PAGE';
export const PAGE_LOADING = 'PAGE_LOADING';
const SET_PAGE = 'SET_PAGE';

export const getPage = () => ({
  type: PAGE_LOADING,
});

export const setPage = (data) => ({
  type: SET_PAGE,
  data,
});

const initialState = {
  data: undefined,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_PAGE: {
      const { data } = action;
      return { ...state, data, loading: false };
    }
    default:
      return { ...state };
  }
};
