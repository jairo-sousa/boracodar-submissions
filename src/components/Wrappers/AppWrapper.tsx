import { Flex } from "@chakra-ui/react";

type AppWrapperProps = {
	children: React.ReactNode;
};

export function AppWrapper({ children }: AppWrapperProps) {
	return (
		<Flex bg="#7C3AED" w="100%" h="100%" mixBlendMode="screen">
			{children}
		</Flex>
	);
}
