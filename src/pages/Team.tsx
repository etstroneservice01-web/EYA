import AnimatedPage from "../components/AnimatedPage";
import { motion } from "motion/react";
import { Mail, Linkedin, Info } from "lucide-react";

// Placeholder images via Unsplash
const team = [
  {
    role: "Président",
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600",
  },
  {
    role: "Vice-président",
    name: "Jane Smith",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
  },
  {
    role: "Trésorier",
    name: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
  },
  {
    role: "Secrétaire Général",
    name: "Marie Dubois",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
  },
  {
    role: "Secrétaire Général Adjoint chargé des clubs",
    name: "Paul Martin",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
  },
  {
    role: "Secrétaire Général Adjoint à l'intégration",
    name: "Sophie Leroy",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600",
  },
  {
    role: "Responsable Communication",
    name: "Hugo Petit",

    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600",
  },
  {
    role: "Responsable Événementiel",
    name: "Chloé Moreau",
    image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=600",
  }
];

export default function Team() {
  return (
    <AnimatedPage className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-slate-300"></span> Le Bureau Exécutif
            </h3>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-eyablue mb-4"
            >
              Notre <span className="text-eyayellow">Équipe</span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-4 max-w-sm"
          >
             <div className="text-eyayellow bg-white p-2 rounded-xl border border-slate-100 shadow-sm shrink-0">
               <Info size={24} />
             </div>
             <p className="text-sm text-slate-600 font-medium leading-relaxed">
               Il y a également des <strong className="text-eyablue">postes au niveau des clubs</strong> où ce sera des <strong className="text-eyablue">nominations</strong>. Rejoignez-nous !
             </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-eyayellow transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-eyayellow transition-colors duration-300 shadow-inner shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-eyablue">
                  {member.name}
                </h2>
                <h3 className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-2 mb-4 leading-relaxed">
                  {member.role}
                </h3>
              </div>
              <div className="flex gap-2 mt-auto">
                <button className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-500 rounded-xl hover:bg-eyablue hover:text-white transition-colors border border-slate-200">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-500 rounded-xl hover:bg-eyablue hover:text-white transition-colors border border-slate-200">
                  <Mail size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}
