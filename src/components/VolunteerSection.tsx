import { Calendar, Clock, Heart, ShieldCheck } from 'lucide-react';

export default function VolunteerSection() {
  const volunteerOpportunities = [
    {
      title: 'Cat Care',
      description: 'Help with feeding, grooming, and socializing our cats',
      icon: Heart,
      commitment: '4 hours/week',
    },
    {
      title: 'Facility Maintenance',
      description: 'Assist with cleaning and maintaining our shelter',
      icon: ShieldCheck,
      commitment: '3 hours/week',
    },
    {
      title: 'Event Support',
      description: 'Help at adoption events and fundraisers',
      icon: Calendar,
      commitment: 'Flexible',
    },
  ];

  return (
    <section id="volunteer" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Volunteer With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our volunteers are the heart of Cozy Cat Cottage. Join our dedicated team and help make
            a difference in the lives of cats in need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {volunteerOpportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <opportunity.icon className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 mb-4">{opportunity.description}</p>
              <div className="flex items-center text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>{opportunity.commitment}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Volunteer Requirements
          </h3>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li className="flex items-start">
              <span className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                <ShieldCheck className="w-4 h-4 text-white" />
              </span>
              Must be 18 years or older
            </li>
            <li className="flex items-start">
              <span className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                <ShieldCheck className="w-4 h-4 text-white" />
              </span>
              Commit to at least 3 months of service
            </li>
            <li className="flex items-start">
              <span className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                <ShieldCheck className="w-4 h-4 text-white" />
              </span>
              Attend volunteer orientation and training
            </li>
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors w-full md:w-auto"
          >
            Apply to Volunteer
          </a>
        </div>
      </div>
    </section>
  );
}