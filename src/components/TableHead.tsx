interface TableHeadProps {
	headers: string[]
}

const TableHead = ({ headers }: TableHeadProps) => {
	return (
		<thead>
			<tr className='text-left border-b-2'>
				{headers.map((header, index) => {
					const firstPadding = index === 0 ? 'pl-12' : ''
					const lastPadding = index === headers.length - 1 ? 'pr-12' : ''
					return (
						<th
							key={index}
							className={`pt-10 pb-6 px-6 border-gray-200 ${lastPadding} ${firstPadding}`}>
							{header}
						</th>
					)
				})}
			</tr>
		</thead>
	)
}

export default TableHead
