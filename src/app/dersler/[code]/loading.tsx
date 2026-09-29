function Bar({ className = "" }: { className?: string }) {
  return <span className={`loading-bar ${className}`} aria-hidden="true" />;
}

export default function Loading() {
  return <div className="site route-loading" role="status" aria-busy="true" aria-label="Ders detayları yükleniyor">
    <div className="loading-header"><Bar className="loading-logo"/><Bar className="loading-header-label"/><Bar className="loading-language"/></div>
    <main className="main curriculum-page" aria-hidden="true">
      <Bar className="loading-breadcrumbs"/>
      <section className="loading-detail-intro"><div><Bar className="loading-eyebrow"/><Bar className="loading-detail-title"/><Bar className="loading-copy"/></div><Bar className="loading-detail-code"/></section>
      <div className="loading-course-layout">
        <aside className="loading-course-nav"><Bar className="loading-course-logo"/><div>{Array.from({length: 9},(_,index)=><Bar key={index} className="loading-course-nav-item"/>)}</div></aside>
        <section className="loading-detail-sheet loading-course-sheet"><div className="loading-info-grid">{Array.from({length: 12},(_,index)=><Bar key={index} className="loading-info-cell"/>)}</div><Bar className="loading-section-title loading-lower-title"/><Bar className="loading-paragraph"/><Bar className="loading-paragraph"/><Bar className="loading-section-title loading-lower-title"/><Bar className="loading-paragraph"/><Bar className="loading-paragraph"/><Bar className="loading-section-title loading-lower-title"/><div className="loading-table">{Array.from({length: 6},(_,index)=><Bar key={index} className="loading-table-row"/>)}</div><Bar className="loading-section-title loading-lower-title"/><div className="loading-table">{Array.from({length: 3},(_,index)=><Bar key={index} className="loading-table-row"/>)}</div></section>
      </div>
    </main>
  </div>;
}
