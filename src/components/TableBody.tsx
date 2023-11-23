import DeleteIcon from '../icons/DeleteIcon'
import EditIcon from '../icons/EditIcon'
import { User } from '../types/types'

interface TableBodyProps {
	users: User[]
}

export default function TableBody({ users }: TableBodyProps) {
	return (
		<tbody className='text-left divide-y'>
			{users.map((user, index) => {
				const lastRowPadding = index === users.length - 1 ? 'pb-12' : ''
				return (
					<tr key={index}>
						<td className={`p-6 pl-14 w-14 ${lastRowPadding}`}>{user.id}</td>
						<td
							className={`p-6 w-64 flex items-center gap-3 ${lastRowPadding}`}>
							<img
								src={user.img}
								alt='User photo'
								className='w-10 h-10 rounded-full'
							/>
							<p>{user.name}</p>
						</td>
						<td className={`p-6 w-96 ${lastRowPadding}`}>{user.email}</td>
						<td className={`pl-10 pr-14 w-32 ${lastRowPadding}`}>
							<button type='button' className='mr-1'>
								<EditIcon />
							</button>
							<button type='button'>
								<DeleteIcon />
							</button>
						</td>
					</tr>
				)
			})}
		</tbody>
	)
}
