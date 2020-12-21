const initialState = {
  data: 'Default',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SIGNUP') {
    console.log('Cek Reducer');
    return {
      ...state,
      data: action.payload,
    };
  }
};

export default reducer;
