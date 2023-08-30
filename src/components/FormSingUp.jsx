import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';

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

            <label>Promociones</label>
            <input type="checkbox" />
            <label>Novedades</label>
            <input type="checkbox" />
            <Button variant="contained" onClick={preventDefault} >Registrarse</Button>
        </form>
    )
    
}

export default FormSingUp