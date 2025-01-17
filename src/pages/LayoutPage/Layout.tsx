import { Outlet } from 'react-router-dom';

import Header from '@/widgets/Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

