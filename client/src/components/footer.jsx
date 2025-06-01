import React from 'react'
import { Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-foreground py-8 mt-auto border-t ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-primary text-xl font-semibold">System Monitor</h3>
            <p className="text-muted-foreground">Monitor your system resources in real-time</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-primary text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/cpu" className="text-muted-foreground hover:text-primary transition-colors">CPU</a></li>
              <li><a href="/memory" className="text-muted-foreground hover:text-primary transition-colors">Memory</a></li>
              <li><a href="/network" className="text-muted-foreground hover:text-primary transition-colors">Network</a></li>
              <li><a href="/os" className="text-muted-foreground hover:text-primary transition-colors">Operating System</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-primary text-lg font-semibold">Contact Me</h4>
            <div className='flex gap-4'>
              <p className="text-muted-foreground flex items-center gap-2">
                <a href="mailto:pongsatorn.rk@gmail.com" target='_blank'><Mail />
                </a>
              </p>
              <p className="text-muted-foreground flex items-conter gap-2">
                <a href='https://github.com/PongsatornR-11' target='_blank'><Github />
                </a>
              </p>
            </div>
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