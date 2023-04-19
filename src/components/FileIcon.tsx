import { Flex, Img } from "@chakra-ui/react";

type FileIconProps = {
	status: string;
};

export function FileIcon({ status }: FileIconProps) {
	const bg = {
		SENDING: "#E9E3F8",
		SENT: "#DAF2D9",
		ERROR: "#F2D9D9",
	}[status];
	return (
		<Flex
			w="4.8rem"
			h="5.6rem"
			bg={bg && bg}
			borderRadius="0.4rem"
			justify="center"
			align="center"
		>
			<Img src={`file${status}.svg`} alt={`${status} file icon`} h="1.95rem" />
		</Flex>
	);
}
