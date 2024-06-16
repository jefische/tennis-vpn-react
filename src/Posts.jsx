import ActionCard from "./ActionCard";
import ActionTable from "./ActionTable";
import ActionButton from "./ActionButton";

export default function Posts({
	title,
	id,
	isH1 = false,
	children,
	card = false,
	table = false,
	tableData,
	button = false,
	buttonText,
	buttonID,
	vpnLink,
}) {
	return (
		<>
			<div id={id} className="bposts">
				{isH1 ? (
					<h1 className="mt-4">{title}</h1>
				) : (
					<h2 className="mt-4">{title}</h2>
				)}
				<br />
				{children}
				{card &&
					(button ? (
						<>
							<ActionCard vpnLink={vpnLink} />
							<ActionButton
								vpnLink={vpnLink}
								text={buttonText}
								id={buttonID}
							/>
						</>
					) : (
						<ActionCard vpnLink={vpnLink} />
					))}
				{table &&
					(button ? (
						<>
							<ActionTable
								vpnLink={vpnLink}
								tableData={tableData}
							/>
							<ActionButton vpnLink={vpnLink} text={buttonText} />
						</>
					) : (
						<ActionTable vpnLink={vpnLink} tableData={tableData} />
					))}
			</div>
		</>
	);
}
