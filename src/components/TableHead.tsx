import { headers } from '../constants/constants'

const TableHead = () => {
	return (
		<thead>
			<tr className='text-left border-b-2'>
				<th className='w-14 pt-10 pb-6 px-6  pl-14'>{headers[0]}</th>
				<th className='w-64 pt-10 pb-6 px-6'>{headers[1]}</th>
				<th className='w-96 pt-10 pb-6 px-6'>{headers[2]}</th>
				<th className='w-32 pt-10 pb-6 px-6 pr-14'>{headers[3]}</th>
			</tr>
		</thead>
	)
}

export default TableHead
