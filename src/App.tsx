import './App.css'
import TableBody from './components/TableBody'
import TableHead from './components/TableHead'
import { headers, users } from './constants/constants'

function App() {
	return (
		<div className='h-screen flex items-center justify-center bg-slate-500'>
			<table>
				<TableHead headers={headers} />
				<TableBody users={users} />
			</table>
		</div>
	)
}

export default App