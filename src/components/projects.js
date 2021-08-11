import { Box, Image, Tooltip, Center, Flex, LinkOverlay, Text, Button, HStack, Tag } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from 'react-player/youtube';
//image assets
import ReactJS from '../assets/reactjs.svg';
import ExpressJS from '../assets/express-js.png'
import PostgreSQL from '../assets/postgresql.svg';
import MongoDB from '../assets/mongodb.svg'
import KnexJS from '../assets/knex.png';
import NextJS from '../assets/nextjs.svg';



const VideoPlayer = ({ url, thumbnail }) => {
    return (
        <Box w={['330px', '622px']} h={['185px', '350px']} boxShadow="2xl">
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
                <Flex direction={['column']}>

                    <Box fontFamily='poppins' pb={['6rem', '6rem', '12rem']} >
                        <Flex direction={['column-reverse', 'column-reverse', 'row']}>
                            <Box w={['80vw', '30rem']} pr={['0rem', '3rem']}>
                                <Text fontSize={['1.25rem', '2rem',]} fontWeight={['600', '700']} pb={3} pt={3} className="name" >Smart Brains</Text>
                                <Text pb={5} fontSize={['0.85rem', '1rem']} fontWeight={['350']}>
                                    Smart Brains is an application in which by signing up with an email you can search
                                    for a human face in a image using the power of AI.
                                </Text>
                                <Tag variant="outline" colorScheme="blue">Build With</Tag>
                                <HStack spacing={6} py={5} >
                                    <Label
                                        src={ReactJS}
                                        alt="react.js"
                                        label="React.js"
                                    />
                                    <Label
                                        src={ExpressJS}
                                        alt="Express.js"
                                        label="Express.js"
                                    />
                                    <Label
                                        src={PostgreSQL}
                                        alt="PostgreSQL"
                                        label="PostgreSQL"
                                    />
                                    <Label
                                        src={KnexJS}
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



                    <Box fontFamily='poppins' pb={['6rem', '6rem', '12rem']}  >
                        <Flex direction={['column-reverse', 'column-reverse', 'row']}>
                            <Box w={['80vw', '30rem']} pr={['0rem', '3rem']}>
                                <Text fontSize={['1.25rem', '2rem',]} fontWeight={['600', '700']} pb={3} pt={3} className="name">Anime X</Text>
                                <Text pb={5} fontSize={['0.85rem', '1rem']} fontWeight={['350']}>
                                    Anime X let's you go through the whole anime catalog, to search, save and discover anime's. You can
                                    see rating, reviews, characters even recommendations based on the anime with genre search and much more.
                                </Text>
                                <Tag variant="outline" colorScheme="blue">Build With</Tag>
                                <HStack spacing={6} py={5} >
                                    <Label
                                        src={NextJS}
                                        alt="react.js"
                                        label="React.js"
                                    />
                                    <Label
                                        src={ExpressJS}
                                        alt="Express.js"
                                        label="Express.js"
                                    />
                                    <Label
                                        src={PostgreSQL}
                                        alt="PostgreSQL"
                                        label="PostgreSQL"
                                    />
                                    <Label
                                        src={KnexJS}
                                        alt="knex.js"
                                        label="Knex.js"
                                    />
                                </HStack>
                                <HStack fontSize="0.8rem" spacing="2">
                                    <Button colorScheme="whatsapp"><LinkOverlay href="http://anime-x-echosonusharma.vercel.app" target="_blank">See Live</LinkOverlay></Button>
                                    <Button textColor="blue.500"><LinkOverlay href="https://github.com/echosonusharma/anime-x" target="_blank">Source Code</LinkOverlay></Button>
                                </HStack>
                            </Box>
                            <VideoPlayer
                                url="https://youtu.be/uLEw5AGNuRk"
                            />
                        </Flex>
                    </Box>



                    <Box fontFamily='poppins' pb={['6rem', '6rem', '12rem']} >
                        <Flex direction={['column-reverse', 'column-reverse', 'row']}>
                            <Box w={['80vw', '30rem']} pr={['0rem', '3rem']}>
                                <Text fontSize={['1.25rem', '2rem',]} fontWeight={['600', '700']} pb={3} pt={3} className="name">#27</Text>
                                <Text pb={5} fontSize={['0.85rem', '1rem']} fontWeight={['350']}>
                                    #27 is a URL shortener that with a twist, it's provides you with the names of the most
                                    violent serial killer, murder and convicts in it's shortened URL path.
                                </Text>
                                <Tag variant="outline" colorScheme="blue">Build With</Tag>
                                <HStack spacing={6} py={5} >
                                    <Label
                                        src={ExpressJS}
                                        alt="Express.js"
                                        label="Express.js"
                                    />
                                    <Label
                                        src={MongoDB}
                                        alt="MongoDB"
                                        label="MongoDB"
                                    />
                                </HStack>
                                <HStack fontSize="0.8rem" spacing="2">
                                    <Button colorScheme="whatsapp"><LinkOverlay href="https://x-27.herokuapp.com" target="_blank">See Live</LinkOverlay></Button>
                                    <Button textColor="blue.500"><LinkOverlay href="https://github.com/echosonusharma/slug" target="_blank">Source Code</LinkOverlay></Button>
                                </HStack>
                            </Box>
                            <VideoPlayer
                                url="https://youtu.be/JyPBzkPE_Ws"
                            />
                        </Flex>
                    </Box>


                </Flex>
            </Center>
        </Box>
    )
};

export default Project;