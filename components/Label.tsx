"use client";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Label = ({ text, className, style, children }: Props) => {
  
  return (
    <div className={`px-4 py-2 rounded-full flex justify-center items-center text-sm 
      ${className}`} style={style} >

      { children }
      <span className="relative z-10"> {text} </span>

    </div>
    
  );
}
 
export default Label;