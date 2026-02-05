import React, { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  const phone = "250794024646";
  const email = "itaben.rw@gmail.com";

  const message = `Hello Elie Dev,%0A%0AService: ${service}%0ADetails: ${details}`;
  const whatsappLink = `https://wa.me/${phone}?text=${message}`;
  const emailLink = `mailto:${email}?subject=Service Order&body=${message}`;

  const theme = dark ? darkTheme : lightTheme;

  return (
    <div style={{ ...styles.page, ...theme.page }}>
      {/* HEADER */}
      <header style={{ ...styles.hero, ...theme.hero }}>
        {/* Logo */}
        <img
          src="/elie.png"
          alt="Elie Dev Logo"
          style={styles.logo}
        />

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          style={{ ...styles.toggle, ...theme.toggle }}
          aria-label="Toggle dark mode"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>

        <h1 style={styles.title}>👋 Elie Dev</h1>
        <p style={styles.subtitle}>
          Full-Stack & Mobile App Developer
        </p>

        {/* Contact Buttons */}
        <div style={styles.actions}>
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconBtn}
          >
            📲 WhatsApp
          </a>

          <a href={`mailto:${email}`} style={styles.iconBtn}>
            📧 Email
          </a>
        </div>
      </header>

      {/* SERVICES */}
      <section style={styles.section}>
        <h2>🛠 Services</h2>
        <ul style={styles.list}>
          <li>🎨 Logo Design</li>
          <li>📱 Mobile App Design</li>
          <li>🌐 Web Design</li>
          <li>🎓 Professional Training</li>
          <li>🎵 Musician Services</li>
        </ul>
      </section>

      {/* ORDER FORM */}
      <section style={styles.section}>
        <h2>🛒 Order a Service</h2>

        <label style={styles.label}>Select Service</label>
        <select
          style={styles.input}
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">-- Choose a service --</option>
          <option>Logo Design</option>
          <option>Mobile App Design</option>
          <option>Web Design</option>
          <option>Professional Training</option>
          <option>Musician Request</option>
        </select>

        <label style={styles.label}>Project Details</label>
        <textarea
          style={styles.textarea}
          rows="4"
          placeholder="Describe your needs..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <div style={styles.orderActions}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.primaryBtn}
          >
            📲 WhatsApp Order
          </a>

          <a href={emailLink} style={styles.secondaryBtn}>
            📧 Email Order
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} elie-dev • Built with React
      </footer>
    </div>
  );
}

/* ======================
   THEMES
====================== */
const lightTheme = {
  page: { background: "#f9fafb", color: "#111" },
  hero: { background: "linear-gradient(135deg,#0f172a,#1e293b)" },
  toggle: { background: "#fff", color: "#000" },
};

const darkTheme = {
  page: { background: "#020617", color: "#e5e7eb" },
  hero: { background: "linear-gradient(135deg,#020617,#020617)" },
  toggle: { background: "#111", color: "#fff" },
};

/* ======================
   STYLES
====================== */
const styles = {
  page: {
    fontFamily: "system-ui, sans-serif",
    minHeight: "100vh",
    transition: "all .3s ease",
  },

  hero: {
    padding: "3rem 1rem",
    textAlign: "center",
    color: "#fff",
    position: "relative",
  },

  logo: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    marginBottom: "1rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },

  toggle: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    padding: "0.4rem 0.8rem",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
  },

  title: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginBottom: "0.5rem",
    animation: "fadeIn .6s ease",
  },

  subtitle: {
    opacity: 0.9,
    marginBottom: "1.5rem",
  },

  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  },

  iconBtn: {
    background: "#fff",
    color: "#000",
    padding: "0.6rem 1rem",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 600,
  },

  section: {
    maxWidth: "900px",
    margin: "2rem auto",
    padding: "0 1rem",
  },

  list: { lineHeight: 1.8 },

  label: {
    display: "block",
    marginTop: "1rem",
    marginBottom: "0.3rem",
    fontWeight: 600,
  },

  input: {
    width: "100%",
    padding: "0.6rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  textarea: {
    width: "100%",
    padding: "0.6rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  orderActions: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    marginTop: "1.5rem",
  },

  primaryBtn: {
    background: "#16a34a",
    color: "#fff",
    padding: "0.7rem 1.2rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600,
  },

  secondaryBtn: {
    background: "#2563eb",
    color: "#fff",
    padding: "0.7rem 1.2rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600,
  },

  footer: {
    textAlign: "center",
    padding: "2rem 1rem",
    opacity: 0.7,
  },
};
