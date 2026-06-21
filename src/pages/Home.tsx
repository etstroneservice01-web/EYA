import AnimatedPage from "../components/AnimatedPage";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Users, Globe2, Calendar, Target, Download } from "lucide-react";
import { useState, useEffect } from "react";

const stats = [
  { label: "Clubs Actifs", value: "9", icon: Users },
  { label: "Axes Stratégiques", value: "3", icon: Target },
  { label: "Événements Annuels", value: "10+", icon: Calendar },
  { label: "Communauté", value: "Active", icon: Globe2 },
];

export default function Home() {
  const [downloads, setDownloads] = useState(142); // Initial simulated count

  // Synchronize downloads purely on client side for demo
  useEffect(() => {
    const saved = localStorage.getItem("eya_downloads");
    if (saved) {
      setDownloads(parseInt(saved, 10));
    }
  }, []);

  const handleDownload = () => {
    const newCount = downloads + 1;
    setDownloads(newCount);
    localStorage.setItem("eya_downloads", newCount.toString());
    
    // Simulate image download
    const link = document.createElement("a");
    link.href = 'https://i.imgur.com/gNa6vkO.jpeg';
    link.target = "_blank";
    link.download = "soutien-eya-bde.jpeg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatedPage className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6">
        {/* LEFT COLUMN: HERO & STATS */}
        <section className="flex-1 lg:flex-[1.2] flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-center relative overflow-hidden min-h-[500px]"
          >
            {/* Subtle Jarre background */}
            <div 
              className="absolute inset-0 z-0 opacity-[0.15] bg-cover bg-center"
              style={{ backgroundImage: "url('https://i.imgur.com/qlyBrcK.jpg')" }}
            ></div>
            
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-eyayellow/20 rounded-full blur-3xl z-0"></div>
            
            <div className="flex items-start relative z-10">
              <span className="inline-block px-3 py-1 bg-eyayellow text-eyablue text-[10px] font-bold uppercase rounded-full mb-6 tracking-widest">Élections BDE 2026-2027</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-eyablue leading-[0.9] mb-6 relative z-10">
              FAIRE <br/> BOUGER ADS <br/> <span className="text-yellow-500">ENSEMBLE</span>
            </h2>
            
            <p className="text-slate-800 font-medium text-lg leading-relaxed mb-8 max-w-xl relative z-10">
              Une vision plus participative, plus créative et plus vivante de la vie étudiante.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-auto relative z-10">
              <Link to="/projet" className="px-6 py-3 bg-eyablue text-white rounded-xl font-bold text-sm shadow-lg shadow-eyablue/20 hover:bg-blue-800 transition-colors">
                Découvrir notre projet
              </Link>
              <Link to="/pourquoi-nous" className="px-6 py-3 bg-white text-eyablue border-2 border-eyablue rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors hover:border-blue-800">
                Rejoindre l'aventure
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 shrink-0">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`p-5 rounded-2xl border ${
                  i === 0 ? "bg-eyablue text-white border-transparent" : 
                  i === 3 ? "bg-eyayellow text-eyablue border-transparent" : 
                  "bg-white border-slate-200 text-eyablue"
                } flex flex-col justify-center`}
              >
                <div className={`text-3xl font-black mb-1 ${i === 0 ? "text-eyayellow" : ""}`}>
                  {stat.value}
                </div>
                <div className={`text-[10px] md:text-xs uppercase font-bold ${
                  i === 0 || i === 3 ? "opacity-80" : "text-slate-500"
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* RIGHT COLUMN: Poster Download */}
        <section className="flex-1 lg:flex-[0.8] flex flex-col gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex-1 flex flex-col items-center justify-center min-h-[400px] overflow-hidden relative group">
            <h3 className="text-xl font-black text-eyablue mb-3 z-10 flex items-center gap-2">
               <Download size={24} className="text-eyayellow"/> Soutenir EYA
            </h3>
            <p className="text-slate-500 text-center text-sm max-w-[250px] z-10 mb-8 font-medium">
              Télécharge l'affiche et partage-la pour montrer ton soutien.
            </p>
            
            <div className="w-full max-w-[280px] bg-white rounded-2xl mb-6 relative overflow-hidden shadow-lg border-4 border-slate-50 flex flex-col items-center justify-center group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 z-10">
               <img src="https://i.imgur.com/gNa6vkO.jpeg" alt="Affiche EYA BDE" className="w-full h-auto object-contain" />
            </div>

            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 bg-eyablue text-white rounded-xl font-bold text-sm shadow hover:bg-blue-800 transition-colors z-10 active:scale-95"
            >
              Télécharger <Download size={18} />
            </button>
            <p className="text-[10px] text-slate-400 font-bold mt-4 z-10 uppercase tracking-widest">
              {downloads.toLocaleString()} Personnes soutiennent
            </p>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-50 border border-slate-100 rounded-full scale-150 group-hover:bg-slate-100 transition-colors duration-700 z-0"></div>
          </div>
        </section>
      </div>

      {/* VISION SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-eyablue text-white rounded-3xl p-10 md:p-16 overflow-hidden border border-slate-200"
        >
          {/* Subtle Background Image */}
          <div 
            className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: "url('https://i.imgur.com/qlyBrcK.jpg')" }}
          ></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-eyayellow">Notre Vision</h2>
            
            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              <p>
                À Africa Design School, riche de talents, de jeunesse et d’événements, chaque activité suscite de nombreuses réactions, commentaires et idées d’amélioration. Mais trop souvent, ces contributions restent en marge de l’action collective.
              </p>
              <p>
                C’est pour transformer cela que nous portons la vision <strong className="text-white">EYA BDE</strong>. En fon, EYA signifie <span className="italic">“ça y est”</span>. Pour nous : ça y est, on ne se limite plus à commenter. Ça y est, on participe. Ça y est, on construit ensemble.
              </p>
              <p>
                Avec la jarre trouée, nous rappelons que la vie étudiante ne fonctionne que si chacun apporte sa part. Notre objectif est simple : impliquer réellement les étudiants dans des clubs, des événements et des décisions de la vie étudiante. On ne part pas de nulle part, on part de l'ancienne corde et on redynamise !
              </p>
            </div>
            
            <div className="mt-12 text-right">
              <p className="inline-block px-6 py-2 bg-white text-eyablue font-bold rounded-xl text-sm shadow-xl">
                Le Président et son équipe
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
}
