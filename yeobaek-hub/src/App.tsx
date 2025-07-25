import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  { title: "AI 기반 자동화", description: "AI + MCP 기반 자동화 어시스턴트, 추천 시스템 팀, 기록 정보 저장소 등 개발" },
  { title: "플랫폼 구축", description: "학과 커뮤니티 연계 정보 플랫폼 구축, 지속 가능한 시스템 설계" },
  { title: "실천적 학습", description: "정보학 기반 실험과 기술 융합 프로젝트를 통한 체계적 역량 개발" },
];

const projects = [
  { title: "기획", description: "전공(정보학) 기반 문제 정의, 실험 구조 설계, UI 흐름 구성" },
  { title: "실험", description: "Lab별 주제 중심 실험 수행 (Automation, Archive, AICurator 등)" },
  { title: "기술", description: "Python, Firebase, Prompt Engineering, API 연동 실습" },
  { title: "문서화", description: "실험 흐름도, 프로젝트 설계, 결과물 정리 및 공유" },
  { title: "공유", description: "통합 플랫폼(HUB) 구축 및 결과물 기록화/공유" },
  { title: "대외활동", description: "공모전, 해커톤, 논문 리뷰 및 프로젝트 확장" },
];

const labs = [
  { title: "Automation Lab", status: "활동 중", description: "Gemini 기반 자동화 프로젝트 구현, MCP 구축 후 Claude 연동을 통한 어시스턴트(MCP 기반) 구현", tag: "AI & Automation", color: "green" },
  { title: "Archive Lab", status: "활동 예정", description: "논문 및 학술자료 구조화, 저장소(DSPace/Notion) 구축", tag: "Data Management", color: "blue" },
  { title: "AICurator Lab", status: "활동 예정", description: "KDC 기반 추천 시스템 + Gemini 프로젝트 구조 설계", tag: "AI Curation", color: "purple" },
  { title: "Idea Lab", status: "활동 중", description: "전공 기반 아이디어 발굴 및 구조화", tag: "Innovation", color: "orange" },
];

const techs = ["Python", "MySQL", "GitHub", "Firebase", "SPSS", "Notion", "Colab", "AI/ML"];

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "안녕하세요! 무엇을 도와드릴까요?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: "예시 응답입니다." }]);
    }, 1000);
    setInput("");
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-xl font-bold text-blue-700">Yeobaek Hub</div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#goal" className="hover:text-blue-600">동아리 소개</a>
          <a href="#lab" className="hover:text-blue-600">Lab track</a>
          <a href="#projects" className="hover:text-blue-600">주요 활동</a>
          <a href="#past" className="hover:text-blue-600">과거 활동</a>
          <button className="text-white bg-blue-700 rounded px-3 py-1 text-sm">F&Q</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col-reverse lg:flex-row justify-between items-center px-8 py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="space-y-5 max-w-xl">
          <h1 className="text-4xl font-bold leading-tight">0과 1 사이, 지식의 '여백'을 채우다!</h1>
          <p className="text-sm">문헌정보학과 학생들이 모여 정보의 바다를 항해하고, 지혜의 시스템을 구축하며, 함께 성장하는 이야기입니다.</p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium">프로젝트 들러보기</button>
            <button className="border border-white px-4 py-2 rounded">동아리 참여하기</button>
          </div>
        </div>
        <img src="/yeobaek-cat.png" alt="Mascot" className="w-60" />
      </section>

      {/* Main Goal */}
      <section id="goal" className="py-20 px-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Main Goal</h2>
        <p className="text-gray-600 mb-12">정보학 기반 실험과 기술 융합 프로젝트를 통한 실천적 학습</p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div key={i} className="bg-blue-50 rounded-xl p-6 shadow-sm" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-700">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Project */}
      <section id="projects" className="py-20 px-8 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-2">Main Project</h2>
        <p className="text-gray-600 mb-12">학습을 통해 얻은 지식을 바탕으로 공모전, 대외활동 등에 참여합니다</p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold text-blue-700 mb-2">{p.title}</h4>
              <p className="text-sm text-gray-700">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lab Track */}
      <section id="lab" className="py-20 px-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Lab Track</h2>
        <p className="text-gray-600 mb-12">각 Lab별 특화된 연구와 실험을 진행합니다</p>
        <div className="grid md:grid-cols-2 gap-6">
          {labs.map((l, i) => (
            <div key={i} className={`rounded-xl p-5 shadow-sm border-l-8 border-${l.color}-400 text-left bg-${l.color}-50`}>
              <h4 className="font-semibold mb-1">{l.title} <span className={`ml-2 text-sm text-${l.color}-600`}>({l.status})</span></h4>
              <p className="text-sm text-gray-700 mb-1">{l.description}</p>
              <span className={`text-xs text-${l.color}-500 font-medium`}>{l.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 기술 플랫폼 */}
      <section className="py-20 px-8 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6">활용 기술 및 플랫폼</h2>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 place-items-center">
          {techs.map((tech, i) => (
            <div key={i} className="rounded-lg px-4 py-2 bg-white shadow text-sm font-medium">{tech}</div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 text-center bg-gradient-to-b from-blue-400 to-blue-600 text-white">
        <h2 className="text-xl font-bold mb-4">함께 성장할 준비가 되셨나요?</h2>
        <p className="mb-6 text-sm">여백과 함께 지식의 경계를 넓히고, 미래의 정보 전문가로 성장해보세요.</p>
        <div className="space-x-4">
          <button className="bg-white text-blue-700 px-4 py-2 rounded font-medium">동아리 지원 양식 다운로드</button>
          <button className="border border-white px-4 py-2 rounded">동아리 지원하기</button>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen ? (
          <div className="w-80 h-96 bg-white rounded-xl shadow-xl p-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-blue-700">Yeobaek Chat</h3>
              <button onClick={() => setIsChatOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2 mb-2">
              {messages.map((m, i) => (
                <div key={i} className={`text-sm ${m.role === "assistant" ? "text-left" : "text-right"}`}>
                  <span className="inline-block px-3 py-2 rounded bg-gray-100 text-gray-800">{m.content}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center border-t pt-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-2 py-1 border rounded text-sm"
                placeholder="메시지를 입력하세요"
              />
              <button onClick={handleSend} className="ml-2 text-blue-600"><Send className="w-5 h-5" /></button>
            </div>
          </div>
        ) : (
          <button onClick={() => setIsChatOpen(true)} className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
