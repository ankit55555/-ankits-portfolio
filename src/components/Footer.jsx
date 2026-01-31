export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <small>© {new Date().getFullYear()} Ankit. All rights reserved.</small>
        <a className="link" href="#top">
          Back to top
        </a>
      </div>
    </footer>
  )
}

