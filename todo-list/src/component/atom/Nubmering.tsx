interface NumberingPropss {
  number: number;
  isDone?: boolean;
  doneNumber?: number;
}

const Numbering: React.FC<NumberingPropss> = (props) => {
  const { number, isDone, doneNumber } = props;

  return (
    <>
      {isDone ? (
        <div className="py-[2px] px-2 bg-gray-400 font-bold font-[Inter] text-[12px] text-gray-200 rounded-full">
          {number === 0 ? 0 : `${doneNumber}/${number}`}
        </div>
      ) : (
        <div className="py-[2px] px-2 bg-gray-400 font-bold font-[Inter] text-[12px] text-gray-200 rounded-full">
          {number}
        </div>
      )}
    </>
  );
};

export default Numbering;
