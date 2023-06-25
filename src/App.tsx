import { Container } from '@chakra-ui/react';
import Home from '@/containers/home';

export default function App() {
  return (
    <Container maxW={{ base: '100%' }}>
      <Home />
    </Container>
  );
}
