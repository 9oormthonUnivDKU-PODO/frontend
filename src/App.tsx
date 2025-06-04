import { Routes, Route } from "react-router-dom";
import ListProfessor from "./pages/ListProfessor";
import LiveProfessor from "./pages/LiveProfessor";

function App() {
	return (
		<>
			<Routes>
				<Route path="/listp" element={<ListProfessor />} />
				<Route path="/livep" element={<LiveProfessor />} />
			</Routes>
		</>
	);
}

export default App;