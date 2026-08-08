function Button({ children, href = '#', variant = 'primary' }) {
  const styles = {
    primary:
      'bg-purple-500 hover:bg-purple-400 text-white shadow-lg shadow-purple-500/20',
    secondary:
      'border border-purple-400/40 text-purple-200 hover:bg-purple-500/10',
  }

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-7 py-3.5 rounded-2xl font-medium transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </a>
  )
}

export default Button