import Navbar from "./comp/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
	return (
		<div className="">
			<Navbar />

			<Routes>
				<Route index element={<Home />}></Route>

				<Route path="/:id" element={<News />}></Route>

				<Route
					path="*"
					element={
						<h1 className="h-[91vh] flex justify-center items-center text-3xl font-semibold">
							Route Does'nt Exist
						</h1>
					}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
