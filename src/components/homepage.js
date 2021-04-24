import React, { useEffect } from 'react';
import { Box, Image, Flex, Text, useMediaQuery, useColorMode, useColorModeValue, Center, Grid } from "@chakra-ui/react";
import { useDencrypt } from "use-dencrypt-effect";
import Lottie from "react-lottie";
import { animateScroll as scroll } from "react-scroll";
//assets
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import animationData from "../assets/blob.json";


const values = ["Software Developer", "ReactJS Enthusiast", "Typescript  Lover"];

const Crypt = () => {
  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    let i = 0;
    
    const action = setInterval(() => {
      dencrypt(values[i]);
      
      i = i === values.length - 1 ? 0 : i + 1;
    }, 3500);

    return () => clearInterval(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return <Box
            fontFamily='poppins'
            fontWeight='400'
            fontSize={['1.5rem', '1.7rem', '1.8rem']}>
            {result}
        </Box>;
};



const AnimatedBlob = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <Box pt={['27rem','22rem']} pl='15rem' onClick={() => scroll.scrollMore(1100, { smooth: true, spy: true, duration: 1200, delay: 100 })} >
           <Box overflow="hidden" pos="absolute">
            <Lottie
                options={defaultOptions}
                height={500}
                width={500}
                isClickToPauseDisabled={true}
            />
            </Box>
            <Box pos="absolute" zIndex={2} pl='200' pt='230' cursor='pointer' >
                <Box
                    fontSize="1.15rem"
                    fontWeight="600"
                    bgGradient="linear(to-l, #7928CA,#FF0080)"
                    bgClip="text"
                    className='expand'
                     >Know More</Box>
            </Box>
        </Box>
    )

}




const Homepage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.200", "gray.700");
  const [lg] = useMediaQuery("(min-width: 1280px)");
  
  return (
      <Box minH={['100vh']}>
       <Flex justify="flex-end">
          <Box
          w={['4rem', '5rem']}
          h={['4rem', '5rem']}
          mr={['1rem', '2rem','3rem']}
          mt={['1rem', '2rem','3rem']}
          position={['relative','fixed']}
          zIndex={['10']}
          bg={bg}
          rounded='1rem'
          cursor='pointer'
            onClick={toggleColorMode}>
              <Center pt={['0.4rem', '0.6rem']}>
              {
                colorMode === "light" ?
                  <Image
                  src={moon}
                  boxSize={['50px', '60px']}
                  /> :
                  <Image
                  src={sun}
                  boxSize={['50px', '60px']}
                  />    
              }
              </Center>
          </Box>
          </Flex> 
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Box
                direction='column'
                bgGradient='linear(to-l, #7928CA,#FF0080)'
                bgClip='text'
                fontFamily='Monoton'
                fontSize={['6rem', '6rem', '10rem']}
                fontWeight={['800', '600']}
                pt={['15rem', '5rem', '23rem']}
                lineHeight={['6.5rem', '8rem', '11rem']}
                pl={['2rem', '6rem', '9rem']}
              >
                <Text>Hi</Text>
                {
                  lg ? (
                    <Text>I'm Sonu</Text>
                  ):
                  (
                    <Box>
                    <Text>I'm</Text>
                    <Text>Sonu</Text>
                    </Box>
                  )
                }
                  <Crypt />
              </Box>
             {lg && <AnimatedBlob /> }
            </Grid>
      </Box>
  )
};

export default Homepage;