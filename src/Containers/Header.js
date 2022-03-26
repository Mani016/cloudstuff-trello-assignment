import classNames from 'classnames';
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from 'react-bootstrap';
import shoe_img from '../assets/images/shoe.avif';
import useHeader from './hooks/useHeader';
const Header = () => {
  const { _navs, avatars, activeNav, handleLogout } = useHeader();
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>
          <img src={shoe_img} alt='shoes' className='brand-logo' />
          Sprint Plans
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {_navs.map((item, index) => (
              <Nav.Link
                href={item.link}
                key={index}
                className={classNames({ active_nav: item.link === activeNav })}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
          <Form className='d-flex'>
            {avatars.map((item, index) => (
              <img
                src={item.src}
                alt={item.name}
                className={classNames('avatar-img', {
                  'me-3': index + 1 === avatars.length,
                })}
                key={index}
              />
            ))}

            <div className='vl me-2'></div>
            <div className='input-icons me-2 d-none d-lg-block'>
              <i className='fa fa-search icon'></i>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2 search-border input-field'
                aria-label='Search'
              />
            </div>
            <Button className='rounded' onClick={handleLogout}>
              <i className='fa fa-sign-out' />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
