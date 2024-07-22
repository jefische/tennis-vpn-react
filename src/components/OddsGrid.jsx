import { Fragment } from "react";

export default function OddsGrid({ tableData }) {
	return (
		<div>
			<div className="odds-card-header">
				<h5 className="mt-1">{tableData.title}</h5>
			</div>

			<div className="odds-table">
				<div className="odds-header"></div>
				<div className="odds-header">American Odds</div>
				<div className="odds-header">Decimal Odds</div>

				{tableData.options.map((x) => {
					return (
						<Fragment key={x.id}>
							<div className="odds-data">{x.player}</div>
							<div className="odds-data">{x.american_odds}</div>
							<div className="odds-data">{x.euro_odds}</div>
						</Fragment>
					);
				})}
			</div>
		</div>
	);
}
