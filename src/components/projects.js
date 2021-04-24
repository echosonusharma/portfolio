import { Box, Image, Tooltip, Center, Flex, LinkOverlay, Text, Button, HStack, Tag } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from 'react-player/youtube';


const VideoPlayer = ({ url, thumbnail }) => {
    return (
        <Box w={['330px', '622px']} h={['185px', '350px']}>
            < ReactPlayer
                url={url}
                width='100%'
                height='100%'
                pip={true}
                controls={true}
                muted={true}
                style={{ border: 'hidden' }
                } />
        </Box>
    )
}


const Label = ({ src, alt, label }) => {
    return (
        <Tooltip label={label} aria-label="react" bg="gray.300" color="black" placement="top">
            <Image
                borderRadius="full"
                boxSize="30px"
                src={src}
                alt={alt}
            />
        </Tooltip>
    )
}


const Project = () => {

    return (
        <Box >
            <Center
                fontFamily='Monoton'
                fontWeight={['400']}
                fontSize={['4xl', '6xl']}
                pb={['3rem']}
            >PROJECTS</Center>

            <Center pt={['2rem', '5rem']}>
                <Flex direction={['column', 'column', 'row']}>

                    <Box fontFamily='poppins' pb={['1rem', '3rem', '6rem']}>
                        <Flex direction={['column-reverse', 'column-reverse', 'row']}>

                            <Box w={['80vw', '30rem']} pr={['0rem', '3rem']}>
                                <Text fontSize={['1.25rem', '2rem',]} fontWeight={['600', '700']} pb={3} pt={3} className="name">Smart Brains</Text>
                                <Text pb={5} fontSize={['0.85rem', '1rem']} fontWeight={['350']}>
                                    Smart Brains is an application which searches for a human face in a image using the power of AI
                                    and by signing up with an email you can save all your searches.
                                </Text>
                                <Tag variant="outline" colorScheme="blue">Build With</Tag>
                                <HStack spacing={6} py={5} >
                                    <Label
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                                        alt="react"
                                        label="React.js"
                                    />
                                    <Label
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg"
                                        alt="Node.js"
                                        label="Node.js"
                                    />
                                    <Label
                                        src="https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/passportjs.svg"
                                        alt="passport.js"
                                        label="Passport.js"
                                    />
                                    <Label
                                        src="https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/knex.png"
                                        alt="knex.js"
                                        label="Knex.js"
                                    />
                                </HStack>
                                <HStack fontSize="0.8rem" spacing="2">
                                    <Button colorScheme="whatsapp"><LinkOverlay href="https://face-detect-frontend-pern-echosonusharma.vercel.app" target="_blank">See Live</LinkOverlay></Button>
                                    <Button textColor="blue.500"><LinkOverlay href="https://github.com/echosonusharma/face-detect-frontend-pern" target="_blank">Source Code</LinkOverlay></Button>
                                </HStack>
                            </Box>
                            <VideoPlayer
                                url="https://youtu.be/y59Kl9vHW08"
                            />
                        </Flex>
                    </Box>

                </Flex>
            </Center>

        </Box>
    )
};

export default Project;