import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import ReportRoutes from './ReportRoutes';
import SupportRoutes from './SupportRoutes';
import UtilityRoutes from './UtilityRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([LoginRoutes, MainRoutes, ReportRoutes, SupportRoutes, UtilityRoutes]);
}
