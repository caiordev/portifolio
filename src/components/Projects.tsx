import Image from 'next/image'

const projects = [
  {
    title: 'Sistema de venda de viagens',
    description: 'Sistema de venda de viagens, com sistema de login, carrinho de compras e gerenciamento de pedidos.',
    image: '/portifolio/agencia.png',
    link: 'https://main.diw1hbym4cplx.amplifyapp.com',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Sistema de cadastro de agências de viagens',
    description: 'Sistema de cadastro de agências de viagens, com sistema de login e gerenciamento de agências.',
    image: '/portifolio/vendas.png',
    link: 'https://main.d2gnbhqhxthodz.amplifyapp.com',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'landing page para uma agência de viagens',
    description: 'Landing page para uma agência de viagens, com design moderno e responsivo.',
    image: '/portifolio/levada.png',
    link: 'http://levadaturismo.com/',
    tech: ['Python', 'Django', 'PostgreSQL'],
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
