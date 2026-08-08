function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-20 text-center">
      {subtitle && (
        <p className="text-purple-300 uppercase tracking-[0.25em] text-sm font-medium mb-4">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle