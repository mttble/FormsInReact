import {SubmitHandler, useForm} from 'react-hook-form'
import './App.css'

type FormFields = {
  email: string
  password: string
}

const App = () =>{
  
  const {register, handleSubmit } = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
  }

  return (
    <form className='tutorial gap-2' onSubmit={handleSubmit(onSubmit)}>

      <div>
        <input {...register("email", {
          required:true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })} type='text' placeholder='Email' />
      </div>

      <div>
        <input {...register("password", {
          required:true,
          minLength: 8,
          })} type='password' placeholder='Password' />
      </div>

      <div>
        <button type='submit'>Submit</button>
      </div>

    </form>
  )
}

export default App
