function Bar({ className = "" }: { className?: string }) {
  return <span className={`loading-bar ${className}`} aria-hidden="true" />;
}

export default function Loading() {
  return <div className="site route-loading" role="status" aria-busy="true" aria-label="Program listesi yükleniyor">
    <div className="loading-header"><Bar className="loading-logo"/><Bar className="loading-header-label"/><Bar className="loading-language"/></div>
    <main className="main">
      <section className="loading-catalog-intro" aria-hidden="true"><Bar className="loading-eyebrow"/><Bar className="loading-title"/><Bar className="loading-copy"/></section>
      <div className="loading-catalog-layout" aria-hidden="true">
        <aside className="loading-filter-card"><Bar className="loading-filter-title"/><Bar className="loading-field"/><Bar className="loading-field"/><Bar className="loading-field"/><Bar className="loading-field"/><Bar className="loading-sidebar-foot"/></aside>
        <section className="loading-results"><Bar className="loading-results-title"/>{Array.from({length: 5},(_,index)=><article className="loading-program-card" key={index}><Bar className="loading-card-icon"/><div><Bar className="loading-faculty"/><Bar className="loading-card-title"/><Bar className="loading-card-meta"/><Bar className="loading-card-link"/></div></article>)}</section>
      </div>
    </main>
  </div>;
}
