import { Outlet } from "react-router-dom";
import { Navbar } from "../index";

const SharedLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default SharedLayout;
