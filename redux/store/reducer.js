const initialState = {
  data:{},
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SIGNUP') {
    console.log('Sign Up Berhasil');
    return {
      ...state,
      data: action.payload,
    };
  }
};

export default reducer;
