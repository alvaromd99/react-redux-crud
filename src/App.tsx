import './App.css'
import CreateNewUser from './components/CreateNewUser'
import TableBody from './components/TableBody'
import TableHead from './components/TableHead'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
	return (
		<Provider store={store}>
			<div className='h-screen flex flex-col items-center justify-center gap-4 bg-slate-500'>
				<table className='bg-slate-100 rounded-lg text-xl'>
					<TableHead />
					<TableBody />
				</table>
				<CreateNewUser />
			</div>
		</Provider>
	)
}

export default App
