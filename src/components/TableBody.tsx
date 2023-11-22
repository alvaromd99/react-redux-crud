import { User } from '../types/types'

interface TableBodyProps {
	users: User[]
}

export default function TableBody({ users }: TableBodyProps) {
	return (
		<tbody>
			{users.map((user, index) => (
				<tr key={index}>
					<td className='w-3'>{user.id}</td>
					<td className='w-20'>{user.name}</td>
					<td className='w-20'>{user.email}</td>
				</tr>
			))}
		</tbody>
	)
}
