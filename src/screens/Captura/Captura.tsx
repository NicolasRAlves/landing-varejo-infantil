import {
    ArrowRightIcon,
    CalendarIcon,
    MapPinIcon,
} from "lucide-react";
import React from "react";

import {Button} from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import {Separator} from "../../components/ui/separator";



// Data for repeating elements
const marqueeItems = [
    {text: "ENRIQUECENDO COM", icon: "/icon.svg"},
    {text: "VAREJO INFANTIL", icon: "/icon.svg"},
    {text: "ENRIQUECENDO COM", icon: "/icon.svg"},
    {text: "VAREJO INFANTIL", icon: "/icon.svg"},
    {text: "ENRIQUECENDO COM", icon: "/icon.svg"},
    {text: "VAREJO INFANTIL", icon: "/icon.svg"},
    {text: "ENRIQUECENDO COM", icon: "/icon.svg"},
    {text: "VAREJO INFANTIL", icon: "/icon.svg"},
    {text: "ENRIQUECENDO COM", icon: "/icon.svg"},
    {text: "VAREJO INFANTIL", icon: "/icon.svg"},
];

const infoCards = [
    {
        id: 1,
        title: "O que vou aprender?",
        icon: "/vector-2.svg",
        content:
            "Prepare-se para ter acesso ao plano completo para atrair clientes, vender mais, ser reconhecida e viver exclusivamente do faturamento de sua loja, sem depender de promoções ou grandes investimentos, mesmo começando do absoluto zero.",
    },
    {
        id: 2,
        title: "Para quem é o evento?",
        icon: "/vector-7.svg",
        content:
            "Para lojistas que sonham com uma loja infantil que vá além de simplesmente pagar boletos e apagar incêndios.\n\nUma loja que realmente transforme sua realidade, traga liberdade, coloque dinheiro no seu bolso e faça de você uma referência no mercado.\n\nEstá na hora de deixar para trás o amadorismo e construir o negócio que você merece!",
    },
    {
        id: 3,
        title: "Quando será o evento?",
        icon: "/group.png",
        content:
            "Nos dias 24, 25, 26 E 30 de Março, às 07h30.\n\nSerá o seu adeus ao amadorismo, o seu primeiro passo rumo ao sucesso da sua loja.",
    },
];

export const Captura = (): JSX.Element => {
    return (
        <main className="relative bg-neutral-950 overflow-x-hidden">
            {/* Hero Section */}
            <section
                className="relative w-full h-screen bg-cover bg-center bg-no-repeat px-6 md:px-12 py-12"
                style={{backgroundImage: "url('/psdprancheta-1-2.png')"}}
            >
                <div className="absolute inset-0 "/>

                <div
                    className="relative z-10 w-full max-w-[620px] flex flex-col items-start gap-10 h-full justify-center ml-0 md:ml-40">
                    {/* Logo + Info */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                        {/* Logo */}
                        <div className="relative w-[164px] h-[119.28px] shrink-0">
                            <div className="absolute w-[164px] h-[98px] top-[21px] left-0">
                                <img className="absolute w-[164px] h-[54px] top-0 left-0" alt="Varejo"
                                     src="/vector-4.svg"/>
                                <img className="absolute w-[154px] h-[52px] top-[46px] left-1" alt="Infantil"
                                     src="/infantil.svg"/>
                                <img className="absolute w-[17px] h-[25px] top-[13px] left-[138px]" alt="Dash"
                                     src="/-.svg"/>
                            </div>
                            <img className="absolute w-[139px] h-4 top-0 left-[17px]" alt="Frame" src="/frame-1.svg"/>
                        </div>

                        {/* Informações */}
                        <div className="flex flex-col items-start justify-center gap-3 text-white">
                            <div className="flex items-center gap-2.5">
                                <CalendarIcon className="w-6 h-6 text-white"/>
                                <p className="text-base leading-6">24, 25, 26 e 30 de Março, às 07h30</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPinIcon className="w-6 h-6 text-white"/>
                                <p className="text-base leading-6">Online, Ao Vivo no Youtube e Gratuito</p>
                            </div>
                        </div>
                    </div>

                    {/* Texto principal */}
                    <div className="flex flex-col items-start gap-6 w-full text-white">
                        <h1 className="text-2xl md:text-3xl font-semibold leading-snug text-left">
                            Tenha acesso ao plano completo para atrair clientes, vender mais, ser reconhecida e viver
                            exclusivamente do faturamento de sua loja.
                        </h1>
                        <p className="text-lg leading-relaxed text-left">
                            Sem depender de promoções ou grandes investimentos, mesmo começando do absoluto zero.
                        </p>
                    </div>

                    {/* Formulário */}
                    <div className="flex flex-col items-start gap-3 w-full">
                        <Input
                            className="h-[60px] bg-white rounded-lg border border-[#888888] px-6 text-base w-full"
                            placeholder="Seu melhor e-mail:"
                        />
                        <Input
                            className="h-[60px] bg-white rounded-lg border border-[#888888] px-6 text-base w-full"
                            placeholder="Seu DDD + WhatsApp:"
                        />
                        <Button
                            className="w-full flex items-center justify-center gap-2.5 px-20 py-[25px] rounded-lg [background:linear-gradient(139deg,rgba(69,255,102,0.73)_0%,rgba(30,213,63,0.73)_25%,rgba(53,190,78,0.73)_38%,rgba(0,87,16,0.73)_100%)] [font-family:'Neue_Haas_Grotesk_Display_Pro-Roman',Helvetica] text-x-01 text-xl">
                            QUERO ME INSCREVER
                            <ArrowRightIcon className="w-[19px] h-[19px]"/>
                        </Button>
                    </div>
                </div>

            </section>


            {/* Marquee Banner */}
            <section
                className="w-full h-[40px] border-t border-b border-[#9e774240] overflow-hidden  flex items-center justify-center">
                <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
                    {[...Array(3)].map((_, groupIndex) => (
                        <div key={groupIndex} className="flex items-center">
                            {marqueeItems.map((item, index) => (
                                <React.Fragment key={`${groupIndex}-${index}`}>
                                    <img className="w-[15px] h-[15px] mx-4" alt="Icon" src={item.icon}/>
                                    <span
                                        className="[font-family:'Albra_Display_TRIAL-Regular',Helvetica] font-normal text-[#c9c9c9] text-sm leading-[14px] mx-4">
                    {item.text}
                  </span>
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Info iPad */}
            <section
                className="relative w-full h-screen bg-no-repeat"
                style={{
                    backgroundImage: "url('/ipad.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "left 200px center",
                    backgroundColor: "#0F0F0F",
                }}
            >
                <div className="absolute inset-0"/>

                <div
                    className="relative z-10 max-w-[1280px] mx-auto h-full flex items-center justify-between px-6 md:px-20">

                    <div className="hidden md:block w-1/2"/>

                    {/* Cards */}
                    <div className="w-full md:w-1/2 flex flex-col gap-8">
                        {infoCards.map((card) => (
                            <div
                                key={card.id}
                                className="bg-[#1c1c1c] p-6 rounded-md relative border border-[#2b2b2b]"
                            >
                                <div
                                    className="absolute top-0 left-6 w-[60px] h-[4px] bg-gradient-to-r from-[#ffcc70] to-[#ffe1a4] rounded-b"/>

                                <div className="flex items-start gap-4">
                                    <img src={card.icon} alt={card.title} className="w-6 h-6 mt-1"/>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white text-lg font-semibold">{card.title}</h3>
                                        <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                                            {card.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* About Section */}
            <section
                className="w-full border-t border-b border-[#343434] [background:linear-gradient(157deg,rgba(42,42,42,1)_0%,rgba(12,12,12,1)_100%)] py-16">
                <div className="flex flex-col w-full max-w-[1084px] items-center gap-10 mx-auto px-4">
                    <div
                        className="flex w-[348px] h-[53px] items-center justify-center gap-2.5 p-2.5 rounded-[1000px] border border-solid border-[#3b3b3b]">
                        <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Light',Helvetica] font-light text-white text-2xl leading-[74.1px]">
                            QUEM SOU EU?
                        </h2>
                    </div>

                    <img
                        className="w-full max-w-[1084px] h-auto"
                        alt="Ana Camargo"
                        src="/ana-camargo.svg"
                    />

                    <div className="flex flex-col md:flex-row items-center gap-[53px]">
                        <img
                            className="w-full md:w-[532px] h-auto md:h-[446px] object-cover"
                            alt="Ana Camargo"
                            src="/image.png"
                        />

                        <div className="flex flex-col w-full md:w-[499px] items-start gap-[30px]">
                            <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Light',Helvetica] font-light text-white text-lg leading-[25.2px]">
                                Ana tem 28 anos, empreendedora nata desde os 19, tem uma loja
                                infantil de destaque que se chama MUVILÊ, conquistando cada vez
                                mais resultados surpreendentes, é especialista em marketing e
                                gestão de lojas há mais de 4 anos.
                                <br/>
                                <br/>
                                Ana é mentora de centenas de lojistas por todo o Brasil, está no
                                campo de batalha e ajuda todos os dias mulheres a se tornarem
                                lojistas de sucesso.
                                <br/>
                                <br/>
                                Com seu método lojista 4 em 1, já transformou centenas de lojas
                                fazendo o faturamento do mês em apenas 1 semana.
                                <br/>
                                <br/>E hoje, ela quer ajudar você a conquistar resultados
                                extraordinários.
                            </p>

                            <Button
                                className="w-full flex items-center justify-center gap-2.5 px-20 py-[25px] rounded-lg [background:linear-gradient(139deg,rgba(69,255,102,0.73)_0%,rgba(30,213,63,0.73)_25%,rgba(53,190,78,0.73)_38%,rgba(0,87,16,0.73)_100%)] [font-family:'Neue_Haas_Grotesk_Display_Pro-Roman',Helvetica] text-x-01 text-xl">
                                QUERO ME INSCREVER
                                <ArrowRightIcon className="w-[19px] h-[19px]"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full h-[250px] bg-[#1a1a1a]">
                <div className="flex flex-col w-full max-w-[1080px] items-center justify-center gap-5 mx-auto pt-[90px]">


                    <Separator className="w-full h-px bg-[#272727]"/>

                    <div className="flex flex-col items-center justify-center gap-2 w-full">
                        <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-x-01 text-sm leading-[28.8px]">
                            © COPYRIGHT 2025. TODOS OS DIREITOS RESERVADOS.
                        </p>
                        <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-x-01 text-sm leading-[28.8px]">
                            Desenvolvido por <a href="https://nicolasralves.github.io/portifolio.nicolas.2025/"
                                                target="_blank" rel="noopener noreferrer"
                                                className="underline hover:text-x-02">Nicolas Rodrigues</a>
                        </p>
                    </div>
                </div>
            </footer>

        </main>
    );
};