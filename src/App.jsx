import { Routes, Route } from "react-router-dom";
import { Home, SharedLayout } from "./components";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
