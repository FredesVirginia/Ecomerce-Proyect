
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Login() {
  return (
    <div className="fondo">
     <div className="flex   justify-center items-center h-screen">
      <div className="bg-white py-10 w-[400px] rounded-lg">
        <form className="flex flex-col space-y-5 px-16  " >
          <h2 className="text-center text-2xl font-bold mb-5 text-gray-700"> Inicia Sesion</h2>  
          <TextField id="outlined-basic" label="Correo" variant="outlined" />
          <TextField id="outlined-basic" label="Clave" variant="outlined" />

          <Button variant="contained">Ingresar</Button>
        </form>
      </div>
    </div>
    </div>
  )
}
