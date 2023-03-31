import { Button } from "@chakra-ui/react";

export function AddButton() {
	return (
		<Button
			w="100%"
			h="5.6rem"
			bg="#9333EA"
			borderRadius="0.4rem"
			fontSize="1.8rem"
			_hover={{
				bg: "#A855F7",
			}}
		>
			Adicionar cartão
		</Button>
	);
}
