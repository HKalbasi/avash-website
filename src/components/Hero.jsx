import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          The Symphony of Space and Sound
        </h1>
        <p className="hero-subtitle">
          مشاور، طراح و مجری سیستم‌های صوتی و تصویری
        </p>
        <p className="hero-description">
          پیشگامان نوین آوش - نام تجاری شباهنگ
        </p>
        <a href="#about" className="hero-btn">بیشتر بدانید</a>
      </div>
    </section>
  )
}

export default Hero
