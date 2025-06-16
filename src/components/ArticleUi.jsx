import React from "react";

const ArticleUi = () => {
  return (
    <article className="glow-card glow-card-undefined h-fit cursor-pointer border border-gray-300 transition-all duration-300 relative bg-white text-gray-800 rounded-xl hover:border-blue-300 w-full">
      <div className="px-4 lg:px-8 py-5">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-orange-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
      </div>

      <div className="overflow-hidden border-t border-gray-200 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div>
            <span className="mr-2 text-pink-600">const</span>
            <span className="mr-2 text-black">Coder</span>
            <span className="mr-2 text-pink-600">=</span>
            <span className="text-gray-500">{"{"}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-black">name:</span>
            <span className="text-gray-500">'</span>
            <span className="text-yellow-600">Rafansa Oktaviano</span>
            <span className="text-gray-500">',</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-black">skills:</span>
            <span className="text-gray-500">[</span>
            {[
              "React",
              "React Native",
              "TypeScript",
              "Convex",
              "Supabase",
              "JavaScript",
              "Laravel",
              "PHP",
              "Node.js",
              "Express.js",
              "MySQL",
              "Tailwind",
              "Sequelize ORM",
              "jQuery",
              "Git",
              "Figma",
              "VS Code",
            ].map((skill, index, arr) => (
              <span key={index}>
                <span className="text-yellow-600">'{skill}'</span>
                <span className="text-gray-500">
                  {index < arr.length - 1 ? ", " : ""}
                </span>
              </span>
            ))}
            <span className="text-gray-500">]</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-black">hardWorker:</span>
            <span className="text-orange-600">true</span>
            <span className="text-gray-500">,</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-black">quickLearner:</span>
            <span className="text-orange-600">true</span>
            <span className="text-gray-500">,</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-black">problemSolver:</span>
            <span className="text-orange-600">true</span>
            <span className="text-gray-500">,</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-green-600">hireable:</span>
            <span className="text-orange-600">function</span>
            <span className="text-gray-500">() {"{"}</span>
          </div>

          <div>
            <span className="ml-8 lg:ml-16 mr-2 text-orange-600">return</span>
            <span className="text-gray-500">(</span>
          </div>

          <div>
            <span className="ml-12 lg:ml-24 text-cyan-600">this.</span>
            <span className="mr-2 text-black">hardWorker</span>
            <span className="text-yellow-600">&amp;&amp;</span>
          </div>

          <div>
            <span className="ml-12 lg:ml-24 text-cyan-600">this.</span>
            <span className="mr-2 text-black">problemSolver</span>
            <span className="text-yellow-600">&amp;&amp;</span>
          </div>

          <div>
            <span className="ml-12 lg:ml-24 text-cyan-600">this.</span>
            <span className="mr-2 text-black">skills.length</span>
            <span className="mr-2 text-yellow-600">&gt;=</span>
            <span className="text-orange-600">10</span>
          </div>

          <div>
            <span className="ml-8 lg:ml-16 text-gray-500">);</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 text-gray-500">{"};"}</span>
          </div>

          <div>
            <span className="text-gray-500">{"};"}</span>
          </div>
        </code>
      </div>
    </article>
  );
};

export default ArticleUi;
