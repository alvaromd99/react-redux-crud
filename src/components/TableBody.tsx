import DeleteIcon from '../icons/DeleteIcon'
import EditIcon from '../icons/EditIcon'
import { useAppSelector } from '../hooks/useStore'
import { useActions } from '../hooks/useActions'
import { toast } from 'sonner'

export default function TableBody() {
	const users = useAppSelector((state) => state.users)

	const { removeUser } = useActions()

	return (
		<tbody className='text-left divide-y'>
			{users.map((user, index) => {
				const lastRowPadding = index === users.length - 1 ? 'pb-12' : ''
				return (
					<tr key={index}>
						<td className={`p-6 pl-14 w-14 ${lastRowPadding}`}>
							<p className='w-14 truncate overflow-hidden'>{user.id}</p>
						</td>
						<td className={`p-6 w-64 ${lastRowPadding}`}>
							<div className='flex items-center gap-3 '>
								<img
									src={user.img}
									alt='User photo'
									className='w-10 h-10 rounded-full object-cover'
								/>
								<p>{user.name}</p>
							</div>
						</td>
						<td className={`p-6 w-96 ${lastRowPadding}`}>
							<p>{user.email}</p>
						</td>
						<td className={`p-6 pl-10 pr-14 w-32 ${lastRowPadding}`}>
							<button type='button' className='mr-1'>
								<EditIcon />
							</button>
							<button
								type='button'
								onClick={() => {
									removeUser(user.id)
									toast('User deleted successfully.', {
										unstyled: true,
										classNames: {
											toast: 'bg-red-200 p-5 rounded-lg',
											title: 'text-red-800 text-xl',
										},
										duration: 1500,
									})
								}}>
								<DeleteIcon />
							</button>
						</td>
					</tr>
				)
			})}
		</tbody>
	)
}
