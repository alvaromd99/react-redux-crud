interface ShowMessageProps {
	type: 'ok' | 'notOk'
}

export const ShowMessage = ({ type }: ShowMessageProps) => {
	const bgColor = type === 'ok' ? 'bg-green-200' : 'bg-red-200'
	const textColor = type === 'ok' ? 'text-green-900' : 'text-red-900'
	const message =
		type === 'ok' ? 'User created successfully.' : 'User deleted successfully'

	return (
		<span>
			<div
				className={`${bgColor} w-96 h-20 absolute bottom-3 right-3 flex items-center justify-center rounded-md opacity-0 animate-fadeInOut`}>
				<p className={`${textColor} text-green-900 text-xl`}>{message}</p>
			</div>
		</span>
	)
}
