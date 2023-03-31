import { Flex } from "@chakra-ui/react";
type CardWraperProps = {
	children: React.ReactNode;
};
export function CardWraper({ children }: CardWraperProps) {
	return (
		<Flex
			w="28rem"
			h="16.8rem"
			borderRadius="1.6rem"
			backgroundImage="url('/cardBg.svg')"
			backgroundSize="cover"
			overflow="hidden"
		>
			<Flex
				w="100%"
				h="100%"
				bg="rgba(17, 24, 39, 0.4)"
				backdropFilter="blur(24px)"
				p="1.6rem 2.4rem"
				direction="column"
				justify="space-between"
				gap="5rem"
			>
				{children}
			</Flex>
		</Flex>
	);
}
