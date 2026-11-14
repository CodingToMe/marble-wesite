export default function PageBanner({ title }) {
  return (
    <section className="admin-banner">
      <h1 className="h5 fw-semibold mb-2">{title}</h1>
      <p className="mb-0 small" style={{ color: "var(--adm-muted)" }}>
        Home <span className="mx-1">•</span> {title}
      </p>
      <div className="admin-banner-art d-none d-sm-block" />
    </section>
  );
}