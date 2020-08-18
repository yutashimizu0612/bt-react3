const initialState = {
  users: [
    { id: 1, name: 'shimizu', possession: 3000 },
    { id: 2, name: 'yuta', possession: 1000 },
  ],
};

const user = (state = initialState, action) => {
  return state;
};

export default user;
