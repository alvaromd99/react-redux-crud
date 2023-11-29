import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialState } from '../../constants/constants'
import { User } from '../../types/types'

export const usersSlice = createSlice({
	name: 'users',
	initialState: initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<string>) => {
			const id = action.payload
			return state.filter((user) => user.id !== id)
		},
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID()
			return [...state, { id, ...action.payload }]
		},
	},
})

export default usersSlice.reducer

export const { deleteUserById } = usersSlice.actions
