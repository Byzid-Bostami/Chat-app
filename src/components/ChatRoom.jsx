import MessageControl from './MessageControl';
import MessageInput from './MessageInput';

const ChatRoom = ({ user }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-auto">
        <MessageControl />
      </div>
      <MessageInput user={user} />
    </div>
  );
};

export default ChatRoom;
