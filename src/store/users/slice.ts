import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialState } from '../../constants/constants'

export const usersSlice = createSlice({
	name: 'users',
	initialState: initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<number>) => {
			const id = action.payload
			return state.filter((user) => user.id !== id)
		},
	},
})

export default usersSlice.reducer

export const { deleteUserById } = usersSlice.actions
