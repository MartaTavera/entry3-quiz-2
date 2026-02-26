export function JobAdvert() {
    const items = [{ name: "Shop assistant", des: "required for busy superstore.", hours:"6am - 2pm Monday to Friday", ageReq:"Applicants must be 16 years and over." }];
    return (
      <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
        {items.map(h => (
          <div key={h.name} style={{ flex: 1, background: "#fff", border: "4px solid #334155", borderRadius: 14, padding: "20px 18px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <div style={{ fontWeight: 700, fontSize: 22, color: "#334155", marginBottom: 8 }}>{h.name}</div>
            <div style={{ fontWeight: 700, fontSize: 22, color: "#334155" }}>{h.des}</div>
            <div style={{ fontWeight: 600, fontSize: 20, color: "#334155" }}>{h.hours}</div>
            <div style={{ fontWeight: 600, fontSize: 20, color: "#334155" }}>{h.ageReq}</div>
          </div>
        ))}
      </div>
    );
  }