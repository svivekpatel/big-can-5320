import { Text } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import HomeCarousal from "../Components/HomeCarousal";
import HomeMain from "../Components/HomeMain";
import HomeSearch from "../Components/HomeSearch";
import Navbar from "../Components/Navbar";




function Home(){
    return <div>
<Navbar/>
<HomeSearch/>
<Text fontSize={"24px"} fontWeight={"350"} ml={"40px"} mt={"50px"}>Top Destinations</Text>
<HomeCarousal />
<HomeMain />
<Footer />
    </div>
}

export default Home;