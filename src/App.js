import { Link, Route, Routes } from 'react-router-dom';
import {Home} from './Home';
import Potions from './Potions/Potions';
import Characters from './Characters/Characters';
import Books from './Books/Books';
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

function App() {
	return (
	<>
	<Navbar />
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/potions" element={<Potions/>} />
		<Route path="/characters" element={<Characters />} />
		<Route path="/books" element={<Books />} />
	</Routes>
	<Footer />
	</>
	)
}

export default App;
