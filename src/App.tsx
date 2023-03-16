import { Flex, Heading, Text } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";
import { Logo } from "./components/Logo";

import { AppWrapper } from "./components/Wrappers/AppWrapper";
import { MainWrapper } from "./components/Wrappers/MainWrapper";

export function App() {
	return (
		<Flex as={AppWrapper}>
			<Flex as={MainWrapper}>
				<Logo />
				<Flex direction="column" gap="4rem">
					<Header />
					<LoginForm />
				</Flex>
			</Flex>
		</Flex>
	);
}
