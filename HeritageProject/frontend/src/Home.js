import React from "react";
import { Landmark, Waves, TreePine } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function App() {
  const heritageData = {
    temples: [
      {
        name: "Brihadeeswarar Temple",
        location: "Thanjavur",
        description:
          "UNESCO World Heritage site, built by Raja Raja Chola I, exemplifies Dravidian architecture.",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipPFHu6-rRv77GnsYHo-fUIjcspJXKO9OFuxthD9=s1360-w1360-h1020",
      },
      {
        name: "Meenakshi Amman Temple",
        location: "Madurai",
        description:
          "Historic Hindu temple with 14 magnificent gopurams and intricate sculptures.",
        image:
          "https://mapacademy.io/wp-content/uploads/2022/06/meenakshi-temple-madurai-exterior-view-thumbnail.jpg",
      },
    ],
    beaches: [
      {
        name: "Marina Beach",
        location: "Chennai",
        description:
          "Second longest urban beach in the world, stretching 13km along the Bay of Bengal.",
        image:
          "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSeG4NqIo8q7MDXYg5f-3dkL0F_KX94DmoEvxTpl5FYcwH8PZWQozP8tGwaqggh3wLcTklEcUDh-S-d6TeFKNvCzA7jt4F4D8o7_PGjLA",
      },
      {
        name: "Mahabalipuram Beach",
        location: "Mahabalipuram",
        description:
          "Historic beach near ancient Shore Temple, perfect for surfing and historical exploration.",
        image:
          "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/21/5468bcb2a5a0902e29b3b0fd29e0a9d1_1000x1000.jpg",
      },
    ],
    landmarks: [
      {
        name: "Nilgiri Mountain Railway",
        location: "Ooty",
        description:
          "UNESCO Heritage railway through picturesque mountains and tea plantations.",
        image:
          "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?auto=format&fit=crop&q=80&w=1000",
      },
      {
        name: "Chettinad Palace",
        location: "Karaikudi",
        description:
          "Magnificent mansion showcasing traditional Tamil architecture and lifestyle.",
        image:
          "https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&q=80&w=1000",
      },
    ],
  };

  return (
    <div className="container-fluid p-0">
      <header className="hero-section text-white text-center py-5 position-relative overflow-hidden">
        {/* Background image with blur and overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-cover no-repeat"
          style={{
            backgroundImage:
              'url("https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQbtQKZ2KERdPJnbgfxDJLBDxRn5-7l-m1jBLBHMt0ZcD-cPsx28Tpi8V2MLkX9p3Mzlt1Id01bs6lmFsCJEYWNyKxw1KwkYB_LPM2ttGQ")',
            filter: "blur(3px)",
            opacity: "1",
            zIndex: "-1",
          }}
        ></div>

        {/* Content */}
        <div className="position-relative">
          <h1 className="display-2 fw-bold">Tamil Nadu Heritage</h1>
          <p className="lead">
            Discover the Rich Cultural Legacy of South India
          </p>
        </div>
      </header>

      <div className="container py-5">
        <section className="mb-5">
          <div className="section-header d-flex align-items-center mb-4">
            <Landmark size={32} className="me-3" />
            <h2 className="h1 mb-0">Ancient Temples</h2>
          </div>
          <div className="row">
            {heritageData.temples.map((temple, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card heritage-card h-100">
                  <img
                    src={temple.image}
                    className="card-img-top"
                    alt={temple.name}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{temple.name}</h3>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {temple.location}
                    </h6>
                    <p className="card-text">{temple.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <div className="section-header d-flex align-items-center mb-4">
            <Waves size={32} className="me-3" />
            <h2 className="h1 mb-0">Beautiful Beaches</h2>
          </div>
          <div className="row">
            {heritageData.beaches.map((beach, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card heritage-card h-100">
                  <img
                    src={beach.image}
                    className="card-img-top"
                    alt={beach.name}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{beach.name}</h3>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {beach.location}
                    </h6>
                    <p className="card-text">{beach.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <div className="section-header d-flex align-items-center mb-4">
            <TreePine size={32} className="me-3" />
            <h2 className="h1 mb-0">Historic Landmarks</h2>
          </div>
          <div className="row">
            {heritageData.landmarks.map((landmark, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card heritage-card h-100">
                  <img
                    src={landmark.image}
                    className="card-img-top"
                    alt={landmark.name}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{landmark.name}</h3>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {landmark.location}
                    </h6>
                    <p className="card-text">{landmark.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-0">
          © 2025 Tamil Nadu Heritage Guide. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
