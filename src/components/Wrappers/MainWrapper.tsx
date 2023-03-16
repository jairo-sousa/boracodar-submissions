import { Flex } from "@chakra-ui/react";

type AppWrapperProps = {
	children: React.ReactNode;
};

export function MainWrapper({ children }: AppWrapperProps) {
	return (
		<Flex
			as="main"
			direction="column"
			w="50%"
			h="100%"
			backgroundColor="#F8FAFC"
			pt="4.715rem"
			pl="11.2rem"
			gap="11.4rem"
			align="start"
		>
			{children}
		</Flex>
	);
}
