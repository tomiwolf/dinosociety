import Dino1 from '../assets/Dino1.png'
import Dino2 from '../assets/Dino2.png'
import Dino3 from '../assets/Dino3.png'
import Map from '../assets/map.png'
import Hoodie from '../assets/Hoodie.png'
import PercentageContainer from '../assets/PercentageContainer.png'
import RoadmapBottomImg from '../assets/RoadmapBottomImg.png'

const RoadMap = () => {
	return (
		<div className="roadmap" id="roadmap">
			<h1>Roadmap 1.0</h1>
			<p>Please Join Our Discord For A Details Roadmap.</p>

			<div className="timeline_wrapper">
				<h2>THE BEGINNING</h2>

				<div className="timeline_container">
					<div className="row_1">
						<div className="left_side">
							<div className="img_container">
								<img src={Dino1} alt="" />
							</div>
						</div>

						<div className="percentage_container">
							<div className="img_container">
								<img src={PercentageContainer} alt="PercentageContainer" />
								<span>25%</span>
							</div>
						</div>

					<div className="right_side">
						<div className="text mt-5">
							<h2>Social Launch</h2>
							<p>⭐ Twitter, Instgtam, Discord</p>														
							<p>⭐ Website: worked with several excellent web designers to choose the best design. Mint function will be disable until mint day.</p>
						</div>
					</div>
				</div>

					<div className="row_2">
						<div className="left_side">
							<div className="text mt-5 pt-4">
								<h2>The Marketing</h2>
								<p>⭐ We are trying hard to build some advantageous connections with successful collections and influencers.</p>
								<p>⭐ Current and prospective relationships imply greater exposure and engagement in the project, allowing us to expand our community in size and value.</p>
								<p>⭐ Exclusive merchandise store unlocked</p>
							</div>
						</div>

						<div className="percentage_container">
							<div className="img_container">
								<img src={PercentageContainer} alt="PercentageContainer" />
								<span>50%</span>
							</div>
						</div>

						<div className="right_side">
						   <div className="img_container">
								<img src={Hoodie} alt="" />
						   </div>
						</div>

					</div>

					<div className="row_1">
						<div className="left_side">
							<div className="img_container">
								<img src={Dino2} alt="" />
							</div>
						</div>

						<div className="percentage_container">
							<div className="img_container">
								<img src={PercentageContainer} alt="PercentageContainer" />
								<span>75%</span>
							</div>
						</div>

						<div className="right_side">
							<div className="text mt-5">
								<h2>Donation & Giveback</h2>
								<p>⭐ Charity Donation: Donate $25,000 to a childrens health charity. Community vote for which foundation will be received
									our donation.</p>
								<p>⭐ 10% of royalties will be used continuously for charitable causes.</p>	
								<p>	⭐ $150,000 giveaway budget for Dino Society NFT holders.</p>
									
								
							</div>
						</div>
					</div>

					<div className="row_2">
						<div className="left_side">
							<div className="text mt-5 pt-4">
								<h2>Minting</h2>
								<p>⭐ Incredible Giveaways & Surprise. </p>
								<p>⭐ Listing on Rarity tools.</p>
								<p>⭐ Purchased a 3x3 land on Sandbox for our Play to Earn game development.</p>
							</div>
						</div>

						<div className="percentage_container">
							<div className="img_container">
								<img src={PercentageContainer} alt="PercentageContainer" />
								<span>100%</span>
							</div>
						</div>
						
						<div className="right_side">
							<div className="img_container">
								<img src={Map} alt="PercentageContainer" />
							</div>
						</div>	
					
					</div>
					<div className="vertical_line"></div>
				</div>
			</div>

			<div className="timeline_wrapper">
				<h2>THE DEVELOPMENT</h2>

				<div className="timeline_container">
					<div className="row_1">
						<div className="left_side">
							<div className="img_container">
								<img src={Dino1} alt="" />
							</div>
						</div>

						<div className="percentage_container">
							<div className="img_container">
								<img src={PercentageContainer} alt="PercentageContainer" />
							</div>
						</div>

						<div className="right_side">
							<div className="text">
								<h2>Q2 2022 (MAR)</h2>
								<p>⭐ $DINOS token. $DINOS are our ERC-20 in-game currency used to power the Dino Society ecosystem. </p>
								<p>⭐ Staking Activated.</p>
							</div>
						</div>
					</div>

					<div className="row_2">
						<div className="left_side">
							<div className="text mt-5 pt-4">
								<h2>Q2 2022 (APRIL)</h2>
								<p> ⭐ 3D companion collection drop. (Voxel character ready to use on Sandbox)</p>
								<p>⭐ Inititate liqudity pool. (DINOS/ETH)</p>
							</div>
						</div>

						<div className="percentage_container">
							<div className="img_container">
								<img src={PercentageContainer} alt="PercentageContainer" />
							</div>
						</div>

						<div className="right_side">
							<div className="img_container">
								<img src={Dino3} alt="PercentageContainer" />
							</div>
						</div>
					</div>

					<div className="vertical_line"></div>
				</div>
			</div>

			<div className="roadmap_bottom_img">
				<img src={RoadmapBottomImg} alt="RoadmapBottomImg" />
			</div>
		</div>
	)
}

export default RoadMap
