import Image from "next/image";
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
 
// These styles apply to every route in the application
import './globals.css'
 
export const metadata: Metadata = {
  title: "Venus's website",
  description: 'Made by Venus, powered by Vercel',
}

const font = DM_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <><head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
    </head>
    <main>
    <div className="navbar-container">
            <div className="navbar">
                <div className="active navitem">
                    Home
                </div>
                <div className="navitem">
                    Projects
                </div>
                <div className="navitem">
                    About
                </div>
                <div className="navitem">
                    Links
                </div>
            </div>
        </div>
        <div className="hero">
            <h1 className="hero-text">student by day ☀️, procrastinator everyday 🔥</h1>
            <p className="hero-caption">amateur designer, professional procrastinator</p>
            <div className="buttons">
              
            </div>
        </div>
      </main></>
  );
}
