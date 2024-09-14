import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles
import Carousel from '../components/Carousel/CarouselWrapper';

function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center py-8 px-4">
      <header className="w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gradient mb-4">
          LeetCoach
        </h1>
        <p className="text-lg text-gray-400 mb-4">
          LeetCoach is an AI-driven technical interviewer designed to assess not only your coding skills, but also your communication.
        </p>
        <p className="text-lg text-gray-400 mb-6">
          Practice your coding interviews with real-time feedback on how you explain your solutions. Perfect your answers and ace your next technical interview!
        </p>
        <a
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out shadow-neon-blue hover:shadow-neon-purple hover:scale-105"
          href="/main"
        >
          Start Your First Interview
        </a>

        <div className="mt-8">
          <Carousel />
        </div>
      </header>
    </div>
  );
}

export default Landing;
