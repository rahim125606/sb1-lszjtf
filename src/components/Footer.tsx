import { Cat, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cat className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-bold">Cozy Cat Cottage</span>
            </div>
            <p className="text-gray-400">
              A non-profit organization dedicated to finding loving homes for cats and kittens since
              1998.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <MapPin className="h-5 w-5" />
                <span>62 Village Pointe Dr, Powell, OH</span>
              </a>
              <a href="tel:6148480795" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Phone className="h-5 w-5" />
                <span>(614) 848-0795</span>
              </a>
              <a href="mailto:info@cozycatcottage.org" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
                <span>info@cozycatcottage.org</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#adopt" className="text-gray-400 hover:text-white">Adopt</a>
              </li>
              <li>
                <a href="#donate" className="text-gray-400 hover:text-white">Donate</a>
              </li>
              <li>
                <a href="#volunteer" className="text-gray-400 hover:text-white">Volunteer</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Cozy Cat Cottage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}