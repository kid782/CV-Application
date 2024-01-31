function CvResultSection({ title, children }) {
  return (
    <div className="cv-result-section">
      <h3 className="cv-result__title">{title}</h3>
      {children}
    </div>
  );
}

export default CvResultSection;
