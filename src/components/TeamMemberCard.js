const TeamMemberCard = ({ image, name, title, icon }) => {
	return (
		<div className="team_card">
			<div className="img_container">
				<img src={image} alt="images" />
			</div>

			<div className="content">
				<h2>{title}</h2>
				<h3>{name}</h3>

				<div className="icon_container">{icon}</div>
			</div>
		</div>
	)
}

export default TeamMemberCard
