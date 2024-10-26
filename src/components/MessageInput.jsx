import { useState } from 'react';
import { db } from '../firebase/FirebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const MessageInput = ({ user }) => {
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const messagesRef = collection(db, 'messages');
    await addDoc(messagesRef, {
      text: message,
      createdAt: serverTimestamp(),
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });

    setMessage('');
  };

  return (
    <form onSubmit={sendMessage} className="flex space-x-2 p-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-4 py-2 rounded-md border"
        placeholder="Type a message..."
      />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
