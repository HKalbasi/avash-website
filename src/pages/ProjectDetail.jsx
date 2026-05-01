import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import projects from '../data/projects'
import './ProjectDetail.css'

function ProjectDetail() {
  const { id } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const found = projects.find(p => p.id === id)
    setProject(found)
  }, [id])

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <h2>پروژه یافت نشد</h2>
          <Link to="/projects" className="back-link">بازگشت به لیست پروژه‌ها</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        <Link to="/projects" className="back-link">← بازگشت به لیست پروژه‌ها</Link>

        <div className="project-header">
          <h1>{project.title}</h1>
          <div className="project-meta">
            <span className="category">{project.category}</span>
            <span className="year">{project.year}</span>
          </div>
        </div>

        <div className="project-images">
          {project.images.map((img, index) => (
            <div key={index} className="project-image-large">
              <img src={img} alt={`${project.title} - تصویر ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="project-content">
          <div className="project-info-card">
            <h3>اطلاعات پروژه</h3>
            <p><strong>کارفرما:</strong> {project.client}</p>
            <p><strong>سال اجرا:</strong> {project.year}</p>
            <p><strong>دسته‌بندی:</strong> {project.category}</p>
          </div>

          <div className="project-description">
            <h3>توضیحات پروژه</h3>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
