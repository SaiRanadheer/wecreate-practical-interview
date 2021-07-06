export const FORM_SUBMIT_LOADING = 'FORM_SUBMIT_LOADING';
const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';

export const initiateFormSubmission = () => ({
  type: FORM_SUBMIT_LOADING,
});

export const completeFormSubmission = () => ({
  type: FORM_SUBMIT_SUCCESS,
});

const initialState = {
  data: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_SUBMIT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return { ...state };
  }
};
