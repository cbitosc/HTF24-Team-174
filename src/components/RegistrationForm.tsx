import React, { useState } from 'react';
import { Users, Mail, Phone, School, Code } from 'lucide-react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    participationType: 'onsite',
    teamSize: '2',
    members: Array(2).fill({ name: '', email: '', phone: '', college: '' }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const updateMemberData = (index, field, value) => {
    const newMembers = [...formData.members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData({ ...formData, members: newMembers });
  };

  const updateTeamSize = (size) => {
    const newSize = parseInt(size);
    let newMembers = [...formData.members];
    if (newSize > formData.members.length) {
      newMembers = [...newMembers, ...Array(newSize - formData.members.length).fill({ name: '', email: '', phone: '', college: '' })];
    } else {
      newMembers = newMembers.slice(0, newSize);
    }
    setFormData({ ...formData, teamSize: size, members: newMembers });
  };

  return (
    <section className="py-20 px-4 bg-gray-900/50" id="register">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Register Your Team</h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-6">Team Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Team Name</label>
                <input
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Participation Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="onsite"
                      checked={formData.participationType === 'onsite'}
                      onChange={(e) => setFormData({ ...formData, participationType: e.target.value })}
                      className="mr-2"
                    />
                    On-site
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="virtual"
                      checked={formData.participationType === 'virtual'}
                      onChange={(e) => setFormData({ ...formData, participationType: e.target.value })}
                      className="mr-2"
                    />
                    Virtual
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Team Size</label>
                <select
                  value={formData.teamSize}
                  onChange={(e) => updateTeamSize(e.target.value)}
                  className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                >
                  <option value="2">2 Members</option>
                  <option value="3">3 Members</option>
                  <option value="4">4 Members</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-6">Team Members</h3>
            
            <div className="space-y-8">
              {formData.members.map((member, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="font-medium">Member {index + 1}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => updateMemberData(index, 'name', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={member.email}
                        onChange={(e) => updateMemberData(index, 'email', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        value={member.phone}
                        onChange={(e) => updateMemberData(index, 'phone', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">College</label>
                      <input
                        type="text"
                        value={member.college}
                        onChange={(e) => updateMemberData(index, 'college', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-all"
            >
              Register & Pay ₹500
            </button>
            <p className="mt-2 text-sm text-gray-400">
              Registration fee is non-refundable
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;