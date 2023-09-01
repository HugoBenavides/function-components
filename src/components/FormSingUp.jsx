import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from "@mui/material/Typography";

function FormSingUp (){

    const preventDefault = (e)=>{
        e.preventDefault()
    }

    return (
        <form>
            
            <TextField id="name"
                label="Ingresa tu nombre"
                variant="outlined"
                fullWidth
                margin="normal"/>
            
            <TextField  
                id="lastname" 
                label="ingresa tu apellido" 
                variant="outlined"
                fullWidth
                margin="normal"/>
            
            <TextField  id="email" 
                label="Ingresa tu email" 
                type="email" 
                variant="outlined"
                fullWidth
                margin="normal"/>

            <FormGroup>
                <FormControlLabel 
                control={<Switch defaultChecked/>} 
                label="Promociones"
                margin="normal"/>

                <FormControlLabel 
                control={<Switch defaultChecked/>} 
                label="Novedades"
                margin="normal"/>
            </FormGroup>

            <Button variant="contained" onClick={preventDefault} margin="normal" >Registrarse</Button>
        </form>
    )
    
}

export default FormSingUp