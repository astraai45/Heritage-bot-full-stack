import React from "react";
import { Link } from "react-router-dom";
import { Landmark, MessageSquare, Mic, ChevronDown } from "lucide-react";

const LandingPage = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById("features");
    contentSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=2000"
            alt="Meenakshi Temple Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-purple-100/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-indigo-900 mb-8 leading-tight">
            Discover the Timeless Beauty of
            <span className="block bg-gradient-to-r from-indigo-700 to-purple-900 bg-clip-text text-transparent">
              Tamil Nadu's Heritage
            </span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-800 max-w-2xl mx-auto mb-12 leading-relaxed">
            Embark on a journey through centuries of architectural marvels,
            cultural treasures, and spiritual sanctuaries that define Tamil
            Nadu's rich historical legacy.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <FeatureCard
              icon={<Landmark className="h-12 w-12" />}
              title="Heritage Places"
              description="Journey through time as you explore our curated collection of historical landmarks and their fascinating stories."
              link="/heritage"
              buttonText="Explore Places"
            />
            <FeatureCard
              icon={<MessageSquare className="h-12 w-12" />}
              title="Ask Questions"
              description="Curious about our heritage? Get instant answers to your questions about Tamil Nadu's magnificent historical sites."
              link="/question"
              buttonText="Ask Now"
            />
            <FeatureCard
              icon={<Mic className="h-12 w-12" />}
              title="Voice Interaction"
              description="Experience hands-free exploration with our voice-guided tours and interactive learning features."
              link="/audio"
              buttonText="Start Speaking"
            />
          </div>

          {/* Featured Places */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12">
              Featured Heritage Sites
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <FeaturedPlace
                image="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/brihadeeswara-temple-1654591433_5e18b8c7054859aab394.webp"
                title="Thanjavur Big Temple"
                description="A masterpiece of Dravidian architecture, this UNESCO World Heritage site stands as a testament to the Chola dynasty's architectural prowess."
              />
              <FeaturedPlace
                image="https://upload.wikimedia.org/wikipedia/commons/7/74/Shore_Temple_-Mamallapuram_-Tamil_Nadu_-N-TN-C55.jpg"
                title="Shore Temple, Mahabalipuram"
                description="This ancient structural temple on the shores of the Bay of Bengal is a fine example of Pallava architecture and maritime heritage."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  link,
  buttonText,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}) => (
  <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
    <div className="text-indigo-600 mb-6">{icon}</div>
    <h2 className="text-2xl font-semibold text-indigo-900 mb-4">{title}</h2>
    <p className="text-indigo-700 mb-6">{description}</p>
    <Link
      to={link}
      className="inline-block w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-center font-medium shadow-md hover:shadow-lg"
    >
      {buttonText}
    </Link>
  </div>
);

const FeaturedPlace = ({
  image,
  title,
  description,
}: {
  image: any;
  title: string;
  description: string;
}) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg">
    <img
      src={image}
      alt={title}
      className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-purple-100">{description}</p>
    </div>
  </div>
);

export default LandingPage;
