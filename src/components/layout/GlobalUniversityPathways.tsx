import React from 'react';
import { useContent } from '../../contexts/ContentContext';

export default function GlobalUniversityPathways() {
  const { content } = useContent();
  const data = content.universityPathways;

  return (
    <section className="py-24 bg-white text-center border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-5xl font-display font-medium text-slate-900 mb-4">
          {data.title}
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-16">
          {data.subtitle}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 relative">
          
          {/* Left Laurel */}
          <div className="hidden md:block shrink-0">
            <img src={data.leftLaurelImage || undefined} alt="Left Leaf" className="w-16 md:w-20 h-auto object-contain opacity-90" />
          </div>

          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 items-center justify-items-center">
            {(data.universities || []).map((uni: any, index: number) => (
              <div key={index} className="flex items-center justify-center">
                <img src={uni.logo || undefined} alt={uni.name} className="h-12 md:h-16 lg:h-20 w-auto object-contain" />
              </div>
            ))}
          </div>

          {/* Right Laurel */}
          <div className="hidden md:block shrink-0">
            <img src={data.rightLaurelImage || undefined} alt="Right Leaf" className="w-16 md:w-20 h-auto object-contain opacity-90" />
          </div>
          
        </div>

        <div className="bg-[#eef2fe] text-[#0a1776] rounded-lg py-4 px-8 inline-block max-w-3xl mx-auto text-sm sm:text-base">
          {data.footerText}
        </div>
      </div>
    </section>
  );
}
