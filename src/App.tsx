import { Routes, Route } from "react-router-dom";
import ListProfessor from "./pages/ListProfessor";

function App() {
	return (
		<>
			<Routes>
				<Route path="/listp" element={<ListProfessor />} />
			</Routes>
		</>
	);
}

export default App;