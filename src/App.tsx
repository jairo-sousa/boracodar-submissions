import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";

export function App() {
	return (
		<Flex w="100%" h="100%" pt="0.4rem">
			<Header />
			<Flex w="100%" h="100%" bg="#FBFAFF" borderTopLeftRadius="3.2rem"></Flex>
		</Flex>
	);
}
