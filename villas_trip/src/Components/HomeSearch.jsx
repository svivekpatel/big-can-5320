import { Box, Button, Flex, Input, Select,Text, } from "@chakra-ui/react";
function HomeSearch(){
    return <Box pt={"200px"} pb={"200px"} bgImage={"url(https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg)"} 
    bgPosition="center"
    bgRepeat="no-repeat" >
      <Box margin={"auto"}  color={"white"} fontSize={"28px"} fontWeight={"bold"} w={"55%"} textAlign={"start"}>
          <Text>Book Hotels Vacation Rentals</Text>
          <Text>Top Holiday Homes - Villas, Apartments, & Homestays</Text>
          <Flex color={"black"} bg={"white"} align={"center"} textAlign={"center"} mt={6} p={5}>
              <Input borderRadius={0} w={"30%"} placeholder="Location"/>
              <Input borderRadius={0}
                  w={"20%"}
                  placeholder="Check In"

                  type="datetime-local"
                 />
               <Input borderRadius={0}
                  w={"20%"}
                  placeholder="Check Out"
                  type="datetime-local"
                  />
              <Select w={"20%"} borderRadius={0} mb={"5px"} >
                  <option>Select Guest</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6 Guests</option>
                  <option>7 Guests</option>
              </Select>
              <Button borderRadius={0} backgroundColor={"#1E87F0"} color={"white"} w={"15%"}>Search</Button>
          </Flex>
      </Box>
  </Box>
}

export default HomeSearch;