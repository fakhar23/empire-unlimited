interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className: string;
}

function Button({ children, className }: Props) {
  return (
    <button className={`bg-brand-orange rounded-xl px-16 py-3 ${className}`}>{children}</button>
  );
}

export default Button;
