import Router from './Router';
import Providers from './providers/Providers';
import Nav from './components/Nav';

const App = () => {
  return (
    <Providers>
      <main className="relative h-screen p-4 grid grid-rows-[auto,_auto,_1fr] overflow-hidden max-w-5xl m-auto">
        <Nav />
        <Router />
      </main>
    </Providers>
  );
};

export default App;
