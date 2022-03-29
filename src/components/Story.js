import { useEffect, useRef, useState } from 'react'
import StoryDino from '../assets/StoryDino.png'

const Story = () => {
	const [timerDays, setTimerDays] = useState('00')
	const [timerHours, setTimerHours] = useState('00')
	const [timerMinutes, setTimerDMinutes] = useState('00')
	const [timerSeconds, setTimerSeconds] = useState('00')

	let interval = useRef()

	const startTimer = () => {
		const countDownDate = new Date('March 17, 2022 16:00:00').getTime()

		interval = setInterval(() => {
			const now = new Date().getTime()

			const distance = countDownDate - now

			const days = Math.floor(distance / (1000 * 60 * 60 * 24))
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
			const seconds = Math.floor((distance % (1000 * 60)) / 1000)

			if (distance < 0) {
				clearInterval(interval.current)
			} else {
				setTimerDays(days)
				setTimerHours(hours)
				setTimerDMinutes(minutes)
				setTimerSeconds(seconds)
			}
		}, 1000)
	}

	useEffect(() => {
		startTimer()

		clearInterval(interval.current)
	}, [])

	return (
		<div className="story container_padding_x " id="story">
			<h1>Mint Announcement in:</h1>

			<div className="time_row">
				<div className="time">
					<div className="number_container">
						<div className="number">{timerDays}</div>
					</div>
					<span>Days</span>
				</div>
				<div className="time">
					<div className="number_container">
						<div className="number">{timerHours}</div>
					</div>
					<span>Hours</span>
				</div>

				<div className="time">
					<div className="number_container">
						<div className="number">{timerMinutes}</div>
					</div>
					<span>minutes</span>
				</div>

				<div className="time">
					<div className="number_container">
						<div className="number">{timerSeconds}</div>
					</div>
					<span>seconds</span>
				</div>
			</div>

			<div className="story_row">
				<div className="story_text">
					<h2> The Story </h2>
					<p>
						The long-thought-extinct volcano suddenly emitted lethal vapors, blanketing the whole world. No one knew why so many children
						were sick, but the world was in chaos. Doctors and scientists attempted everything to rescue the kids, but nothing worked until
						a miracle occurred.
					</p>
					<p>
						10,000 dinosaurs were born to save the Earth and children from the toxic gas. Their energetic presence protects those around
						them. Unfortunately, the persistent use of energy is causing their demise.
					</p>
					<p>
						Humans can only save the Dinosaurs if they work together to create a one-of-a-kind environment that offers the essential energy.
						As a result, the Dino Society was founded. A safe haven for all kinds of Dinosaurs to roam and live happily. Let us work
						together to create the Metaverse so that our beloved dinosaurs may return to the wild. Their community will thrive as a whole,
						in addition to their own and children's well-being.
					</p>
				</div>

				<div className="story_img_container">
					<img src={StoryDino} alt="StoryImg" />
				</div>
			</div>
		</div>
	)
}

export default Story
