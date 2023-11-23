interface TableHeadProps {
	headers: string[]
}

const TableHead = ({ headers }: TableHeadProps) => {
	return (
		<thead>
			<tr className='text-left border-b-2'>
				{headers.map((header, index) => (
					<th
						key={index}
						className={`pt-10 pb-6 px-6 border-gray-200 ${
							index === headers.length - 1 ? 'pr-10' : ''
						} ${index === 0 ? 'pl-10' : ''}`}>
						{header}
					</th>
				))}
			</tr>
		</thead>
	)
}

export default TableHead
