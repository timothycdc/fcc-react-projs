import { Spacer, Flex, VStack, Heading, IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import Header from "./components/Header";
import "./App.css";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const script = document.createElement("script");
  script.src =
    "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
  script.async = true;
  document.body.appendChild(script);

  return (
    <div className="App" id="quote-box">
      <VStack p={5} h="100vh">
        <Flex w="100%">
          <Heading ml={2} size="md" fontWeight="semibold" color="cyan.400">
            Quote Generator
          </Heading>

          <Spacer></Spacer>
          <IconButton
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
        <Flex alignItems={"center"} h="full">
          <Header></Header>
        </Flex>
      </VStack>
    </div>
  );
}

export default App;
