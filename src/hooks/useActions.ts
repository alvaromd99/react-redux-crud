import { addNewUser, deleteUserById } from '../store/users/slice'
import { useAppDispatch } from './useStore'

// Custom hook to not be attached to redux and make
// easy to change it

export const useActions = () => {
	const dispatch = useAppDispatch()

	const removeUser = (id: string) => {
		dispatch(deleteUserById(id))
	}

	const addUser = ({ name, email }: { name: string; email: string }) => {
		const image =
			'https://images.unsplash.com/photo-1701273973387-8abff988bb88?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		dispatch(addNewUser({ img: image, name, email }))
	}

	return { removeUser, addUser }
}
