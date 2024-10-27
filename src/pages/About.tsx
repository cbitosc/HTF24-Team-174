import React from 'react';
import { School, Users, Trophy, Globe } from 'lucide-react';

function About() {
  return (
    <div className="pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Tech Innovators 2024</h1>
        
        <div className="space-y-12">
          {/* Overview */}
          <section className="bg-gray-800/50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              Tech Innovators 2024 is CBIT's flagship hackathon that brings together the brightest minds
              from across India. This hybrid event combines the best of both worlds - the energy of
              on-site collaboration and the accessibility of virtual participation.
            </p>
          </section>

          {/* Mission */}
          <section className="bg-gray-800/50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              To foster innovation, encourage collaboration, and provide a platform for students to
              showcase their technical prowess while solving real-world problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Global Impact</h3>
                  <p className="text-gray-400">Create solutions that can make a difference worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Collaboration</h3>
                  <p className="text-gray-400">Connect with like-minded innovators and mentors</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Participate */}
          <section className="bg-gray-800/50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Why Participate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Amazing Prizes</h3>
                    <p className="text-gray-400">Win from a prize pool worth ₹2,00,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <School className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Learning Experience</h3>
                    <p className="text-gray-400">Gain practical experience and industry exposure</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Networking</h3>
                    <p className="text-gray-400">Connect with industry experts and fellow innovators</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Recognition</h3>
                    <p className="text-gray-400">Showcase your skills on a national platform</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;