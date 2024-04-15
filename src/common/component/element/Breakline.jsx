
  const Breakline = ({ className = '', ...others }) => {
    return (
      <div
        className={`border-t border-[#fffff7b7] w-full  ${className}`}
        {...others}
      ></div>
    );
  };
  
  export default Breakline;
  