function FloorPlanView({ rooms }) {
  if (!rooms || rooms.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>📐 2D Floor Plan</h2>

      <div
        style={{
          width: "800px",
          border: "2px solid black",
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {rooms.map((room, index) => (
          <div
            key={index}
            style={{
              width: "180px",
              height: "120px",
              border: "1px solid black",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>{room.room}</h4>

            <p>{room.size}</p>

            <small>{room.direction}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FloorPlanView;