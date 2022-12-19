import { Box,Text,Flex,Image,Button, Center,Grid,GridItem, Spacer } from "@chakra-ui/react";
import data from "../Utils/mainBody.json"
console.log(data)

function HomeMain(){
    return (
        <Box w={"90%"} m={"auto"} mt={"40px"} >
        <Flex direction={"row"} alignItems={"center"}>
          <Box p={"40px"} boxShadow={"lg"} w={"40%"}>
            <Center>
            <Text fontSize={"24px"} fontWeight={"350"} >Fully Managed Communities By Tripvillas</Text>
            </Center>
           <Center>
           <Box mt={"30px"}>
           
              <Flex>
                <Box w={"150px"}>
                  <Flex direction="column">
                    <Image
                      display="block"
                      m="auto"
                      w="40px"
                      h="40px"
                      src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg"
                      mb="1rem"
                    ></Image>
                    <Text mb="1rem" textAlign="center" fontWeight="300">
                      High Quality housekeeping
                    </Text>
                  </Flex>
                </Box>
                <Box
                 w={"150px"}
                >
                  <Flex direction="column">
                    <Image
                      display="block"
                      m="auto"
                      w="40px"
                      h="40px"
                      src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg"
                      mb="1rem"
                    ></Image>
                    <Text mb="1rem" textAlign="center" fontWeight="300">
                      Comfortable Linen and Toiletries
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Flex>
                <Box
                w={"150px"}
                >
                  <Flex direction="column">
                    <Image
                      display="block"
                      m="auto"
                      w="40px"
                      h="40px"
                      src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg"
                      mb="1rem"
                      mt="1rem"
                    ></Image>
                    <Text textAlign="center" fontWeight="300">
                      Quality Furniture & Fittings
                    </Text>
                  </Flex>
                </Box>
                <Box
                w={"150px"}
                >
                  <Flex direction="column">
                    <Image
                      display="block"
                      m="auto"
                      w="40px"
                      h="40px"
                      src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg"
                      mb="1rem"
                      mt="1rem"
                    ></Image>
                    <Text textAlign="center" fontWeight="300">
                      Food Delivery Or Central Restaurant
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
           </Center>
          </Box>
          <Spacer/>
          <Box> 
          <Grid templateColumns='repeat(3, 1fr)' margin={"auto"} templateRows='repeat(2, 1fr)' gap={4}> 
          {data.map((elem) => {
              return (
                <GridItem >
                  <Image brightness="50%"
                    src={elem.img}
                    alt="image"
                    w={"100%"}
                    h="110px"
                  ></Image>
                  <Flex direction="column" >
                     <Text
                      textAlign="center"
                      color="gray"
                    >
                      {elem.name}
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize="17px"
                      fontWeight={"bold"}
                      color="black"
                    >
                      {elem.location}
                    </Text>
                  </Flex>
                </GridItem>
              );
            })}
          </Grid>
          </Box>
        </Flex>
  
        <Flex mt={"150px"} justifyContent="space-between">
   
          <Box w={"45%"} p={"20px"} boxShadow={"lg"} pb={"30px"} >
            <Text fontSize="24px" fontWeight="200" textAlign="center">
              Holiday Home Investment Opportunities
            </Text>
            <Flex p={"40px"}>
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/growth.svg"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Low Cost High Appreciation
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/maids.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Professionally Managed
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column" w="80%">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/give-money.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Guaranteed To Produce Income
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/plan.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    We Designed Floor Plans
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Button
              pl="2rem"
              pr="2rem"
              fontSize="13px"
              display="block"
              m="auto"
              borderRadius="none"
              colorScheme="blue"
              fontWeight="400"
            >
              EXPLORE INVESTMENT OPPORTUNITIES
            </Button>
          </Box>
  
          <Box
            boxShadow="lg"
            w={"50%"}
          >
            <Text fontSize="24px" fontWeight="200" textAlign="center">
              Are You A Holiday Home Owner/Manager?
            </Text>
            <Flex
              w="90%"
              mt="2rem"
              mb="2rem"
              ml="auto"
              mr="auto"
              justifyContent="space-around"
            >
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/network.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Get Bookings From 100+ Websites
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/layout.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    One Dashboard - Total Control
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/flash.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Instant Book Or Request To Book
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/smartphone-call.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Both iOS & Android App Available.
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Button
              pl="2rem"
              pr="2rem"
              fontSize="13px"
              display="block"
              m="auto"
              borderRadius="none"
              colorScheme="blue"
              fontWeight="400"
            >
              LIST YOUR PROPERTY
            </Button>
          </Box>
        </Flex>
      </Box>
    )
}

export default HomeMain;