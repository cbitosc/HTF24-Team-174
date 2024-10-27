import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Target, Users, Lightbulb, Award } from 'lucide-react';

function LearnMore() {
  return (
    <div className="pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Everything You Need to Know</h1>

        {/* Tracks Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Hackathon Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TrackCard
              icon={<Code />}
              title="Web3 & Blockchain"
              description="Build decentralized applications and explore blockchain solutions"
            />
            <TrackCard
              icon={<Lightbulb />}
              title="AI/ML"
              description="Develop intelligent solutions using machine learning and AI"
            />
            <TrackCard
              icon={<Target />}
              title="FinTech"
              description="Create innovative solutions for financial technology"
            />
            <TrackCard
              icon={<Users />}
              title="Social Impact"
              description="Solve real-world problems affecting communities"
            />
          </div>
        </section>

        {/* Resources Section */}
        <section className="bg-gray-800/50 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-semibold mb-6">Resources & Support</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="font-medium mb-2">Documentation & APIs</h3>
                <p className="text-gray-300">
                  Access to premium APIs, development tools, and comprehensive documentation
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="font-medium mb-2">Mentorship</h3>
                <p className="text-gray-300">
                  One-on-one mentoring sessions with industry experts and technical advisors
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="font-medium mb-2">Workshops</h3>
                <p className="text-gray-300">
                  Skill-building workshops and technical sessions throughout the event
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FaqItem
              question="What should I bring?"
              answer="Laptop, charger, and any other devices you need. For on-site participants, we'll provide food and refreshments."
            />
            <FaqItem
              question="Do I need a team?"
              answer="You can register individually or with a team. We'll help solo participants find team members during the team formation session."
            />
            <FaqItem
              question="What's the judging criteria?"
              answer="Projects will be judged on innovation, technical complexity, practical implementation, and presentation."
            />
            <FaqItem
              question="Is there a code of conduct?"
              answer="Yes, all participants must follow our code of conduct ensuring a respectful and inclusive environment."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-4">Ready to Join?</h2>
          <p className="text-gray-300 mb-8">
            Don't miss out on this opportunity to showcase your skills and win amazing prizes!
          </p>
          <Link
            to="/register"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg inline-block transition-colors"
          >
            Register Now
          </Link>
        </section>
      </div>
    </div>
  );
}

function TrackCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20">
      <div className="text-purple-400 mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function FaqItem({ question, answer }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl">
      <h3 className="font-medium mb-2">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </div>
  );
}

export default LearnMore;