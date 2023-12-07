// императивный стиль
import logo from './logo.svg';
import './App.css';

export const App = () => {
  const year = new Date().getFullYear()

	const app = document.createElement('div')
	app.className = 'App'

	const header = document.createElement('header')
	header.className = 'App-header'
	app.append(header)

	const logoIMG = document.createElement('img')
	logoIMG.className = 'App-logo'
	logoIMG.alt = 'logo'
	logoIMG.src = logo
	header.append(logoIMG)

	const paragraph = document.createElement('p')
	paragraph.textContent = 'Edit src/App.js and save to reload.'
	header.append(paragraph)

	const link = document.createElement('a')
	link.className = 'App-link'
	link.href = 'https://reactjs.org'
	link.text = 'Learn React'
	header.append(link)

	const elementYear = document.createElement('p')
	elementYear.textContent = year
	header.append(elementYear)

	return app
}

