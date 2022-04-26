import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './pages/Home';

const App = () => (
	<ChakraProvider>
		<Home />
	</ChakraProvider>
);

export default App;
