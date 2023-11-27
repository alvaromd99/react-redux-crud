import { createSlice } from '@reduxjs/toolkit'
import { users } from '../../constants/constants'

export const usersSlice = createSlice({
	name: 'users',
	initialState: users,
	reducers: {},
})

export default usersSlice.reducer
