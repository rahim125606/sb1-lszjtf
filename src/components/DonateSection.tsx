import { DollarSign, Heart, Users, Wrench } from 'lucide-react';

export default function DonateSection() {
  const donationOptions = [
    {
      amount: 25,
      description: 'Provides food for one cat for a month',
      icon: Heart,
    },
    {
      amount: 50,
      description: 'Covers basic medical care for one cat',
      icon: Wrench,
    },
    {
      amount: 100,
      description: 'Supports our spay/neuter program',
      icon: Users,
    },
  ];

  return (
    <section id="donate" className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Support Our Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your donation helps us continue our work of rescuing and caring for cats in need.
            Every contribution makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {donationOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <option.icon className="w-10 h-10 text-orange-500 mb-4" />
              <div className="text-2xl font-bold text-gray-800 mb-2">${option.amount}</div>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <button className="w-full py-2 px-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                <DollarSign className="w-4 h-4" />
                Donate
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Want to make a custom donation or contribute in other ways?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}