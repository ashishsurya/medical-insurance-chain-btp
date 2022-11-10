const CustomStat = ({ label, value,passClasses }) => {
  return (
    <div className={ `flex flex-col items-start ${passClasses}`}>
      <h3 className='font-semibold'>{label}</h3>
      <p className="text-gray-600">{value || "XXXXXXX"}</p>
    </div>
  );
};

export default CustomStat;
