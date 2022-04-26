import {
	Box,
	Button,
	Container,
	Heading,
	Input,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ThemeSwitch } from '../components/ThemeSwitch';
import { decrypt, encrypt } from './encrypt';
import { getValues } from './primekey';

export const Home = () => {
	const boxColor = useColorModeValue('gray.50', 'gray.900');

	const [n, setN] = useState();
	const [e, setE] = useState();
	const [d, setD] = useState();

	const [msg, setMsg] = useState('');

	const [messages, setMessages] = useState([]);
	const [dec, setdecrypt] = useState([]);

	useEffect(() => {
		const [n, e ,d] = getValues();
		setN(n);
		setE(e);
		setD(d);
		//console.log(n,e,d);
	}, []);

	const handleClick = () => {
		const encryptedMsg = encrypt(msg, e, n);
		setMessages([...messages, encryptedMsg]);
		const decryptedMsg = decrypt(encryptedMsg,d,n);
		console.log(decryptedMsg)
		setdecrypt([...dec, decryptedMsg]);
	};

	return (
		<Container
			display={'flex'}
			flexDir={'column'}
			justifyContent={'center'}
			h={'100vh'}
		>
			<Box
				bg={boxColor}
				p={12}
				rounded={'2xl'}
				shadow={'2xl'}
				display={'flex'}
				flexDir={'column'}
				alignContent={'stretch'}
			>
				<Box pos={'absolute'} top={8} right={8}>
					<ThemeSwitch />
				</Box>
				<Heading textAlign={'center'}>Crypto Assignment</Heading>
				<Text fontWeight={'extrabold'} mt={16}>
					Encryptedtext:               
				</Text>
				<Box mt={4}>
					{messages.map((msg, idx) => (
						<Text key={idx}>{msg} - {dec[idx]}</Text>
					))}
				</Box>
				<Input
					mt={8}
					variant={'filled'}
					placeholder="Enter message..."
					value={msg} onChange={e => setMsg(e.target.value)}
				/>
				<Button onClick={handleClick} colorScheme={'blue'} mt={5}>
					Send
				</Button>
			</Box>
		</Container>
	);
};