import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/FirebaseConfig';
import LoginLogout from './components/LoginLogout';
import ChatRoom from './components/ChatRoom';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-neutral-300">
      <header className="bg-gray-800 text-white p-4 text-center flex justify-around items-center">
        <h1 className='text-3xl font-medium'>Chat Room</h1>
        {user && (
          <LoginLogout user={user} />
        )}
      </header>
      <main className="flex justify-center items-center h-screen">
        {user ? <ChatRoom user={user} /> : <LoginLogout user={user} />}
      </main>
    </div>
  );
}

export default App;
