import React from 'react';

const projects = [
  {
    title: "Chatify",
    image: p1,
    description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
    githubLink: "https://github.com/r2316/rpatel",
    demoLink: "#"
  },
  {
    title: "Bits-0f-C0de",
    image: p2,
    description: "My personal blog page build with Next.js and Tailwind Css which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
    githubLink: "https://github.com/r2316/rpatel",
    demoLink: "#"
  },
  {
    title: "Editor.io",
    image: p3,
    description: "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview. Both the editor supports auto save of work using Local Storage.",
    githubLink: "https://github.com/r2316/rpatel",
    demoLink: "#"
  },
  {
    title: "Plant AI",
    image: p4,
    description: "Used the plant disease dataset from Kaggle and trained an image classifier model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
    githubLink: "https://github.com/r2316/rpatel",
    demoLink: "#"
  },
  {
    title: "Ai For Social Good",
    image: p5,
    description: "Using 'Natural Language Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in suicide prevention.",
    githubLink: "https://github.com/r2316/rpatel",
    demoLink: "#"
  },
  {
    title: "Face Recognition and Emotion Detection",
    image: p6,
    description: "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backend. The classifier successfully predicted the various types of emotions of humans. The highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and pass the face to the classifier to predict the emotion of a person.",
    githubLink: "https://github.com/r2316/rpatel",
    demoLink: "#"
  }
];

export default function Projects() {
  return (
    <div style={{ height: "1600px", width: "100%", display: "flex", flexWrap: "wrap", backgroundColor: "black", gap: "40px", alignItems: "center", justifyContent: "center" }}>
      {projects.map((project, index) => (
        <div key={index} style={{ width: "400px", height: "750px", border: "3px solid purple", borderRadius: "5px" }}>
          <div style={{ width: "400px", height: "250px", padding: "10px" }}>
            <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          <p style={{ color: "white", fontSize: "25px", textAlign: "center" }}>{project.title}</p>

          <p style={{ color: "white", fontSize: "20px", padding: "18px" }}>
            {project.description}
          </p>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <a
              style={{ color: "white", height: "40px", width: "130px", display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "purple", borderRadius: "3px" }}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            {project.demoLink && (
              <a
                style={{ color: "white", height: "40px", width: "130px", display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "purple", borderRadius: "3px" }}
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
