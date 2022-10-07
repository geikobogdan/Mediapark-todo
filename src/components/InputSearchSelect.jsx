export function InputSearchSelect({className = '', items = [], setInputValue, setInputFocus, handleSearch}) {
  return (
    <div
      className={`flex flex-col items-start z-30 absolute rounded-b left-[50%] text-blue p-5 top-[33.5px] translate-x-[-50%] w-[99%] bg-white ${className}`}>
      {items.map(item => (
        <span
          onClick={() => {
            setInputValue(item);
            handleSearch(item);
            setInputFocus(false);
          }}
          className="inline-block cursor-pointer hover:text-marine"
          key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
