import { useForm } from 'react-hook-form';
import Toast from '../../../../Base/Toast';
import { setItemToSessionStore } from '../../../../utils';
const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Toast('success', 'User Successfully Login');
    setTimeout(() => {
      setItemToSessionStore('userId', data.userId);
      window.location = '/home';
    }, 1000);
  };
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};
export default useLogin;
