

'use client';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100 text-gray-800">
      <header className="w-full text-center p-5 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Typewriter Effect Workshop</h1>
      </header>

      <section className="mt-10 text-center">
        <h2 className="text-2xl mb-4">Interactive Typewriter Effect Demo</h2>
        <div className="text-xl text-blue-700">
          {/* Insert typewriter effect here */}
        </div>
      </section>

      <section className="mt-10 w-full max-w-2xl text-center">
        <h3 className="text-xl font-semibold mb-3">Why Use the Typewriter Effect?</h3>
        <p className="mb-4">
          The typewriter effect is a great way to make your content more dynamic and engaging. Whether you're building a landing page, a portfolio, or a blog, adding a typewriter effect can draw attention to your key messages.
        </p>

        <h3 className="text-xl font-semibold mb-3">How to Implement the Typewriter Effect</h3>
        <p className="mb-4">
          Using npm, you can easily add the typewriter effect to your Next.js project. Follow the steps in this workshop to see how simple it is to integrate and customize the effect to fit your needs.
        </p>

        <h3 className="text-xl font-semibold mb-3">Resources</h3>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://www.npmjs.com/package/typewriter-effect" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Typewriter Effect on npm</a></li>
          <li><a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Next.js Documentation</a></li>
          <li><a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Node.js Documentation</a></li>
        </ul>
      </section>

      <footer className="w-full text-center p-5 bg-blue-600 text-white">
        <a href="https://github.com/vercel/next.js/tree/canary/examples/typewriter-effect"><u>Github Repository</u></a>
      </footer>
    </main>
  );
}
