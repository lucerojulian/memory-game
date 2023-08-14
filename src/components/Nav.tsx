import useUser from '../hooks/useUser';
import PuffyText from '../shared/display/PuffyText';

const Nav = () => {
  const { name, logout } = useUser();

  return (
    <nav>
      <div className="flex items-center px-2 justify-end">
        {name && (
          <p className="font-medium font-sans text-white">
            {name}
            <span className="font-black ml-2 mr-1 sm:ml-4 sm:mr-2">|</span>
            <button
              type="button"
              onClick={logout}
              className="underline font-normal px-2 py-1 rounded hover:bg-white/10"
              title="Log out"
            >
              Log out
            </button>
          </p>
        )}
      </div>
      <h1 className="text-center">
        <PuffyText className="text-4xl !text-white">Memory game</PuffyText>
      </h1>
    </nav>
  );
};

export default Nav;
