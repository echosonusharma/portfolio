import React, { useEffect } from "react";
import { Box, Center, HStack, Image, Tooltip, Text, VStack } from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const IconBox = ({ url, src, alt }) => {
    return (
        <Tooltip label={alt} aria-label={alt} placement="top">
            <a href={url} target='_blank' rel="noreferrer" >
                <Image
                    src={src}
                    boxSize={['40x', '45px', '50px']}
                    alt={alt}
                />
            </a>
        </Tooltip>

    )
};


const Footer = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            disable: 'mobile',
            delay: 100,
            easing: 'ease-in-back',
            duration: 400
        });
    }, []);


    return (
        <Box data-aos="fade-up">
            <div className='footer-bg'>
                <Center pt={['12rem', '14rem', '15rem']}>
                    <VStack spacing={['1rem', '2rem']}>
                        <HStack spacing={['1rem', '2rem']}>
                            <IconBox
                                url="https://github.com/echosonusharma"
                                src="https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/socials/github.svg"
                                alt="Github"
                            />
                            <IconBox
                                url="https://linedin.com/echosonusharma"
                                src="https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/socials/linkedin.svg"
                                alt="LinkedIn"
                            />

                        </HStack>
                        <HStack fontSize="1rem">
                            <Text>Created with</Text>
                            <a href="https://create-react-app.dev/" target='_blank' rel="noreferrer">
                                <Text color="green.900" fontWeight='600'>ReactJS</Text>
                            </a>
                            <p>&</p>
                            <a href="https://chakra-ui.com/" target='_blank' rel="noreferrer">
                                <Text color="blue.900" fontWeight='600'>ChakraUI</Text>
                            </a>
                        </HStack>
                        <Text pb="2rem" fontWeight='500'>Copyright &copy; {(new Date().getFullYear())}<a href="https://github.com/echosonusharma" target='_blank' rel="noreferrer" > Sonu Sharma </a></Text>
                    </VStack>
                </Center>
            </div>
        </Box>
    )
};

export default Footer;