import Hero from "./Hero";
import Posts from "./Posts";
import SideContent from "./SideContent";
import { HomepagePost1, HomepagePost2 } from "./HomepagePosts";

export default function Body() {
	return (
		<section>
			<div className="container">
				<div className="d-flex mt-4">
					<div className="col-lg-9 p-3 pt-0">
						<Hero />
						<Posts
							title="How to Watch Tennis Online in 2024"
							isH1={true}
							card={true}
						>
							{" "}
							<HomepagePost1 />
						</Posts>
						<Posts
							title="Best Streaming Options to Watch Tennis"
							table={true}
						>
							<HomepagePost2 />
						</Posts>
					</div>
					<SideContent />
				</div>
			</div>
		</section>
	);
}
