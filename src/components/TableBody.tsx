import { User } from '../types/types'

interface TableBodyProps {
	users: User[]
}

export default function TableBody({ users }: TableBodyProps) {
	return (
		<tbody className='text-left'>
			{users.map((user, index) => (
				<tr key={index}>
					<td
						className={`p-6 pl-10 w-14 ${
							index === users.length - 1 ? 'pb-10' : ''
						}`}>
						{user.id}
					</td>
					<td
						className={`p-6 w-56 flex items-center gap-3 ${
							index === users.length - 1 ? 'pb-10' : ''
						}`}>
						<img
							src={user.img}
							alt='User photo'
							className='w-7 h-7 rounded-full'
						/>
						<p>{user.name}</p>
					</td>
					<td
						className={`p-6 w-72 ${index === users.length - 1 ? 'pb-10' : ''}`}>
						{user.email}
					</td>
					<td
						className={`p-6 pr-10 w-32 ${
							index === users.length - 1 ? 'pb-10' : ''
						}`}>
						Acciones
					</td>
				</tr>
			))}
		</tbody>
	)
}
