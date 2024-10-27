import React from 'react';
import { Users, Clock, MessageSquare, FileCode, Award } from 'lucide-react';

function Dashboard() {
  return (
    <div className="pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Team Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-purple-400">Team Code Crusaders</span>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
              Edit Team
            </button>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatusCard
            icon={<Clock className="w-6 h-6" />}
            title="Time Remaining"
            value="32:15:45"
          />
          <StatusCard
            icon={<Users className="w-6 h-6" />}
            title="Team Members"
            value="4/4"
          />
          <StatusCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Mentor Sessions"
            value="2 Scheduled"
          />
          <StatusCard
            icon={<Award className="w-6 h-6" />}
            title="Current Rank"
            value="#5"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Title</label>
                  <input
                    type="text"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2"
                    value="AI-Powered Financial Assistant"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Track</label>
                  <div className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2">
                    FinTech
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 h-32"
                    value="An AI-powered financial assistant that helps users manage their investments and make informed decisions using machine learning algorithms."
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Timeline</h2>
              <div className="space-y-4">
                <TimelineItem
                  time="9:00 AM"
                  title="Opening Ceremony"
                  status="completed"
                />
                <TimelineItem
                  time="10:30 AM"
                  title="Team Formation"
                  status="completed"
                />
                <TimelineItem
                  time="2:00 PM"
                  title="Mentor Session"
                  status="upcoming"
                />
                <TimelineItem
                  time="6:00 PM"
                  title="Progress Check"
                  status="upcoming"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team Members */}
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Team Members</h2>
              <div className="space-y-4">
                <TeamMember
                  name="John Doe"
                  role="Team Leader"
                  college="CBIT"
                />
                <TeamMember
                  name="Jane Smith"
                  role="Developer"
                  college="CBIT"
                />
                <TeamMember
                  name="Mike Johnson"
                  role="Developer"
                  college="VIT"
                />
                <TeamMember
                  name="Sarah Williams"
                  role="Designer"
                  college="BITS Pilani"
                />
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
              <div className="space-y-4">
                <SessionCard
                  time="2:00 PM"
                  title="Technical Mentoring"
                  mentor="Dr. Alex Kumar"
                />
                <SessionCard
                  time="4:30 PM"
                  title="Design Review"
                  mentor="Prof. Sarah Chen"
                />
              </div>
            </div>

            {/* Resources */}
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Resources</h2>
              <div className="space-y-2">
                <ResourceLink
                  title="API Documentation"
                  icon={<FileCode className="w-5 h-5" />}
                />
                <ResourceLink
                  title="Design Assets"
                  icon={<FileCode className="w-5 h-5" />}
                />
                <ResourceLink
                  title="Technical Guide"
                  icon={<FileCode className="w-5 h-5" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusCard({ icon, title, value }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="text-purple-400">{icon}</div>
        <div>
          <h3 className="text-sm text-gray-400">{title}</h3>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ time, title, status }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-24 text-sm text-purple-400">{time}</div>
      <div>
        <div className="font-medium">{title}</div>
        <span className={`text-sm ${
          status === 'completed' ? 'text-green-400' : 'text-yellow-400'
        }`}>
          {status === 'completed' ? 'Completed' : 'Upcoming'}
        </span>
      </div>
    </div>
  );
}

function TeamMember({ name, role, college }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
        {name.charAt(0)}
      </div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-400">{role} • {college}</div>
      </div>
    </div>
  );
}

function SessionCard({ time, title, mentor }) {
  return (
    <div className="bg-gray-900/50 p-4 rounded-lg">
      <div className="text-sm text-purple-400 mb-1">{time}</div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-400">with {mentor}</div>
    </div>
  );
}

function ResourceLink({ title, icon }) {
  return (
    <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-colors">
      {icon}
      <span>{title}</span>
    </a>
  );
}

export default Dashboard;