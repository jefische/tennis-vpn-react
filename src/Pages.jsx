import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Draws from "./components/Draws";
import { useEffect } from "react";
import { HomepagePost } from "./content/HomepagePost";
import { AustralianPost } from "./content/AustralianPost";
import { FrenchPost } from "./content/FrenchPost";
import { WimbledonPost } from "./content/WimbledonPost";
import { USOpenPost } from "./content/USOpenPost";
import { NationalBankOpenPost } from "./content/NationalBankOpenPost";
import { SlamResultsPost } from "./content/SlamResultsPost";
import Footer from "./components/Footer";

export function Home() {
	useEffect(() => {
		document.title = "Home";
	}, []);
	return (
		<>
			<Posts id="toc1" title="How to Watch Tennis Online in 2025" updated="Last updated February 2025">
				<Hero img="main-image" />
				<HomepagePost />
			</Posts>
			<Footer />
		</>
	);
}

export function Australian() {
	useEffect(() => {
		document.title = "Australian Open";
	}, []);
	return (
		<>
			<Posts title="How to Watch the Australian Open in 2024" updated="Last updated December 2023">
				<Hero img="ao-main-image" />
				<AustralianPost />
			</Posts>
			<Footer />
		</>
	);
}

export function French() {
	useEffect(() => {
		document.title = "French Open";
	}, []);
	return (
		<>
			<Posts title="How to Watch the French Open in 2024" updated="Last updated April 2024">
				<Hero img="french-main-image" />
				<FrenchPost />
			</Posts>
			<Footer />
		</>
	);
}

export function Wimbledon() {
	useEffect(() => {
		document.title = "Wimbledon";
	}, []);
	return (
		<>
			<Posts title="How to Watch Wimbledon in 2024" updated="Last updated June 2024">
				<Hero img="wimbledon-main-image" />
				<WimbledonPost />
			</Posts>
			<Footer />
		</>
	);
}

export function USO() {
	useEffect(() => {
		document.title = "US Open";
	}, []);
	return (
		<>
			<Posts title="How to Watch the US Open in 2024" updated="Last updated July 2024">
				<Hero img="uso-main-image" />
				<USOpenPost />
			</Posts>
			<Footer />
		</>
	);
}

export function Contact() {
	useEffect(() => {
		document.title = "Contact";
	}, []);
	return (
		<>
			<h4 className="ps-3 mt-5 text-center">Please email us for any questions at support@totaltennis.tv</h4>
			<Footer fixedBottom={true} />
		</>
	);
}

export function NationalBank() {
	useEffect(() => {
		document.title = "National Bank Open";
	}, []);
	return (
		<>
			<Posts title="How to Watch National Bank Open in 2024" updated="Last updated August 2024">
				<NationalBankOpenPost />
			</Posts>
		</>
	);
}

export function SlamResults() {
	useEffect(() => {
		document.title = "Draws";
	}, []);
	return (
		<>
			<Draws title="Select a Tournament Draw"></Draws>
		</>
	);
}
