import { Route } from "react-router-dom";

//common
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
//main
import Visual from "./components/main/Visual";

//sub
import Community from "./components/sub/Community";
import Shop from "./components/sub/Shop";
import Gallery from "./components/sub/Gallery";
import Location from "./components/sub/Location";
import Members from "./components/sub/Members";
import Youtube from "./components/sub/Youtube";
import "./scss/style.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchYoutube } from "./redux/youtubeSlice";
import { fetchFlickr } from "./redux/flickrSlice";
import { fetchProduct } from "./redux/productSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchYoutube());
		dispatch(fetchFlickr());
		dispatch(fetchProduct());
	}, []);

	return (
		<>
			<Route exact path='/'>
				<Header />
				<Visual />
			</Route>
			<Route path='/'>
				<Header />
			</Route>

			<Route path='/shop'>
				<Shop />
			</Route>
			<Route path='/community'>
				<Community />
			</Route>
			<Route path='/gallery'>
				<Gallery />
			</Route>
			<Route path='/location'>
				<Location />
			</Route>
			<Route path='/members'>
				<Members />
			</Route>
			<Route path='/youtube'>
				<Youtube />
			</Route>
		</>
	);
}

export default App;
