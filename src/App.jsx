import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, X, Check, Users, Globe, User, FileText, Star } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import heroLesson from "@/assets/hero-lesson.png";

export default function App() {
    const [showContactModal, setShowContactModal] = useState(false);
    const [showPhoneModal, setShowPhoneModal] = useState(false);
    const handlePhoneClick = (e) => {
        if (window.innerWidth <= 768) return;
        e.preventDefault();
        setShowPhoneModal(true);
    };
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 text-gray-900 overflow-x-hidden">
            {/* HERO */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="text-sm font-semibold text-blue-600 mb-2">Angielski dla dorosłych • Konwersacje • Realne efekty</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">Zacznij mówić po angielsku już od pierwszej lekcji</h1>
                    <p className="mt-6 text-lg text-gray-600">Angielski, którego naprawdę użyjesz — w pracy, na rozmowach i w życiu codziennym.<br />Bez stresu i zbędnej teorii.</p>
                    <ul className="mt-6 space-y-3 text-gray-700">
                        <li className="flex items-center gap-2"><Check size={20} className="text-blue-600 shrink-0" /><span className="font-medium">Przełamiesz blokadę mówienia</span></li>
                        <li className="flex items-center gap-2"><Check size={20} className="text-blue-600 shrink-0" /><span className="font-medium">Nauka dopasowana do Twoich celów</span></li>
                        <li className="flex items-center gap-2"><Check size={20} className="text-blue-600 shrink-0" /><span className="font-medium">Konkretny feedback po każdej lekcji</span></li>
                    </ul>
                    <div className="mt-8 flex flex-col gap-4 w-full">
                        <Button onClick={() => setShowContactModal(true)} className="text-lg px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 hover:text-white text-white w-full">Umów pierwszą lekcję</Button>
                        <a href="tel:737671073" onClick={handlePhoneClick} className="inline-flex text-base px-6 py-2 rounded-2xl items-center justify-center gap-2 w-full bg-gray-50 border border-gray-300 hover:bg-gray-100 transition-colors text-inherit leading-none"><Phone size={18} /> 737 671 073</a>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative mx-auto w-full max-w-md md:max-w-none"
                >
                    <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-100/70 via-orange-50 to-sky-100 -z-10" />
                    <div className="absolute -top-2 -right-2 h-20 w-20 rounded-full bg-blue-400/20 blur-2xl" />
                    <div className="absolute bottom-24 -left-4 h-28 w-28 rounded-full bg-orange-300/25 blur-2xl" />

                    <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-black/5">
                        <img
                            src={heroLesson}
                            alt="Kursantka podczas lekcji angielskiego online"
                            className="aspect-[4/5] w-full object-cover object-[center_15%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4b]/75 via-[#1a2b4b]/15 to-transparent" />

                        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-md backdrop-blur-sm">
                            <MessageCircle size={14} className="shrink-0" />
                            Lekcja online
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                            <div className="rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-md">
                                <p className="text-base font-semibold leading-snug text-gray-800 sm:text-lg">
                                    Po pierwszej lekcji zaczynasz mówić –{" "}
                                    <span className="text-blue-600">bez perfekcjonizmu</span>, ale skutecznie.
                                </p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="flex -space-x-2 shrink-0 justify-start">
                                        {["https://randomuser.me/api/portraits/men/62.jpg", "https://randomuser.me/api/portraits/women/21.jpg", "https://randomuser.me/api/portraits/women/28.jpg"].map((src, i) => (
                                            <img key={i} src={src} className="h-8 w-8 rounded-full border-2 border-white object-cover" alt="" />
                                        ))}
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-xs font-semibold">300+</div>
                                    </div>
                                    <div className="leading-tight text-gray-600">
                                        <p className="hidden sm:block text-sm">5000+ przeprowadzonych lekcji • 5★ ocen</p>
                                        <p className="block sm:hidden text-[11px]">5000+ lekcji</p>
                                        <p className="block sm:hidden text-[11px]">5★ ocen</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* DLACZEGO JA */}
            <section className="bg-gray-50/60 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b]">Dlaczego warto uczyć się ze mną?</h2>
                        <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-blue-600" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-3">
                        {[
                            { icon: Users, title: "10+ lat doświadczenia", desc: "Indywidualnie, grupy, firmy" },
                            { icon: MessageCircle, title: "100% praktycznej konwersacji", desc: "" },
                            { icon: Globe, title: "Doświadczenie w USA i Anglii,", desc: "Praca z native speakerami" },
                            { icon: User, title: "Indywidualne podejście", desc: "każda lekcja dopasowana" },
                            { icon: FileText, title: "Autorskie materiały", desc: "i realne scenariusze" },
                            { icon: Star, title: "Feedback i notatki", desc: "po każdej lekcji" }
                        ].map(({ icon: Icon, title, desc }, i) => (
                            <div key={i} className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white px-3 py-6 text-center shadow-[0_4px_20px_rgba(26,43,75,0.06)] sm:px-4">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef2ff]">
                                    <Icon size={30} strokeWidth={2.25} className="text-[#2563eb]" />
                                </div>
                                <p className="text-sm font-bold leading-snug text-[#1a2b4b] sm:text-[15px]">{title}</p>
                                {desc && (
                                    <p className="mt-2 text-xs leading-snug text-slate-500 sm:text-sm">
                                        {desc}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VIDEO */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-8 text-center">Poznaj mnie i mój styl pracy</h2>
                <div className="rounded-[32px] overflow-hidden shadow-2xl border border-black bg-black p-3">
                    <div className="aspect-video rounded-[26px] overflow-hidden relative bg-black">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/nEQekcQjJsI?rel=0&modestbranding=1"
                            title="Poznaj mnie i mój styl pracy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            {/* OPINIE */}
            <section className="bg-orange-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold">Opinie kursantów</h2>
                        <p className="text-gray-600 mt-4">Szczerze o lekcjach i efektach nauki.</p>
                        <div className="flex justify-center gap-10 mt-8">
                            <div><p className="text-3xl font-bold">10+ lat</p><p className="text-gray-500 text-sm">doświadczenia</p></div>
                            <div><p className="text-3xl font-bold">5000+</p><p className="text-gray-500 text-sm">lekcji</p></div>
                            <div><p className="text-3xl font-bold">5.0★</p><p className="text-gray-500 text-sm">średnia ocen</p></div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Emilia", avatar: "https://randomuser.me/api/portraits/women/12.jpg", text: "W kilka miesięcy przeszłam z A1 do rozmów na B1. Wszystko naturalnie, bez stresu. Marcin to tytan cierpliwości. Profesjonalne podejście." },
                            { name: "Szymon", avatar: "https://randomuser.me/api/portraits/men/76.jpg", text: "Jeszcze niedawno bałem się mówić po angielsku. Dziś rozmowa sprawia mi przyjemność. Polecam Marcina z całego serducha!" },
                            { name: "Mateusz", avatar: "https://randomuser.me/api/portraits/men/23.jpg", text: "Na początku mówiłem pojedynczymi zdaniami i ciągle się zacinałem. Po kilku tygodniach zacząłem normalnie rozmawiać, nawet w pracy, gdzie wcześniej unikałem angielskiego =)" },
                            { name: "Anna", avatar: "https://randomuser.me/api/portraits/women/63.jpg", text: "Ogromna różnica w pracy. Maile i spotkania przestały być problemem. W końcu czuję się swobodnie podczas rozmów." },
                            { name: "Adam", avatar: "https://randomuser.me/api/portraits/men/62.jpg", text: "Dzięki zajęciom z Marcinem zdobyłem pewność siebie w komunikacji po angielsku, co pomogło mi znaleźć pracę za granicą. Dziś mieszkam poza Polską i wiem, jak ogromną różnicę zrobiła ta inwestycja w siebie." },
                            { name: "Patrycja", avatar: "https://randomuser.me/api/portraits/women/28.jpg", text: "Dużo cierpliwości i świetna atmosfera. Z każdej lekcji wychodzę z konkretnymi umiejętnościami." }
                        ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}><Card className="rounded-2xl shadow-sm hover:shadow-lg transition bg-orange-100 border-orange-200"><CardContent className="p-6"><div className="flex items-center gap-3 mb-3"><img src={item.avatar} className="w-10 h-10 rounded-full object-cover" /><div><p className="font-semibold">{item.name}</p><p className="text-green-500 text-sm">★★★★★</p></div></div><p className="text-gray-600">{item.text}</p></CardContent></Card></motion.div>))}
                    </div>
                </div>
            </section>

            {/* OFERTA */}
            <section className="py-16 max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-10">Oferta</h2>
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    <Card className="rounded-2xl shadow-md border-2 border-black h-full"><CardContent className="p-6 h-full flex flex-col"><h3 className="text-xl font-bold mb-4">1:1</h3><ul className="space-y-3 text-gray-600 flex-1">
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Nauka dopasowana do Twoich celów</li>
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Konwersacje + praktyczne scenariusze</li>
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Szybkie przełamanie bariery</li>
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Feedback po każdej lekcji</li>
                    </ul><Button onClick={() => setShowContactModal(true)} className="mt-6 w-full rounded-2xl">Zacznij</Button></CardContent></Card>
                    <Card className="rounded-2xl shadow-md border-2 border-black h-full"><CardContent className="p-6 h-full flex flex-col"><h3 className="text-xl font-bold mb-4">Grupy (2–3 osoby)</h3><ul className="space-y-3 text-gray-600 flex-1">
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Podobny poziom (weryfikacja przed startem)</li>
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Dynamiczne konwersacje</li>
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Więcej mówienia w krótszym czasie</li>
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Nauka przez interakcję</li>
                    </ul><Button onClick={() => setShowContactModal(true)} className="mt-6 w-full rounded-2xl">Dołącz</Button></CardContent></Card>
                    <Card className="rounded-2xl shadow-md border-2 border-black h-full"><CardContent className="p-6 h-full flex flex-col"><h3 className="text-xl font-bold mb-4">Firmy (B2B)</h3><ul className="space-y-3 text-gray-600 flex-1">
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Szkolenia dopasowane do branży</li>
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Komunikacja biznesowa i spotkania</li>
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Raporty postępów</li>
                        <li className="flex items-start gap-2"><Check size={16} className="text-blue-600 mt-1 shrink-0" /> Elastyczne godziny</li>
                    </ul><Button onClick={() => setShowContactModal(true)} className="mt-6 w-full rounded-2xl">Zapytaj o ofertę</Button></CardContent></Card>
                </div>
            </section>

            <section className="bg-black text-white py-16 text-center px-6"><h2 className="text-3xl font-semibold">Zacznij mówić po angielsku już teraz</h2><p className="mt-4 text-gray-300">Jedna decyzja dzieli Cię od realnej zmiany.</p><Button onClick={() => setShowContactModal(true)} className="mt-8 text-lg px-8 py-4 rounded-2xl bg-white text-black hover:bg-gray-100 hover:text-black">Umów pierwszą lekcję</Button></section>
            {showContactModal && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 relative">
                        <button onClick={() => setShowContactModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"><X size={22} /></button>
                        <h3 className="text-2xl font-bold text-center">Porozmawiajmy</h3>
                        <p className="text-gray-600 text-center mt-2">Wybierz najwygodniejszą formę kontaktu</p>
                        <div className="mt-6 space-y-3">
                            <a href="https://wa.me/48737671073?text=Cześć%20Marcin%2C%20chciałbym%20umówić%20pierwszą%20lekcję." target="_blank" className="flex items-center justify-center gap-3 w-full rounded-2xl bg-green-500 hover:bg-green-600 text-white py-3 font-medium"><MessageCircle size={18} /> WhatsApp</a>
                            <a href="tel:737671073" className="flex items-center justify-center gap-3 w-full rounded-2xl bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium"><Phone size={18} /> Zadzwoń</a>
                            <a href="mailto:kiemar246@gmail.com?subject=Pierwsza lekcja" className="flex items-center justify-center gap-3 w-full rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 font-medium"><Mail size={18} /> Email</a>
                        </div>
                    </div>
                </div>
            )}
            {showPhoneModal && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-6 relative">
                        <button onClick={() => setShowPhoneModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"><X size={22} /></button>
                        <h3 className="text-2xl font-bold text-center">Zadzwoń</h3>
                        <p className="text-gray-600 text-center mt-2">737 671 073</p>
                        <div className="mt-6 space-y-3">
                            <a href="tel:737671073" className="flex items-center justify-center gap-3 w-full rounded-2xl bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium"><Phone size={18} /> Zadzwoń teraz</a>
                            <button onClick={async () => { try { await navigator.clipboard.writeText('737671073'); alert('Numer skopiowany'); } catch (err) { const ta = document.createElement('textarea'); ta.value = '737671073'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); alert('Numer skopiowany'); } }} className="w-full rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 font-medium">Kopiuj numer</button>
                        </div>
                    </div>
                </div>
            )}
            <footer className="py-10 text-center text-gray-500"><p>Marcin Kierzkowski</p></footer>
        </div>
    );
}
