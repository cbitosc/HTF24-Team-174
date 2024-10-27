import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle password reset logic
    console.log(email);
  };

  return (
    <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-gray-800/50 p-8 rounded-xl border border-purple-500/20">
          <Link to="/login" className="text-gray-400 hover:text-white flex items-center gap-2 mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Login
          </Link>

          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Reset Password</h1>
                <p className="text-gray-400 mt-2">
                  Enter your email address and we'll send you instructions to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors"
                >
                  Send Reset Instructions
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <Mail className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Check Your Email</h2>
              <p className="text-gray-400 mb-6">
                We've sent password reset instructions to your email address.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-purple-400 hover:text-purple-300"
              >
                Try another email
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;