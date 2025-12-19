import { Code ,User,Briefcase } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Aspiring Software Engineer & Problem Solver</h3>

            <p className="text-muted-foreground">I’m a passionate learner exploring the field of software engineering. I enjoy programming, working with data structures and algorithms, and building real-world projects that transform ideas into practical solutions.</p>
            <p className="text-muted-foreground">I love stepping out of my comfort zone to learn new technologies and take on challenges that help me grow as a developer. I enjoy collaborating, sharing knowledge, and constantly improving my skills.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
  <a href="#contact" className="cosmic-button">
    {" "}
    Get In Touch
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
  >
    Download RESUME
  </a>
</div>
</div>

         <div className="grid grid-cols-1 gap-6">
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Code className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
  <h4 className="font-semibold text-lg">💻 Full-Stack Development</h4>
  <p className="text-muted-foreground">
    Developing responsive, scalable applications using modern frontend and backend technologies.
  </p>
</div>

    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <User className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
  <h4 className="font-semibold text-lg">⚙️ Problem Solving & Optimization</h4>
  <p className="text-muted-foreground">
    Analyzing problems, writing efficient code, and improving performance through better design choices.
  </p>
</div>

    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Briefcase className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
  <h4 className="font-semibold text-lg">📦 Product-Oriented Development</h4>
  <p className="text-muted-foreground">
    Building applications with real users in mind — focusing on usability, structure, and maintainability.
    </p>
</div>

    </div>
  </div>
  </div>
</div>
        </div>
</section>
  );
};
