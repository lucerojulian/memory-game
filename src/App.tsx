import Router from './router/Router';
import Providers from './providers/Providers';
import Nav from './components/Nav';

const App = () => {
  return (
    <Providers>
      <main className="relative h-screen grid grid-rows-[auto,_1fr] overflow-hidden max-w-5xl m-auto">
        <Nav />
        <main className="grid grid-rows-[auto,_1fr] gap-2 p-4">
          <Router />
        </main>
      </main>
    </Providers>
  );
};

export default App;
