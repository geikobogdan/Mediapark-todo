function StyledInput({placeholder, className, ...props}) {
  return (
    <input
      placeholder={placeholder}
      className={`pr-11 pl-5 w-full h-11 text-base rounded appearance-none focus:outline-none  ${className} focus:placeholder-gray-300`}
      {...props}
    />
  );
}

export function Input({setValue, value, className, classNameWrapper, children, placeholder, type = 'text', ...props}) {
  return (
    <div {...props} className={`flex relative items-center text-black ${classNameWrapper}`}>
      <StyledInput
        type={type}
        onChange={e => setValue(e.target.value)}
        value={value}
        className={className}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
}
