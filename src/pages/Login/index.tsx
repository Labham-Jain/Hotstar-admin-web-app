import {useForm} from 'react-hook-form'
import ResponseJSON from '../../../@types/ResponseJSON';
import API from '../../api/api';
import Button from '../../components/Button'
import Input from '../../components/Input'
import Section from '../../components/Section'
import './login.css';
const Login = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = async (data: any) => {
    const response: ResponseJSON = await (await API.post('login', {json: data})).json()
    if(response.data){
      const token = response.data.token;
      localStorage.setItem('token', token)
    } else {
      console.error(response.message);
    }
  }

  return (
    <Section title='Login' className='auth-section'>
      <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
        <h3>Admin Panel</h3>
        <Input type="text" placeholder='Enter Email or Phone...' title="Email / Phone" required {...register('phoneOrEmail')}/>
        <Input type="password" placeholder='Password' required {...register('password')}/>
        <Button>Login</Button>
      </form>
    </Section>
  )
}

export default Login