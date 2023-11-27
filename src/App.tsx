import './App.css'
import TableBody from './components/TableBody'
import TableHead from './components/TableHead'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
	return (
		<Provider store={store}>
			<div className='h-screen flex items-center justify-center bg-slate-500'>
				<table className='bg-slate-100 rounded-lg text-xl'>
					<TableHead />
					<TableBody />
				</table>
			</div>
		</Provider>
	)
}

export default App
