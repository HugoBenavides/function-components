import { useState } from "react";
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function FormSingUp ({handleSubmit}){  //se destrucrura el prop llamado directamente al mismo cons dos llaves {}
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [prom,setProm] = useState(true);
    const [nov,setNov] = useState(true);

    const [errors,setErrors] = useState({
        name: {
            error: false,
            message: "Deben ser al menos 3 caracteres",
        }
    })

    const validarNombre = (nombre) => { // el valor nombre se puso para no confundir con name, existen librerias para validar formularios como YUP o RECT HOOK FORM
      if (nombre.length >= 3) {
        return { name: { error: false, message: "" } };
      } else {
        return {
          name: { error: true, message: "Deben ser al menos 3 caracteres", },
        };
      }
    }


    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit({e,name,lastName,email,prom,nov})
            }}>
            
            <TextField id="name"
                label="Ingresa tu nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={ (e)=>setName(e.target.value)}
                value={name}
                error={errors.name.error}
                helperText={errors.name.message
                            ? errors.name.message
                            : ""
                            }
                onBlur={(e)=>setErrors(validarNombre(e.target.value))}
                />
            
            <TextField  
                id="lastname" 
                label="ingresa tu apellido" 
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e)=>setLastName(e.target.value)}
                value={lastName}/>
            
            <TextField  id="email" 
                label="Ingresa tu email" 
                type="email" 
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}/>

            <FormGroup>
                <FormControlLabel 
                control={<Switch/>} 
                label="Promociones"
                margin="normal"
                checked={prom}
                onChange={(e)=>{
                    setProm(e.target.checked)
                }}
                />

                <FormControlLabel 
                control={<Switch/>} 
                label="Novedades"
                margin="normal"
                checked={nov}
                onChange={(e)=>setNov(e.target.checked)}/>
            </FormGroup>

            <Button variant="contained"
            type="onsubmit"
            margin="normal" >
                Registrarse
            </Button>
        </form>
    )
    
}

export default FormSingUp