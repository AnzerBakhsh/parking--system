import CreateLot from '@/pages/Admin/createLot/CreateLot';
import DashboardView from '@/pages/Admin/Dashboard/AdminPage';
import PageNotFound from '@/pages/PageNotFound';
import ParkingStatus from '@/pages/Admin/parkinglot/Status';


const AdminRoutes = [
  { path: '/admin/dashboard', component: DashboardView, layout: 'admin' },
  { path: '/admin/create-lot', component: CreateLot, layout: 'admin' },
  { path: '/admin/parking-status', component:ParkingStatus, layout: 'admin' },
  { path: '*', component: PageNotFound },
];

export default AdminRoutes;
