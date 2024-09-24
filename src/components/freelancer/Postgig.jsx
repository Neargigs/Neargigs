import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const availableSkills = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "CSS",
  "HTML",
  "Solidity",
  "Smart Contracts",
  "AWS",
  "Docker",
  // Add more skills as needed
];

const Postgig = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [dragging, setDragging] = useState(false);

  // Handle skill input changes
  const handleSkillInputChange = (e) => {
    setSkillInput(e.target.value);
  };

  // Handle skill selection
  const handleSkillSelect = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setSkillInput(""); // Clear input after selecting
    }
  };

  // Remove skill from selected list
  const handleRemoveSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((selected) => selected !== skill));
  };

  // Handle file selection manually
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + fileList.length <= 10) {
      setFileList([...fileList, ...files]);
    } else {
      alert("You can only upload a maximum of 10 files.");
    }
  };

  // Handle drag and drop file upload
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length + fileList.length <= 10) {
      setFileList([...fileList, ...files]);
    } else {
      alert("You can only upload a maximum of 10 files.");
    }
  };

  // Submit form logic (you can handle as per your needs)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      jobTitle,
      description,
      selectedSkills,
      budget,
      deadline,
      fileList,
    });
  };

  return (
    <>
      <div className="pagetitle">
        <h1>Create New Job</h1>
      </div>
      <div className="freelform">
        <form onSubmit={handleFormSubmit}>
          <div className="freelform__group">
            <label htmlFor="job-title">Job Title</label>
            <input
              type="text"
              id="job-title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
              placeholder="Enter job title"
            />
          </div>

          <div className="freelform__group">
            <label htmlFor="skills">Skills Required</label>
            <input
              type="text"
              id="skills"
              value={skillInput}
              onChange={handleSkillInputChange}
              placeholder="Type to filter skills..."
              autoComplete="off"
            />
            {skillInput && (
              <ul className="freelform__skills-dropdown">
                {availableSkills
                  .filter((skill) =>
                    skill.toLowerCase().includes(skillInput.toLowerCase())
                  )
                  .map((skill) => (
                    <li key={skill} onClick={() => handleSkillSelect(skill)}>
                      {skill}
                    </li>
                  ))}
              </ul>
            )}
            <div className="freelform__tags">
              {selectedSkills.map((tag, index) => (
                <span key={index} className="freelform__tag">
                  {tag}
                  <button
                    type="button"
                    className="freelform__remove-tag"
                    onClick={() => handleRemoveSkill(tag)}
                  >
                    &#x2716;
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="freelform__group">
            <label htmlFor="description">Description</label>
            <ReactQuill
              value={description}
              onChange={setDescription}
              placeholder="Describe the project in detail..."
              style={{
                background: "white",
                borderRadius: "10px",
                color: "black",
              }}
            />
          </div>

          <div className="freelform__group freelform__file-drop-area">
            <label>Files (max 10 files, 10MB each)</label>
            <div
              className={`freelform__drop-zone ${dragging ? "dragging" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("file-input").click()}
            >
              <p>Drag & drop files here or click to upload</p>
              <input
                id="file-input"
                type="file"
                multiple
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            <div className="freelform__file-names">
              {fileList.map((file, index) => (
                <p key={index}>{file.name}</p>
              ))}
            </div>
          </div>

          <div className="freelform__group">
            <label htmlFor="budget">Budget</label>
            <input
              type="number"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="$0.00"
              required
            />
            <small className="freelform__note">
              The budget is specified in USD, but you will pay in the
              cryptocurrency that you arrange with the talent.
            </small>
          </div>

          <div className="freelform__group">
            <label htmlFor="deadline">Deadline</label>
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              placeholder="Select deadline"
              required
            />
          </div>

          <div className="freelform__buttons">
            <button type="button" className="usbutton">
              Save as Draft
            </button>
            <button
              style={{ width: "50%" }}
              type="submit"
              className="sidebutton"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Postgig;
