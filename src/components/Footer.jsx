import './Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AVASH</h3>
            <p>پیشگامان نوین آوش</p>
            <p>نام تجاری: شباهنگ</p>
            <p>مشاور، طراح و مجری سیستم‌های صوتی و تصویری</p>
          </div>

          <div className="footer-section">
            <h4>خدمات</h4>
            <ul>
              <li>مشاوره تخصصی</li>
              <li>طراحی اختصاصی</li>
              <li>آموزش حرفه‌ای</li>
              <li>گارانتی و خدمات پس از فروش</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>تماس با ما</h4>
            <p>آینده روشن‌تر، شنیدنی‌تر و دیدنی‌تر است</p>
            <p>وقتی با نوین آوش طراحی شود</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; ۱۴۰۵ شرکت پیشگامان نوین آوش. تمامی حقوق محفوظ است.</p>
          <p className="footer-slogan">The Symphony of Space and Sound</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
