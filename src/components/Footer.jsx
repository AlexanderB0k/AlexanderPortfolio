function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>&copy; {year} Alexander. Built with React &amp; Vite.</p>
    </footer>
  )
}

export default Footer
