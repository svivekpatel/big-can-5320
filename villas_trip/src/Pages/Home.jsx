import { Text } from "@chakra-ui/react";
import HomeSearch from "../Components/HomeSearch";
import Navbar from "../Components/Navbar";
import data from "../Utils/topDestinations.json"

console.log(data)

function Home(){
    return <div>
<Navbar/>
<HomeSearch/>
<Text fontSize={"24px"} fontWeight={"350"} ml={"40px"} mt={"50px"}>Top Destinations</Text>
    </div>
}

export default Home;