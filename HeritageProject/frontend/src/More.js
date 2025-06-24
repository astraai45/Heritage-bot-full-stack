import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Accordion,
  Tab,
  Tabs,
  ListGroup,
  Badge,
} from "react-bootstrap";

const TamilNaduHeritage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Tamil Nadu Heritage Wonders</h1>
      <p className="lead text-center mb-5">
        Explore the rich cultural tapestry of one of India's oldest
        civilizations
      </p>

      {/* Carousel Section */}
      <Carousel className="mb-5">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/p/AF1QipN-uAlSTSIP0sWjeqeVte2mxjfr1b9Juj9kW44_=s1360-w1360-h1020"
            alt="Brihadeeswarar Temple"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-75 rounded">
            <h3>Brihadeeswarar Temple, Thanjavur</h3>
            <p>
              Built in 1010 AD by Rajaraja Chola I, this UNESCO World Heritage
              Site features the world's first complete granite temple and
              tallest vimana (temple tower).
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/p/AF1QipMGXmEll38gbeR3hr9ZjcZzot3nyHDbO7BZWaY3=s1360-w1360-h1020"
            alt="Shore Temple"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-75 rounded">
            <h3>Shore Temple, Mahabalipuram</h3>
            <p>
              Built during the 8th century by Pallava king Narasimhavarman II,
              this structural temple is one of the oldest in South India and
              part of the Group of Monuments at Mahabalipuram.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/p/AF1QipNnOrJR4lHYYPwn43lTI630jxkKLMsX-j929brI=s1360-w1360-h1020"
            alt="Meenakshi Temple"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-75 rounded">
            <h3>Meenakshi Temple, Madurai</h3>
            <p>
              Dating back to the 6th century BC (with current structure from
              16th-17th century), this temple complex has 14 gateway towers
              (gopurams), the tallest being 52 meters high, adorned with
              thousands of colorful sculptures.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://media.assettype.com/thenewsminute%2Fimport%2Fsites%2Fdefault%2Ffiles%2FGangaikondacholapuram_1.jpg?w=1024&auto=format%2Ccompress&fit=max"
            alt="Gangaikonda Cholapuram"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-75 rounded">
            <h3>Gangaikonda Cholapuram</h3>
            <p>
              Built by Rajendra Chola I in 1035 AD to commemorate his victory
              over the Gangetic plain, this temple is slightly smaller but more
              refined than the Brihadeeswarar Temple.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://www.daiwikhotels.com/wp-content/uploads/2024/07/newone.jpg"
            alt="Ramanathaswamy Temple"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-75 rounded">
            <h3>Ramanathaswamy Temple, Rameswaram</h3>
            <p>
              One of the twelve Jyotirlinga temples, famous for its magnificent
              corridors (the longest temple corridor in India at 197m) and 22
              sacred wells with water of different tastes and salinity.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Detailed Heritage Information */}
      <Tabs defaultActiveKey="temples" id="heritage-tabs" className="mb-5">
        <Tab eventKey="temples" title="Temples">
          <Row className="mt-4">
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Chola Temples</Card.Title>
                  <Card.Text>
                    The Great Living Chola Temples, built by kings of the Chola
                    Empire, include:
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Brihadisvara Temple, Thanjavur</strong> - Built
                        by Rajaraja I in 1010 AD. The vimana is 66 meters tall.
                        The temple has frescoes from the Chola and Nayak
                        periods.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>
                          Brihadisvara Temple, Gangaikonda Cholapuram
                        </strong>{" "}
                        - Built by Rajendra I in 1035 AD. Features a unique
                        53-meter vimana that curves inward.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Airavatesvara Temple, Darasuram</strong> - Built
                        by Rajaraja II in 1150 AD. Known for its exquisite stone
                        carvings and musical pillars.
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Pallava Architecture</Card.Title>
                  <Card.Text>
                    The Group of Monuments at Mahabalipuram (7th-8th century AD)
                    includes:
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Shore Temple</strong> - Structural temple
                        combining Dravidian and Buddhist elements
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Five Rathas</strong> - Monolithic rock-cut
                        temples shaped like chariots
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Arjuna's Penance</strong> - Giant open-air rock
                        relief (27m × 9m)
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Krishna's Butterball</strong> - Massive
                        balancing rock
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Other Notable Temples</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Meenakshi Amman Temple, Madurai</strong> - 14
                        gopurams, 33,000 sculptures, golden lotus pond
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Nataraja Temple, Chidambaram</strong> -
                        Dedicated to Shiva as the cosmic dancer, with golden
                        roof
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Ekambareswarar Temple, Kanchipuram</strong> -
                        One of the Pancha Bhoota Stalas representing Earth
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Ramanathaswamy Temple, Rameswaram</strong> - 22
                        sacred wells, 1200-meter corridor
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Thiruvannamalai Temple</strong> - One of India's
                        largest temples (10 hectares), famous for Karthigai
                        Deepam festival
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Temple Architecture Features</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Gopurams</strong> - Ornate pyramidal towers at
                        temple entrances
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Vimanas</strong> - Towers over the sanctum
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Mandapas</strong> - Pillared halls for rituals
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Prakarams</strong> - Concentric courtyard
                        enclosures
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Musical Pillars</strong> - Found in many temples
                        like Hampi and Madurai
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Frescoes</strong> - Ancient paintings like those
                        in Thanjavur
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="history" title="Historical Sites">
          <Row className="mt-4">
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Ancient Cities</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Kancheepuram</strong> - One of India's seven
                        sacred cities with 100+ temples, famous for silk sarees
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Madurai</strong> - One of the world's oldest
                        continuously inhabited cities (since 3rd century BCE)
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Thanjavur</strong> - Chola capital, center of
                        art and learning
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Mahabalipuram</strong> - Ancient port city with
                        rock-cut monuments
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Forts & Palaces</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Thanjavur Maratha Palace</strong> - 16th century
                        palace with Saraswathi Mahal Library containing 49,000+
                        ancient manuscripts
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Gingee Fort</strong> - "Troy of the East", one
                        of India's most impregnable forts
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Vellore Fort</strong> - 16th century fort with
                        moat and Jalakanteswarar Temple
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Padmanabhapuram Palace</strong> - Wooden palace
                        showcasing Kerala architecture in Tamil Nadu
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Archaeological Sites</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Keezhadi</strong> - Sangam era urban settlement
                        with advanced drainage systems (6th century BCE - 3rd
                        century CE)
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Adichanallur</strong> - Iron Age burial site
                        (1000 BCE) with urn burials
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Kodumanal</strong> - Ancient trade center known
                        for gemstones and bead making
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Arikamedu</strong> - Roman trade port (2nd
                        century BCE - 8th century CE)
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Colonial Heritage</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Fort St. George, Chennai</strong> - First
                        English fortress in India (1644), now houses legislature
                        and museum
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Tranquebar</strong> - Danish colonial settlement
                        (1620-1845) with fort and churches
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Chepauk Palace</strong> - Indo-Saracenic palace
                        of Nawab of Arcot
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>St. Thomas Basilica</strong> - Built over tomb
                        of St. Thomas the Apostle
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="culture" title="Culture & Arts">
          <Row className="mt-4">
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Performing Arts</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Bharatanatyam</strong> - Classical dance form
                        originating from Tamil Nadu's temples
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Therukoothu</strong> - Traditional street
                        theater
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Karagattam</strong> - Folk dance balancing pots
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Villu Paatu</strong> - Bow-song storytelling
                        tradition
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Nadaswaram & Thavil</strong> - Traditional wind
                        and percussion instruments
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Literature</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Sangam Literature</strong> - 2,300-2,500 year
                        old corpus of Tamil poetry
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Thirukkural</strong> - Ancient ethical treatise
                        by Thiruvalluvar
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Silappadikaram</strong> - 2nd century CE epic
                        poem
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Modern Tamil Literature</strong> - Works of
                        Subramania Bharati, Kalki, Jayakanthan
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Crafts & Textiles</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Kanchipuram Silk</strong> - Luxurious silk
                        sarees with gold zari
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Thanjavur Art Plates</strong> - Metal plates
                        with embossed designs
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Thanjavur Dolls</strong> - Traditional
                        bobblehead dolls
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Chettinad Kottans</strong> - Palm leaf baskets
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Bronze Icons</strong> - Chola-style bronze
                        sculptures using lost-wax technique
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Temple Jewelry</strong> - Gold ornaments
                        inspired by temple sculptures
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Festivals</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Pongal</strong> - Harvest festival in January
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Jallikattu</strong> - Ancient bull-taming sport
                        during Pongal
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Chithirai Festival</strong> - Madurai's
                        reenactment of Meenakshi's wedding
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Natyanjali</strong> - Dance festival at
                        Chidambaram Temple
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Karthigai Deepam</strong> - Festival of lights
                        at Thiruvannamalai
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>
      </Tabs>

      {/* UNESCO Sites Section */}
      <Row className="mb-5">
        <Col>
          <Card className="border-primary">
            <Card.Header className="bg-primary ">
              <h2>UNESCO World Heritage Sites in Tamil Nadu</h2>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h5>
                    <Badge bg="info" className="me-2">
                      1
                    </Badge>
                    Great Living Chola Temples (1987, 2004)
                  </h5>
                  <p>
                    Includes Brihadeeswarar Temple (Thanjavur), Gangaikonda
                    Cholapuram Temple, and Airavatesvara Temple (Darasuram)
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>
                    <Badge bg="info" className="me-2">
                      2
                    </Badge>
                    Group of Monuments at Mahabalipuram (1984)
                  </h5>
                  <p>
                    Shore Temple, Five Rathas, Arjuna's Penance, and other
                    Pallava monuments
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>
                    <Badge bg="info" className="me-2">
                      3
                    </Badge>
                    Nilgiri Mountain Railway (2005)
                  </h5>
                  <p>
                    Part of Mountain Railways of India, 46km meter gauge
                    single-track railway
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>
                    <Badge bg="info" className="me-2">
                      4
                    </Badge>
                    Pampadum Shola National Park (2021)
                  </h5>
                  <p>
                    Part of Western Ghats serial site, one of world's eight
                    "hottest hotspots" of biodiversity
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Timeline Section */}
      <Row className="mb-5">
        <Col>
          <Card>
            <Card.Header className="bg-success ">
              <h2>Tamil Nadu Historical Timeline</h2>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush" numbered>
                <ListGroup.Item>
                  <strong>3000 BCE - 1000 BCE</strong> - Prehistoric period with
                  megalithic burial sites
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>600 BCE - 300 CE</strong> - Sangam Age with three
                  Tamil dynasties (Chera, Chola, Pandya)
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>300 - 900 CE</strong> - Pallava dynasty dominates,
                  develops Dravidian architecture
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>850 - 1279 CE</strong> - Medieval Chola Empire golden
                  age, temple building peak
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>14th - 17th century</strong> - Vijayanagara and Nayak
                  periods, temple expansions
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>17th - 19th century</strong> - Maratha and European
                  colonial influences
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>20th century</strong> - Independence movement, Madras
                  Presidency
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Visitor Information Section */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-warning">
              <h3>Travel Tips</h3>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Best Time to Visit:</strong> October to March (cooler
                  weather)
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Transport:</strong> Well-connected by air (Chennai,
                  Coimbatore, Madurai, Trichy), rail (extensive network), and
                  road (good highways)
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Dress Code:</strong> Modest clothing for temples (no
                  shorts, shoulders covered)
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Temple Timings:</strong> Typically 6AM-12PM and
                  4PM-9PM, but vary by temple
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Festivals:</strong> Plan around major festivals for
                  special experiences but expect crowds
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-info ">
              <h3>Suggested Itineraries</h3>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Temple Trail (7 days):</strong> Chennai →
                  Mahabalipuram → Kanchipuram → Vellore → Thanjavur → Trichy →
                  Madurai
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Heritage Circuit (10 days):</strong> Chennai →
                  Pondicherry → Chidambaram → Gangaikonda Cholapuram → Darasuram
                  → Thanjavur → Trichy → Chettinad → Madurai → Rameswaram
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>UNESCO Special (5 days):</strong> Chennai →
                  Mahabalipuram → Kanchipuram → Thanjavur → Darasuram →
                  Gangaikonda Cholapuram
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Hill Heritage (7 days):</strong> Chennai → Vellore →
                  Yercaud → Coimbatore → Palani → Kodaikanal → Madurai
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Reviews Section */}
      <h2 className="text-center mb-4">Visitor Experiences</h2>
      <Row>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Architectural Marvel</Card.Title>
              <Card.Text>
                "The Brihadeeswarar Temple is a true wonder. The scale of the
                vimana is breathtaking, and the fact that it was built in just 7
                years (1003-1010 AD) without modern technology is mind-blowing.
                Don't miss the massive Nandi statue and the fresco paintings in
                the circumambulatory passage."
              </Card.Text>
              <Card.Footer className="text-muted">
                - Aarti Sharma, Architecture Student
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Coastal Beauty</Card.Title>
              <Card.Text>
                "Shore Temple at sunrise is magical. The way the first rays
                illuminate the stone carvings while waves crash nearby is
                unforgettable. The nearby Pancha Rathas and Arjuna's Penance are
                equally impressive - the level of detail in these 8th century
                rock carvings rivals Michelangelo's work centuries later."
              </Card.Text>
              <Card.Footer className="text-muted">
                - Rahul Verma, Photographer
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Cultural Immersion</Card.Title>
              <Card.Text>
                "Attending the Meenakshi Temple evening ceremony was the
                highlight of our South India trip. The procession of deities,
                chanting of vedas, and the sea of devotees created an incredibly
                powerful atmosphere. The temple's hall of 985 carved pillars
                (each unique) is another must-see."
              </Card.Text>
              <Card.Footer className="text-muted">
                - Sneha Kapoor, Cultural Anthropologist
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* FAQs Section */}
      <h2 className="text-center my-4">Frequently Asked Questions</h2>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What is special about Tamil Nadu's temple architecture?
          </Accordion.Header>
          <Accordion.Body>
            Tamil Nadu's Dravidian temple architecture is characterized by:
            <ul>
              <li>Pyramidal towers (gopurams) covered with sculptures</li>
              <li>Vimanas (towers over sanctum)</li>
              <li>Mandapas (pillared halls)</li>
              <li>Prakarams (concentric courtyard enclosures)</li>
              <li>Intricate stone carvings depicting mythology</li>
              <li>Use of granite as primary building material</li>
              <li>
                Advanced engineering (like the shadow-disappearing feature at
                Brihadeeswarar Temple)
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How many UNESCO World Heritage Sites are in Tamil Nadu?
          </Accordion.Header>
          <Accordion.Body>
            Tamil Nadu has 5 UNESCO World Heritage Sites:
            <ol>
              <li>Great Living Chola Temples (3 temples as one site)</li>
              <li>Group of Monuments at Mahabalipuram</li>
              <li>Nilgiri Mountain Railway</li>
              <li>Pampadum Shola National Park (part of Western Ghats)</li>
              <li>Serial nomination of Chettinad villages (proposed)</li>
            </ol>
            Additionally, Tamil Nadu has 12 sites on India's tentative list for
            UNESCO nomination.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What are some lesser-known heritage sites in Tamil Nadu?
          </Accordion.Header>
          <Accordion.Body>
            Beyond the famous temples, consider visiting:
            <ul>
              <li>
                <strong>Karangadu</strong> - Ancient port city ruins
              </li>
              <li>
                <strong>Sittanavasal</strong> - Jain cave temples with frescoes
              </li>
              <li>
                <strong>Kudumiyanmalai</strong> - 7th century musical
                inscription cave
              </li>
              <li>
                <strong>Thirumayam</strong> - Rock-cut temples similar to
                Mahabalipuram
              </li>
              <li>
                <strong>Chettinad Mansions</strong> - 19th century merchant
                homes with Burmese teak and Italian marble
              </li>
              <li>
                <strong>Vellore Fort's Jalakanteswarar Temple</strong> -
                Excellent example of Vijayanagara architecture
              </li>
              <li>
                <strong>Poompuhar</strong> - Ancient Chola port city mentioned
                in Silappadikaram
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What is the historical significance of Tamil Nadu?
          </Accordion.Header>
          <Accordion.Body>
            Tamil Nadu has been continuously inhabited since prehistoric times
            and has played a crucial role in Indian history:
            <ul>
              <li>
                One of the world's oldest living civilizations (Tamil culture
                dates back over 2,000 years)
              </li>
              <li>
                Home to India's oldest extant literature (Sangam texts from 300
                BCE)
              </li>
              <li>
                The Chola Empire (9th-13th century) was one of Asia's most
                powerful maritime empires
              </li>
              <li>
                Major center for trade with Rome, Greece, China, and Southeast
                Asia
              </li>
              <li>
                Preserved ancient Hindu traditions while also being home to
                early Christianity (St. Thomas) and Jainism
              </li>
              <li>
                Played key role in Indian independence movement (Madras
                Presidency was an administrative hub)
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            What are the best museums for Tamil Nadu heritage?
          </Accordion.Header>
          <Accordion.Body>
            Top museums to understand Tamil Nadu's heritage:
            <ul>
              <li>
                <strong>Government Museum, Chennai</strong> - Excellent
                collection of Chola bronzes and Pallava sculptures
              </li>
              <li>
                <strong>Saraswathi Mahal Library, Thanjavur</strong> - Rare
                manuscripts and Chola-era documents
              </li>
              <li>
                <strong>Poompuhar Emporium, Chennai</strong> - Showcases
                traditional Tamil crafts
              </li>
              <li>
                <strong>Kalakendra Museum, Madurai</strong> - Focus on temple
                art and architecture
              </li>
              <li>
                <strong>Chettinad Museum, Karaikudi</strong> - Documents the
                Nagarathar community's heritage
              </li>
              <li>
                <strong>Fort Museum, Chennai</strong> - Colonial history in Fort
                St. George
              </li>
              <li>
                <strong>Mahabalipuram Sculpture Museum</strong> - Models and
                explanations of the monuments
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Footer */}
      <footer className="text-center mt-5 py-4">
        <Row>
          <Col md={4}>
            <h5>Contact</h5>
            <p>
              Tamil Nadu Tourism Development Corporation
              <br />
              Wallajah Road, Chennai - 600002
              <br />
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <p>
              <a
                href="https://www.tamilnadutourism.tn.gov.in/"
                target="_blank"
                className=""
              >
                Tamil Nadu Tourism
              </a>
              <br />
              <a href="https://asi.nic.in/" target="_blank" className="">
                Archaeological Survey of India
              </a>
              <br />
              <a href="https://www.unesco.org/en" target="_blank" className="">
                UNESCO World Heritage
              </a>
            </p>
          </Col>
          <Col md={4}>
            <h5>Plan Your Visit</h5>
            <p>
              <a
                href="https://ttdconline.com/tour.jsp"
                target="_blank"
                className=""
              >
                Tour Packages
              </a>
              <br />
              <a
                href="https://www.madrasinherited.in/heritage-walks?srsltid=AfmBOoo21_h5m_J4xXFEuqCODffXGWiWMpsTI0FTVNAZoieJD9VgLhW1"
                target="_blank"
                className=""
              >
                Heritage Walks
              </a>
              <br />
              <a
                href="https://www.drikpanchang.com/tamil/tamil-calendar.html"
                target="_blank"
                className=""
              >
                Festival Calendar
              </a>
            </p>
          </Col>
        </Row>
        <p className="mt-3">
          © 2025 Tamil Nadu Heritage Guide | Explore 2,000+ Years of Cultural
          Legacy
        </p>
      </footer>
    </Container>
  );
};

export default TamilNaduHeritage;
