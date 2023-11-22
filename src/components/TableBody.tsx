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
					<td className='w-20 flex items-center'>
						<img
							src={user.img}
							alt='User photo'
							className='w-7 h-7 rounded-full'
						/>
						<p>{user.name}</p>
					</td>
					<td className='w-20'>{user.email}</td>
				</tr>
			))}
		</tbody>
	)
}
