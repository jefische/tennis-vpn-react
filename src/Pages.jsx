import Hero from "./components/Hero";
import Posts from "./components/Posts";
import { HomepagePost } from "./content/HomepagePost";
import { AustralianPost } from "./content/AustralianPost";

export function Home() {
	return (
		<>
			<Posts id="toc1" title="How to Watch Tennis Online in 2024" updated=" ">
				<Hero img="main-image" />
				<HomepagePost />
			</Posts>
		</>
	);
}

export function Australian() {
	return (
		<>
			<Posts title="How to Watch the Australian Open in 2024" updated="Last updated December 2023">
				<Hero img="ao-main-image" />
				<AustralianPost />
			</Posts>
		</>
	);
}

export function French() {
	return (
		<>
			<Posts title="How to Watch the French Open in 2024">
				<Hero img="french-main-image" />
			</Posts>
		</>
	);
}

export function Wimbledon() {
	return (
		<>
			<Posts title="How to Watch the Wimbledon in 2024">
				<Hero img="wimbledon-main-image" />
			</Posts>
		</>
	);
}

export function USO() {
	return (
		<>
			<Posts title="How to Watch the US Open in 2024">
				<Hero img="uso-main-image" />
			</Posts>
		</>
	);
}
