import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Red Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-15 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Navigation */}
        <header className="p-3 sm:p-6">
          <div className="grid grid-cols-2 sm:flex sm:justify-center gap-2 sm:gap-4">
            <Button
              variant="outline"
              className="bg-black border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
              onClick={() =>
                window.open("https://vk.com/argent.klnz", "_blank")
              }
            >
              <Icon name="Users" className="mr-1 sm:mr-2" size={14} />
              <span className="hidden sm:inline">Сообщество ВК</span>
              <span className="sm:hidden">ВК</span>
            </Button>
            <Button
              variant="outline"
              className="bg-black border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 opacity-50"
              disabled
            >
              <Icon name="MessageCircle" className="mr-1 sm:mr-2" size={14} />
              <span className="hidden sm:inline">Сообщество ТГ</span>
              <span className="sm:hidden">ТГ</span>
            </Button>
            <Button
              variant="outline"
              className="bg-black border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
              onClick={() => window.open("https://t.me/utioxe", "_blank")}
            >
              <Icon name="User" className="mr-1 sm:mr-2" size={14} />
              <span className="hidden sm:inline">ТГ Создателя</span>
              <span className="sm:hidden">ТГ</span>
            </Button>
            <Button
              variant="outline"
              className="bg-black border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
              onClick={() => window.open("https://vk.com/theoxe", "_blank")}
            >
              <Icon name="UserCheck" className="mr-1 sm:mr-2" size={14} />
              <span className="hidden sm:inline">ВК Создателя</span>
              <span className="sm:hidden">ВК</span>
            </Button>
          </div>
        </header>

        {/* Main Hero Section */}
        <main className="flex-1 flex items-center justify-center px-3 sm:px-6">
          <div className="max-w-4xl text-center w-full">
            {/* Logo/Avatar */}
            <div className="mb-6 sm:mb-8">
              <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-6">
                <img
                  src="https://v3.fal.media/files/tiger/Jn8UTIMpf_L-U_UlHAAzW_output.png"
                  alt="argent.klnz logo"
                  className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.6)]"
                />
                <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-red-500 animate-pulse"></div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 animate-pulse">
              ARGENT.KLNZ
            </h1>

            <div className="text-sm sm:text-xl md:text-2xl font-bold mb-4 text-red-300 tracking-wider px-2">
              ВЕЛИЧАЙШАЯ СЕМЬЯ ПРОЕКТА MATRESHKA
            </div>

            {/* Main Story Card */}
            <Card className="bg-black/80 border-red-500 border-2 p-4 sm:p-8 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_40px_rgba(255,0,0,0.2)]">
              <div className="text-left space-y-3 sm:space-y-4 text-gray-300 leading-relaxed">
                <p className="text-red-400 font-bold text-base sm:text-lg">
                  Добро пожаловать в империю argent.klnz!
                </p>
                <p className="text-sm sm:text-base">
                  Наша семья была создана в далеком 2023 году, но развиваться мы
                  начали только в 2024. С периода 2024 по 2025 мы взяли под
                  контроль все бизнесы на 23 сервере.
                </p>
                <p className="text-sm sm:text-base">
                  Был нулевой отпор — иногда оппоненты попадались приличные, но
                  для наших сил они просто пустота. Забирали бизнесы у нас
                  только ночью, используя рукопашку, калаши и другие виды
                  оружий.
                </p>
                <p className="text-sm sm:text-base">
                  Мы не игроки 23 сервера — мы всего лишь пришли завоевать его.
                  <span className="text-red-400 font-bold">
                    {" "}
                    И у нас получилось!
                  </span>
                </p>
                <p className="text-sm sm:text-base">
                  Несмотря на все трудности, сейчас мы планируем организовывать
                  свою семью на других серверах или перейти на другой проект...
                </p>
              </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <Card className="bg-black/60 border-red-500 p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">
                  2023
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  Год основания
                </div>
              </Card>
              <Card className="bg-black/60 border-red-500 p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">
                  100%
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  Контроль 23 сервера
                </div>
              </Card>
              <Card className="bg-black/60 border-red-500 p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">
                  ∞
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  Планы на будущее
                </div>
              </Card>
            </div>

            {/* Glitch Text Effect */}
            <div className="text-red-500 font-mono text-xs sm:text-sm animate-pulse mb-4">
              &gt; СИСТЕМА ЗАХВАЧЕНА_
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 sm:p-6 text-center text-gray-500 border-t border-red-500/30">
          <p className="text-xs sm:text-sm px-2">
            © 2024 ARGENT.KLNZ • MATRESHKA PROJECT • СЕРВЕР 23 ПОД КОНТРОЛЕМ
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
