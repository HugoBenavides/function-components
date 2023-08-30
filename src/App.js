import './App.css';
import FormSingUp from './components/FormSingUp';
import { Container } from '@mui/material';



function App() {
  return (
    <Container component="section" maxWidth="sm" >
      <h1>Formulario Registro</h1>
      <FormSingUp />
    </Container>
  );
}

export default App;