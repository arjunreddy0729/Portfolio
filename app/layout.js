import './globals.css';

export const metadata = {
  title: 'Kadari Arjun Reddy | Software Developer & ML Engineer',
  description: 'Portfolio of Kadari Arjun Reddy — Full-Stack Developer, ML Engineer, and Computer Science graduate student at Stevens Institute of Technology.',
  keywords: ['Arjun Reddy', 'Portfolio', 'Software Developer', 'ML Engineer', 'Stevens Institute'],
  openGraph: {
    title: 'Kadari Arjun Reddy | Portfolio',
    description: 'Full-Stack Developer & ML Engineer building clean, scalable software.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
