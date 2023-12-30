import RegisterCard from '../../components/Register';
import { Box } from '@chakra-ui/react';

export default function Register() {
  return (
    <Box w={'full'} bg={"#011b49;"} h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <RegisterCard />
    </Box>
  );
}
