function skillsMember() {
  // Skills array
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "Docker",
    "AWS",
    "GCP",
    "Azure",
    "Kubernetes",
    "Jenkins",
    "Git",
    "GitHub",
  ];
  // Select the member skills section
  const memberSkills = document.querySelector(".member-skills");
  // Loop through the skills array
  skills.forEach((skill) => {
    // Create a new span element for each skill
    const skillElement = document.createElement("span");
    // Add the skill to the span element
    skillElement.textContent = skill;
    // Add the span element to the member skills section
    memberSkills.appendChild(skillElement);
  });
}