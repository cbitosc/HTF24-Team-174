import React from 'react';
import { Calendar, MapPin, Trophy, Users, Monitor, Rocket } from 'lucide-react';

const EventDetails = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/50" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Event Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <DetailCard
              icon={<Calendar className="w-6 h-6 text-purple-400" />}
              title="Schedule"
              description="Three action-packed days of innovation and coding"
            >
              <Timeline />
            </DetailCard>
            
            <DetailCard
              icon={<Trophy className="w-6 h-6 text-purple-400" />}
              title="Prizes"
              description="Total prize pool worth ₹2,00,000"
            >
              <PrizeList />
            </DetailCard>
          </div>

          <div className="space-y-6">
            <DetailCard
              icon={<Users className="w-6 h-6 text-purple-400" />}
              title="Team Formation"
              description="Form teams of 2-4 members"
            >
              <TeamInfo />
            </DetailCard>

            <DetailCard
              icon={<Monitor className="w-6 h-6 text-purple-400" />}
              title="Hybrid Format"
              description="Choose between on-site and virtual participation"
            >
              <ParticipationInfo />
            </DetailCard>
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailCard = ({ icon, title, description, children }) => (
  <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
    {children}
  </div>
);

const Timeline = () => (
  <div className="space-y-4">
    <TimelineItem
      date="Day 1 - Nov 5"
      title="Opening Ceremony & Team Formation"
      time="9:00 AM - 6:00 PM"
    />
    <TimelineItem
      date="Day 2 - Nov 6"
      title="Development & Mentoring"
      time="9:00 AM - 8:00 PM"
    />
    <TimelineItem
      date="Day 3 - Nov 7"
      title="Final Presentations & Awards"
      time="9:00 AM - 5:00 PM"
    />
  </div>
);

const TimelineItem = ({ date, title, time }) => (
  <div className="flex gap-4">
    <div className="w-24 text-purple-400 font-medium">{date}</div>
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-400">{time}</div>
    </div>
  </div>
);

const PrizeList = () => (
  <div className="space-y-4">
    <PrizeItem place="1st Place" amount="₹1,00,000" />
    <PrizeItem place="2nd Place" amount="₹60,000" />
    <PrizeItem place="3rd Place" amount="₹40,000" />
  </div>
);

const PrizeItem = ({ place, amount }) => (
  <div className="flex justify-between items-center">
    <span className="font-medium">{place}</span>
    <span className="text-purple-400">{amount}</span>
  </div>
);

const TeamInfo = () => (
  <ul className="list-disc list-inside space-y-2 text-gray-300">
    <li>Minimum 2 and maximum 4 members per team</li>
    <li>Cross-college teams are allowed</li>
    <li>Individual registrations will be helped with team formation</li>
    <li>At least one team member must be from an engineering background</li>
  </ul>
);

const ParticipationInfo = () => (
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-2">On-site Participation</h4>
      <p className="text-gray-300">
        Join us at CBIT campus for an immersive experience with direct mentoring
        and networking opportunities.
      </p>
    </div>
    <div>
      <h4 className="font-medium mb-2">Virtual Participation</h4>
      <p className="text-gray-300">
        Participate remotely through our virtual platform with live streaming
        and online mentoring sessions.
      </p>
    </div>
  </div>
);

export default EventDetails;