import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

function Register() {
  return (
    <div className="pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Register for Tech Innovators 2024</h1>
          <p className="text-gray-300">
            Join us for three days of innovation, learning, and amazing prizes
          </p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Register;