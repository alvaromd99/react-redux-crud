import React, { useState } from 'react'
import AddIcon from '../icons/AddIcon'
import { useActions } from '../hooks/useActions'
import { CustomForm, ErrorInterface } from '../types/types'
import { toast } from 'sonner'

const initialErrorState = {
	name: false,
	email: false,
}

export default function CreateNewUser() {
	const [isOpen, setIsOpen] = useState(false)
	const [error, setError] = useState<ErrorInterface>(initialErrorState)

	const { addUser } = useActions()

	const handleSubmit = (event: React.FormEvent<CustomForm>) => {
		event.preventDefault()

		const target = event.currentTarget.elements

		const formData = {
			name: target.name.value,
			email: target.email.value,
		}

		if (!formData.name) {
			return setError((prevState) => ({
				...prevState,
				name: true,
			}))
		} else if (!formData.email) {
			return setError((prevState) => ({
				...prevState,
				email: true,
			}))
		}

		addUser(formData)

		setError((prevState) => ({
			...prevState,
			name: false,
			email: false,
		}))

		setIsOpen(!isOpen)

		toast('User created successfully.', {
			unstyled: true,
			classNames: {
				toast: 'bg-green-200 p-6 rounded-lg',
				title: 'text-green-800 text-xl',
			},
			duration: 1500,
		})
	}

	return (
		<>
			{isOpen ? (
				<>
					<form
						onSubmit={handleSubmit}
						className='bg-slate-100 flex flex-col justify-center items-center gap-4 p-6 rounded-lg'>
						<div className='flex flex-col items-center gap-3'>
							<input
								name='name'
								type='text'
								placeholder='Name...'
								className='w-64 h-8 pl-2'
							/>
							<span>
								{error.name && (
									<p className='text-red-500'>* Error on the name.</p>
								)}
							</span>
							<input
								name='email'
								type='text'
								placeholder='Email...'
								className='w-64 h-8 pl-2'
							/>
							<span>
								{error.email && (
									<p className='text-red-500'>Error on the email.</p>
								)}
							</span>
						</div>
						<div className='flex items-center justify-end w-full'>
							<button
								type='submit'
								className='w-28 h-10 bg-yellow-400 rounded-md'>
								Create User
							</button>
						</div>
					</form>
				</>
			) : (
				<button
					onClick={() => {
						setError(initialErrorState)
						setIsOpen(!isOpen)
					}}
					className='w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center'>
					<AddIcon />
				</button>
			)}
		</>
	)
}
