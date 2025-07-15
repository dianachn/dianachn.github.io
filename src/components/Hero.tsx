import { Button } from "@/components/ui/button";
import { Mail, Download, Sparkles } from "lucide-react";
import PhotoWithBackground from "./PhotoWithBackground";

const Hero = () => {
  return (
    <section
      className="py-20 md:py-28 bg-background relative overflow-hidden"
      id="hero"
    >
      {/* Hapus pembatas bawah */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F7DAE7] to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-[#A95166] to-[#A95166] opacity-50"></div> */}

      {/* Gradient overlay pakai warna theme */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(45deg, var(--card) 0%, var(--primary) 50%, var(--sidebar-primary) 100%)`,
        }}
      ></div>

      {/* Decorative elements pakai warna theme */}
      <div className="absolute top-20 right-10 animate-float">
        <Sparkles className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float-slow">
        <Sparkles className="w-6 h-6 text-secondary" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6">
            {/* Name with decorative background shape pakai theme */}
            <div className="relative flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-2 shadow-lg"></div>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-foreground p-4 z-10 text-center">
                Siti Mardiana
              </h1>
            </div>

            {/* Title with primary color */}
            <p className="text-xl md:text-2xl text-secondary-foreground font-semibold text-center">
              Office Support Professional (Admin | Procurement | Customer
              Service)
            </p>

            {/* Description with improved readability */}
            <p className="text-base text-muted-foreground leading-relaxed text-center">
              Experienced in admin, procurement, and customer service. Skilled
              in handling invoices, vendor coordination, and data management.
              Proficient in Excel, Google Docs, Canva, and AI tools. Fast
              learner, reliable, and collaborative.
            </p>

            {/* Buttons with updated styling pakai theme */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/80 flex items-center gap-2 font-medium shadow-sm rounded-full px-8 py-3 text-lg"
                onClick={() =>
                  (window.location.href = "mailto:mardianasitiid@gmail.com")
                }
              >
                <Mail size={22} />
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="border-2 border-secondary text-secondary-foreground hover:bg-secondary/10 flex items-center gap-2 shadow-sm rounded-full px-8 py-3 text-lg"
                onClick={() => {
                  window.open(
                    "https://docs.google.com/document/d/1ma7r0D2e-2_tBWSXWhqCUY72swIZ7bBYeUuSUg-G_Lo/edit?usp=drive_link",
                    "_blank"
                  );
                }}
              >
                <Download size={22} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile image, shape dihapus dan ukuran shape dikecilkan agar proporsional */}
          <div className="w-full md:w-[40%] flex justify-center items-center relative">
            {/* HAPUS shape pink/secondary di belakang foto */}
            {/* <div className="absolute w-[80%] h-[90%] bg-primary/80 z-0 shadow-xl" style={{ borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%", transform: "rotate(-4deg) skewY(4deg)" }} aria-hidden="true"></div>
            <div className="absolute w-[75%] h-[80%] bg-secondary/80 z-0 shadow-xl" style={{ borderRadius: "60% 40% 60% 45% / 45% 60% 40% 55%", transform: "rotate(-8deg) skewY(-3deg)" }} aria-hidden="true"></div> */}
            <PhotoWithBackground
              imageSrc="/lovable-uploads/foto-diana.jpg"
              imageAlt="Siti Mardiana"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
