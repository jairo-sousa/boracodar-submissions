import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Main } from "./components/Main/Main";

export function App() {
	return (
		<Flex w="100%" h="100%" pt="0.4rem">
			<Header />
			<Main />
		</Flex>
	);
}
