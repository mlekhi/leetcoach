import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles
import { Carousel } from 'react-responsive-carousel';

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to LeetCoach</h1>
        <p>
          LeetCoach is an AI-driven technical interviewer designed to assess not only your coding skills, but also your communication.
        </p>
        <p>
          Practice your coding interviews with real-time feedback on how you explain your solutions. Perfect your answers and ace your next technical interview!
        </p>
        <a
          className="App-link"
          href="/start"
        >
          Start Your First Interview
        </a>

        {/* Carousel */}
        <div className="feature-carousel">
          <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
            <div>
              <img src="https://via.placeholder.com/800x400.png?text=Real-Time+Feedback" alt="Real-Time Feedback" />
              <p className="legend">Real-Time Feedback on Communication</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400.png?text=Comprehensive+Reports" alt="Comprehensive Reports" />
              <p className="legend">Comprehensive Interview Reports</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400.png?text=AI+Interview+Practice" alt="AI Interview Practice" />
              <p className="legend">AI-Powered Interview Practice</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400.png?text=Communication+Assessment" alt="Communication Assessment" />
              <p className="legend">Detailed Communication Skill Assessment</p>
            </div>
          </Carousel>
        </div>
      </header>
    </div>
  );
}

export default Landing;