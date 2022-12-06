import { Routes, Route } from "react-router-dom";
import { Home, PageNotFound, SharedLayout } from "./components";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
};

export default App;
