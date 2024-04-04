import React from 'react';

const TechStack = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 w-[80%]"style={{backgroundColor: 'rgb(20, 20, 32)'}}
    >
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 text-green-300 p-6 rounded-lg shadow-lg border border-dashed border-blue-600 " style={{backgroundColor: 'rgb(33, 33, 61)'}}>
            <h2 className="text-xl font-semibold mb-4 text-[#5c54d0]">Frontend Development</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js / Vue.js / Angular</li>
            </ul>
          </div>
          <div className="bg-gray-800 text-green-300 p-6 rounded-lg shadow-lg border border-dashed border-blue-600 " style={{backgroundColor: ' rgb(33, 33, 61)'}}>
            <h2 className="text-xl font-semibold mb-4 text-[#5c54d0]" >Backend Development</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
             <li>Neext.js</li>
            </ul>
          </div>
          <div className="bg-gray-800 text-green-300 p-6 rounded-lg shadow-lg border border-dashed border-blue-600 " style={{backgroundColor: ' rgb(33, 33, 61)'}}>
            <h2 className="text-xl font-semibold mb-4 text-[#5c54d0]" >Database</h2>
            <ul>
              <li>MongoDB</li>
              <li>MySQL </li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="bg-gray-800 text-green-300 p-6 rounded-lg shadow-lg border border-dashed border-blue-600 " style={{backgroundColor: ' rgb(33, 33, 61)'}}>
            <h2 className="text-xl font-semibold mb-4 text-[#5c54d0]">Hosting / Deployment</h2>
            <ul>
              <li>Render</li>
              <li>Netlify </li>
              <li>Vercel</li>
              <li>AWS / Google Cloud / Azure</li>
            </ul>
          </div>
          <div className="bg-gray-800 text-green-300 p-6 rounded-lg shadow-lg border border-dashed border-blue-600 " style={{backgroundColor: ' rgb(33, 33, 61)'}}>
            <h2 className="text-xl font-semibold mb-4 text-[#5c54d0]">Version Control</h2>
            <ul>
              <li>Git</li>
              <li>GitHub / GitLab </li>
            </ul>
          </div>
          <div className="bg-gray-800 text-green-300 p-6 rounded-lg shadow-lg border border-dashed border-blue-600 " style={{backgroundColor: ' rgb(33, 33, 61)'}}>
            <h2 className="text-xl font-semibold mb-4 text-[#5c54d0]">Other Tools</h2>
            <ul>
              <li>Webpack</li>
              <li>Babel</li>
              <li>Sass </li>
              <li>Postman</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
