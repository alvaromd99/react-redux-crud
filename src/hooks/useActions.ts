import { deleteUserById } from '../store/users/slice'
import { useAppDispatch } from './useStore'

// Custom hook to not be attached to redux and make
// easy to change it

export const useActions = () => {
	const dispatch = useAppDispatch()

	const removeUser = (id: string) => {
		dispatch(deleteUserById(id))
	}

	return { removeUser }
}
