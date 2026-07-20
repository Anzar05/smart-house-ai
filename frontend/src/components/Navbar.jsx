function Navbar() {
  return (
    <nav>
      <h2>Smart House AI</h2>

      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Home</li>
        <li>Planner</li>
        <li>Results</li>
      </ul>
    </nav>
  );
}

export default Navbar;