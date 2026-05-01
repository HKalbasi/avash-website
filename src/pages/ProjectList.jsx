import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'
import './ProjectList.css'

function ProjectList() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(projects.map(p => p.category))]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="project-list-page">
      <div className="container">
        <h2 className="section-title">پروژه‌ها</h2>

        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' ? 'همه' : cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <Link to={`/project/${project.id}`} key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.images[0]} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
                <p className="project-year">{project.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectList
