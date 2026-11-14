import { useEffect, useMemo, useState } from "react";
import { ChevronsUpDown, Download, Eye, Trash2 } from "lucide-react";
import { getEnquiry, getOrders } from "../../api/enquiryApi";
import { AVATAR_GRADIENTS, SUBJECT_PILLS, STATUS_PILLS } from "./AdminConstant";

/* ---------- Data ---------- */
const COLUMNS = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "category", label: "Category" },
  { key: "productCode", label: "Product Code" },
  { key: "date", label: "Date" },
  { key: "status", label: "Status" },
];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

/* ---------- Component ---------- */
export default function OrderTable() {
  const [orders, setOrders] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState({ key: null, dir: "asc" });

  const toggleSort = (key) =>
    setSort((s) =>
      s.key === key
        ? { key, dir: s.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" },
    );

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = orders.filter(
      (e) =>
        !q ||
        [
          e.name,
          e.email,
          e.phone,
          e.categorySlug,
          e.productCode,
          e.message,
          e.status,
          formatDate(e.date),
        ]
          .join(" ")
          .toLowerCase()
          .includes(q),
    );
    if (sort.key) {
      list = [...list].sort((a, b) => {
        const res = String(a[sort.key]).localeCompare(String(b[sort.key]));
        return sort.dir === "asc" ? res : -res;
      });
    }
    return list;
  }, [orders, query, sort]);

  const handleDelete = (id) => {
    if (window.confirm("Delete this enquiry?")) {
      setOrders((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const handleView = (enq) => {
    // TODO: yaha enquiry ka detail modal ya page open karo
    console.log("View", enq);
  };

  const handleDownload = () => {
    const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
    const header = [
      "Name",
      "Email",
      "Phone",
      "Category",
      "productCode",
      "Message",
      "Date",
      "Status",
    ].join(",");
    const body = rows
      .map((r) =>
        [r.name, r.email, r.phone, r.categorySlug,r.productCode ,r.message, r.date, r.status]
          .map(esc)
          .join(","),
      )
      .join("\n");
    const blob = new Blob([header + "\n" + body], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "orders.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const subjectPill = (category) => {
    const i = Math.max(
      [...new Set(orders.map((e) => e.category))].indexOf(category),
      0,
    );
    return SUBJECT_PILLS[i % SUBJECT_PILLS.length];
  };
  useEffect(() => {
    const fetchOrders= async () => {
      try {
        const result = await getOrders();
        console.log(result?.data,"dssasta")
        setOrders(result?.data || []);
      } catch (error) {
        console.error("Enquiry API Error:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <section className="admin-card mt-4">
      <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
        <h2 className="h5 fw-semibold mb-0 ps-sm-2">Enquiries</h2>
        <div className="d-flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search orders..."
            className="form-control admin-input"
            style={{ minWidth: 0, width: "100%", maxWidth: 290 }}
          />
          <button
            className="admin-btn-primary flex-shrink-0"
            onClick={handleDownload}
            aria-label="Download CSV"
          >
            <Download size={18} />
          </button>
        </div>
      </div>

      <div className="table-responsive admin-table-wrap mt-4">
        <table className="table table-hover align-middle mb-0 admin-table">
          <thead>
            <tr>
              {COLUMNS.map((c) => (
                <th key={c.key}>
                  <button
                    className={`admin-sort-btn ${sort.key === c.key ? "active" : ""}`}
                    onClick={() => toggleSort(c.key)}
                  >
                    {c.label}
                    <ChevronsUpDown size={14} />
                  </button>
                </th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((enq, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="admin-avatar"
                      style={{
                        background:
                          AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length],
                      }}
                    >
                      {enq.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div style={{ color: "#cbd5e1" }}>{enq.name}</div>
                      <small style={{ color: "var(--adm-muted)" }}>
                        {enq.phone}
                      </small>
                    </div>
                  </div>
                </td>
                <td style={{ color: "#cbd5e1" }}>{enq.email}</td>
                <td>
                  <span className={`pill ${subjectPill(enq.categorySlug)}`}>
                    {enq.categorySlug}
                  </span>
                </td>
                <td>
                  <span className={`pill ${subjectPill(enq.productCode)}`}>
                    {enq.productCode}
                  </span>
                </td>
                <td className="fw-semibold">{formatDate(enq.createdAt)}</td>
                <td>
                  <span
                    className={`pill ${STATUS_PILLS[enq.status] || "pill-blue"}`}
                  >
                    {enq.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="act-btn act-edit"
                      onClick={() => handleView(enq)}
                      aria-label={`View enquiry from ${enq.name}`}
                    >
                      <Eye size={15} />
                    </button>
                    <button
                      className="act-btn act-delete"
                      onClick={() => handleDelete(enq.id)}
                      aria-label={`Delete enquiry from ${enq.name}`}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-5"
                  style={{ color: "var(--adm-muted)" }}
                >
                  Koi enquiry nahi mili. Search badal kar try karo.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
