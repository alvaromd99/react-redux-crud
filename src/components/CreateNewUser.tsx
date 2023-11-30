import React, { useState } from 'react'
import AddIcon from '../icons/AddIcon'

export default function CreateNewUser() {
	const [isOpen, setIsOpen] = useState(false)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	return (
		<>
			{isOpen ? (
				<form
					onSubmit={handleSubmit}
					className='bg-slate-100 flex flex-col justify-center items-center'>
					<input type='text' placeholder='Name...' />
					<input type='text' placeholder='Email' />
					<button type='submit'>Create User</button>
				</form>
			) : (
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='w-14 h-14 bg-slate-100 rounded flex items-center justify-center'>
					<AddIcon />
				</button>
			)}
		</>
	)
}
