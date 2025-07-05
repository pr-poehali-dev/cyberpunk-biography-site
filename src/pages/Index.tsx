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
        <header className="p-6">
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              className="bg-black border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              onClick={() =>
                window.open("https://vk.com/argent.klnz", "_blank")
              }
            >
              <Icon name="Users" className="mr-2" size={16} />
              Сообщество ВК
            </Button>
            <Button
              variant="outline"
              className="bg-black border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              disabled
            >
              <Icon name="MessageCircle" className="mr-2" size={16} />
              Сообщество ТГ
            </Button>
            <Button
              variant="outline"
              className="bg-black border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              onClick={() => window.open("https://t.me/utioxe", "_blank")}
            >
              <Icon name="User" className="mr-2" size={16} />
              ТГ Создателя
            </Button>
            <Button
              variant="outline"
              className="bg-black border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              onClick={() => window.open("https://vk.com/theoxe", "_blank")}
            >
              <Icon name="UserCheck" className="mr-2" size={16} />
              ВК Создателя
            </Button>
          </div>
        </header>

        {/* Main Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            {/* Logo/Avatar */}
            <div className="mb-8">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <img
                  src="https://v3.fal.media/files/tiger/Jn8UTIMpf_L-U_UlHAAzW_output.png"
                  alt="argent.klnz logo"
                  className="w-full h-full object-cover rounded-full border-4 border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.6)]"
                />
                <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-pulse"></div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 animate-pulse">
              ARGENT.KLNZ
            </h1>

            <div className="text-xl md:text-2xl font-bold mb-4 text-red-300 tracking-wider">
              ВЕЛИЧАЙШАЯ СЕМЬЯ ПРОЕКТА MATRESHKA
            </div>

            {/* Main Story Card */}
            <Card className="bg-black/80 border-red-500 border-2 p-8 mb-8 backdrop-blur-sm shadow-[0_0_40px_rgba(255,0,0,0.2)]">
              <div className="text-left space-y-4 text-gray-300 leading-relaxed">
                <p className="text-red-400 font-bold text-lg">
                  Добро пожаловать в империю argent.klnz!
                </p>
                <p>
                  Наша семья была создана в далеком 2023 году, но развиваться мы
                  начали только в 2024. С периода 2024 по 2025 мы взяли под
                  контроль все бизнесы на 23 сервере.
                </p>
                <p>
                  Был нулевой отпор — иногда оппоненты попадались приличные, но
                  для наших сил они просто пустота. Забирали бизнесы у нас
                  только ночью, используя рукопашку, калаши и другие виды
                  оружий.
                </p>
                <p>
                  Мы не игроки 23 сервера — мы всего лишь пришли завоевать его.
                  <span className="text-red-400 font-bold">
                    {" "}
                    И у нас получилось!
                  </span>
                </p>
                <p>
                  Несмотря на все трудности, сейчас мы планируем организовывать
                  свою семью на других серверах или перейти на другой проект...
                </p>
              </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-black/60 border-red-500 p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">2023</div>
                <div className="text-gray-300">Год основания</div>
              </Card>
              <Card className="bg-black/60 border-red-500 p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
                <div className="text-gray-300">Контроль 23 сервера</div>
              </Card>
              <Card className="bg-black/60 border-red-500 p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">∞</div>
                <div className="text-gray-300">Планы на будущее</div>
              </Card>
            </div>

            {/* Glitch Text Effect */}
            <div className="text-red-500 font-mono text-sm animate-pulse mb-4">
              &gt; СИСТЕМА ЗАХВАЧЕНА_
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center text-gray-500 border-t border-red-500/30">
          <p className="text-sm">
            © 2024 ARGENT.KLNZ • MATRESHKA PROJECT • СЕРВЕР 23 ПОД КОНТРОЛЕМ
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
