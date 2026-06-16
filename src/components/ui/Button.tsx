type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    href?: string;
    onClick?: () => void;
    className?: string;
};

export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
}: ButtonProps) {
    const base =
    "py-3 px-6 rounded-xl font-semibold transition-all text-center w-full sm:w-auto";

  const styles = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  const finalClass = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
}