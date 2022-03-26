import { Card, Col, Row } from 'react-bootstrap';
import Flex from '../Base/Flex';
import useHeader from './hooks/useHeader';

const SubHeader = () => {
  const { lastUpdated } = useHeader();
  return (
    <Card className="rounded-0">
      <Row className='my-2'>
        <Col lg={3}>
          <span className='ms-2 my-2'>{`Last task completed on ${lastUpdated}`}</span>
        </Col>
        <Col lg={9} className='d-none d-lg-block'>
          <Flex justify='end'>
            <Flex className='mx-4' align='center'>
              <i className='me-2 fa fa-check' />
              All Tasks
            </Flex>
            <Flex className='mx-4' align='center'>
              <i className='me-2 fa fa-filter' />
              Filter
            </Flex>
            <Flex className='mx-4' align='center'>
              <i className='me-2 fa fa-sort' />
              Sort
            </Flex>
            <div className='vl' />
            <Flex className='mx-4' align='center'>
              <i className='me-2 fa fa-bars' />
              Rules
            </Flex>
            <Flex className='mx-4' align='center'>
              <i className='me-2 fa fa-linode' />
              Fields
            </Flex>
            <Flex className='mx-4' align='center'>
              <i className='me-2 fa fa-ellipsis-h' />
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Card>
  );
};
export default SubHeader;
