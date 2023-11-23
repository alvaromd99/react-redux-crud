import { User } from '../types/types'

interface TableBodyProps {
	users: User[]
}

export default function TableBody({ users }: TableBodyProps) {
	return (
		<tbody className='text-left'>
			{users.map((user, index) => {
				const lastRowPadding = users.length - 1 ? 'pb-10' : ''
				return (
					<tr key={index}>
						<td className={`p-6 pl-12 w-14 ${lastRowPadding}`}>{user.id}</td>
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
						<td className={`p-6 pr-12 w-32 ${lastRowPadding}`}>Acciones</td>
					</tr>
				)
			})}
		</tbody>
	)
}
