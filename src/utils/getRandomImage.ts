import { images } from '../constants/constants'

export default function getRandomImage() {
	const min = 0
	const max = images.length - 1

	const rand = Math.floor(Math.random() * (max - min)) + min

	return images[rand]
}
