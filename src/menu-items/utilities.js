// assets
import {
  AppstoreAddOutlined,
  DollarOutlined,
  SlidersOutlined ,
  TransactionOutlined,
  WalletOutlined,
  LoadingOutlined,
  ReadOutlined
} from '@ant-design/icons';

// icons
const icons = {
  WalletOutlined,
  TransactionOutlined,
  SlidersOutlined ,
  DollarOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  ReadOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities', 
  type: 'group',
  children: [
    {
      id: 'util-wallet',
      title: 'Wallets',
      type: 'item',
      url: '/wallet',
      icon: icons.WalletOutlined
    },
    {
      id: 'util-exchange',
      title: 'Exchange',
      type: 'item',
      url: '/exchange',
      icon: icons.TransactionOutlined
    },
    {
      id: 'util-token',
      title: 'Token',
      type: 'item',
      url: '/tokens',
      icon: icons.DollarOutlined,
      breadcrumbs: false
    },
    {
      id: 'util-market',
      title: 'Market',
      type: 'item',
      url: '/market',
      icon: icons.SlidersOutlined 
    },
    {
      id: 'util-learn',
      title: 'Learn',
      type: 'item',
      url: '/learn',
      icon: icons.ReadOutlined 
    }
  ]
};

export default utilities;
