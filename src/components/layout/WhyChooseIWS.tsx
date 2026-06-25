import React from 'react';
import { Globe, GraduationCap, Presentation, HeartHandshake, Check, Award } from 'lucide-react';
import { cn } from '../../lib/utils';

interface WhyChooseIWSProps {
  variant?: 'homepage' | 'course';
}

export default function WhyChooseIWS({ variant = 'homepage' }: WhyChooseIWSProps) {
  const isHomepage = variant === 'homepage';

  const title = isHomepage ? "Why Choose IWS Online School?" : "Why learn with IWS?";
  
  const introText = isHomepage 
    ? "IWS Online School combines British online education, Cambridge curriculum pathways and live teacher-led support to help students aged 7–19 learn with confidence from anywhere in the world."
    : "IWS Online School combines British online education, Cambridge curriculum pathways and live teacher-led support to help students learn with confidence from anywhere in the world.";

  type CardData = { icon: React.ReactNode; title: string; text: string; bullets?: string[] };
  const homepageCards: CardData[] = [
    {
      icon: <Globe size={26} strokeWidth={1.5} />,
      title: "Flexible British Online Learning",
      text: "Study from anywhere through a structured British online school model designed for modern international families.",
      bullets: [
        "Learn from home or abroad",
        "Suitable for ages 7–19",
        "Flexible learning pathways"
      ]
    },
    {
      icon: <Award size={26} strokeWidth={1.5} />,
      title: "Cambridge Curriculum Pathways",
      text: "Follow a clear academic pathway from Primary and Lower Secondary through to IGCSE and A Level study.",
      bullets: [
        "Primary to A Level progression",
        "IGCSE and A Level options",
        "Clear academic structure"
      ]
    },
    {
      icon: <Presentation size={26} strokeWidth={1.5} />,
      title: "Live Teacher-Led Lessons",
      text: "Students learn through live online lessons and guided support from experienced teachers who help them stay confident and engaged.",
      bullets: [
        "Interactive online classes",
        "Teacher guidance and support",
        "Personal learning attention"
      ]
    },
    {
      icon: <HeartHandshake size={26} strokeWidth={1.5} />,
      title: "Supportive Online Community",
      text: "A connected school environment where students receive encouragement, guidance and support throughout their learning journey.",
      bullets: [
        "Friendly learning environment",
        "Student-focused support",
        "Confidence and independence"
      ]
    }
  ];

  const courseCards: CardData[] = [
    {
      icon: <Award size={26} strokeWidth={1.5} />,
      title: "Cambridge Curriculum Pathways",
      text: "A structured academic route supporting students from Primary through to IGCSE and A Level."
    },
    {
      icon: <Presentation size={26} strokeWidth={1.5} />,
      title: "Live Online Teacher Support",
      text: "Students receive guidance through live lessons, learning resources and teacher-led support."
    },
    {
      icon: <Globe size={26} strokeWidth={1.5} />,
      title: "Flexible Learning From Anywhere",
      text: "A modern online experience designed for international families and different learning needs."
    }
  ];

  const cards = isHomepage ? homepageCards : courseCards;

  return (
    <section className={cn(
      isHomepage ? "bg-white py-24" : ""
    )}>
      <div className={cn(
        isHomepage ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : "w-full"
      )}>
        <div className={cn(
          "mb-12",
          isHomepage ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl border-b border-slate-200 pb-4 mb-8"
        )}>
          <h2 className={cn(
            "font-display font-bold text-[#15203C]",
            isHomepage ? "text-3xl md:text-4xl mb-6" : "text-3xl mb-6"
          )}>
            {title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {introText}
          </p>
        </div>

        <div className={cn(
          "grid gap-6 md:gap-8",
          isHomepage ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        )}>
          {cards.map((card, idx) => {
            const isNavy = idx % 2 !== 0; // Alternate colors

            return (
              <div 
                key={idx} 
                className={cn(
                  "border p-6 sm:p-8 rounded-2xl flex flex-col items-start transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden group",
                  isNavy 
                    ? "bg-[#0a1776] border-[#0a1776]" 
                    : "bg-white border-slate-200 hover:border-[#0a1776]/20"
                )}
              >
                {/* Subtle accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0a1776] to-[#ff9600] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-110 transition-all duration-300",
                  isNavy 
                    ? "bg-white/10 text-white group-hover:bg-white/20" 
                    : "bg-[#0a1776]/5 text-[#0a1776] group-hover:bg-[#0a1776]/10"
                )}>
                  <div className={cn(
                    "absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 z-10",
                    isNavy ? "bg-[#ff9600] border-[#0a1776]" : "bg-[#ff9600] border-white"
                  )} />
                  {card.icon}
                </div>
                
                <h3 className={cn(
                  "font-bold mb-3 leading-snug",
                  isHomepage ? "text-[19px]" : "text-lg",
                  isNavy ? "text-white" : "text-[#15203C]"
                )}>
                  {card.title}
                </h3>
                
                <p className={cn(
                  "text-[15px] mb-6 flex-1 leading-relaxed",
                  isNavy ? "text-blue-100/90" : "text-slate-600"
                )}>
                  {card.text}
                </p>
                
                {'bullets' in card && card.bullets && (
                  <ul className={cn(
                    "space-y-3 mt-auto w-full pt-6 border-t",
                    isNavy ? "border-white/10" : "border-slate-100"
                  )}>
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className={cn(
                        "flex items-start gap-3 text-sm",
                        isNavy ? "text-white" : "text-[#15203C]"
                      )}>
                        <Check className="text-[#ff9600] shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                        <span className="leading-tight font-medium opacity-90">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
