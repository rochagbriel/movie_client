import { setUser, setToken } from '../../redux/reducers/user';

export const handleLogout = () => {
  return (
    () => setUser(null),
    setToken(null),
    localStorage.clear(),
    window.location.reload()
  );
};
