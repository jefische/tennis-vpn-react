export default function SideContent() {
	return (
		<div className="col-3 p-3 pt-0 d-none d-lg-block">
			{/* <div className="overflow-hidden">
				<p className="fst-italic fs-5 fw-semibold">
					"What is the single most important quality of a tennis
					champion? I would have to say desire, staying in there and
					winning matches when you are not playing that well."
				</p>
				<p className="fst-italic fs-5 fw-semibold">John McEnroe</p>
				<img src="" className="img-responsive" />
				<picture>
					<source
						media="(min-width: 1200px)"
						srcSet="assets/sideHome-354x389.png"
					/>
					<img src="assets/sideHome-300x330.png" />
				</picture>
			</div> */}

			<div id="TOC" className="mt-5 sticky-top" style={{ top: "10%" }}>
				<h4>Table of Contents</h4>
				<ol>
					<li>
						<a href="#toc1">How to Watch Tennis Online</a>
					</li>
					<li>
						<a href="#toc2">Best Streaming Options</a>
					</li>
					<li>
						<a href="#toc3">Why do you need a VPN?</a>
					</li>
					<li>
						<a href="#toc4">Upcoming ATP events</a>
					</li>
					<li>
						<a href="#toc5">Upcoming WTA events</a>
					</li>
				</ol>
			</div>
		</div>
	);
}
