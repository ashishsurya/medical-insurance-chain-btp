import { MdTimer, MdTimerOff } from 'react-icons/md';

const StatusIndicator = ({ status }) => {
  return (
    <div
      className={`self-center p-2 flex items-center space-x-2 ${status === "isOk" ? "bg-green-500" : "bg-red-500"}  text-white w-fit rounded-xl `}
    >
      {status === 'isOk' ? <MdTimer /> : <MdTimerOff />}
      <p>Status</p>
    </div>
  );
};

export default StatusIndicator;
