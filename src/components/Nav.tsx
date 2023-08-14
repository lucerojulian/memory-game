import useUser from '../hooks/useUser';
import PuffyText from '../shared/display/PuffyText';

const Nav = () => {
  const { name, logout } = useUser();

  return (
    <nav>
      <h1 className="text-center mt-6 mb-2">
        <PuffyText className="text-4xl !text-white">Memory game</PuffyText>
      </h1>
      {name && (
        <div className="absolute top-0 right-0 bottom-0 h-max ">
          <p className="font-medium font-sans text-white p-2">
            {name}
            <span className="font-black ml-2 mr-1 sm:ml-4 sm:mr-2">|</span>
            <button
              type="button"
              onClick={logout}
              className="underline font-normal px-2 py-2 rounded hover:bg-white/10"
              title="Log out"
            >
              Log out
            </button>
          </p>
        </div>
      )}
    </nav>
  );
};

export default Nav;
