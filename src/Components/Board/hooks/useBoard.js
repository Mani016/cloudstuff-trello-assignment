import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const useBoard = () => {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState({});
  const boards = {
    lanes: [
      {
        id: 'lane1',
        title: 'Backlog',
        label: '2/2',
        cards: [
          {
            id: uuidv4(),
            title: 'Performance improvements',
            description: 'Performance improvements',
            label: '30 mins',
            metadata: {
              title: 'Performance improvements',
              description: 'Performance improvements',
              label: '30 mins',
              mainHeading:'Baclog'
            },
            tags: [
              {
                bgcolor: '#4684eb',
                color: 'white',
                title: 'Design',
              },
            ],
          },
          {
            id: uuidv4(),
            title: 'Implement New Designs',
            description: 'Implement New Designs',
            label: '5 mins',
            metadata: {
              title: 'Implement New Designs',
              description: 'Implement New Designs',
              label: '5 mins',
            },
            tags: [
              {
                bgcolor: '#43a99b',
                color: 'white',
                title: 'Engineering',
              },
            ],
          },
        ],
      },
      {
        id: 'lane2',
        title: 'Ready',
        label: '3/3',
        cards: [
          {
            id: uuidv4(),
            title: 'Design Navigation Changes',
            description: 'Design Navigation Changes',
            label: '30 mins',
            metadata: {
              title: 'Design Navigation Changes',
              description: 'Design Navigation Changes',
              label: '30 mins',
            },
            tags: [
              {
                bgcolor: '#4684eb',
                color: 'white',
                title: 'Design',
              },
            ],
          },
          {
            id: uuidv4(),
            title: 'Design Prototype',
            description: 'Design Prototype',
            label: '30 mins',
            metadata: {
              title: 'Design Prototype',
              description: 'Design Prototype',
              label: '30 mins',
            },
            tags: [
              {
                bgcolor: '#4684eb',
                color: 'white',
                title: 'Design',
              },
            ],
          },
          {
            id: uuidv4(),
            title: 'Website Redesign',
            description: 'Website Redesign',
            label: '30 mins',
            metadata: {
              title: 'Website Redesign',
              description: 'Website Redesign',
              label: '30 mins',
            },
            tags: [
              {
                bgcolor: '#4684eb',
                color: 'white',
                title: 'Design',
              },
            ],
          },
        ],
      },
      {
        id: 'lane3',
        title: 'In Progress',
        label: '2/2',
        cards: [
          {
            id: uuidv4(),
            title: 'Build Social Sharing Functionality',
            description: 'Build Social Sharing Functionality',
            label: '30 mins',
            metadata: {
              title: 'Build Social Sharing Functionality',
              description: 'Build Social Sharing Functionality',
              label: '30 mins',
            },
            tags: [
              {
                bgcolor: '#43a99b',
                color: 'white',
                title: 'Engineering',
              },
            ],
          },
          {
            id: uuidv4(),
            title: 'Redesign Overview',
            description: 'Redesign Overview',
            label: '30 mins',
            metadata: {
              title: 'Redesign Overview',
              description: 'Redesign Overview',
              label: '30 mins',
            },
            tags: [
              {
                bgcolor: '#4684eb',
                color: 'white',
                title: 'Design',
              },
            ],
          },
        ],
      },
      {
        id: 'lane4',
        title: 'Done',
        label: '2/2',
        cards: [
          {
            id: uuidv4(),
            title: 'Usability Testing',
            description: 'Usability Testing',
            label: '30 mins',
            metadata: {
              title: 'Usability Testing',
              description: 'Usability Testing',
              label: '30 mins',
            },
            tags: [
              {
                bgcolor: '#913db7f5',
                color: 'white',
                title: 'Research',
              },
            ],
          },
          {
            id: uuidv4(),
            title: 'Introduce New Navigation',
            description: 'Introduce New Navigation',
            label: '30 mins',
            metadata: {
              title: 'Introduce New Navigation',
              description: 'Introduce New Navigation',
              label: '30 mins',
            },
            tags: [
              {
                bgcolor: '#eb46c5b5',
                color: 'white',
                title: 'Data Science',
              },
            ],
          },
        ],
      },
    ],
  };

  const handleModal = (show) => setShow(show);
  console.log('shiesss', show);
  return {
    boards,
    show,
    setDetails,
    details,
    handleModal,
  };
};
export default useBoard;
