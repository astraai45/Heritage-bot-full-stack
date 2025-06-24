import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const heritageData = [
  {
    id: 1,
    name: "Thanjavur Big Temple",
    location: "Thanjavur",
    period: "1003-1010 CE",
    description:
      "The Brihadeeswara Temple, also known as the Big Temple, is a Hindu temple dedicated to Shiva located in Thanjavur, Tamil Nadu. Built by Raja Raja Chola I, it is one of the largest temples in India and is an outstanding example of Dravidian architecture.",
    imageUrl:
      "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/brihadeeswara-temple-1654591433_5e18b8c7054859aab394.webp",
    videoId: "https://www.youtube.com/embed/BgJ6oS6oCtI?si=GTswEsK_JUs9chuY",
    highlights: [
      "UNESCO World Heritage Site",
      "Built entirely of granite",
      "The temple's vimana is 216 feet high",
      "Houses one of the largest Shiva lingams in India",
    ],
    history: `The Brihadeeswara Temple was built in 1010 CE by Raja Raja Chola I in Thanjavur, the capital of the Chola dynasty. The temple, known locally as Thanjai Periya Kovil, and simply as the "Big Temple", turned 1000 years old in 2010.

The temple is part of the UNESCO World Heritage Site known as the "Great Living Chola Temples", along with the Gangaikonda Cholapuram Temple and Airavatesvara temple.

The temple stands amidst fortified walls that were probably added in the 16th century. The vimana (temple tower) is 216 ft (66 m) high and is among the tallest of its kind in the world. The Kumbam (the apex or the bulbous structure on the top) of the temple is carved out of a single stone and weighs around 80 tons.`,
    architecture: `The temple is built entirely of granite, the nearest sources of which are about 60 km to the west of the temple. This is evidence of the excellent planning and engineering skills of the Chola architects who constructed the temple. The temple is one of the largest structures in the world built entirely of granite.

The temple complex is massive and covers an area of about 40,000 square meters. The main temple is in the center of a spacious quadrangle composed of a sanctuary, a Nandi, a pillared hall, an assembly hall (mandapam), and many sub-shrines.`,
    faqs: [
      {
        question: "When was the Brihadeeswara Temple built?",
        answer:
          "The temple was built between 1003 and 1010 CE during the reign of Raja Raja Chola I.",
      },
      {
        question: "Why is it called the Big Temple?",
        answer:
          "It's called the Big Temple due to its massive scale and the size of its main tower (vimana), which stands at 216 feet high.",
      },
      {
        question: "What is unique about the temple's construction?",
        answer:
          "The temple is built entirely of granite, with the nearest granite sources being 60km away. The temple's vimana is topped by an 80-ton granite block, making it one of the largest such structures in the world.",
      },
      {
        question: "Is the temple still active for worship?",
        answer:
          "Yes, the temple is still an active place of worship and attracts thousands of devotees and tourists daily.",
      },
    ],
  },
  {
    id: 2,
    name: "Meenakshi Amman Temple",
    location: "Madurai",
    period: "17th century",
    description:
      "The Meenakshi Temple is a historic Hindu temple located in Madurai, Tamil Nadu. The temple is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareswarar, a form of Shiva.",
    imageUrl:
      "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/meenakshi-amman-temple-1656170467_cfebe78d69f069f881aa.webp",
    videoId: "https://www.youtube.com/embed/te52lqxHwzM?si=nEX7hMqyV7dapHIA",
    highlights: [
      "14 magnificent gateway towers",
      "Famous for its sculptured pillars",
      "Houses the sacred golden lotus tank",
      "Attracts over 15,000 visitors daily",
    ],
    history: `The Meenakshi Amman Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai, Tamil Nadu. The temple forms the heart and lifeline of the 2,500-year-old city of Madurai.

The temple was almost completely destroyed in the year 1310 following the invasion of the Islamic conqueror Malik Kafur. Most of the present structure was built during the reign of Thirumalai Nayak (1623–1655). He took considerable interest in erecting many complexes inside the temple.

According to legend, the temple was founded by Indra (king of Deva celestial deities) who built a shrine to house an ancient lingam. Madurai was built around this temple in the form of a lotus.`,
    architecture: `The temple complex is a massive structure measuring 254 by 237 meters. The temple is surrounded by 14 gopurams (gateway towers), ranging from 45–50 meters in height. The tallest is the southern tower, rising to 51.9 meters.

The temple complex houses 14 magnificent towers, including two golden sculptured towers (vimanas) for the main deities. The temple has an estimated 33,000 sculptures. The temple's Hall of Thousand Pillars (actually 985 pillars) is a sculptural marvel, known for its fascinating play of light and shadow.`,
    faqs: [
      {
        question: "Who is Meenakshi?",
        answer:
          "Meenakshi is a form of the goddess Parvati and is considered an avatar of the goddess Lakshmi. She is the divine consort of Sundareswarar (Shiva).",
      },
      {
        question: "How many towers does the temple have?",
        answer:
          "The temple has 14 gopurams (gateway towers), with the tallest southern tower rising to 51.9 meters.",
      },
      {
        question: "What is special about the Hall of Thousand Pillars?",
        answer:
          "The hall actually contains 985 pillars, each carved with unique sculptures. It's known for its architectural brilliance and the play of light and shadows.",
      },
      {
        question: "When was the temple rebuilt?",
        answer:
          "Most of the present structure was built during the reign of Thirumalai Nayak (1623-1655) after its destruction in 1310 by Malik Kafur.",
      },
    ],
  },
  {
    id: 3,
    name: "Shore Temple",
    location: "Mahabalipuram",
    period: "Early 8th century CE",
    description:
      "The Shore Temple is a complex of temples and shrines built in the 8th century CE under the reign of Narasimhavarman II. It's one of the oldest structural stone temples of South India.",
    imageUrl:
      "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/mamallapuram-shore-temple-1653384258_d88d3d01bc1bbf48db9b.webp",
    videoId: "https://www.youtube.com/embed/ld8hrCI_sdE?si=JDBuslKGUcopOdCx",
    highlights: [
      "UNESCO World Heritage Site",
      "Oldest structural stone temple in South India",
      "Unique blend of architecture and sculpture",
      "Remarkable granite work",
    ],
    history: `The Shore Temple was built between 700-728 AD during the reign of Narasimhavarman II (Rajasimha). It's one of the oldest structural (versus rock-cut) stone temples of South India and represents the final phase of Pallava art.

The temple was a part of the Seven Pagodas of Mahabalipuram, as described by European travelers. According to local legends, six other temples once stood alongside the Shore Temple. These are now believed to be submerged under the sea.

The temple has survived the Indian Ocean tsunami of 2004, which actually revealed some submerged remains of ancient structures near the shore.`,
    architecture: `The Shore Temple complex consists of three temples, two dedicated to Shiva and one to Vishnu. The main shrine is dedicated to Shiva and faces east to catch the rising sun.

The temples are a combination of three shrines. The main shrine and one of the other shrines are dedicated to Shiva, while a small temple between them is dedicated to Vishnu. The main shrine has a 16-sided Shiva lingam.

The temple complex is enclosed by a compound wall with sculptures of Nandi bulls. The temples have been carved from local granite and represent some of the earliest known examples of Dravidian architecture in stone.`,
    faqs: [
      {
        question: "Why is it called the Shore Temple?",
        answer:
          "It's called the Shore Temple because of its location on the shores of the Bay of Bengal. It was designed to catch the first rays of the rising sun.",
      },
      {
        question: "What happened to the other six temples?",
        answer:
          "According to legends, six other temples once stood alongside the Shore Temple. They are believed to be submerged under the sea, though this hasn't been fully verified.",
      },
      {
        question: "How did the temple survive the 2004 tsunami?",
        answer:
          "The temple's sturdy construction and its granite foundation helped it withstand the tsunami. The event actually revealed some previously unknown structures near the shore.",
      },
      {
        question: "What style of architecture does it represent?",
        answer:
          "The Shore Temple represents the final phase of Pallava architecture and is one of the earliest examples of stone-built structural temples in South India.",
      },
    ],
  },
];

const HeritagePlaces = () => {
  const [expandedFAQs, setExpandedFAQs] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleFAQ = (placeId: number, faqIndex: number) => {
    const key = `${placeId}-${faqIndex}`;
    setExpandedFAQs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Heritage Places of Tamil Nadu
        </motion.h1>

        <div className="space-y-16">
          {heritageData.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {place.name}
                  </h2>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-semibold">Location:</span>{" "}
                      {place.location}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Period:</span>{" "}
                      {place.period}
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {place.description}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Key Highlights
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {place.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-center space-x-2 text-gray-700"
                        >
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <img
                    src={place.imageUrl}
                    alt={place.name}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <div className="aspect-video">
                    <iframe
                      width="580px"
                      height="280px"
                      src={place.videoId}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* History and Architecture Section */}
              <div className="px-8 pb-8 space-y-6">
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    History
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {place.history}
                  </p>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Architecture
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {place.architecture}
                  </p>
                </div>

                {/* FAQs Section */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {place.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(place.id, index)}
                          className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                        >
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          {expandedFAQs[`${place.id}-${index}`] ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        {expandedFAQs[`${place.id}-${index}`] && (
                          <div className="px-6 py-4 bg-gray-50">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeritagePlaces;
