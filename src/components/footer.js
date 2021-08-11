import React from "react";
import { Box, Center, HStack, Image, Tooltip, Text, VStack } from "@chakra-ui/react";
//
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const IconBox = ({ url, src, alt }) => {
    return (
        <Tooltip label={alt} aria-label={alt} placement="top">
            <a href={url} target='_blank' rel="noreferrer" >
                <Image
                    src={src}
                    boxSize={['40x', '45px', '40px']}
                    alt={alt}
                />
            </a>
        </Tooltip>

    )
};


const Footer = () => {
    return (
        <Box>
            <div className='footer-bg'>
                <Center pt={['12rem', '14rem', '15rem']}>
                    <VStack spacing={['1rem', '2rem']}>
                        <HStack spacing={['1rem', '2rem']}>
                            <IconBox
                                url="https://github.com/echosonusharma"
                                src={github}
                                alt="Github"
                            />
                            <IconBox
                                url="https://linkedin.com/echosonusharma"
                                src={linkedin}
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