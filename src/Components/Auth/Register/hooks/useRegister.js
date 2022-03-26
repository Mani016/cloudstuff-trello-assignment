import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Toast from '../../../../Base/Toast';

const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    Toast('success','User Successfully Registered');
    setTimeout(() => history.push('/login'), 1000);
  };
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};
export default useRegister;
