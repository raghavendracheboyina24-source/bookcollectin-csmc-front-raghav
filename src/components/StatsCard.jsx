import "../styles/StatsCard.css";

function StatsCard({ icon, title, value, color }) {
  return (
    <div className="stats-card">
      <div
        className="icon-box"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div>
        <h2>{value}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default StatsCard;