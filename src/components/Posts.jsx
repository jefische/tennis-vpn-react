import SideContent from "../SideContent";

export default function Posts({ title, updated, id, children }) {
	return (
		<>
			<h1 className="ps-3 mt-5">{title}</h1>
			<p className="ps-3 mt-3">{updated}</p>
			<div className="d-flex">
				<div className="col-lg-9 p-3 pt-0">
					<div id={id} className="bposts">
						{children}
					</div>
				</div>
				<SideContent />
			</div>
		</>
	);
}
