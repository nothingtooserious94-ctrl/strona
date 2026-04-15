import React from "react";
// To publish on Vercel with Vite, move this component into src/App.jsx and replace shadcn imports with local/simple components.
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function EnglishTeacherWebsite() {
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
                    <p className="mt-6 text-lg text-gray-600">Bez wkuwania. Bez stresu. Skupiamy się na mówieniu i sytuacjach, które naprawdę wykorzystasz w pracy i życiu.</p>
                    <ul className="mt-6 space-y-2 text-gray-700">
                        <li>✔ Przełamiesz blokadę mówienia</li>
                        <li>✔ Nauka dopasowana do Twoich celów</li>
                        <li>✔ Konkretny feedback po każdej lekcji</li>
                    </ul>
                    <div className="mt-8 flex flex-col gap-4 w-full">
                        <Button onClick={() => setShowContactModal(true)} className="text-lg px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 hover:text-white text-white w-full">Umów pierwszą lekcję</Button>
                        <a href="tel:737671073" onClick={handlePhoneClick} className="inline-flex text-base px-6 py-2 rounded-2xl items-center justify-center gap-2 w-full bg-gray-50 border border-gray-300 hover:bg-gray-100 transition-colors text-inherit leading-none"><Phone size={18} /> 737 671 073</a>
                    </div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="rounded-2xl shadow-xl p-8 bg-orange-50 border border-orange-100 opacity-80">
                        <p className="text-lg font-medium">Po pierwszej lekcji zaczynasz mówić – bez perfekcjonizmu, ale skutecznie.</p>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="flex -space-x-2 shrink-0 justify-start">
                                {["https://randomuser.me/api/portraits/men/62.jpg", "https://randomuser.me/api/portraits/women/21.jpg", "https://randomuser.me/api/portraits/women/28.jpg"].map((src, i) => (<img key={i} src={src} className="w-8 h-8 rounded-full border-2 border-white object-cover" />))}{<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold border-2 border-white">300+</div>}
                            </div>
                            <div className="text-gray-600 leading-tight">
                                <p className="hidden sm:block text-sm">5000+ przeprowadzonych lekcji • 5★ ocen</p>
                                <p className="block sm:hidden text-[11px]">5000+ lekcji</p>
                                <p className="block sm:hidden text-[11px]">5★ ocen</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* DLACZEGO JA */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-10">Dlaczego ja?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "10+ lat doświadczenia (indywidualnie, grupy, firmy)",
                            "Konwersacja, nauczanie dorosłych + fonetyka",
                            "Doświadczenie zdobywałem w USA i Anglii, pracując z native speakerami",
                            "Indywidualne podejście – każda lekcja dopasowana",
                            "Autorskie materiały i realne scenariusze",
                            "Feedback i notatki po każdej lekcji"
                        ].map((item, i) => (<Card key={i} className="rounded-2xl"><CardContent className="p-6">{item}</CardContent></Card>))}
                    </div>
                </div>
            </section>

            {/* VIDEO */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-8 text-center">Poznaj mnie i mój styl pracy</h2>
                <div className="rounded-[32px] overflow-hidden shadow-2xl border border-black bg-black p-3"><div onClick={() => window.open('https://youtube.com/shorts/Ompad8UvEZM', '_blank')} className="aspect-video rounded-[26px] overflow-hidden relative cursor-pointer group"><img src="https://i.ytimg.com/vi/Ompad8UvEZM/hqdefault.jpg" alt="Poznaj mnie i mój styl pracy" className="w-full h-full object-cover object-center scale-[1.33] group-hover:scale-[1.38] transition duration-500" /><div className="absolute top-0 bottom-0 left-0 w-[22%] bg-black"></div><div className="absolute top-0 bottom-0 right-0 w-[22%] bg-black"></div><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" /><div className="absolute inset-0 flex items-center justify-center"><div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition"><span className="text-3xl ml-1">▶</span></div></div><div className="absolute bottom-6 left-6 right-6 flex items-end justify-between"><div><p className="text-white text-2xl font-semibold">Poznaj mnie i mój styl pracy</p><p className="text-gray-300 text-sm mt-1">Kliknij, aby otworzyć film na YouTube</p></div><button onClick={(e) => { e.stopPropagation(); (async () => { try { await navigator.clipboard.writeText('https://youtube.com/shorts/Ompad8UvEZM'); alert('Link skopiowany'); } catch (err) { const ta = document.createElement('textarea'); ta.value = 'https://youtube.com/shorts/Ompad8UvEZM'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); alert('Link skopiowany'); } })(); }} className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition">Kopiuj link</button></div></div></div>
            </section>

            {/* OPINIE */}
            <section className="bg-orange-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold">Opinie kursantów</h2>
                        <p className="text-gray-600 mt-4">Realne efekty. Realne osoby. Zero marketingowego bullshitu.</p>
                        <div className="flex justify-center gap-10 mt-8">
                            <div><p className="text-3xl font-bold">10+ lat</p><p className="text-gray-500 text-sm">doświadczenia</p></div>
                            <div><p className="text-3xl font-bold">5000+</p><p className="text-gray-500 text-sm">lekcji</p></div>
                            <div><p className="text-3xl font-bold">5.0★</p><p className="text-gray-500 text-sm">średnia ocen</p></div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Emilia", avatar: "https://randomuser.me/api/portraits/women/12.jpg", text: "W kilka miesięcy przeszłam z A1 do rozmów na B1. Wszystko naturalnie, bez stresu. Marcin to tytan cierpliwości. Profesjonalne podejście." },
                            { name: "Szymon", avatar: "https://randomuser.me/api/portraits/men/76.jpg", text: "W końcu przestałem się bać mówić. Rozmowa stała się przyjemnością. Polecam z całego serducha!" },
                            { name: "Mateusz", avatar: "https://randomuser.me/api/portraits/men/23.jpg", text: "Na początku mówiłem pojedynczymi zdaniami i ciągle się zacinałem. Po kilku tygodniach zacząłem normalnie rozmawiać, nawet w pracy, gdzie wcześniej unikałem angielskiego =)" },
                            { name: "Anna", avatar: "https://randomuser.me/api/portraits/women/63.jpg", text: "Ogromna różnica w pracy. Maile i spotkania przestały być problemem. W końcu czuję się swobodnie podczas rozmów." },
                            { name: "Adam", avatar: "https://randomuser.me/api/portraits/men/62.jpg", text: "Zajęcia z Marcinem pozwoliły mi na pracę za granicą i otworzyły możliwości na globalny rynek." },
                            { name: "Patrycja", avatar: "https://randomuser.me/api/portraits/women/28.jpg", text: "Dużo cierpliwości i świetna atmosfera. Z każdej lekcji wychodzę z konkretnymi umiejętnościami." }
                        ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}><Card className="rounded-2xl shadow-sm hover:shadow-lg transition bg-orange-100 border-orange-200"><CardContent className="p-6"><div className="flex items-center gap-3 mb-3"><img src={item.avatar} className="w-10 h-10 rounded-full object-cover" /><div><p className="font-semibold">{item.name}</p><p className="text-green-500 text-sm">★★★★★</p></div></div><p className="text-gray-600">{item.text}</p></CardContent></Card></motion.div>))}
                    </div>
                </div>
            </section>

            {/* OFERTA */}
            <section className="py-16 max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-10">Oferta</h2>
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    <Card className="rounded-2xl shadow-md border-2 border-black h-full"><CardContent className="p-6 h-full flex flex-col"><h3 className="text-xl font-bold mb-4">1:1</h3><ul className="space-y-2 text-gray-600 flex-1"><li>✔ Nauka dopasowana do Twoich celów</li><li>✔ Konwersacje + praktyczne scenariusze</li><li>✔ Szybkie przełamanie bariery</li><li>✔ Feedback po każdej lekcji</li></ul><Button onClick={() => setShowContactModal(true)} className="mt-6 w-full rounded-2xl">Zacznij</Button></CardContent></Card>
                    <Card className="rounded-2xl shadow-md border-2 border-black h-full"><CardContent className="p-6 h-full flex flex-col"><h3 className="text-xl font-bold mb-4">Grupy (2–3 osoby)</h3><ul className="space-y-2 text-gray-600 flex-1"><li>✔ Podobny poziom (weryfikacja przed startem)</li><li>✔ Dynamiczne konwersacje</li><li>✔ Więcej mówienia w krótszym czasie</li><li>✔ Nauka przez interakcję</li></ul><Button onClick={() => setShowContactModal(true)} className="mt-6 w-full rounded-2xl">Dołącz</Button></CardContent></Card>
                    <Card className="rounded-2xl shadow-md border-2 border-black h-full"><CardContent className="p-6 h-full flex flex-col"><h3 className="text-xl font-bold mb-4">Firmy (B2B)</h3><ul className="space-y-2 text-gray-600 flex-1"><li>✔ Szkolenia dopasowane do branży</li><li>✔ Komunikacja biznesowa i spotkania</li><li>✔ Raporty postępów</li><li>✔ Elastyczne godziny</li></ul><Button onClick={() => setShowContactModal(true)} className="mt-6 w-full rounded-2xl">Zapytaj o ofertę</Button></CardContent></Card>
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
