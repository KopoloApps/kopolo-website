import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		index: true,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

export default router;
