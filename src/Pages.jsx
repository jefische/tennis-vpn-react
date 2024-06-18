import Hero from "./components/Hero";
import Posts from "./components/Posts";
import { HomepagePost } from "./content/HomepagePost";
import { AustralianPost } from "./content/AustralianPost";

export function Home() {
	return (
		<>
			<Hero img="main-image" />
			<Posts id="toc1" title="How to Watch Tennis Online in 2024">
				<HomepagePost />
			</Posts>
		</>
	);
}

export function Australian() {
	return (
		<>
			<Hero img="ao-main-image" />
			<Posts title="How to Watch the Australian Open in 2024">
				<AustralianPost />
			</Posts>
		</>
	);
}

export function French() {
	return (
		<>
			<Hero img="french-main-image" />
			<Posts title="How to Watch the French Open in 2024"></Posts>
		</>
	);
}

export function Wimbledon() {
	return (
		<>
			<Hero img="wimbledon-main-image" />
			<Posts title="How to Watch the Wimbledon in 2024"></Posts>
		</>
	);
}

export function USO() {
	return (
		<>
			<Hero img="uso-main-image" />
			<Posts title="How to Watch the US Open in 2024"></Posts>
		</>
	);
}
