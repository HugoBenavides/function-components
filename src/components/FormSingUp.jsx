import { useState } from "react";
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function FormSingUp (){
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [prom,setProm] = useState(true);
    const [nov,setNov] = useState(true);


    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            console.log({e,name,lastName,email,prom,nov})
            }}>
            
            <TextField id="name"
                label="Ingresa tu nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={ (e)=>setName(e.target.value)}
                value={name}
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