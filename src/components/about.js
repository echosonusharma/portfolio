import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/guy.json";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Animation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Box w={['350px', '700px']}>
            <Lottie
                options={defaultOptions}
                isClickToPauseDisabled={true}
            />
        </Box>
    )

};


const About = () => {


    useEffect(() => {
        AOS.init({
            offset: 400,
            delay: 50,
            duration: 100
        });
    }, []);


    return (
        <Box py={['2rem', '5rem']} >
            <div className='about-bg' data-aos="fade-up">
                <Center
                    fontFamily="'Monoton' , cursive"
                    fontWeight="400"
                    fontSize={['4xl', '5xl', '6xl']}
                    pt={['1rem', '2rem', '3rem']}
                >About Me</Center>
                <Center pt={['0rem', '5rem']}>
                    <Flex direction={['column', 'column', 'row']}>
                        <Animation />
                        <Text
                            pt={['0rem', '4rem', '10rem']}
                            w={['80vw', '20rem', '30rem']}
                            fontFamily='poppins'>
                            Hello there, I’m <span className="name"><a href="https://github.com/echosonusharma" target='_blank' rel="noreferrer" >Sonu Sharma.</a></span>
                            I’m a full stack developer, who is currently pursuing his bachelor’s degree in computer science. Creating and building things has
                            always been a passion of mine. I love utilizing modern day tools like react, node etc., to build awesome stuff! and lately I've been
                            into databases and bash scripting.
                        </Text>
                    </Flex>
                </Center>
            </div>
        </Box>
    )
};

export default About;