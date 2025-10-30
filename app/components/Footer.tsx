export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              WebDev<span className="text-accent">Pro</span>
            </h3>
            <p className="text-gray-400">
              Professional web development services that transform your ideas into reality.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition">Responsive Design</a></li>
              <li><a href="#services" className="hover:text-white transition">E-Commerce</a></li>
              <li><a href="#services" className="hover:text-white transition">API Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#process" className="hover:text-white transition">Our Process</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on our latest projects and tech insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-primary hover:bg-secondary px-4 py-2 rounded-r-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WebDevPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
