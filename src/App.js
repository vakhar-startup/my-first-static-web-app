/* import React from 'react';

function App() {
  const value = 'Faheem';
  return <div>Hello {value}</div>;
} 


export default App;
*/

import React from 'react';
import { 
  Calendar, 
  DollarSign, 
  Plane, 
  Shield, 
  Smartphone, 
  Users,
  Check 
} from 'lucide-react';


  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
      <Icon className="text-blue-600 w-8 h-8" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>


const HomePage = () => {
  const handleGetStarted = () => {
    // Redirect to login or signup page
    window.location.href = '/login';
  };

  const handleWatchDemo = () => {
    // Open demo modal or redirect to demo page
    window.location.href = '/demo';
  };

  const handleSignup = () => {
    window.location.href = '/signup';
  };

  const handleContactSales = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Streamline Your Travel & Expense Management
            </h1>
            <p className="text-xl text-blue-100">
              Simplify expense tracking, travel booking, and financial reporting 
              with our comprehensive SaaS solution.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleGetStarted}
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Get Started
              </button>
              <button 
                onClick={handleWatchDemo}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Watch Demo
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/api/placeholder/600/400" 
              alt="Expense Management Dashboard" 
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed to make expense management effortless for businesses of all sizes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={DollarSign}
            title="Expense Tracking"
            description="Automated expense capture with receipt scanning and real-time reporting."
          />
          <FeatureCard 
            icon={Plane}
            title="Travel Booking"
            description="Integrated travel booking with company policy compliance checks."
          />
          <FeatureCard 
            icon={Calendar}
            title="Approval Workflows"
            description="Streamlined expense approval process with multi-level authorization."
          />
          <FeatureCard 
            icon={Shield}
            title="Robust Security"
            description="Enterprise-grade security with multi-tenant architecture and encryption."
          />
          <FeatureCard 
            icon={Smartphone}
            title="Mobile Access"
            description="Manage expenses on-the-go with our mobile-friendly web application."
          />
          <FeatureCard 
            icon={Users}
            title="Multi-User Support"
            description="Flexible user roles and permissions for different organizational needs."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose a plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Starter',
                price: 29,
                features: [
                  'Up to 5 Users',
                  'Basic Expense Tracking',
                  'Monthly Reporting'
                ]
              },
              {
                title: 'Professional',
                price: 99,
                features: [
                  'Up to 25 Users',
                  'Advanced Reporting',
                  'Travel Booking Integration',
                  'Custom Workflows'
                ],
                recommended: true
              },
              {
                title: 'Enterprise',
                price: 299,
                features: [
                  'Unlimited Users',
                  'Full Feature Set',
                  'Priority Support',
                  'Custom Integrations'
                ]
              }
            ].map((plan) => (
              <div 
                key={plan.title}
                className={`bg-white rounded-xl shadow-lg p-6 text-center ${
                  plan.recommended 
                    ? 'border-2 border-blue-500 transform scale-105' 
                    : ''
                }`}
              >
                {plan.recommended && (
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {plan.title}
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  ${plan.price}
                  <span className="text-base text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li 
                      key={feature} 
                      className="text-gray-600 flex items-center justify-center"
                    >
                      <Check className="text-green-500 mr-2 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleSignup}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Choose {plan.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Expense Management?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of streamlined 
            expense tracking and travel management.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={handleSignup}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Start Free Trial
            </button>
            <button 
              onClick={handleContactSales}
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};