export default function ActionTable() {
	return (
		<>
			<table class="table table-bordered table-sm rounded-top-3 overflow-hidden table-striped streamtable">
				<thead class="table-dark align-text-center">
					<tr>
						<th scope="col">Streaming service</th>
						<th scope="col">Availability</th>
						<th scope="col">Cost per month</th>
						<th scope="col">Streaming details</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td scope="row">9Now</td>
						<td>Australia</td>
						<td>Free</td>
						<td></td>
					</tr>
					<tr>
						<td scope="row">Stan Sport</td>
						<td>Australia</td>
						<td>$15</td>
						<td>
							Requires Stan Basic which starts at $10/month (with
							30 day free trial).
						</td>
					</tr>
					<tr>
						<td scope="row">TSN</td>
						<td>Canada</td>
						<td>$19.99</td>
						<td>TSN1 - TSN5, TSN+</td>
					</tr>
					<tr>
						<td scope="row">Star+</td>
						<td>Latin America</td>
						<td>$9.99</td>
						<td></td>
					</tr>
					<tr>
						<td scope="row">ESPN+</td>
						<td>USA</td>
						<td>$9.99</td>
						<td></td>
					</tr>
					<tr>
						<td scope="row">Sling TV</td>
						<td>USA</td>
						<td>$40 ($20 first month)</td>
						<td>ESPN, ESPN2, ESPN3</td>
					</tr>
					<tr>
						<td scope="row">Tennis Channel Plus</td>
						<td>USA</td>
						<td>$109.99/year</td>
						<td>No monthly plan available currently</td>
					</tr>
					<tr>
						<td scope="row">T2</td>
						<td>USA</td>
						<td>Free</td>
						<td>Available via Samsung TV and Youtube TV</td>
					</tr>
					<tr>
						<td scope="row">Eurosport</td>
						<td>UK</td>
						<td>
							<span>&#163;</span>6.99
						</td>
						<td>Subscribe via Discovery+</td>
					</tr>
					<tr>
						<td scope="row">BBC iPlayer</td>
						<td>UK</td>
						<td>Free</td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<div class="d-grid">
				<a
					class="btn btn-lg rounded-pill btn-danger mt-4 mx-auto"
					href="https://go.expressvpn.com/c/4998943/1462857/16063"
				>
					<span>Unblock streaming with ExpressVPN</span>
				</a>
			</div>
		</>
	);
}
