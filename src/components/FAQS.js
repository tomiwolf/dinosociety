import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

const FAQS = () => {
	const QuestionsAnswerArray = [
		{
			id: 0,
			question: 'WHEN IS THE OFFICIAL LAUNCH?',
			answer:
				"TBD. Join our Discord for future announcement.",
		},
		{
			id: 1,
			question: 'WHAT WILL BE THE MINT PRICE ?',
			answer:
				"0.088 ETH + Gas.",
		},

		{
			id: 2,
			question: 'HOW DO I GET WHITELISTED ?',
			answer:
				"We provide a variety of ways to obtain whitelisted, including invitations, early supporters, and holding blue-chip NFT such as BAYC, MAYC, CoolCats, and Doodles. For a complete lists and details please visit our Discord channel.",
		},
		{
			id: 3,
			question: 'HOW I CAN BUY A DINO SOCIETY NFT ?',
			answer:
				"You will need Metamask install and some ETH for mint price + gas",
		},
		{
			id: 4,
			question: 'HOW CAN I VIEW MY NFT AFTER MINT?',
			answer:
				"By logging into your opensea profile, you will be able to access the non-reveal NFT version right away. Your Dino, on the other hand, will be revealed 24 hours after we have sold out.",
		},
		{
			id: 5,
			question: 'WHY DINO SOCIETY NFT ?',
			answer:
				"10% of the royalties will be set aside for charitable causes in perpetuity. 3D companion drop to holder, profit sharing from Sandbox Metaverse's Play to Earn game, and much more are in the works.",
		},
	]

	const [clicked, setClicked] = useState(false)

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null)
		}
		setClicked(index)
	}

	return (
		<div className="faqs_section container_padding_x ">
			<h1>FREQUENTLY ASKED QUESTIONS</h1>

			<div className="questions_container">
				{QuestionsAnswerArray.map((item, index) => (
					<div className="faqs_container">
						<div className="item_container" onClick={() => toggle(index)} key={index}>
							<div className="question">
								<h4>{item.question}</h4>
								<div className="icon_container">{clicked === index ? <FiMinus className="icon" /> : <FiPlus className="icon" />}</div>
							</div>
							{clicked === index ? (
								<div className="answer_dropdown">
									<p>{item.answer}</p>
								</div>
							) : null}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FAQS
