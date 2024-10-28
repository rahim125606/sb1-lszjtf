import { Check } from 'lucide-react';

export default function AdoptionSection() {
  const adoptionSteps = [
    {
      title: 'Browse Available Cats',
      description: 'View our current residents and find your perfect match',
    },
    {
      title: 'Submit Application',
      description: 'Fill out our adoption questionnaire to begin the process',
    },
    {
      title: 'Meet & Greet',
      description: 'Visit our shelter to meet your potential new family member',
    },
    {
      title: 'Welcome Home',
      description: 'Complete the adoption and give a cat their forever home',
    },
  ];

  return (
    <section id="adopt" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Adoption Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our adoption process is designed to ensure the best match between cats and their new
            families. Here's how it works:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {adoptionSteps.map((step, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <Check className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            Start Your Adoption Journey
          </a>
        </div>
      </div>
    </section>
  );
}