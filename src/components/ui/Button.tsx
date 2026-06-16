type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const base =
    "py-3 px-6 rounded-xl font-semibold transition-all text-center w-full sm:w-auto";

  const styles = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  const disabledStyle = "opacity-50 cursor-not-allowed pointer-events-none";

  const finalClass = `
    ${base}
    ${styles[variant]}
    ${disabled ? disabledStyle : ""}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={finalClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={finalClass}>
      {children}
    </button>
  );
}