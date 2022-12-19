
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Spacer,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

import StoreBadge from 'react-store-badge';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      mt={"100px"}
      bg={useColorModeValue("#2B2A2C")}
      color={useColorModeValue("white")}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack>
            <Image w={"150px"} src={"https://i.postimg.cc/Fz78KhSP/fd.png"}/>
            <Spacer/>
          <Text fontSize={"11px"} >Tripvillas offers verified, fully furnished holiday homes many of which come with resident caretakers. This allows you to holiday in comfort, style and without rushing your holiday.</Text>
        <Spacer/>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
            </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Incredible Offers on the Best Villas</ListHeader>
            <FormControl>
  <FormLabel fontSize={"11px"}>Enter your E-mail Address</FormLabel>
  <Input type='email' />
  <FormHelperText>*We never send spam.</FormHelperText>
</FormControl>
<Button color={"white"} bg={"teal"}>Subscribe</Button>
          </Stack>

          <Stack fontSize={"12px"} align={'center'}>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Use</Link>
            <Link href={'#'}>FAQs</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Property Managers</Link>
            <Link href={'#'}>Holiday Communities</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontSize={"20px"}>Have questions?</Text>
            <Text color={"teal.200"}>support@villastrip.com</Text>
            <ListHeader>Install App</ListHeader>
            <StoreBadge 
        name="Cheerswipe"
        googlePlayUrl="https://play.google.com/store/apps/details?id=fr.puyou.cheerswipe"
        appStoreUrl="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"
      />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 VillasTrip. All rights reserved</Text>
          
        </Container>
      </Box>
    </Box>
  );
}
