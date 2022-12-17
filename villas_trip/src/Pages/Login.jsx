import { Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Flex,
    Spacer,
    Text,
    Divider,
  } 
  from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Login(){
    return <div>
        
        <Box bg={"#888888"} height={"1000px"} borderRadius={0}>
            <Navbar />
             <Box bg={"white"}  width={"600px"} margin={"auto"} p={6} mt={"50px"} textAlign={"start"}>
        <Flex pb={"15px"}>
            <Text fontSize={"40px"}>Sign In</Text>
            <Spacer/>
            <Link to="/signup"><Text color={"#1E87F0"} as={"ins"}>Sign Up Instead</Text></Link>
        </Flex>
        <Divider color={"gray"}/>
        <FormControl  color={"gray"} mt={5}>
        <Input placeholder="Email Address" pt={6} pb={6} borderRadius={"0px"} mb={5} type='email' />
          
          <Input placeholder="Password" pt={6} pb={6} borderRadius={"0px"} mb={8} type='password' />
          <Flex>
            <Spacer/>
          <Button width={"50%"} bg={"#1E87F0"} borderRadius={"0px"} color={"white"} p={6}>SIGN IN</Button>
          </Flex>
          
        </FormControl>
        </Box>
        </Box>
       
    </div>
}

export default Login;