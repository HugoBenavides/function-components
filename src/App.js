import './App.css';
import FormSingUp from './components/FormSingUp';
import { Container } from '@mui/material';
import Typography from "@mui/material/Typography";



function App() {
  return (
    <Container component="section" maxWidth="sm" >
      <Typography variant="h3" align="center" component="h1" >Formulario Registro</Typography>
      <FormSingUp />
    </Container>
  );
}

export default App;