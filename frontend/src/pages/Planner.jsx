import { useState } from "react";
import API from "../services/api";
import Results from "./Results";

function Planner() {
  const [formData, setFormData] = useState({
    plotLength: "",
    plotWidth: "",
    bedrooms: "",
    bathrooms: "",
    floors: "",
    style: "",
    budget: "",
    vastu: false,
  });

  const [generatedPlan, setGeneratedPlan] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post(
        "/generate-plan",
        formData
      );

      setGeneratedPlan(response.data);

      console.log(response.data);

      alert("Plan Generated Successfully!");
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏠 Smart House Planner</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="plotLength"
          placeholder="Plot Length"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="plotWidth"
          placeholder="Plot Width"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="floors"
          placeholder="Floors"
          onChange={handleChange}
        />

        <br />
        <br />

        <select
          name="style"
          onChange={handleChange}
        >
          <option value="">Select Style</option>
          <option value="Modern">Modern</option>
          <option value="Luxury">Luxury</option>
          <option value="Traditional">
            Traditional
          </option>
        </select>

        <br />
        <br />

        <input
          type="text"
          name="budget"
          placeholder="Budget"
          onChange={handleChange}
        />

        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="vastu"
            onChange={handleChange}
          />
          Vastu Compliance
        </label>

        <br />
        <br />

        <button type="submit">
          Generate House Plan
        </button>
      </form>

      <hr />

      <Results houseData={generatedPlan} />
    </div>
  );
}

export default Planner;