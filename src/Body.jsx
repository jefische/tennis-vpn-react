import Hero from "./components/Hero";
import Posts from "./components/Posts";
import SideContent from "./SideContent";
import { HomepagePost } from "./content/HomepagePost";

export default function Body() {
	return (
		<div className="container">
			<div className="d-flex mt-4">
				<div className="col-lg-9 p-3 pt-0">
					<Hero img="main-image" />
					<Posts id="post1" title="How to Watch Tennis Online in 2024">
						<HomepagePost />
					</Posts>
				</div>
				<SideContent />
			</div>
		</div>
	);
}
