function Bar({ className = "" }: { className?: string }) {
  return <span className={`loading-bar ${className}`} aria-hidden="true" />;
}
export default function Loading() {
  return <div className="site route-loading" role="status" aria-busy="true" aria-label="Program detayları yükleniyor">
    <div className="loading-header"><Bar className="loading-logo"/><Bar className="loading-header-label"/><Bar className="loading-language"/></div>
    <main className="main detail-main" aria-hidden="true">
      <Bar className="loading-breadcrumbs"/>
      <section className="loading-detail-intro"><div><Bar className="loading-eyebrow"/><Bar className="loading-detail-title"/><Bar className="loading-copy"/></div><Bar className="loading-detail-code"/></section>
      <section className="loading-detail-sheet"><Bar className="loading-section-title"/><div className="loading-info-grid">{Array.from({length: 12},(_,index)=><Bar key={index} className="loading-info-cell"/>)}</div><Bar className="loading-section-title loading-lower-title"/><Bar className="loading-paragraph"/><Bar className="loading-paragraph"/><Bar className="loading-section-title loading-lower-title"/><div className="loading-career-grid">{Array.from({length: 4},(_,index)=><Bar key={index} className="loading-career-card"/>)}</div><Bar className="loading-section-title loading-lower-title"/><div className="loading-curriculum-fields">{Array.from({length: 3},(_,index)=><Bar key={index} className="loading-field"/>)}</div><Bar className="loading-field loading-curriculum-action"/></section>
    </main>
  </div>;
}
