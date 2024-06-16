import Posts from "./Posts";
import SideContent from "./SideContent";

export default function Body() {
	return (
		<section>
			<div className="container">
				<div className="d-flex mt-4">
					<div className="col-lg-9 p-3 pt-0">
						<Posts />
					</div>
					<SideContent />
				</div>
			</div>
		</section>
	);
}
