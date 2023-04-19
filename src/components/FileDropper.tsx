import { Flex, Img, Text } from "@chakra-ui/react";

export function FileDropper() {
	return (
		<Flex
			w="100%"
			h="16rem"
			bg="#F3F0FF"
			border="0.1rem dashed #C1B2FA"
			borderRadius="0.8rem"
			direction="column"
			justify="center"
			align="center"
		>
			<Img src="/cloudArrowUp.svg" alt="Cloud and arrow icon" mb="1.35rem" />
			<Text fontWeight={700} color="#7A5FEC">
				Importe Seus arquivos
			</Text>
			<Text fontWeight={400} color="#746E82">
				Arraste ou clique para fazer upload
			</Text>
		</Flex>
	);
}
