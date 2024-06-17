export default function ActionTable({ tableData }) {
	return (
		<>
			<table className="table table-bordered table-sm rounded-top-3 overflow-hidden table-striped streamtable">
				<thead className="table-dark align-text-center">
					<tr>
						{tableData.headers.map((x) => (
							<th key={x} scope="col">
								{x}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData.options.map((x) => {
						return (
							<tr key={x.id}>
								<td>{x[Object.keys(x)[1]]}</td>
								<td>{x[Object.keys(x)[2]]}</td>
								<td>{x[Object.keys(x)[3]]}</td>
								<td>{x[Object.keys(x)[4]]}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
