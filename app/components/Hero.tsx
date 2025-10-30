export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Your Digital
              <span className="text-primary block">Presence Today</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Professional web development services that transform your ideas into powerful digital experiences.
              We create modern, responsive, and scalable solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-lg transition"
              >
                Get Started
              </a>
              <a
                href="#portfolio"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-2xl flex items-center justify-center">
                <svg className="w-48 h-48 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
