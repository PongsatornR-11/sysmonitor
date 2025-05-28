import { Target } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-foreground py-8 mt-auto border-t border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-primary text-xl font-semibold">System Monitor</h3>
            <p className="text-muted-foreground">Monitor your system resources in real-time</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-primary text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="/settings" className="text-muted-foreground hover:text-primary transition-colors">Settings</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-primary text-lg font-semibold">Contact</h4>
            <p className="text-muted-foreground">Email: pongsatorn.rk@gmail.com</p>
            <p className="text-muted-foreground">
                <a href='https://github.com/PongsatornR-11' target='_blank'>My Github</a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-muted-foreground">&copy; {currentYear} System Monitor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer