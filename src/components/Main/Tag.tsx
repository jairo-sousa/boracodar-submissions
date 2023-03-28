import { Text } from "@chakra-ui/react";
type TagProps = {
	tag: string;
};
export function Tag({ tag }: TagProps) {
	return (
		<Text
			fontSize="1.1rem"
			fontWeight={500}
			color="#7C3AED"
			p="0.4rem 0.8rem"
			w="fit-content"
			bg="#E2D6FF"
			borderRadius="0.8rem"
		>
			{tag}
		</Text>
	);
}
