interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

Button.defaultProps = {
  style: {},
  className: "",
};

function Button({ children, className, style }: Props) {
  return (
    <button
      className={`bg-brand-orange rounded-xl px-16 py-3 ${className} `}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
