import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed() {
  return (
    <div className="w-full mt-8">
      <style>{`
        .calendly-inline-widget {
          height: 700px;
        }
        @media (max-width: 1024px) {
          .calendly-inline-widget {
            height: 1100px;
          }
        }
      `}</style>
      <div className="w-full min-w-[320px]">
        <InlineWidget 
          url="https://calendly.com/admissions-iws/discovery-call-with-iws-calendar-1" 
          styles={{ height: '700px', width: '100%' }}
        />
      </div>
    </div>
  );
}
