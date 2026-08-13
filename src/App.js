import logo from "./logo.svg";
import "./App.css";
import { getDataYear } from "./components/date";

function App() {
	const currentYear = getDataYear(); // Императивный

	return (
		// Декларативный с 8-25 строки
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{currentYear}</p>
			</header>
		</div>
	);
}

export default App;
