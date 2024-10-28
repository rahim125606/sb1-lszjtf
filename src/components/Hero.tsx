import { ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Give a Cat a <span className="text-orange-500">Forever Home</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Since 1998, Cozy Cat Cottage has been dedicated to rescuing and finding loving homes
              for cats and kittens in need. Join us in making a difference in their lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#adopt"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors group"
              >
                Meet Our Cats
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#donate"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition-colors group"
              >
                Support Our Mission
                <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80"
              alt="Happy cat at Cozy Cat Cottage"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-4/3"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}