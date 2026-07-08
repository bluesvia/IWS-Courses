import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface NavLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterData {
  description: string;
  links: NavLink[];
  social: NavLink[];
}

export interface CustomPage {
  id: string;
  title: string;
  path: string;
  content: string; // HTML content
}

// Default initial content
const initialContent = {
  home: {
    heroTitle: "Build the Future with Premium Education",
    heroSubtitle: "Join our expert-led programs and accelerate your career. Our comprehensive courses are designed for the innovators of tomorrow.",
    heroCTA: "Explore Courses",
    heroSlide1: "/Slide_1.webp",
    heroSlide2: "/Slide_2.webp",
    heroSlide3: "/Slide_3.webp",
    heroSlide4: "/Slide_4.webp",
    heroSlide5: "/Slide_5.webp",
    accreditations: [
      "/Accredited_1.webp",
      "/Accredited_2.webp",
      "/Accredited_3.webp",
      "/Accredited_4.webp"
    ],
    exploreCoursesTitle: "Explore IWS Online Courses",
    exploreCoursesSubtitle: "Focused online courses designed to support students through clear, structured learning pathways.",
    newsletterTitle: "Stay updated",
    newsletterSubtitle: "Receive updates about new IWS online courses, enrolment dates, and academic pathways.",
    newsletterPlaceholder: "Enter your email address",
    newsletterCTA: "Get course updates"
  },
  whyChooseIws: {
    titleHomepage: "Why Choose IWS Online School?",
    titleCourse: "Why learn with IWS?",
    introHomepage: "IWS Online School combines British online education, Cambridge curriculum pathways, and structured learning materials to help students aged 7–19 learn with confidence from anywhere in the world.",
    introCourse: "IWS Online School combines British online education, Cambridge curriculum pathways, and structured learning materials to help students learn with confidence from anywhere in the world.",
    homepageCards: [
      {
        title: "Flexible British Online Learning",
        text: "Study from anywhere through a structured British online school model designed for modern international families.",
        bullets: [
          "Learn from home or abroad",
          "Suitable for ages 7–19",
          "Flexible learning pathways"
        ]
      },
      {
        title: "Cambridge Curriculum Pathways",
        text: "Study toward Cambridge International qualifications, including IGCSE and A Level pathways recognised by universities worldwide.",
        bullets: [
          "Primary to A Level progression",
          "IGCSE and A Level options",
          "Clear academic structure"
        ]
      },
      {
        title: "Expert-Designed Lessons",
        text: "Students learn through carefully designed course content, a clear learning path, and structured materials for self-paced online study.",
        bullets: [
          "Structured learning materials",
          "Carefully designed course content",
          "Self-paced study"
        ]
      },
      {
        title: "Supportive Online Community",
        text: "A connected school environment where students receive encouragement, guidance and support throughout their learning journey.",
        bullets: [
          "Friendly learning environment",
          "Student-focused support",
          "Confidence and independence"
        ]
      }
    ],
    courseCards: [
      {
        title: "Cambridge Curriculum Pathways",
        text: "Study toward Cambridge International qualifications, including IGCSE and A Level pathways recognised by universities worldwide."
      },
      {
        title: "Expert-Designed Lessons",
        text: "Students receive guidance through structured learning paths, expert resources and carefully designed content."
      },
      {
        title: "Flexible Learning From Anywhere",
        text: "A modern online experience designed for international families and different learning needs."
      }
    ]
  },
  universityPathways: {
    title: "Global University Pathways",
    subtitle: "We provide the recognised academic map. IWS qualifications are accepted by the world's leading institutions.",
    footerText: "Cambridge International qualifications are recognised by over 1,400 universities worldwide.",
    leftLaurelImage: "/Global University Pathways/Leaf_Left.webp",
    rightLaurelImage: "/Global University Pathways/Leaf_Right.webp",
    universities: [
      { name: "University of Oxford", logo: "/Global University Pathways/University_of_Oxford.webp" },
      { name: "Harvard University", logo: "/Global University Pathways/Harvard_University_logo.svg.webp" },
      { name: "Imperial College London", logo: "/Global University Pathways/imperial-college-london.webp" },
      { name: "The University of Melbourne", logo: "/Global University Pathways/melbourne.webp" },
      { name: "University of Toronto", logo: "/Global University Pathways/University_of_Toronto.webp" },
      { name: "The University of Edinburgh", logo: "/Global University Pathways/University_of_Edinburgh-.png" }
    ]
  },
  about: {
    title: "About Us",
    description: "We are a premium online school dedicated to providing world-class education.",
    aboutImageUrl: "/students.webp",
    storyTitle: "Our Story",
    storyParagraph1: "IWS Online School was founded with a clear vision: to make high-quality British education accessible to ambitious students anywhere in the world. We recognised that traditional schooling models don't fit every family's needs, and that technology could be harnessed to deliver a truly exceptional learning experience.",
    storyParagraph2: "Today, we are proud to be a fully Cambridge-accredited institution, offering a structured, supportive, and engaging learning environment that combines the best of traditional British education with cutting-edge online delivery.",
    storyImage1Url: "/Slide_2.webp",
    visionTitle: "Our Vision",
    visionDescription: "To be the world's leading online British school, where every student is empowered to achieve their full academic and personal potential, regardless of their location.",
    missionTitle: "Our Mission",
    missionDescription: "To deliver a rigorous, engaging, and internationally recognised curriculum through innovative technology and exceptional teaching, fostering a global community of lifelong learners.",
    valuesTitle: "What Drives Us",
    valuesDescription: "A passion for student success. We believe that with the right support, resources, and flexibility, every child can thrive academically and develop the confidence to lead.",
    howWeTeachTitle: "How We Teach",
    howWeTeachSubtitle: "Our flexible learning models are designed to suit different family needs and student learning styles.",
    expertTeachingTitle: "Expert Teaching",
    expertTeachingDesc: "Students engage with structured, interactive online classes led by experienced subject specialists. These courses encourage participation, guided learning, and clear progress tracking.",
    expertTeachingList: [
      'Expertly designed content', 
      'Structured online materials', 
      'Self-paced learning', 
      'Clear progression pathways'
    ],
    flexibleLearningTitle: "Flexible Learning Models",
    flexibleLearningDesc: "We offer hybrid and self-paced options for families who need maximum flexibility. Students can access recorded lessons, comprehensive course materials, and teacher support when it suits them.",
    flexibleLearningList: [
      '24/7 platform access', 
      'Structured online materials', 
      'Guided independent study', 
      'Regular progress checks'
    ],
    globalCommunityTitle: "A Global Community",
    globalCommunityDesc: "When you join IWS, you're not just enrolling in a school; you're joining a diverse, international community of students from across the globe. We foster cross-cultural understanding, collaboration, and global citizenship.",
    globalCommunityList: [
      'Global Friendships', 
      'Cultural Exchange', 
      'Extracurricular Clubs', 
      'International Perspective'
    ],
    ctaTitle: "Ready to join our community?",
    ctaDesc: "Discover how IWS Online School can support your child's academic journey."
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "A simple guide to getting started with our platform.",
    heroImageUrl: "/Slide_4.webp",
    steps: [
      {
        title: "Choose the right course",
        description: "Families select the course or programme that matches the student’s age, level and academic goal."
      },
      {
        title: "Enrol online",
        description: "Parents complete the enrolment or enquiry process online. For selected courses, payment and access can be completed directly."
      },
      {
        title: "Get access to the learning platform",
        description: "Students receive access to the IWS learning platform, where course materials, lesson links, resources and important information are organised."
      },
      {
        title: "Learn with support",
        description: "Students complete guided activities, access structured learning materials and receive teacher support via the platform."
      },
      {
        title: "Track progress and prepare for next steps",
        description: "Students and parents can follow progress, understand upcoming tasks and receive guidance for assessments, exams or future study."
      }
    ],
    studentFeatures: [
      "Online course materials",
      "Expertly designed lessons",
      "Learning resources",
      "Teacher support",
      "Lesson links and updates",
      "Progress guidance",
      "Clear next steps after enrolment"
    ],
    parentFeatures: [
      "How enrolment works",
      "What happens after payment",
      "How the child accesses lessons",
      "How the learning platform works",
      "How support is provided",
      "Who to contact if help is needed",
      "How the student’s progress can be followed"
    ],
    learningFormats: [
      {
        title: "Structured Learning",
        description: "Clear pathways with expertly designed course materials."
      },
      {
        title: "Guided Study",
        description: "A mix of structured sessions and independent learning."
      },
      {
        title: "Self-Paced Learning",
        description: "Flexible access to course materials with support where available."
      }
    ],
    faqs: [
      "What happens after I enrol?",
      "How does my child access the course?",
      "Are the courses self-paced?",
      "Can parents track progress?",
      "What support is available?",
      "What if we need help logging in?",
      "How do payments work?",
      "Is the learning platform easy to use?",
      "Can students study from outside the UK?",
      "Who should I contact if I am unsure which course is right?"
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Find quick answers about enrolment, course access and online learning with IWS.",
    heroImageUrl: "/Asked_Questions.webp",
    faqs: [
      {
        q: "What happens after I enrol?",
        a: "After enrolment, you will receive clear next steps by email, including information about course access, the learning platform and how the student can begin.",
      },
      {
        q: "How will my child access the course?",
        a: "Students access their course through the IWS online learning platform, where course materials, lesson information and important updates are organised in one place.",
      },
      {
        q: "Are the courses self-paced?",
        a: "This depends on the selected course. Some courses are entirely self-paced, while others include guided learning materials and structured pathways. The course page will explain the learning format before enrolment.",
      },
      {
        q: "What support is available during the course?",
        a: "Students can receive support through teacher guidance, course resources and the IWS support team. The exact level of support may depend on the selected course or learning model.",
      },
      {
        q: "What if I am not sure this course is right for my child?",
        a: "If you are unsure whether the course is suitable, you can contact IWS or book a call with the admissions team before enrolling.",
      }
    ]
  },
  navigation: [
    { id: '1', label: 'Home', url: '/' },
    { id: '2', label: 'Courses', url: '/courses' },
    { id: '3', label: 'How it Works', url: '/how-it-works' },
    { id: '4', label: 'About', url: '/about' },
  ] as NavLink[],
  footer: {
    description: "A premium online school dedicated to providing world-class education. Empowering the innovators of tomorrow.",
    links: [
      { id: '1', label: 'Privacy Policy', url: '/privacy' },
      { id: '2', label: 'Terms of Service', url: '/terms' },
    ],
    social: []
  } as FooterData,
  customPages: [] as CustomPage[]
};

export type ContentData = typeof initialContent;

interface ContentContextType {
  content: ContentData;
  updateContent: (section: keyof ContentData, data: any) => void;
  addCustomPage: (page: CustomPage) => void;
  updateCustomPage: (id: string, page: CustomPage) => void;
  deleteCustomPage: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(() => {
    const saved = localStorage.getItem('iws_content');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure new properties exist if loaded from old state
      if (!parsed.navigation) parsed.navigation = initialContent.navigation;
      if (!parsed.footer) parsed.footer = initialContent.footer;
      if (!parsed.customPages) parsed.customPages = initialContent.customPages;
      if (!parsed.howItWorks.steps) parsed.howItWorks = initialContent.howItWorks; // Sync deep fields
      if (!parsed.about.storyTitle) parsed.about = initialContent.about;
      if (!parsed.faq.faqs) parsed.faq = initialContent.faq;
      if (!parsed.whyChooseIws) parsed.whyChooseIws = initialContent.whyChooseIws;
      if (!parsed.universityPathways) parsed.universityPathways = initialContent.universityPathways;
      if (!parsed.home.newsletterTitle) parsed.home = initialContent.home;
      return parsed;
    }
    return initialContent;
  });

  const saveContent = (newContent: ContentData) => {
    setContent(newContent);
    localStorage.setItem('iws_content', JSON.stringify(newContent));
  };

  const updateContent = (section: keyof ContentData, data: any) => {
    const newContent = { ...content };
    if (section === 'navigation' || section === 'footer' || section === 'customPages') {
      (newContent as any)[section] = data;
    } else {
      newContent[section] = { ...newContent[section], ...data };
    }
    saveContent(newContent);
  };

  const addCustomPage = (page: CustomPage) => {
    updateContent('customPages', [...content.customPages, page]);
  };

  const updateCustomPage = (id: string, updatedPage: CustomPage) => {
    updateContent('customPages', content.customPages.map(p => p.id === id ? updatedPage : p));
  };

  const deleteCustomPage = (id: string) => {
    updateContent('customPages', content.customPages.filter(p => p.id !== id));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, addCustomPage, updateCustomPage, deleteCustomPage }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
