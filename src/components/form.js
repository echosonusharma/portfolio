import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Textarea,
    Center,
    useToast,
    Flex,
} from "@chakra-ui/react";


const FormSub = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const toast = useToast();


    function validateEmail(mail) {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return re.test(String(mail).toLowerCase());
    };

    function cleanUp() {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    const post = async () => {
        const x = await fetch('https://sonusharma-portfolio-backend.herokuapp.com/send', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                subject,
                message
            }),
            headers: {
                'Content-type': 'application/json',
            },
        });
        const res = await x.json();
        if (res.msg === 'server error') {
            alert('Server failed! Sorry for the inconvenience🙏. Try later')
        }
        if (res.msg === 'message sent') {
            console.log('👍 I\'ll  get back to you ASAP don\'t worry! ')
        }
    };

    const PostMessage = () => {
        if (validateEmail(email)) {
            post();
            cleanUp();
        }
    }



    return (
        <Box py={['1rem', '3rem']}>
            <Center
                fontFamily='Monoton'
                fontWeight={['400']}
                fontSize={['4xl', '6xl']}
                pb={['3rem']}
            >CONTACT</Center>
            <Box px={['10vw', '20vw', '30vw']}>
                <FormControl id="full-name" pb={['1rem', '2rem']}>
                    <FormLabel>Full name</FormLabel>
                    <Input placeholder="Full name" type='text' variant="filled" value={name} onChange={e => setName(e.target.value)} />
                </FormControl>
                <FormControl id="email" isRequired pb={['1rem', '2rem']}>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder='Email' variant="filled" value={email} onChange={e => setEmail(e.target.value)} />
                    <FormHelperText>Your email won't be shared with anyone.</FormHelperText>
                </FormControl>
                <FormControl id="subject" pb={['1rem', '2rem']} >
                    <FormLabel>Subject</FormLabel>
                    <Input placeholder="Subject" type='text' variant="filled" value={subject} onChange={e => setSubject(e.target.value)} />
                </FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Message" variant="filled" value={message} onChange={e => setMessage(e.target.value)} />
                <Flex justify="flex-end" pt={['1rem', '2rem']} >
                    <Button colorScheme="blue" onClick={() => {
                        PostMessage();
                        setTimeout(function () {
                            validateEmail(email) ?
                                toast({
                                    title: "Message Sent",
                                    position: "top",
                                    description: "Thanks for dropping by. I'll reach you ASAP! 🤗",
                                    status: "success",
                                    duration: 3000,
                                    isClosable: true,
                                })
                                :
                                toast({
                                    title: "Couldn't send the message",
                                    position: "top",
                                    description: "Email Can't be empty or invalid",
                                    status: "warning",
                                    duration: 3000,
                                    isClosable: true,
                                })
                        }, 200)
                    }}
                        w={['5rem', '6rem']}
                    >SUBMIT</Button>
                </Flex>
            </Box>
        </Box>
    )
};

export default FormSub;