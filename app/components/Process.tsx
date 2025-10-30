export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We learn about your business, goals, and target audience to create a strategic plan.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our designers create beautiful, user-friendly mockups that align with your brand.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build your website using the latest technologies and best practices.',
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Rigorous testing ensures everything works perfectly across all devices and browsers.',
    },
    {
      number: '05',
      title: 'Launch',
      description: 'We deploy your website and ensure a smooth transition to production.',
    },
    {
      number: '06',
      title: 'Support',
      description: 'Ongoing maintenance and support to keep your website running at peak performance.',
    },
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600">A streamlined approach to delivering exceptional results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="text-6xl font-bold text-primary opacity-20">{step.number}</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-6">Let&apos;s discuss your project and bring your vision to life.</p>
            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
