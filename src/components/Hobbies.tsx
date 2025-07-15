import {
  Palette,
  Music,
  Utensils,
  Brush,
  PaintRoller,
  Music2,
} from "lucide-react";

const Hobbies = () => {
  const hobbyItems = [
    {
      icon: <Brush className="h-12 w-12 text-primary" />,
      title: "Drawing",
      description:
        "Creating visual art with pencils, pens, and digital tools to express ideas and emotions.",
    },
    {
      icon: <Palette className="h-12 w-12 text-secondary" />,
      title: "Painting",
      description:
        "Exploring colors and textures on canvas to create beautiful landscapes and abstract pieces.",
    },
    {
      icon: <PaintRoller className="h-12 w-12 text-accent" />,
      title: "Designing",
      description:
        "Crafting visual concepts and layouts for various personal and creative projects.",
    },
    {
      icon: <Music className="h-12 w-12 text-primary" />,
      title: "Singing",
      description:
        "Expressing myself through vocal performance and enjoying various music genres.",
    },
    {
      icon: <Music2 className="h-12 w-12 text-secondary" />,
      title: "Dancing",
      description:
        "Moving to the rhythm and expressing emotions through choreography and free-style dance.",
    },
    {
      icon: <Utensils className="h-12 w-12 text-accent" />,
      title: "Cooking",
      description:
        "Experimenting with flavors and creating delicious meals inspired by various cuisines.",
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block px-8 py-4 rounded-full bg-primary mb-4">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground text-center">
              CREATIVE PASSIONS
            </h2>
          </div>
          <div className="w-24 h-2 bg-secondary rounded-full"></div>
          <p className="mt-6 text-center text-muted-foreground max-w-2xl">
            Beyond my professional life, I nurture my creative side through
            various hobbies and artistic pursuits. These activities help me
            maintain balance and bring a fresh perspective to everything I do.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbyItems.map((hobby, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-muted rounded-full flex items-center justify-center">
                  {hobby.icon}
                </div>
                <h3 className="text-3xl font-bold mb-3 text-primary text-center">
                  {hobby.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
