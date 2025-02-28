import React from "react";
import { NavBar } from "./NavBar";
import { Cards } from "./Cards";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<div className="jumbo mt-3">
					<Jumbotron />
				</div>
				<div className="row mt-3 justify-content-between">
					<Cards 
					img = "https://3.bp.blogspot.com/-cDHlPZWgGZw/VE50_15YonI/AAAAAAACXHk/NvKhhAbeqnk/s1600/las%2Bmejores%2Bfotos%2Bde%2Bpaisajes%2Bnaturales%2B2014%2B(3).jpg"
					text = "Cascada natural en medio de la naturaleza"
					title = "Paisaje Natural"
					/>
					<Cards 
					img = "https://th.bing.com/th/id/OIP.XZEJToeO1FfWIQHW0WltBQHaE5?rs=1&pid=ImgDetMain"
					title= "Leopardo"
					text = "Animales en su habitad natural"
					/>
					<Cards 
					img = "https://th.bing.com/th/id/OIP.QRgFV_BFNhyi3yWYBW2f5QHaFD?rs=1&pid=ImgDetMain"
					title= "Ronald Acuña Jr"
					text = "Haciendo historia en mlb"
					/>
					<Cards 
					img = "https://lh5.ggpht.com/hGMS7EijNoW3jMhCwf62Z7-Uj3AEFndQ6Tb-D1drlBAZBNHKMx-ZWkPyBOyCSyvMmyU"
					title = "Magallanes"
					text = "Equipo de beisbol Venezolano"
					/>

				</div>
			</div>
			<div className="text-light">
				<Footer />
			</div>
		</div>

	);
};

export default Home;