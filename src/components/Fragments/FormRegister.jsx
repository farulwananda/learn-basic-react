import Button from '../Elements/Button'
import InputForm from '../Elements/Input'

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Full Name" type="text" name="fullname" placeholder="Example Name" />
      <InputForm label="Email" type="email" name="email" placeholder="example@email.com" />
      <InputForm label="Password" type="password" name="password" placeholder="********" />
      <InputForm label="Confirm Password" type="password" name="confirmPassword" placeholder="********" />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  )
}

export default FormRegister;