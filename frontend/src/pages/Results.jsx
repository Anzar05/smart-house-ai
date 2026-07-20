import FloorPlanView from "../components/FloorPlanView";
function Results({ houseData }) {
  if (!houseData) {
    return <h2>No House Plan Generated Yet</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏠 Generated House Plan</h1>

      <p>
        <b>Plot Size:</b> {houseData.plotLength} x{" "}
        {houseData.plotWidth}
      </p>

      <p>
        <b>Bedrooms:</b> {houseData.bedrooms}
      </p>

      <p>
        <b>Bathrooms:</b> {houseData.bathrooms}
      </p>

      <p>
        <b>Floors:</b> {houseData.floors}
      </p>

      <p>
        <b>Style:</b> {houseData.style}
      </p>

      <p>
        <b>Budget:</b> {houseData.budget}
      </p>

      <p>
        <b>Vastu:</b>{" "}
        {houseData.vastu ? "Yes" : "No"}
      </p>

      <hr />

      <h2>🤖 AI Room Allocation</h2>

      <ul>
        {houseData.rooms &&
          houseData.rooms.map((room, index) => (
            <li key={index}>
              <b>{room.room}</b>
              {" | "}
              {room.size}
              {" | "}
              {room.direction}
            </li>
          ))}
      </ul>

      <hr />

      <h2>🏢 Floor Distribution</h2>

      {houseData.floorDistribution &&
        Object.entries(
          houseData.floorDistribution
        ).map(([floor, rooms]) => (
          <div key={floor}>
            <h3>{floor}</h3>

            <ul>
              {rooms.map((room, index) => (
                <li key={index}>{room}</li>
              ))}
            </ul>
          </div>
        ))}
        <FloorPlanView rooms={houseData.rooms} />
    </div>
  );
}

export default Results;