import  { useState } from 'react';
import { MessageCircle, Users, Code, Rocket, Github, Instagram, Book, Send, X } from 'lucide-react';

const YeobaekHub = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '안녕하세요! Yeobaek Hub에 오신 것을 환영합니다. 궁금한 것이 있으시면 언제든지 물어보세요!' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 클로드 API 호출 함수 (실제 구현시에는 백엔드에서 처리해야 함)
  const callClaudeAPI = async (message:any) => {
    // 실제 구현에서는 여기에 클로드 API 호출 코드가 들어갑니다
    // 보안상 API 키는 백엔드에서 처리해야 합니다
    
    // 데모용 응답
    const demoResponses = [
      "Yeobaek Hub는 AI와 프로그래밍 기술을 연구하는 동아리입니다. 다양한 프로젝트를 통해 실무 경험을 쌓을 수 있어요!",
      "저희 동아리에서는 Python, JavaScript, React, AI/ML 등 다양한 기술 스택을 다룹니다.",
      "프로젝트에 참여하고 싶으시다면 Get Started 페이지를 확인해보세요. 언제든 환영합니다!",
      "Lab Info에서 저희 연구실의 주요 연구 분야와 진행 중인 프로젝트들을 확인할 수 있습니다."
    ];
    
    return demoResponses[Math.floor(Math.random() * demoResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    try {
      const response = await callClaudeAPI(inputMessage);
      const assistantMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('API 호출 오류:', error);
      const errorMessage = { role: 'assistant', content: '죄송합니다. 일시적인 오류가 발생했습니다.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const techStacks = [
    { name: 'Python', icon: '🐍', color: 'bg-yellow-500' },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-400' },
    { name: 'React', icon: '⚛️', color: 'bg-blue-400' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-500' },
    { name: 'AI/ML', icon: '🤖', color: 'bg-purple-500' },
    { name: 'Firebase', icon: '🔥', color: 'bg-orange-500' }
  ];

  const projects = [
    {
      title: "AI 챗봇 개발",
      description: "클로드 API를 활용한 지능형 대화 시스템",
      tech: ["React", "Node.js", "Claude API"],
      status: "진행중"
    },
    {
      title: "웹 자동화 도구",
      description: "업무 효율성을 위한 자동화 솔루션",
      tech: ["Python", "Selenium", "Flask"],
      status: "완료"
    },
    {
      title: "데이터 분석 플랫폼",
      description: "빅데이터 처리 및 시각화 시스템",
      tech: ["Python", "Pandas", "React"],
      status: "기획중"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">Yeobaek Hub</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Community</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Lab Info</a>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Assistant Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
              <h1 className="text-3xl font-bold mb-4">AI-based Automation Assistant</h1>
              <p className="text-purple-100 mb-6">클로드 API를 활용한 지능형 어시스턴트로 더 스마트한 개발 경험을 제공합니다</p>
              <button 
                onClick={() => setIsChatOpen(true)}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Assistant</span>
              </button>
            </div>

            {/* Lab Info */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Users className="w-6 h-6 text-purple-400" />
                <span>Lab Info</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-300">주요 연구 분야</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-300">
                    <li>• Modular Command Processing</li>
                    <li>• Prompt Engineering</li>
                    <li>• Intent Parsing</li>
                    <li>• LLM API Integration</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-300">연구실 현황</h3>
                  <div className="mt-2 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>활동 멤버</span>
                      <span className="text-purple-400">15명</span>
                    </div>
                    <div className="flex justify-between">
                      <span>진행 프로젝트</span>
                      <span className="text-purple-400">8개</span>
                    </div>
                    <div className="flex justify-between">
                      <span>완료 프로젝트</span>
                      <span className="text-purple-400">23개</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Projects */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Rocket className="w-6 h-6 text-purple-400" />
                <span>Main Projects</span>
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{project.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === '완료' ? 'bg-green-600' : 
                        project.status === '진행중' ? 'bg-blue-600' : 'bg-yellow-600'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-purple-600 px-2 py-1 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-4">기술 스택</h2>
              <div className="grid grid-cols-2 gap-3">
                {techStacks.map((tech, index) => (
                  <div key={index} className="bg-gray-700 p-3 rounded-lg text-center hover:bg-gray-600 transition-colors">
                    <div className="text-2xl mb-1">{tech.icon}</div>
                    <div className="text-sm font-medium">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-4">관련 페이지</h2>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                  <Instagram className="w-5 h-5 text-pink-400" />
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                  <Github className="w-5 h-5 text-gray-300" />
                  <span>GitHub</span>
                </a>
                <a href="#" className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                  <Book className="w-5 h-5 text-blue-400" />
                  <span>Tistory</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 text-sm">
              <p>© 2024 Yeobaek Hub</p>
              <p>@yeobaek7.ub</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl w-full max-w-md h-96 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold">Chatbot</span>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-gray-100'
                  }`}>
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 px-4 py-2 rounded-lg text-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 px-4 py-2 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YeobaekHub;