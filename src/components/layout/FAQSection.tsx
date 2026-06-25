import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../../lib/utils";

const FAQS = [
  {
    q: "What happens after I enrol?",
    a: "After enrolment, you will receive clear next steps by email, including information about course access, the learning platform and how the student can begin.",
  },
  {
    q: "How will my child access the course?",
    a: "Students access their course through the IWS online learning platform, where course materials, lesson information and important updates are organised in one place.",
  },
  {
    q: "Are the lessons live or self-paced?",
    a: "This depends on the selected course. Some courses include live online lessons, while others may include guided or self-paced learning materials. The course page will explain the learning format before enrolment.",
  },
  {
    q: "What support is available during the course?",
    a: "Students can receive support through teacher guidance, course resources and the IWS support team. The exact level of support may depend on the selected course or learning model.",
  },
  {
    q: "What if I am not sure this course is right for my child?",
    a: "If you are unsure whether the course is suitable, you can contact IWS or book a call with the admissions team before enrolling.",
  },
];

interface FAQSectionProps {
  className?: string;
}

export default function FAQSection({ className }: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className={cn("bg-white", className)}>
      <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-slate-600 leading-relaxed mb-10">
        Find quick answers about enrolment, course access and online learning with IWS.
      </p>
      <div className="divide-y divide-slate-200">
        {FAQS.map((faq, index) => {
          const isOpen = openFaq === index;
          return (
            <div
              key={index}
              className="py-4 text-left"
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full py-2 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="font-bold text-slate-900 pr-8 group-hover:text-blue-600 transition-colors">
                  {faq.q}
                </span>
                <span
                  className={cn(
                    "shrink-0 transition-transform duration-300",
                    isOpen ? "text-[#ff9600] rotate-180" : "text-slate-400"
                  )}
                >
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="pb-4 pt-2 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
