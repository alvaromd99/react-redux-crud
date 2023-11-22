interface TableHeadProps {
	headers: string[]
}

const TableHead = ({ headers }: TableHeadProps) => {
	return (
		<thead>
			<tr>
				{headers.map((header, index) => (
					<th key={index}>{header}</th>
				))}
			</tr>
		</thead>
	)
}

export default TableHead
