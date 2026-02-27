export function JobDeadline() {
    const hotels = [
      { name: "The closing date for the job application is 12th August", dist: "Interviews will be held on the 14th August", last:" between 10am and 3pm.", },
      
    ];
    return (
      <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
        {hotels.map(h => (
          <div key={h.name} style={{ flex: 1, background: h.bg, border: `2px solid black`, borderRadius: 14, padding: "20px 18px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          
            <div style={{ fontWeight: 700, fontSize: 17, color: h.color, marginBottom: 8 }}>{h.name}</div>
            <div style={{ fontWeight: 600, fontSize: 18, color: h.color }}>{h.dist}</div>
            <div style={{ fontWeight: 600, fontSize: 18, color: h.color }}>{h.last}</div>
          </div>
        ))}
      </div>
    );
  }