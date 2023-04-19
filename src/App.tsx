import { Flex } from "@chakra-ui/react";
import { FileDropper } from "./components/FileDropper";
import { Files } from "./components/Files";

export function App() {
	return (
		<Flex w="44rem" gap="2rem" direction="column">
			<FileDropper />
			<Files />
		</Flex>
	);
}
