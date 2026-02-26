export function JobDist() {
    const items = [{ name: "Job A", dist: "152 Km", from:"from her home" }, { name: "Job B", dist: "154 Km ", from:"from her home" },{ name: "Job C", dist:"148 Km ", from:"from her home" }];
    return (
      <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
        {items.map(h => (
          <div key={h.name} style={{ flex: 1, background: "#fff", border: "2px solid #334155", borderRadius: 14, padding: "20px 18px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <div style={{ fontWeight: 700, fontSize: 22, color: "#334155", marginBottom: 8 }}>{h.name}</div>
            <div style={{ fontWeight: 700, fontSize: 22, color: "#334155" }}>{h.dist}</div>
            <div style={{ fontWeight: 600, fontSize: 20, color: "#334155" }}>{h.from}</div>
          </div>
        ))}
      </div>
    );
  }