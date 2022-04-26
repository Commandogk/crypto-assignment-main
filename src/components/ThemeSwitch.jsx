import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

export const ThemeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton onClick={toggleColorMode}>
			{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
		</IconButton>
	);
};
