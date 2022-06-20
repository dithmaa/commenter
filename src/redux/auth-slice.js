import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    usersList: [
        
    ],
    currentUserId: JSON.parse(localStorage.getItem('currentUserId')) || null,
    isAuthed: JSON.parse(localStorage.getItem('isAuthed')) || false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUsers(state, action) { // Добавить пользователей из сервера
        state.usersList = action.payload;
      },
      addUser(state, action) {
        state.usersList.push(action.payload); // Создать пользователя
      },
      setCurrentUserId(state, action) {
        state.currentUserId = action.payload
      },
      setAuth(state, action) {
        state.isAuthed = action.payload
      },
    }
  })

  export const {setUsers, addUser, setCurrentUserId, setAuth} = authSlice.actions;
  export default authSlice.reducer;