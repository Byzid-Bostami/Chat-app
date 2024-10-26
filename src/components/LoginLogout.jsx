import { auth, provider } from '../firebase/FirebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';

const LoginLogout = ({ user }) => {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex items-center space-x-2">
      {user ? (
        <div className='space-x-2'>
          <span className="text-white">{user.displayName}</span>
          <button onClick={handleSignOut} className="px-4 py-2 bg-red-500 text-white rounded-md">
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={signInWithGoogle} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default LoginLogout;
