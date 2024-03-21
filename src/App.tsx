import {SubmitHandler, useForm} from 'react-hook-form'
import './App.css'

type FormFields = {
  email: string
  password: string
}

const App = () =>{
  
  const {
    register, 
    handleSubmit, 
    formState: {errors}, 
  } = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
  }

  return (
    <form className='tutorial gap-2' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("email", {
          required:"Email is required", //this was boolean 'true' but can also accept a string which will act as validation message at errors.email.message
          validate: (value) => {
            if (!value.includes('@')) {
              return 'Email should contain @'
            }
            return true
          },
          })} 
          type='text' 
          placeholder='Email' 
          />
          {errors.email && (<div className="formValidateMessage" style={{color: 'red'}}>{errors.email.message}</div>)}
      </div>

      <div>
        <input {...register("password", {
          required:"Password is required",
          minLength: {
            value: 8,
            message: 'Password should be at least 8 characters'
          },
          })} type='password' placeholder='Password' />
          {errors.password && (<div className="formValidateMessage" style={{color: 'red'}}>{errors.password.message}</div>)}
      </div>

      <div>
        <button type='submit'>Submit</button>
      </div>

    </form>
  )
}

export default App
