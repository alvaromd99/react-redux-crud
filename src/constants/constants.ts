import { User } from '../types/types'

export const headers = ['Id', 'Name', 'Email', 'Acciones']

const defaultUsers = [
	{
		id: 1,
		img: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		name: 'Alice',
		email: 'alice@example.com',
	},
	{
		id: 2,
		img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		name: 'Bob',
		email: 'bob@example.com',
	},
	{
		id: 3,
		img: 'https://images.unsplash.com/photo-1635107510862-53886e926b74?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		name: 'Charlie',
		email: 'charlie@example.com',
	},
]

// Immediately-invoked function (IIFE)
export const initialState: User[] = (() => {
	const persistedState = localStorage.getItem('reduxState')

	return persistedState ? JSON.parse(persistedState).users : defaultUsers
})()

const randomPhoto =
	'https://unsplash.com/es/fotos/hombre-con-chaqueta-negra-y-gorra-marron-YUu9UAcOKZ4'
