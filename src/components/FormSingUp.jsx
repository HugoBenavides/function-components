import { useState } from "react";
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function FormSingUp (){
    const [name,setName] = useState("");

    const preventDefault = (e)=>{
        e.preventDefault()
    }

    return (
        <form>
            
            <TextField id="name"
                label="Ingresa tu nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={ (e)=>{
                    console.log(e.target.value)
                    setName(e.target.value)
                } }
                value={name}
                />
            
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