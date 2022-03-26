import React, { Fragment } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Flex from '../../../Base/Flex';
import TextField from '../../../Base/TextField';
import useLogin from './hooks/useLogin';
const Login = () => {
  const { onSubmit, register, handleSubmit, errors } = useLogin();
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className='h-100'>
        <Row className='justify-content-center align-items-center h-100'>
          <Col lg={3}>
            <Card>
              <Card.Header className='text-center'>
                <Flex justify='between'>
                  <h4>Login</h4>
                  <Link to='/register' variant='outline-primary'>
                    <Button className='btn btn-primary'>Sign Up</Button>
                  </Link>
                </Flex>
              </Card.Header>
              <Card.Body>
                <TextField
                  register={register}
                  name='userId'
                  type='text'
                  required={true}
                  className='mb-3'
                  placeholder='Enter UserId'
                  errors={errors}
                />
                <TextField
                  register={register}
                  name='password'
                  type='password'
                  required={true}
                  className='mb-3'
                  placeholder='Enter Password'
                  errors={errors}
                />

                <Flex justify='center'>
                <Button variant='outline-primary' size='md' type='submit'>
                    Submit
                  </Button>
                </Flex>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </form>
    </Fragment>
  );
};
export default Login;
