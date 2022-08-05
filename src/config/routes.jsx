import Setup from '../pages/Setup';
import Success from '../pages/Success';
import Welcome from '../pages/Welcome';
import Workspace from '../pages/Workspace';

export default [
  {
    path: '/',
    Element: Welcome,
  },
  {
    path: '/workspace',
    Element: Workspace,
  },
  {
    path: '/setup',
    Element: Setup,
  },
  {
    path: '/success',
    Element: Success,
  },
];
