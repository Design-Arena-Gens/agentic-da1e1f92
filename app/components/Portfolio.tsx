export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack Development',
      description: 'Modern online shopping experience with payment integration and inventory management.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Corporate Website',
      category: 'Web Design & Development',
      description: 'Professional business website with CMS integration and SEO optimization.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'SaaS Application',
      category: 'Web Application',
      description: 'Cloud-based software solution with user authentication and subscription management.',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Restaurant Booking System',
      category: 'Custom Development',
      description: 'Reservation platform with real-time availability and automated notifications.',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Portfolio Website',
      category: 'Creative Design',
      description: 'Artist portfolio with gallery, animations, and contact form integration.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Real Estate Platform',
      category: 'Full Stack Development',
      description: 'Property listing site with advanced search filters and map integration.',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600">Recent projects that showcase our expertise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <svg className="w-24 h-24 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-primary text-sm font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-primary font-semibold hover:underline">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
