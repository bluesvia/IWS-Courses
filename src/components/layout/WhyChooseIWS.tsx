import React from 'react';
import { Globe, GraduationCap, Presentation, HeartHandshake, Check, Award } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useContent } from '../../contexts/ContentContext';

interface WhyChooseIWSProps {
  variant?: 'homepage' | 'course';
}

export default function WhyChooseIWS({ variant = 'homepage' }: WhyChooseIWSProps) {
  const isHomepage = variant === 'homepage';
  const { content } = useContent();
  const data = content.whyChooseIws;

  const title = isHomepage ? data.titleHomepage : data.titleCourse;
  
  const introText = isHomepage 
    ? data.introHomepage
    : data.introCourse;

  type CardData = { icon: React.ReactNode; title: string; text: string; bullets?: string[] };
  
  // Attach icons to dynamic cards
  const homepageCards: CardData[] = (data.homepageCards || []).map((card: any, idx: number) => ({
    ...card,
    icon: idx === 0 ? <Globe size={26} strokeWidth={1.5} /> :
          idx === 1 ? <Award size={26} strokeWidth={1.5} /> :
          idx === 2 ? <Presentation size={26} strokeWidth={1.5} /> :
          <HeartHandshake size={26} strokeWidth={1.5} />
  }));

  const courseCards: CardData[] = (data.courseCards || []).map((card: any, idx: number) => ({
    ...card,
    icon: idx === 0 ? <Award size={26} strokeWidth={1.5} /> :
          idx === 1 ? <Presentation size={26} strokeWidth={1.5} /> :
          <Globe size={26} strokeWidth={1.5} />
  }));

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
