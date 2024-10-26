import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Box, Flex, HStack, Center } from "@chakra-ui/react";
import { House, Settings, UserIcon } from "lucide-react";

// Page Imports
import HomePage from "./routes/home";
import SettingsPage from "./routes/settings";
import ProfilePage from "./routes/profile";

function Navigation() {
  const navigate = useNavigate();

  return (
    <HStack
      as="nav"
      justify="space-around"
      align={"center"}
      w="full"
      py={4}
      bg="gray.950"
      color="white"
      position="sticky"
      bottom={0}
      paddingBottom="env(safe-area-inset-bottom)"
    >
      <Center onClick={() => navigate("/")} cursor="pointer">
        <House />
      </Center>
      <Center onClick={() => navigate("/settings")} cursor="pointer">
        <Settings />
      </Center>
      <Center onClick={() => navigate("/profile")} cursor="pointer">
        <UserIcon />
      </Center>
    </HStack>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Flex
        direction="column"
        height="100dvh"
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        paddingTop="env(safe-area-inset-top)"
        paddingBottom="env(safe-area-inset-bottom)"
        bg="gray.900"
      >
        <Box flex="1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Box>
        <Navigation />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
