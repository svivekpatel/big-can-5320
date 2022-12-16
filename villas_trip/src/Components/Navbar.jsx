import React from 'react';
import { Link } from 'react-router-dom';


import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Divider,
  Spacer,
  Center,
  Box,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { FaUser } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {

  return (
    <Box fontFamily={"sans-serif"}>
      <Flex
        bg={useColorModeValue('#262626')}
        color={'white'}
        minH={'80px'}
        py={{ base: 2 }}
        px={{ base: 5 }}
        w={"100%"} 
        >
            <Link to="/" >
            <Image w="35%" height={"80%"} src='https://i.postimg.cc/26XBGgYg/logo.png' alt='Logo' />
            </Link>
            
          <Spacer />
{/* popover */}
             <Center>
             <Popover >
              <PopoverTrigger>
               <FaUser size={"20px"}/>
              </PopoverTrigger>
               <PopoverContent ml={"1300px"} bg={"#262626"} color={"white"} alignItems={'flex-start'} fontSize={"13px"} pr={6} mt={"80px"} border={"0"} width={"150px"}>
                <PopoverBody>
                    <Text  pb={2}><Link to="/login">SIGN IN</Link></Text>
                    <Text ><Link to="/signup">SIGN UP</Link></Text>
                </PopoverBody>
              </PopoverContent>
              </Popover>
             </Center>
           
{/* Drawer */}

             <Center>
             <DrawerExample />
             </Center>
           
        
      </Flex>
    </Box>
  );
}


const DrawerExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <Stack ml={"20px"} >
          <AiOutlineMenu size={"20px"} ref={btnRef} bg={'transparent'} onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"#262626"} color={"white"}>
            <DrawerHeader></DrawerHeader>
            <DrawerCloseButton />
  
            <DrawerBody align={"center"}>
              <Text fontSize={"13px"} pb={"10px"} pt={"30px"}> ARE YOU A PROPERTY OWNER/MANAGER? </Text>
              <Text fontSize={"13px"} color={'gray'} >List New Property</Text>
              <Text fontSize={"13px"} color={'gray'}>Sign In To Your Dashbosrd</Text>
              <Divider pt={"2px"} pb={"30px"}/>
              <Text fontSize={"13px"} pb={"10px"} pt={"30px"}>HOLIDAY HOMES FOR SALE</Text>
              <Text fontSize={"13px"} color={'gray'} >TripVillas Managed</Text>
              <Text fontSize={"12px"} color={'gray'} pb={"10px"}>Homes from "A" grade developers, Rental Guaranteed.</Text>
              <Text fontSize={"13px"} color={'gray'}>Marketplace</Text>
              <Text fontSize={"12px"} color={'gray'} pb={"10px"}>See what homes are up for sale from different property owners.</Text>
              <Divider pt={"2px"} pb={"30px"}/>
              <Text fontSize={"14px"} pb={"10px"} pt={"30px"}>About Us</Text>
              <Text fontSize={"14px"} pb={"10px"}>Privacy Policy</Text>
              <Text fontSize={"14px"} pb={"10px"}>Terms of Use</Text>
              <Text fontSize={"14px"} pb={"10px"}>FAQs</Text>
              <Text fontSize={"14px"} pb={"10px"}>Contact Us</Text>
              <Divider pt={"2px"} pb={"30px"}/>
              <Text fontSize={"14px"} pb={"10px"} color={'gray'} pt={"30px"}>© Tripvillas Pte Ltd</Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Stack>
    )
    }