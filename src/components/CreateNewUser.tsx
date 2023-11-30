import React, { useState } from 'react'
import AddIcon from '../icons/AddIcon'
import { useActions } from '../hooks/useActions'

interface CustomElements extends HTMLFormControlsCollection {
	name: HTMLInputElement
	email: HTMLInputElement
}

interface CustomForm extends HTMLFormElement {
	readonly elements: CustomElements
}

export default function CreateNewUser() {
	const [isOpen, setIsOpen] = useState(false)
	const { addUser } = useActions()

	const handleSubmit = (event: React.FormEvent<CustomForm>) => {
		event.preventDefault()

		const target = event.currentTarget.elements

		const formData = {
			name: target.name.value,
			email: target.email.value,
		}
		addUser(formData)

		setIsOpen(!isOpen)
	}

	return (
		<>
			{isOpen ? (
				<form
					onSubmit={handleSubmit}
					className='bg-slate-100 flex flex-col justify-center items-center gap-8 p-6 rounded-lg'>
					<div className='flex flex-col items-center gap-3'>
						<input
							name='name'
							type='text'
							placeholder='Name...'
							className='w-64 h-8 pl-2'
						/>
						<input
							name='email'
							type='text'
							placeholder='Email...'
							className='w-64 h-8 pl-2'
						/>
					</div>
					<div className='flex items-center justify-end w-full'>
						<button type='submit' className='w-36 h-16 bg-green-400 rounded-md'>
							Create User
						</button>
					</div>
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
