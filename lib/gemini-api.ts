import { GoogleGenerativeAI } from "@google/generative-ai";

const PERSONAL_INFO = `
Name: Muhammed Razi P P
Role: Full Stack MERN Developer
Experience: 1.5+ years of hands-on experience with additional freelance industrial experience as a frontend developer
Contact: +91 6235009441 | razirasheed03@gmail.com
LinkedIn: linkedin.com/in/razirasheed
GitHub: github.com/razirasheed03

Professional Summary:
Passionate MERN Stack Developer with strong experience in building scalable, user-centric web applications. Proficient in JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB. Experienced in both full stack and frontend-focused roles, including freelance project work. Quick learner with a strong focus on clean architecture, performance optimization, and production-ready solutions.

Technical Skills:
Frontend: React.js, Next.js, Redux Toolkit, RTK Query, HTML, CSS, Tailwind CSS, Bootstrap  
Backend: JavaScript, TypeScript, Node.js, Express.js  
Databases: MongoDB, PostgreSQL, Firebase  
Integrations & APIs: Razorpay, Stripe, Nodemailer, Multer, Cloudinary, Socket.IO, WebRTC, Mapbox  
DevOps & Deployment: Docker, Nginx, AWS, Vercel, Render  
Tools: Git, GitHub, Postman, Figma, VS Code  
Core Knowledge: Data Structures & Algorithms

Projects:

1. TailMate | Complete Pet Care Ecosystem:
- Developed a full-fledged pet care platform enabling pet adoption, selling, and intelligent matchmaking.
- Implemented location-based pet discovery using Mapbox for geospatial search.
- Built real-time chat and notification system using Socket.IO.
- Integrated WebRTC-based audio/video consultations for veterinary appointments.
- Designed scalable backend architecture using repository pattern, service layers, and dependency injection.
- Developed role-based admin dashboard for managing users, vets, bookings, commissions, and moderation.
- Implemented JWT-based authentication with role-based access control.
- Deployed backend on Render and frontend on Vercel with Dockerized services.

2. CaseVerse | E-commerce Application:
- Built a complete e-commerce platform using Node.js, Express.js, and MongoDB with MVC architecture.
- Implemented session-based authentication, OTP verification, and password recovery.
- Integrated Razorpay, COD, and wallet-based payment systems.
- Developed admin panel for product, category, and order management with analytics.
- Implemented product search, filtering, wishlist, and return/refund workflows.

3. Mini Projects:
- Netflix Clone: Built using React.js and Firebase with authentication and responsive UI using Tailwind CSS.
- OLX Clone: Developed a marketplace application using React.js and Tailwind CSS with user authentication and listing features.

Professional Experience:

Frontend Developer (Freelance)
ThinQ Technologies (Freelance Project – Client: Moestay)
Dec 2025 – Feb 2026
- Built and maintained scalable frontend interfaces using Next.js and TypeScript.
- Integrated backend REST APIs using RTK Query for efficient data fetching and caching.
- Implemented secure client-side authentication flows using JWT access and refresh tokens.
- Developed reusable UI components and maintained consistent UX across application workflows.
- Collaborated with backend and design teams to deliver production-ready frontend features.

Education:
MERN Stack Development (2024 – Present)
Brototype Calicut

Higher Secondary Education – Computer Science (2022 – 2024)
Sacred Heart Higher Secondary School, Kannur
`;


export async function getGeminiResponse(
  userMessage: string,
  chatHistory: any[]
) {
  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!API_KEY) {
    console.error("Gemini API key is missing");
    return {
      text: "Sorry, I'm not properly configured yet. Please contact the site owner.",
    };
  }
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

    const recentMessages = chatHistory.slice(-3);
    const contextPrompt = `
    Your name is Buddy,You are a helpful assistant for Muhammed Razi P P who answers questions about his portfolio, skills, experience, and projects.
    Be concise, friendly, and professional in your responses.
    Only answer questions related to Razi's professional background, skills, experience, projects, or general career advice.
    If asked about anything not related to Razi or his professional work, politely redirect the conversation back to relevant topics.

    Here's information about Razi:
    ${PERSONAL_INFO}

    Recent conversation:
    ${recentMessages
      .map(
        (msg) => `${msg.sender === "user" ? "User" : "Assistant"}: ${msg.text}`
      )
      .join("\n")}

    User's latest question: ${userMessage}

    Your response (staying focused on Razi's professional information):`;
    const result = await model.generateContent(contextPrompt);
    const response = result.response;
    const text = response.text();
    return { text };
  } catch (error) {
    console.error("Error using Gemini SDK:", error);
    return {
      text: "Sorry, I encountered an error communicating with my AI backend. Please try again later.",
    };
  }
}
