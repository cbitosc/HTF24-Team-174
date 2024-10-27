import React from 'react';
import { Timer, MapPin, Users, Award, Calendar, Monitor, IndianRupee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import EventDetails from '../components/EventDetails';
import Leaderboard from '../components/Leaderboard';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Tech Innovators 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            National Level Hybrid Hackathon | CBIT
          </p>
          <CountdownTimer targetDate="2024-11-05T09:00:00" />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/register" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all">
              Register Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/learn-more" className="border border-purple-600 hover:bg-purple-600/10 text-white px-8 py-3 rounded-lg transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Calendar className="w-8 h-8 text-purple-400" />}
            title="November 5-7, 2024"
            description="Three days of innovation, collaboration, and breakthrough solutions"
          />
          <FeatureCard
            icon={<MapPin className="w-8 h-8 text-purple-400" />}
            title="Hybrid Event"
            description="Participate on-site at CBIT or join virtually from anywhere"
          />
          <FeatureCard
            icon={<IndianRupee className="w-8 h-8 text-purple-400" />}
            title="₹500 Registration"
            description="Per team registration fee with amazing prizes worth ₹2,00,000"
          />
        </div>
      </section>

      <EventDetails />
      <Leaderboard />
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default Home;