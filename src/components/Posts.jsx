import SideContent from "../SideContent";

export default function Posts({ title, updated, id, children, updateSoon = false }) {
	return (
		<>
			<div className="container-custom">
				<h1 className="ps-3 mt-5">{title}</h1>
				<p className="ps-3 mt-3">
					{updated} <br />
					{updateSoon == true ? <i>*2025 updates coming soon</i> : ""}
				</p>

				<div className="d-flex">
					<div className="col-lg-9 p-3 pt-0">
						<div id={id} className="bposts">
							{children}
						</div>
					</div>
					<SideContent />
				</div>
			</div>
		</>
	);
}
