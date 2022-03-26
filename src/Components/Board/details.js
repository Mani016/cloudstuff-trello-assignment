import { Badge, Card, Col, FormControl, Offcanvas, Row } from 'react-bootstrap';
import Flex from '../../Base/Flex';
const BoardDetails = (props) => {
  const { show, handleModal, details = {} } = props;
  return (
    <>
      <Offcanvas
        show={show}
        onHide={() => handleModal(false)}
        placement='end'
        size={'lg'}
        backdrop
        scroll
      >
        <Card className='rounded-0'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='w-100'>
              <Flex justify='between' align='center'>
                <Card className='px-3'>
                  <Flex align='center'><i className='fa fa-check'/>Mark Complete</Flex></Card>
              </Flex>
            </Offcanvas.Title>
            <Flex className='d-none d-lg-block'>
              <i className='mx-2 fa fa-clipboard' />
              <i className='mx-2 fa fa-paperclip' />
              <i className='mx-2 fa fa-plug' />
              <i className='mx-2 fa fa-thumbs-up' />
              <i className='mx-2 fa fa-ellipsis-h' />
            </Flex>
          </Offcanvas.Header>
        </Card>
        <Offcanvas.Body className='p-0'>
          <h3 className='ps-4'>{details.title}</h3>
          <Row className='mt-4 ps-4 content'>
            <Col sm={3} className='p-0 mt-4'>
              <h6>Asignee</h6>
            </Col>
            <Col sm={9} className='p-0 mt-4'>
              <b>Zoe Wong</b>
            </Col>
            <Col sm={3} className='p-0 mt-4'>
              <h6> Due date</h6>
            </Col>
            <Col sm={9} className='p-0 mt-4'>
              <b>
                <i className='fa fa-calendar-o me-2' /> Monday
              </b>
            </Col>
            <Col sm={3} className='p-0 mt-4'>
              <h6>Projects</h6>
            </Col>
            <Col sm={9} className='p-0 mt-4'>
              <b className='d-flex'>
                <div className='box purple me-2' />
                HR Meetings
              </b>
            </Col>
            <Col sm={3} className='p-0 mt-4'>
              <h6>Stage</h6>
            </Col>
            <Col sm={9} className='p-0 mt-4'>
              <b>
                <Badge bg='primary'> In Progress</Badge>
              </b>
            </Col>
            <Col sm={3} className='p-0 mt-4'>
              <h6>Description</h6>
            </Col>
            <Col sm={9} className='p-0 mt-4'>
              <b>{details.description}</b>
            </Col>
          </Row>
          <div className='board-details-footer'>
            <Flex justify='start'>
              <img
                src='https://marketplace.canva.com/1dS90/MAEIt_1dS90/1/tl/canva-hairstyle-of-a-young-man-MAEIt_1dS90.png'
                alt=''
                className='avatar-img my-3 mx-2'
              />
              <Flex column='column' className='my-3 mx-2'>
                <p className='mb-0 d-flex align-items-center'>
                  <h5 className='me-2'>
                    <b>Zoe Wong</b>
                  </h5>{' '}
                  <small> 1 hour ago</small>
                </p>
                <p className='mb-0'>Thank you! I will take a look at this tomorrow.</p>
              </Flex>
            </Flex>
            <Flex justify='start'>
              <img
                src='https://marketplace.canva.com/5sWIg/MAEIt45sWIg/1/tl/canva-flat-style-round-people-avatar-icon-set%2C-yellow-purple-human-face-circle-icon-for-person-in-web-page%2C-flyer%2C-digital-game%2C-presentation-video%2C-account-forum%2C-user-vector-cartoon-illustration-isolated-on-white-background-MAEIt45sWIg.png'
                alt=''
                className='avatar-img my-3 mx-2'
              />
              <Flex column='column' className='my-3 mx-2 w-100'>
                <FormControl
                  type='search'
                  placeholder='Ask a question or post an update'
                  aria-label='Search'
                  className='w-75'
                />
                <Flex>
                  <small className='my-2 me-2'>Collaborators</small>
                  <img
                    src='https://marketplace.canva.com/9VciM/MAEIt99VciM/1/tl/canva-smiling-person-icon-MAEIt99VciM.png'
                    alt=''
                    className='avatar-img m-0 p-1'
                  />{' '}
                  <img
                    src='https://marketplace.canva.com/R2Afs/MAEIt2R2Afs/1/tl/canva-happy-young-woman-MAEIt2R2Afs.png'
                    alt=''
                    className='avatar-img m-0 p-1'
                  />{' '}
                  <img
                    src='https://www.pngfind.com/pngs/m/317-3177131_636682202684372240-user-profile-photo-round-hd-png-download.png'
                    alt=''
                    className='avatar-img m-0 p-1'
                  />{' '}
                  <img
                    src='https://www.pngfind.com/pngs/m/486-4869221_lili-b-w-round-girl-hd-png-download.png'
                    alt=''
                    className='avatar-img m-0 p-1'
                  />
                </Flex>
              </Flex>
            </Flex>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BoardDetails;
