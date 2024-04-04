// assets
import { MessageOutlined, FileProtectOutlined, SettingOutlined } from '@ant-design/icons';

// icons
const icons = {
  MessageOutlined,
  FileProtectOutlined,
  SettingOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'feedback-page',
      title: 'Feedback',
      type: 'item',
      url: '/feedback-page',
      icon: icons.MessageOutlined
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: '/documentation',
      icon: icons.FileProtectOutlined,
      external: true,
      target: true
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/settings',
      icon: icons.SettingOutlined
    }
  ]
};

export default support;
