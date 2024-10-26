import { useEffect, useRef } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy } from 'firebase/firestore';
import { db, auth } from '../firebase/FirebaseConfig';

const MessageControl = () => {
  const messagesRef = collection(db, 'messages');
  const q = query(messagesRef, orderBy('createdAt'));
  const [messages] = useCollectionData(q, { idField: 'id' });

  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  

  return (
    <div className="flex flex-col space-y-4 p-4 bg-[#7f7f7f] rounded-b-xl overflow-y-auto h-[calc(100vh-64px)]">
      {messages &&
        messages.map((msg) => (
          <div key={msg.id} className={`flex items-center ${msg.uid === auth.currentUser.uid ? 'justify-end' : ''}`}>
            <img 
              src={msg.photoURL}  
              alt={msg.displayName} 
              className="w-7 rounded-full mr-2" 
            />
            <div 
              className={`p-2 rounded-tl-none rounded-full break-words max-w-xs ${msg.uid === auth.currentUser.uid ? 'bg-blue-200' : 'bg-gray-200'}`}
            >
              
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      <div ref={bottomRef}></div> {/* Invisible div for scrolling to the bottom */}
    </div>
  );
};

export default MessageControl;
