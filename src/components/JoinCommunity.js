import { SiDiscord } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'

import CommunityDino from '../assets/CommunityDino.png'

const JoinCommunity = () => {
	return (
		<div className="join_community container_padding_x" id="community">
			<h1>Join the Community</h1>

			<div className="community_row">
				<div className="content_section">
					<p>
						Together, let’s build the best exclusive club never seen before. Show to the world how strong and influent we are. Let’s take
						over the Metaverse.
					</p>

					<div className="buttons_row">
						<button>
							<SiDiscord className="icon" />
							<span>Join our discord</span>
						</button>
						<button>
							<BsTwitter className="icon" />
							<span>Follow us</span>
						</button>
					</div>
				</div>
				<div className="image_section">
					<img src={CommunityDino} alt="CommunityDino" />
				</div>
			</div>
		</div>
	)
}

export default JoinCommunity
