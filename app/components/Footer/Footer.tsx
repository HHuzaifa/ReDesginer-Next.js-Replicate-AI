import React from 'react'
import {
	AiFillTwitterCircle,
	AiFillInstagram,
	AiFillYoutube,
	AiFillLinkedin,
} from 'react-icons/ai'

import { FaDiscord } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { BsTiktok } from 'react-icons/bs'

const Footer = () => {
	return (
		<footer className="flex justify-between md:justify-center md:gap-16 mt-20 mb-4">
			<a
				href="https://twitter.com/Hooha_riddle"
				target="_blank"
				rel="noreferrer"
				className="hover:opacity-50 transition duration-150"
				aria-label="Twitter"
			>
				<AiFillTwitterCircle size={20} />
			</a>
			
			<a
				href="https://www.youtube.com/channel/UCL1Caim1QkW_0D_RNMZK0gQ"
				target="_blank"
				rel="noreferrer"
				className="hover:opacity-50 transition duration-150"
				aria-label="Youtube"
			>
				<AiFillYoutube size={20} />
			</a>
			<a
				href="https://maverick-mav.vercel.app/"
				target="_blank"
				rel="noreferrer"
				className="hover:opacity-50 transition duration-150"
				aria-label="Maverick"
			>
				<TbWorldWww size={20} />
			</a>
			
			<a
				href="https://www.instagram.com/h_k_riddle/"
				target="_blank"
				rel="noreferrer"
				className="hover:opacity-50 transition duration-150"
				aria-label="Instagram"
			>
				<AiFillInstagram size={20} />
			</a>
			<a
				href="https://www.linkedin.com/in/huzaifa-hk/"
				target="_blank"
				rel="noreferrer"
				className="hover:opacity-50 transition duration-150"
				aria-label="Linkedin"
			>
				<AiFillLinkedin size={20} />
			</a>
		</footer>
	)
}

export default Footer
