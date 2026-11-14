import { useMemo, useState } from "react";
import {
  Bell,
  BookOpen,
  ChevronRight,
  CircleUser,
  FileText,
  LayoutGrid,
  Menu,
  Search,
  StickyNote,
  Sun,
  Table2,
  Ticket,
  X,
} from "lucide-react";
import "./AdminDashboard.css";
import PageBanner from "./PageBanner";
import EnquiryTable from "./EnquiryTable";
import OrderTable from "./OrderTable";
import { Link } from "react-router-dom";

/* ---------- Data ---------- */

const NAV = [
  {
    title: "Home",
    items: [{ id: "modern", label: "Modern", icon: LayoutGrid }],
  },
  {
    title: "Pages",
    items: [
      { id: "enquiryTable", label: "Enquiries", icon: Table2 },
      { id: "orderTable", label: "Orders", icon: FileText },
      { id: "profile", label: "User Profile", icon: CircleUser },
    ],
  },
  {
    title: "Apps",
    items: [
      { id: "notes", label: "Notes", icon: StickyNote },
      { id: "tickets", label: "Tickets", icon: Ticket },
      { id: "blogs", label: "Blogs", icon: BookOpen, hasChildren: true },
    ],
  },
];

/* ---------- Component ---------- */
export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState("enquiryTable");
  const [title, setTitle] = useState("Enquiries");

  return (
    <div className="admin-root">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="admin-overlay d-lg-none"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="d-flex align-items-center gap-3 px-4 py-4">
          <div className="admin-logo-ring" />
          <span className="fs-4 fw-semibold">
            <span className="fw-light">Admin</span>
          </span>
          <button
            className="admin-icon-btn ms-auto d-lg-none"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="px-3 pb-4">
          {NAV.map((group) => (
            <div key={group.title}>
              <p className="admin-nav-title">{group.title}</p>
              <ul className="list-unstyled mb-0 d-grid gap-1">
                {group.items.map(({ id, label, icon: Icon, hasChildren }) => (
                  <li key={id}>
                    <button
                      className={`admin-nav-btn ${page === id ? "active" : ""}`}
                      onClick={() => {
                        setTitle(label);
                        setPage(id);
                        setSidebarOpen(false); // mobile par drawer band
                      }}
                    >
                      <Icon size={20} />
                      <span className="flex-grow-1">{label}</span>
                      {hasChildren && <ChevronRight size={16} />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="admin-content">
        {/* Topbar */}
        <header className="admin-topbar d-flex align-items-center gap-3 px-3 px-sm-4 py-3">
          <button
            className="admin-icon-btn d-lg-none"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <div className="position-relative w-100" style={{ maxWidth: 340 }}>
            <Search size={18} className="admin-search-icon" />

            <input
              type="text"
              placeholder="Search..."
              className="form-control admin-input with-icon"
            />
          </div>
          <div>
            <button type="button" class="btn btn-secondary">
             <Link to="/" style={{color:"white"}}>Home</Link>
            </button>
          </div>
          <div className="ms-auto d-flex align-items-center gap-1">
            <button className="admin-icon-btn" aria-label="Toggle theme">
              <Sun size={20} />
            </button>
            <button className="admin-icon-btn" aria-label="Notifications">
              <Bell size={20} />
              <span className="admin-dot" />
            </button>
          </div>
        </header>

        <main className="p-3 p-sm-4">
          {/* Banner */}
          {page === "enquiryTable" && (
            <>
              <PageBanner title={title} />

              {/* Table card */}
              <EnquiryTable />
            </>
          )}
          {page === "orderTable" && (
            <>
              <PageBanner title={title} />

              {/* Table card */}
              <OrderTable />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
