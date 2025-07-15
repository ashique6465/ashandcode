import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashandcode - Learn Better</title>
        <meta name="description" content="DSA, Roadmaps, Notes, Blogs – All in One Place" />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Ashandcode</h1>
          <p className="text-sm md:text-base lg:text-lg mb-6">
            Your all-in-one platform for DSA, Roadmaps, Blogs, and Interview Notes.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/dsa" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Start Learning</a>
            <a href="/roadmap" className="px-6 py-2 rounded border border-white text-white shadow-[0_0_10px_#ffffff] hover:shadow-[0_0_20px_#ffffff] hover:bg-white/10 transition">Premium</a>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What You'll Find</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'DSA Roadmap', desc: 'Start your data structures & algorithms journey.', link: '/dsa' },
              { title: 'Tech Roadmaps', desc: 'Learn web dev, AI, DevOps and more.', link: '/roadmap' },
              { title: 'Interview Notes', desc: 'Curated notes & handwritten summaries.', link: '/notes' },
              { title: 'Study Content', desc: 'Important topics from DBMS, OS, CN, etc.', link: '/notes' },
              { title: 'Blog & Queries', desc: 'Ask questions, share solutions, and help others.', link: '/blog' },
              { title: 'Contact & Feedback', desc: 'Reach out or give feedback.', link: '/contact' },
            ].map((feature, idx) => (
              <a
                key={idx}
                href={feature.link}
                className="border p-6 rounded shadow hover:shadow-md hover:-translate-y-1 transition-transform bg-white text-black"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-500 border-t mt-12">
          © {new Date().getFullYear()} Ashandcode. Built with ❤️ using Next.js + Tailwind.
        </footer>
      </main>
    </>
  );
}
