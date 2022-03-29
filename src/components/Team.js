import TeamMemberCard from './TeamMemberCard'
import BAYC2819 from '../assets/bayc2819.png'
import TeamDino2 from '../assets/TeamDino2.png'
import TeamDino3 from '../assets/TeamDino3.png'
import TeamDino4 from '../assets/TeamDino4.png'

import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { SiDiscord } from 'react-icons/si'

const Team = () => {
	return (
		<div className="team container_padding_x" id="team">
			<h1>Our Team</h1>

			<div className="team_row container-fluid">
				<div className="row gx-5">
					<div className="col col-lg-3 col-12 mt-4">
					<a href="http://twitter.com/bayc2819"><TeamMemberCard image={BAYC2819} title="Founder" name="BAYC #2819" icon={<BsTwitter className="icon" />} /></a>
					</div>
					<div className="col col-lg-3 col-12 mt-4">
						<TeamMemberCard image={TeamDino2} title="Marketing Lead" name="Rainis Hwin" icon={<RiInstagramFill className="icon" />} />
					</div>
					<div className="col col-lg-3 col-12 mt-4">
						<TeamMemberCard image={TeamDino3} title="Artist" name="Arena Multimedia" icon={<BsLinkedin className="icon" />} />
					</div>
					<div className="col col-lg-3 col-12 mt-4">
						<TeamMemberCard image={TeamDino4} title="Community MOD" name="Tony" icon={<SiDiscord className="icon" />} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Team
