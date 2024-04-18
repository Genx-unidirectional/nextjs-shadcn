const sizes = {
  md: "p-1 text-xl font-medium",
  lg: "p-2 text-2xl font-bold",
};

const colors = {
  indigo: "bg-indigo-500 text-white",
  yellow: "bg-yellow-500 text-black",
};

function Button({
  children,
  color,
  size,
}: {
  children: React.ReactNode;
  color: keyof typeof colors;
  size: keyof typeof sizes;
}) {
  let sizeClasses = sizes[size];
  let colorClasses = colors[color];
  return (
    <button className={`${sizeClasses} ${colorClasses}`}>{children}</button>
  );
}
export default Button;
