import {
  FileText,
  FileSpreadsheet,
  Users,
  BrainCircuit,
  Database,
  FolderArchive,
  UserRound,
  ShoppingCart,
  KeyboardIcon,
  CalendarIcon,
  Mail,
} from "lucide-react";

const Skills = () => {
  // Define your skill categories and skills
  const skillCategories = [
    {
      id: 1,
      name: "Administrative & Organizational Skills",
      color: "bg-primary/20",
      textColor: "text-primary",
      barColor: "bg-primary",
      skills: [
        {
          name: "Data Entry & Reporting",
          desc: "Entered monthly utility data for 5000+ housing units using Excel.",
          level: 95,
          icon: <KeyboardIcon className="h-5 w-5 text-primary" />,
        },
        {
          name: "Document Drafting",
          desc: "Drafted formal letters and internal memos for handover and complaint processes.",
          level: 90,
          icon: <FileText className="h-5 w-5 text-primary" />,
        },
        {
          name: "Digital Filing System",
          desc: "Managed digital document filing, categorized by cluster and project.",
          level: 92,
          icon: <FolderArchive className="h-5 w-5 text-primary" />,
        },
        {
          name: "Inventory Monitoring",
          desc: "Handled inventory stock checks and prepared operational supply requests.",
          level: 88,
          icon: <Database className="h-5 w-5 text-primary" />,
        },
      ],
    },
    {
      id: 2,
      name: "Customer Service & Communication",
      color: "bg-secondary/20",
      textColor: "text-secondary",
      barColor: "bg-secondary",
      skills: [
        {
          name: "Call Handling",
          desc: "Responded to 15–25 customer calls daily regarding complaints and handovers.",
          level: 93,
          icon: <UserRound className="h-5 w-5 text-secondary" />,
        },
        {
          name: "Appointment Coordination",
          desc: "Scheduled handover appointments and guided clients through procedures.",
          level: 90,
          icon: <CalendarIcon className="h-5 w-5 text-secondary" />,
        },
        {
          name: "Cross-Team Communication",
          desc: "Coordinated with internal departments for complaint resolutions and updates.",
          level: 88,
          icon: <Users className="h-5 w-5 text-secondary" />,
        },
        {
          name: "Customer Education",
          desc: "Communicated housing regulations clearly to clients both in person and by email.",
          level: 87,
          icon: <Mail className="h-5 w-5 text-secondary" />,
        },
      ],
    },
    {
      id: 3,
      name: "Procurement & Vendor Coordination",
      color: "bg-accent/20",
      textColor: "text-accent",
      barColor: "bg-accent",
      skills: [
        {
          name: "PO Management",
          desc: "Created 10–20 Purchase Orders monthly based on department requests.",
          level: 90,
          icon: <FileSpreadsheet className="h-5 w-5 text-accent" />,
        },
        {
          name: "Contract Preparation",
          desc: "Prepared and issued 100–150 Work Contracts annually through internal systems.",
          level: 88,
          icon: <FileText className="h-5 w-5 text-accent" />,
        },
        {
          name: "Invoice Processing",
          desc: "Processed up to 200 vendor invoice payments per month in coordination with the finance team.",
          level: 92,
          icon: <Database className="h-5 w-5 text-accent" />,
        },
        {
          name: "Vendor Evaluation",
          desc: "Compared vendor quotations to ensure compliance with technical and budget requirements.",
          level: 85,
          icon: <Users className="h-5 w-5 text-accent" />,
        },
        {
          name: "Direct Purchasing",
          desc: "Handled urgent purchases via online and direct channels, ensuring timely delivery.",
          level: 80,
          icon: <ShoppingCart className="h-5 w-5 text-accent" />,
        },
      ],
    },
    {
      id: 4,
      name: "Content & Digital Support",
      color: "bg-primary/10",
      textColor: "text-primary",
      barColor: "bg-primary",
      skills: [
        {
          name: "Content Review",
          desc: "Reviewed and edited written content for grammar and clarity.",
          level: 90,
          icon: <FileText className="h-5 w-5 text-primary" />,
        },
        {
          name: "Editorial Feedback",
          desc: "Provided improvement suggestions to writers.",
          level: 85,
          icon: <Users className="h-5 w-5 text-primary" />,
        },
        {
          name: "AI-Assisted Enhancement",
          desc: "Using AI tools for content refinement and enhancement.",
          level: 80,
          icon: <BrainCircuit className="h-5 w-5 text-primary" />,
        },
        {
          name: "Image Sourcing",
          desc: "Sourced images from copyright-free platforms and AI generators.",
          level: 78,
          icon: <FileText className="h-5 w-5 text-primary" />,
        },
        {
          name: "Basic Design Work",
          desc: "Assisting with basic design tasks (e.g., business cards via Canva).",
          level: 75,
          icon: <FileText className="h-5 w-5 text-primary" />,
        },
        {
          name: "Web Design Practice",
          desc: "Learned and practiced basic website design for personal projects.",
          level: 70,
          icon: <FileText className="h-5 w-5 text-primary" />,
        },
      ],
    },
    {
      id: 5,
      name: "Software & Tools",
      color: "bg-secondary/10",
      textColor: "text-secondary",
      barColor: "bg-secondary",
      skills: [
        {
          name: "Microsoft Excel",
          desc: "Reporting, usage calculations, and inventory updates.",
          level: 95,
          icon: <FileSpreadsheet className="h-5 w-5 text-secondary" />,
        },
        {
          name: "Google Docs / Word",
          desc: "Formal letters, reports, and templates.",
          level: 92,
          icon: <FileText className="h-5 w-5 text-secondary" />,
        },
        {
          name: "Canva",
          desc: "Design support for internal and freelance needs.",
          level: 90,
          icon: <FileText className="h-5 w-5 text-secondary" />,
        },
        {
          name: "GitHub / Cursor",
          desc: "Version tracking and content collaboration.",
          level: 80,
          icon: <FileText className="h-5 w-5 text-secondary" />,
        },
        {
          name: "Internal Procurement Systems",
          desc: "PO creation and contract tracking maintained.",
          level: 85,
          icon: <FileText className="h-5 w-5 text-secondary" />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-background">
      {" "}
      {/* Light cream background */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-8">
          <div className="inline-block px-6 py-3 rounded-full bg-primary mb-4">
            {" "}
            {/* Pastel pink pill */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground text-center">
              SKILLS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.id} className="overflow-hidden">
              <h3
                className={`inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-lg font-bold mb-4 text-center w-full border border-primary/10`}
              >
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-1.5 rounded-full bg-[#4682B4] bg-opacity-20`}
                        >
                          {skill.icon}
                        </div>
                        <span className={`text-primary font-semibold text-sm`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-primary text-xs font-medium`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="w-full rounded-full h-2"
                      style={{ background: "var(--card)" }}
                    >
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          background: "#4682B4",
                        }}
                      ></div>
                    </div>
                    {skill.desc && (
                      <div className={`text-primary mt-2 text-xs`}>
                        {skill.desc}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
