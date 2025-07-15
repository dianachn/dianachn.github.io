import {
  User,
  MapPin,
  Mail,
  Globe,
  FileText,
  Book,
  Award,
  Sparkles,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Decorative elements pakai warna theme */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-slow">
        <Sparkles className="w-8 h-8 text-secondary" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block px-8 py-4 rounded-full bg-primary mb-4">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground text-center">
              ABOUT ME
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info Card pakai theme */}
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <div className="p-2 rounded-full bg-primary/20">
                  <User className="text-primary" size={28} />
                </div>
                <span className="ml-2 text-primary">Personal Info</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="font-medium w-24 text-secondary-foreground">
                    Full Name:
                  </span>
                  <span className="text-muted-foreground">Siti Mardiana</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 text-secondary-foreground">
                    Location:
                  </span>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin size={18} className="mr-1 text-secondary" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 text-secondary-foreground">
                    Phone:
                  </span>
                  <div className="flex items-center text-muted-foreground">
                    <span>+62 831 2129 0491</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 text-secondary-foreground">
                    Email:
                  </span>
                  <div className="flex items-center text-muted-foreground">
                    <Mail size={18} className="mr-1 text-primary" />
                    <a
                      href="mailto:mardianasiti853@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      mardianasiti853@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Education Card pakai theme */}
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <div className="p-2 rounded-full bg-secondary/20">
                  <Book className="text-secondary" size={28} />
                </div>
                <span className="ml-2 text-secondary">Education</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-secondary-foreground">
                    SMK Tunas Harapan Pasarkemis
                  </h4>
                  <p className="text-muted-foreground">Office Administration</p>
                  <p className="text-sm text-muted-foreground/80">
                    2018 - 2021
                  </p>
                </div>
              </div>
            </div>

            {/* Languages Card pakai theme */}
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <div className="p-2 rounded-full bg-accent/20">
                  <Globe className="text-accent" size={28} />
                </div>
                <span className="ml-2 text-accent">Languages</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-secondary-foreground">
                    Indonesian:
                  </span>
                  <span className="ml-2 text-muted-foreground">Fluent</span>
                </div>
                <div>
                  <span className="font-medium text-secondary-foreground">
                    English:
                  </span>
                  <span className="ml-2 text-muted-foreground">
                    Upper Intermediate
                  </span>
                  <button
                    onClick={() =>
                      window.open(
                        "/certificates/english-certificate.pdf",
                        "_blank"
                      )
                    }
                    className="ml-2 inline-flex items-center text-primary hover:text-primary/80 active:text-primary/60 transition-all hover:scale-125"
                    title="View English Certificate"
                  >
                    <Award size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Summary pakai theme */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <div className="p-2 rounded-full bg-muted/20">
                  <FileText className="text-muted-foreground" size={28} />
                </div>
                <span className="ml-2 text-muted-foreground">
                  Profile Summary
                </span>
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A vocational graduate in Office Management with practical
                  experience in administration, procurement, and customer
                  service. Known for being responsive, organized, and proactive
                  in managing both internal tasks and external client needs.
                  Demonstrates strong communication skills, having interacted
                  with a wide range of customers in a fast-paced service
                  environment, resolving inquiries with patience and
                  professionalism.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Capable of handling document control, data entry, and
                  procurement procedures with attention to detail and a
                  solution-oriented mindset. Skilled in using Microsoft Office
                  tools and Google Workspace for daily operations and reporting.
                  Recently expanding into web design through self-initiated
                  learning, showing adaptability and a passion for continuous
                  growth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Enjoys dynamic roles, prefers practical work over routine desk
                  tasks, and thrives in environments that require multitasking,
                  initiative, and collaboration. Currently seeking opportunities
                  where administrative precision meets creativity and learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
