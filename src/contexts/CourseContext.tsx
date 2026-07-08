import { createContext, useContext, useState, ReactNode } from 'react';

export interface ModuleData {
  title: string;
  items: string[];
}

export interface ReviewData {
  name: string;
  initials: string;
  time: string;
  text: string;
  rating: number;
}

export interface CourseData {
  id: string; // url slug
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  duration: string;
  level: string;
  bgImageUrl: string;
  videoUrl: string;
  bullets: string[];
  courseInfoText: string;
  curriculum: ModuleData[];
}

const defaultCourses: CourseData[] = [
  {
    id: "math",
    title: "IGCSE Mathematics — Year 10",
    subtitle: "Students access a structured online learning platform with expert-designed course materials, guided study units, and a clear progression pathway. This IGCSE course forms part of the Cambridge International route at IWS, supporting students as they build toward future A Level study options.",
    price: "149",
    originalPrice: "169",
    duration: "12 Months",
    level: "IGCSE",
    bgImageUrl: "/IWS-math-bg.webp",
    videoUrl: "https://res.cloudinary.com/dzzif7lkt/video/upload/v1783496191/IWS_Course_Video_jbkdmk.mp4",
    bullets: [
      "Expert-designed course materials",
      "Self-paced online study",
      "Cambridge International progression pathway"
    ],
    courseInfoText: "Every lesson follows a consistent learning structure: Video tutorials, interactive exercises, module assessments.",
    curriculum: [
      {
        title: "Module 1 — Numbers & Operations",
        items: ["Integers", "Fractions", "Decimals", "Percentages", "Ratio", "Standard Form"],
      },
      {
        title: "Module 2 — Algebra",
        items: ["Expressions", "Equations", "Factorising", "Quadratics", "Simultaneous Equations"],
      }
    ]
  },
  {
    id: "science",
    title: "Biology IGCSE",
    subtitle: "A comprehensive biology curriculum covering everything from cells to ecosystems.",
    price: "299",
    originalPrice: "349",
    duration: "12 Months",
    level: "IGCSE",
    bgImageUrl: "/Slide_1.webp",
    videoUrl: "https://res.cloudinary.com/dzzif7lkt/video/upload/v1783496191/IWS_Course_Video_jbkdmk.mp4",
    bullets: [
      "Expert-designed course materials",
      "Self-paced online study"
    ],
    courseInfoText: "Every lesson follows a consistent learning structure.",
    curriculum: [
      {
        title: "Module 1 — Cells",
        items: ["Cell Structure", "Transport in Cells", "Cell Division"],
      }
    ]
  }
];

interface CourseContextType {
  courses: CourseData[];
  getCourse: (id: string) => CourseData | undefined;
  addCourse: (course: CourseData) => void;
  updateCourse: (id: string, course: CourseData) => void;
  deleteCourse: (id: string) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export function CourseProvider({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<CourseData[]>(() => {
    const saved = localStorage.getItem('iws_courses');
    return saved ? JSON.parse(saved) : defaultCourses;
  });

  const saveCourses = (newCourses: CourseData[]) => {
    setCourses(newCourses);
    localStorage.setItem('iws_courses', JSON.stringify(newCourses));
  };

  const getCourse = (id: string) => courses.find(c => c.id === id);

  const addCourse = (course: CourseData) => {
    saveCourses([...courses, course]);
  };

  const updateCourse = (id: string, updatedCourse: CourseData) => {
    saveCourses(courses.map(c => c.id === id ? updatedCourse : c));
  };

  const deleteCourse = (id: string) => {
    saveCourses(courses.filter(c => c.id !== id));
  };

  return (
    <CourseContext.Provider value={{ courses, getCourse, addCourse, updateCourse, deleteCourse }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
}
