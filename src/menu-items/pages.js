// assets
import { MoneyCollectOutlined, HistoryOutlined, StockOutlined, ProjectOutlined } from '@ant-design/icons';

// icons
const icons = {
  MoneyCollectOutlined,
  HistoryOutlined, 
  StockOutlined,
  ProjectOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'reports',
  title: 'Reports',
  type: 'group',
  children: [
    {
      id: 'taxreports',
      title: 'Tax Reports',
      type: 'item',
      url: '/taxreports',
      icon: icons.StockOutlined
    },
    {
      id: 'financials',
      title: 'Financials',
      type: 'item',
      url: '/financials',
      icon: icons.MoneyCollectOutlined
    },
    {
      id: 'transactions',
      title: 'Transactions',
      type: 'item',
      url: '/transactions',
      icon: icons.ProjectOutlined
    },
    {
      id: 'history',
      title: 'History',
      type: 'item',
      url: '/history',
      icon: icons.HistoryOutlined
    }
  ]
};

export default pages;
