import { Flex } from "@chakra-ui/react";
import { FileDropper } from "./components/FileDropper";

export function App() {
	return (
		<Flex w="44rem">
			<FileDropper />
		</Flex>
	);
}
