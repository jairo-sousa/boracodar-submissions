import { Flex, Img } from "@chakra-ui/react";
import { Nav } from "./Nav";

import logo from "/Header/logo.svg";

export function Header() {
	return (
		<Flex
			as="header"
			direction="column"
			w="17.4rem"
			h="100%"
			p="2.8rem 2.7rem 0 3.5rem"
			gap="6rem"
			align="start"
			color="#FFFFFF"
		>
			<Img src={logo} />
			<Nav />
		</Flex>
	);
}
