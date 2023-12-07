import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:2/10 lg:w-2/10">
                      <img
                          src="https://i.ibb.co/2M7rtLk/Remote1.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-900">
                          👋 Hello there! I'm Rani Saini, a passionate Node.js developer with one year of hands-on experience in crafting robust and scalable web applications. My journey in the world of web development began with a keen interest in creating efficient and dynamic solutions.
                          Over the past year, I've honed my skills in Node.js, leveraging its asynchronous, event-driven architecture to build high-performance backends. My expertise extends to creating RESTful APIs, implementing real-time features with WebSocket, and optimizing application performance.
                          </p>

                      <p className="mt-4 text-gray-900">
                      💡 I'm adept at working with popular Node.js frameworks like Express.js, and I have a solid understanding of server-side rendering and middleware integration. My commitment to clean, maintainable code is reflected in my approach to application architecture and the use of best practices.
                      </p>

                      <p className="mt-4 text-gray-900">
                      📚 As I continue to grow in my role as a Node.js developer, I look forward to contributing my skills and enthusiasm to projects that push the boundaries of what web applications can achieve. Let's build something amazing together! 💻✨
                      </p>
                    
                  </div>
              </div>
          </div>
      </div>
  );
}