import { useLocation } from 'react-router-dom';
import Toast from '../../Base/Toast';

const useHeader = () => {
  const lastUpdated = 'Sep 30';
  const location = useLocation();
  const activeNav = location.pathname.split('/')[1];
  const _navs = [
    { name: 'Overview', link: 'overview' },
    { name: 'List', link: 'list' },
    { name: 'Board', link: 'board' },
    { name: 'Timeline', link: 'timeline' },
    { name: 'Calendar', link: 'calendar' },
    { name: 'Dashboard', link: 'dashboard' },
    { name: 'Messages', link: 'messages' },
    { name: 'More...', link: 'more' },
  ];
  const avatars = [
    {
      src: 'https://marketplace.canva.com/5sWIg/MAEIt45sWIg/1/tl/canva-flat-style-round-people-avatar-icon-set%2C-yellow-purple-human-face-circle-icon-for-person-in-web-page%2C-flyer%2C-digital-game%2C-presentation-video%2C-account-forum%2C-user-vector-cartoon-illustration-isolated-on-white-background-MAEIt45sWIg.png',
      name: 'Avatar 1',
    },
    {
      src: 'https://marketplace.canva.com/1dS90/MAEIt_1dS90/1/tl/canva-hairstyle-of-a-young-man-MAEIt_1dS90.png',
      name: 'Avatar 2',
    },
    {
      src: 'https://marketplace.canva.com/9VciM/MAEIt99VciM/1/tl/canva-smiling-person-icon-MAEIt99VciM.png',
      name: 'Avatar 3',
    },
    {
      src: 'https://marketplace.canva.com/R2Afs/MAEIt2R2Afs/1/tl/canva-happy-young-woman-MAEIt2R2Afs.png',
      name: 'Avatar 4',
    },
  ];
  const handleLogout= ()=>{
    Toast('success', 'User Logged Out');
    sessionStorage.clear();
    setTimeout(() => {
      window.location = '/login';
    }, 1000);
  }
  return {
    lastUpdated,
    _navs,
    avatars,
    activeNav,
    handleLogout
  };
};
export default useHeader;
