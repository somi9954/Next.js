const Text = ({ children, className = "", Component = "span" }) => {
  // component로 하면 span태그로 변경 됨
  return <Component className={`${className}`}>{children}</Component>;
};

export default Text;
