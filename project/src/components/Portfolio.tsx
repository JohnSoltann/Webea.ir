import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['همه', 'فروشگاهی', 'شرکتی', 'خدماتی', 'استارتاپ'];

const projects = [
  {
    title: 'فروشگاه زنجیره‌ای ستاره',
    category: 'فروشگاهی',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800',
    technologies: ['React', 'Node.js', 'MongoDB'],
    results: 'افزایش ۱۵۰٪ فروش آنلاین',
  },
  {
    title: 'استارتاپ تک‌نو',
    category: 'استارتاپ',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    results: 'جذب ۱۰،۰۰۰ کاربر در ماه اول',
  },
  {
    title: 'شرکت مهندسی آوا',
    category: 'شرکتی',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800',
    technologies: ['Next.js', 'Tailwind', 'Supabase'],
    results: 'بهبود ۸۰٪ در نرخ تبدیل',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('همه');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = projects.filter(
    project => activeCategory === 'همه' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">نمونه کارها</h2>
          <p className="text-gray-600 mb-8">برخی از پروژه‌های موفق ما</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`clay-button ${
                  activeCategory === category
                    ? 'bg-[#A8DADC] text-white'
                    : 'bg-white text-gray-800'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="clay-card group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setActiveProject(project)}
            >
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="text-white w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.category}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-sm bg-[#E8D7F1] text-gray-800 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[#A8DADC] font-medium">{project.results}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}