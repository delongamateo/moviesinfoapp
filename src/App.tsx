import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import MovieDiscoveryPage from "./components/MovieDiscoveryPage";
import MovieDetails from "./components/MovieDetails";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Routes>
            <Route path="/" element={<MovieDiscoveryPage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>

  )

}
