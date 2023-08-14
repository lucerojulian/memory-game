import { Navigate, useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import LogInForm from '../components/LogInForm';

const Home = () => {
  const navigate = useNavigate();
  const { name } = useUser();

  const onLogIn = () => {
    navigate('/play');
  };

  if (name) {
    return <Navigate to="/play" />;
  }

  return (
    <section className="max-w-[400px] m-auto mt-4">
      <LogInForm onLogIn={onLogIn} />
    </section>
  );
};

export default Home;
