/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Figma, 
  Layers, 
  Smartphone, 
  Target, 
  Search, 
  Users, 
  Zap, 
  Layout, 
  Menu, 
  MessageSquare, 
  CheckCircle2, 
  CircleAlert, 
  TrendingUp, 
  Globe, 
  Moon, 
  Palette, 
  ArrowRight,
  Clock,
  Briefcase,
  Lightbulb,
  FileText,
  Accessibility,
  Play,
  FileDown,
  Instagram,
  Linkedin,
  Mail,
  MoreHorizontal
} from 'lucide-react';

const PhoneMockup = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-[48px] border-[8px] border-[#2a2a2a] overflow-hidden shadow-2xl ${className}`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-[#2a2a2a] rounded-b-2xl z-20 flex items-center justify-center">
       <div className="w-12 h-1.5 bg-white/10 rounded-full" />
    </div>
    <div className="w-full h-full bg-dark-bg overflow-y-auto no-scrollbar relative z-10">
      {children}
    </div>
  </div>
);

const SectionHeader = ({ title, tagline, number }: { title: string, tagline?: string, number?: string }) => (
  <div className="mb-12">
    {number && <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-2 block">{number}</span>}
    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h2>
    {tagline && <p className="text-gray-400 text-lg max-w-2xl font-light">{tagline}</p>}
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-brand-purple/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-brand-purple to-brand-orange z-50 origin-left no-print"
        style={{ scaleX }}
      />

      {/* Floating Export Button */}
      <button 
        onClick={() => window.print()}
        className="fixed bottom-8 right-8 z-[60] p-4 rounded-full bg-brand-purple text-black font-bold shadow-[0_0_30px_rgba(192,132,252,0.4)] hover:scale-110 active:scale-95 transition-all group no-print cursor-pointer"
        title="Export Case Study as PDF"
      >
        <FileDown className="w-6 h-6" />
        <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/90 text-white text-[10px] uppercase font-bold tracking-widest whitespace-nowrap rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 backdrop-blur-md">
          Export as PDF
        </span>
      </button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-pink/10 blur-[120px] rounded-full -ml-40 -mb-40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex justify-center mb-12">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-bold text-black text-3xl shadow-xl">N</div>
              </div>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
                Refining Personal<br/>Style with AI.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-16">
                NI-HA — The AI-Powered Color Styling Assistant Case Study
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex justify-center"
          >
            <PhoneMockup className="scale-110 shadow-[0_0_100px_rgba(192,132,252,0.1)]">
               <div className="p-6 h-full flex flex-col bg-linear-to-b from-[#1a1a1a] to-black text-left">
                  <div className="flex justify-between items-center mb-12">
                     <span className="text-[10px] font-bold tracking-widest text-brand-purple">NI-HA</span>
                     <div className="text-[10px] px-3 py-1 glass rounded-full opacity-60">Sign In</div>
                  </div>
                  <div className="flex-1">
                     <h4 className="text-3xl font-bold mb-4 tracking-tighter leading-tight">Discover your <span className="text-brand-orange">perfect palette</span> for any destination.</h4>
                     <p className="text-[11px] text-gray-500 mb-8 leading-relaxed">Leverage advanced neural aesthetics to curate travel wardrobes that harmonize with the light, landscape, and spirit of your next arrival.</p>
                     
                     <button className="w-full py-3 bg-brand-orange text-black font-bold rounded-xl text-xs mb-3">Get Started</button>
                     <button className="w-full py-3 glass rounded-xl text-xs opacity-60">View Lookbook</button>
                  </div>
                  <div className="h-40 glass rounded-2xl relative overflow-hidden bg-[url('https://picsum.photos/seed/fashion1/400/800')] bg-cover">
                     <div className="absolute inset-0 bg-black/40" />
                     <div className="absolute bottom-4 left-4">
                        <div className="flex gap-1">
                           <div className="w-3 h-3 bg-brand-orange rounded-full" />
                           <div className="w-3 h-3 bg-brand-purple rounded-full" />
                        </div>
                     </div>
                  </div>
               </div>
            </PhoneMockup>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-dark-surface/30">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <SectionHeader 
            number="01 // ABOUT"
            title="The Future of Fashion Styling"
            tagline="NI-HA is a revolutionary AI assistant that helps users master color theory in their daily styling. By leveraging advanced computer vision, it provides real-time color palettes that complement various skin tones, occasions, and personal preferences."
          />
          <div className="flex gap-8 justify-center lg:justify-end">
             <PhoneMockup className="rotate-2 -translate-y-8">
                <div className="p-0 h-full flex flex-col bg-black text-left">
                   <div className="flex justify-between items-center p-6 bg-black/50 backdrop-blur-md absolute top-0 w-full z-20">
                      <span className="text-[10px] font-bold text-white">NI-HA</span>
                      <div className="w-6 h-6 rounded-full glass flex items-center justify-center"><MoreHorizontal className="w-3 h-3" /></div>
                   </div>
                   <div className="flex-1 relative bg-[url('https://picsum.photos/seed/scan/400/800')] bg-cover bg-center">
                      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-48 border border-white/20 rounded-3xl backdrop-blur-[2px]">
                         <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-orange rounded-tl-xl" />
                         <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="w-12 h-0.5 bg-[#FBBF24] animate-bounce" />
                         </div>
                      </div>
                   </div>
                   <div className="p-4 bg-black">
                      <span className="text-[8px] uppercase tracking-widest text-gray-500 mb-2 block">Detected Colors</span>
                      <div className="flex gap-2">
                         <div className="w-6 h-6 rounded-full bg-[#1c1c1c] border border-white/10" />
                         <div className="w-6 h-6 rounded-full bg-[#E5E5E5]" />
                         <div className="w-6 h-6 rounded-full bg-[#D4D4D4] opacity-50" />
                      </div>
                   </div>
                </div>
             </PhoneMockup>
             <PhoneMockup className="-rotate-2 translate-y-8 hidden md:block">
                <div className="p-6 h-full flex flex-col bg-black text-left">
                   <div className="mb-4">
                      <span className="text-[8px] uppercase tracking-widest text-gray-500 mb-1 block">AI-Generated</span>
                      <h4 className="text-xl font-bold">Curated</h4>
                   </div>
                   <div className="space-y-4">
                      <div className="glass p-3 rounded-2xl bg-linear-to-br from-[#111] to-black">
                         <div className="h-20 bg-[#00474F] rounded-xl mb-3" />
                         <div className="flex gap-1 mb-3">
                            <div className="flex-1 h-1.5 bg-[#00474F] rounded" />
                            <div className="flex-1 h-1.5 bg-[#36D6D5] rounded" />
                            <div className="flex-1 h-1.5 bg-[#00FFFF] rounded" />
                         </div>
                         <button className="w-full py-2 bg-white text-black text-[8px] font-bold rounded-lg uppercase">Apply</button>
                      </div>
                   </div>
                </div>
             </PhoneMockup>
          </div>
        </div>
      </section>

      {/* Tools Used */}
      <section className="py-12 border-y border-white/5">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <div className="flex items-center gap-3">
             <Figma className="w-8 h-8" />
             <span className="text-xl font-display">Figma</span>
           </div>
           <div className="flex items-center gap-3">
             <Layers className="w-8 h-8" />
             <span className="text-xl font-display">Stitch AI</span>
           </div>
           <div className="flex items-center gap-3">
             <Layout className="w-8 h-8" />
             <span className="text-xl font-display">FigJam</span>
           </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader number="02 // RESEARCH" title="Bridging the Style Gap" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-white/5 rounded-[40px] overflow-hidden">
            <div className="bg-dark-bg p-12 md:p-20">
               <h3 className="text-brand-pink text-sm font-mono mb-8 uppercase tracking-widest">The Problem</h3>
               <ul className="space-y-8">
                 {[
                   "Users struggle with choosing color combinations that look harmonious.",
                   "Confidence gap in experimenting with bold seasonal color trends.",
                   "Existing fashion tools are too generic and don't offer personalized advice."
                 ].map((text, i) => (
                   <li key={i} className="flex gap-4">
                     <CircleAlert className="w-6 h-6 text-brand-pink shrink-0" />
                     <p className="text-xl text-white/80">{text}</p>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="bg-dark-surface p-12 md:p-20">
               <h3 className="text-brand-purple text-sm font-mono mb-8 uppercase tracking-widest">The Solution</h3>
               <ul className="space-y-8">
                 {[
                   "Real-time AI analysis of outfits to suggest complementary colors.",
                   "Mood-based palette generation to match the user's emotional state.",
                   "Personalized virtual wardrobe with a color-first categorization system."
                 ].map((text, i) => (
                   <li key={i} className="flex gap-4">
                     <CheckCircle2 className="w-6 h-6 text-brand-purple shrink-0" />
                     <p className="text-xl text-white/80">{text}</p>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-dark-surface/20">
        <div className="container mx-auto overflow-x-auto no-scrollbar">
          <SectionHeader number="03 // METHODOLOGY" title="The Design Process" />
          <div className="flex gap-4 min-w-[1000px]">
            {['Empathize', 'Define', 'Ideate', 'Design', 'Prototype', 'Test'].map((step, i) => (
              <div key={i} className="flex-1 glass p-8 rounded-3xl group hover:border-brand-purple/50 transition-colors">
                <span className="text-4xl mb-4 block font-bold text-white/20 group-hover:text-brand-purple transition-colors">0{i+1}</span>
                <h4 className="text-xl font-bold mb-2">{step}</h4>
                <div className="w-full h-1 bg-white/10 rounded-full mt-4 group-hover:bg-brand-purple/30 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader number="04 // PLANNING" title="10-Week Roadmap" />
          <div className="relative pt-12">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5 rounded-full" />
            <motion.div 
               className="absolute top-0 left-0 h-1 bg-linear-to-r from-brand-purple to-brand-orange rounded-full z-10"
               initial={{ width: 0 }}
               whileInView={{ width: '85%' }}
               transition={{ duration: 2 }}
            />
            <div className="grid grid-cols-5 gap-4 mt-8">
              {['Phase 1: Research', 'Phase 2: Ideation', 'Phase 3: UI Design', 'Phase 4: Prototyping', 'Phase 5: Testing'].map((p, i) => (
                <div key={i} className="text-sm opacity-60">
                   <p className="font-mono mb-2">WEEKS {i*2+1}-{i*2+2}</p>
                   <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4W + H Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { label: 'Who', text: 'Socially active gen-Z and millenials' },
              { label: 'What', text: 'AI-centric color consultant' },
              { label: 'When', text: 'Daily styling & special events' },
              { label: 'Where', text: 'Global mobile platform' },
              { label: 'How', text: 'Visual recognition & LLM' }
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-[32px] text-center border-t-brand-purple/30">
                 <h4 className="text-brand-purple uppercase text-xs font-mono mb-4 tracking-widest">{item.label}</h4>
                 <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey */}
      <section className="section-padding bg-brand-purple/5">
        <div className="container mx-auto">
          <SectionHeader number="05 // USER FLOW" title="The User Journey" />
          <div className="space-y-12 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-px before:bg-white/10">
            {[
              { icon: Search, title: 'Discovery', desc: 'User realizes they have no idea what color matches their new jacket.' },
              { icon: Smartphone, title: 'Input', desc: 'Captures a photo of the jacket using NI-HA scan.' },
              { icon: Zap, title: 'Analysis', desc: 'AI processes the fabric, texture, and hue.' },
              { icon: Palette, title: 'Recommendation', desc: 'Receives 3 distinct mood palettes (Professional, Bold, Minimal).' },
              { icon: CheckCircle2, title: 'Selection', desc: 'User picks a palette and saves it for shopping.' }
            ].map((step, i) => (
              <div key={i} className="flex gap-10 items-start relative z-10 pl-1 group">
                 <div className="w-6 h-6 rounded-full bg-dark-bg border-4 border-brand-purple shrink-0 group-hover:scale-125 transition-transform" />
                 <div className="glass p-8 rounded-3xl flex-1 hover:bg-white/10 transition-colors">
                    <step.icon className="w-6 h-6 text-brand-purple mb-4" />
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-white/60">{step.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Sections */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeader title="Quantitative Research" tagline="82% of users surveyed feel overwhelmed by color choices in the morning." />
            <div className="grid grid-cols-2 gap-8 mt-12">
               {[
                 { val: '82%', label: 'Daily Struggle' },
                 { val: '64%', label: 'Fast Fashion Usage' },
                 { val: '71%', label: 'Interest in AI' },
                 { val: '45%', label: 'Color Blindness/Hesitation' }
               ].map((stat, i) => (
                 <div key={i} className="glass p-8 rounded-3xl text-center">
                    <span className="text-4xl font-bold block mb-2">{stat.val}</span>
                    <span className="text-sm text-white/40 uppercase tracking-widest">{stat.label}</span>
                 </div>
               ))}
            </div>
          </div>
          <div>
            <SectionHeader title="Qualitative Insights" tagline="Deep dives into user emotions and psychological triggers." />
            <div className="space-y-6 mt-12">
               {[
                 { q: "I don't want to look boring, but I'm afraid of looking like a clown.", user: "Avery, 24" },
                 { q: "I love colors but I stick to black because it's safe and easy.", user: "Sam, 31" },
                 { q: "Sometimes I see a color I love but have no idea how to style it.", user: "Leo, 28" }
               ].map((quote, i) => (
                 <div key={i} className="p-8 border-l-4 border-brand-pink bg-white/5 rounded-3xl rounded-tl-none italic text-lg relative">
                    <div className="absolute top-4 right-8 opacity-10"><MessageSquare className="w-12 h-12" /></div>
                    "{quote.q}"
                    <span className="not-italic block mt-4 text-sm text-brand-pink">— {quote.user}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="section-padding">
        <div className="container mx-auto">
           <SectionHeader number="06 // COMPETITIVE ANALYSIS" title="NI-HA vs The Rest" />
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b border-white/10 uppercase text-xs font-mono tracking-widest text-white/40">
                   <th className="py-6 px-4">Feature</th>
                   <th className="py-6 px-4 text-brand-purple">NI-HA AI</th>
                   <th className="py-6 px-4">ColorWheel.io</th>
                   <th className="py-6 px-4">Pinterest Style</th>
                 </tr>
               </thead>
               <tbody className="text-lg">
                 {[
                   { f: 'Real-time Camera Scan', n: true, c: false, p: false },
                   { f: 'Personalized Skin Tone Match', n: true, c: true, p: false },
                   { f: 'AI-Driven Wardrobe Planning', n: true, c: false, p: true },
                   { f: 'Emotional Color Pairing', n: true, nLabel: 'Advanced', c: false, p: false }
                 ].map((row, i) => (
                   <tr key={i} className="border-b border-white/5 group hover:bg-white/[0.02]">
                     <td className="py-6 px-4 opacity-60 group-hover:opacity-100">{row.f}</td>
                     <td className="py-6 px-4 font-bold text-brand-purple">{row.n ? (row.nLabel || 'Yes') : '—'}</td>
                     <td className="py-6 px-4 opacity-40">{row.c ? 'Basic' : '—'}</td>
                     <td className="py-6 px-4 opacity-40">{row.p ? 'Manual' : '—'}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </section>

      {/* User Persona */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader number="07 // PERSONAS" title="Target Audience" />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Sarah J. */}
            <div className="glass p-8 md:p-12 rounded-[48px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
               <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-[40px] bg-linear-to-br from-brand-pink to-brand-orange mb-6 relative overflow-hidden">
                     <img src="https://picsum.photos/seed/persona2/200/200" alt="Persona" className="w-full h-full object-cover grayscale mix-blend-overlay" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-2xl font-bold">Sarah J.</h3>
                  <p className="text-brand-pink mb-4 uppercase text-[10px] tracking-widest font-bold">Creativeist, 29</p>
                  <div className="flex gap-2 justify-center">
                     {['Creative', 'Busy'].map(tag => <span key={tag} className="text-[8px] px-3 py-1 rounded-full bg-white/5 border border-white/10">{tag}</span>)}
                  </div>
               </div>
               <div className="md:border-x border-white/10 px-0 md:px-8">
                  <h4 className="text-[10px] font-bold uppercase text-gray-500 mb-4 tracking-widest">The Story</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-light italic">
                    "I want an automated way to match morning outfits based on mood."
                  </p>
                  <div className="mt-6 space-y-3">
                     <h5 className="font-bold text-[10px] uppercase text-brand-pink tracking-widest">Goal</h5>
                     <p className="text-[11px] text-gray-400">Needs speed and accuracy for her fast-paced lifestyle.</p>
                  </div>
               </div>
               <div>
                  <h4 className="text-[10px] font-bold uppercase text-gray-500 mb-4 tracking-widest">Frustrations</h4>
                  <div className="space-y-4">
                     <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                        <p className="text-[9px] text-brand-purple font-bold uppercase mb-1">Overwhelmed</p>
                        <p className="text-[10px] text-gray-400">Traditional styling is too expensive.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Marcus T. */}
            <div className="glass p-8 md:p-12 rounded-[48px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
               <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-[40px] bg-linear-to-br from-brand-purple to-brand-blue mb-6 relative overflow-hidden">
                     <img src="https://picsum.photos/seed/persona3/200/200" alt="Persona" className="w-full h-full object-cover grayscale mix-blend-overlay" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-2xl font-bold">Marcus T.</h3>
                  <p className="text-brand-purple mb-4 uppercase text-[10px] tracking-widest font-bold">Tech Lead, 34</p>
                  <div className="flex gap-2 justify-center">
                     {['Minimalist', 'Efficient'].map(tag => <span key={tag} className="text-[8px] px-3 py-1 rounded-full bg-white/5 border border-white/10">{tag}</span>)}
                  </div>
               </div>
               <div className="md:border-x border-white/10 px-0 md:px-8">
                  <h4 className="text-[10px] font-bold uppercase text-gray-500 mb-4 tracking-widest">The Story</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-light italic">
                    "I value efficiency. I want to look professional without thinking about it."
                  </p>
                  <div className="mt-6 space-y-3">
                     <h5 className="font-bold text-[10px] uppercase text-brand-purple tracking-widest">Goal</h5>
                     <p className="text-[11px] text-gray-400">Wants a capsule wardrobe managed by smart color logic.</p>
                  </div>
               </div>
               <div>
                  <h4 className="text-[10px] font-bold uppercase text-gray-500 mb-4 tracking-widest">Frustrations</h4>
                  <div className="space-y-4">
                     <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                        <p className="text-[9px] text-brand-orange font-bold uppercase mb-1">Decision Fatigue</p>
                        <p className="text-[10px] text-gray-400">Hates wasting time on trivial aesthetic choices.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Map Image */}
      <section className="section-padding bg-dark-surface/10">
        <div className="container mx-auto">
          <SectionHeader number="08 // ANALYTICS" title="Empathy Mapping" tagline="A visual breakdown of the user's emotional landscape and sensory inputs." />
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-purple/20 blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity" />
            <div className="glass p-1 rounded-[48px] overflow-hidden border-white/10">
               <div className="relative aspect-video rounded-[40px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2000&auto=format&fit=crop" 
                    alt="Empathy Mapping Canvas" 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-12">
                     <div className="flex gap-4">
                        <div className="glass px-6 py-2 rounded-full border-brand-purple/30">
                           <span className="text-xs font-mono font-bold text-brand-purple">SAYS</span>
                        </div>
                        <div className="glass px-6 py-2 rounded-full border-brand-pink/30">
                           <span className="text-xs font-mono font-bold text-brand-pink">THINKS</span>
                        </div>
                        <div className="glass px-6 py-2 rounded-full border-brand-orange/30">
                           <span className="text-xs font-mono font-bold text-brand-orange">FEELS</span>
                        </div>
                        <div className="glass px-6 py-2 rounded-full border-brand-blue/30">
                           <span className="text-xs font-mono font-bold text-brand-blue">DOES</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Map */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader number="09 // EMPATHY" title="Understanding User Emotions" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-12 border border-white/5 rounded-[40px] bg-dark-surface/50">
                <h4 className="text-brand-purple font-mono text-xs uppercase mb-6 tracking-widest">Says</h4>
                <p className="text-lg">"I need something that just tells me what looks good."</p>
             </div>
             <div className="p-12 border border-white/5 rounded-[40px] bg-dark-surface/50">
                <h4 className="text-brand-pink font-mono text-xs uppercase mb-6 tracking-widest">Thinks</h4>
                <p className="text-lg">"Will people judge my outfit if I wear these colors?"</p>
             </div>
             <div className="p-12 border border-white/5 rounded-[40px] bg-dark-surface/50">
                <h4 className="text-brand-orange font-mono text-xs uppercase mb-6 tracking-widest">Feels</h4>
                <p className="text-lg">Stress in the morning, excitement for new purchases.</p>
             </div>
             <div className="p-12 border border-white/5 rounded-[40px] bg-dark-surface/50">
                <h4 className="text-brand-blue font-mono text-xs uppercase mb-6 tracking-widest">Does</h4>
                <p className="text-lg">Scrolls Pinterest, buys neutrals, checks the weather app.</p>
             </div>
          </div>
        </div>
      </section>

      {/* User Stories */}
      <section className="section-padding bg-dark-surface/30">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader number="10 // NARRATIVES" title="User Stories" />
          <div className="space-y-4">
            {[
              "As a regular user, I want to scan my clothes so I can find perfect matches instantly.",
              "As a fashion explorer, I want to see trending palettes so I can stay relevant.",
              "As a busy professional, I want AI to suggest my daily outfit based on color harmony.",
              "As a gift buyer, I want to find color palettes that match a friend's skin tone."
            ].map((story, i) => (
              <div key={i} className="flex gap-6 items-center p-6 bg-white/5 rounded-2xl hover:bg-brand-purple/10 transition-colors">
                 <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0">
                    <span className="font-bold text-brand-purple">{i+1}</span>
                 </div>
                 <p className="text-lg">{story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Flow & IA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader number="11 // ARCHITECTURE" title="Flow & Architecture" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div className="glass p-12 rounded-[48px]">
                <h4 className="text-xl font-bold mb-8 flex items-center gap-3"><Menu className="w-5 h-5 text-brand-purple" /> App Sitemap</h4>
                <div className="space-y-4 font-mono text-sm">
                   <div className="p-3 bg-white/5 rounded border border-white/10 uppercase tracking-widest">Home (Dashboard)</div>
                   <div className="pl-8 border-l border-white/10 space-y-2">
                      <div className="p-2 opacity-60">• AI Color Scanner</div>
                      <div className="p-2 opacity-60">• Palette Library</div>
                      <div className="p-2 opacity-60">• AI Assistant Chat</div>
                      <div className="p-2 opacity-60">• Wardrobe Insights</div>
                   </div>
                   <div className="p-3 bg-white/5 rounded border border-white/10 uppercase tracking-widest">Community</div>
                   <div className="p-3 bg-white/5 rounded border border-white/10 uppercase tracking-widest">Settings</div>
                </div>
             </div>
             <div className="glass p-12 rounded-[48px] bg-linear-to-br from-brand-purple/10 via-transparent to-brand-orange/10">
                <h4 className="text-xl font-bold mb-8 flex items-center gap-3"><Zap className="w-5 h-5 text-brand-orange" /> Main Flow</h4>
                <div className="flex flex-col gap-6 items-center">
                   <div className="w-48 p-4 bg-white/10 text-center rounded-xl border border-white/20">Open Scan</div>
                   <ArrowRight className="rotate-90 text-white/20" />
                   <div className="w-48 p-4 bg-brand-purple/20 text-center rounded-xl border border-brand-purple/40">AI Analysis</div>
                   <ArrowRight className="rotate-90 text-white/20" />
                   <div className="w-64 p-6 glass text-center rounded-2xl border-white/30 font-bold">Palette Suggestion</div>
                   <div className="flex gap-12 mt-4">
                      <div className="flex flex-col items-center">
                         <div className="w-32 p-3 bg-white/5 text-center text-xs rounded-lg italic">Save to Library</div>
                      </div>
                      <div className="flex flex-col items-center">
                         <div className="w-32 p-3 bg-white/5 text-center text-xs rounded-lg italic">Share</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="section-padding bg-dark-surface/50">
        <div className="container mx-auto">
          <SectionHeader number="12 // DESIGN SYSTEM" title="The Visual Language" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <div>
                <h4 className="text-sm font-mono uppercase text-white/40 mb-10 tracking-widest">Typography — Space Grotesk & Inter</h4>
                <div className="space-y-8">
                   <div>
                      <p className="text-xs text-white/40 mb-2 font-mono">H1 / SPACE GROTESK / BOLD</p>
                      <h2 className="text-6xl font-bold">Modern Style</h2>
                   </div>
                   <div>
                      <p className="text-xs text-white/40 mb-2 font-mono">BODY / INTER / REGULAR</p>
                      <p className="text-xl leading-relaxed text-white/60">NI-HA leverages a sophisticated design system to ensure clarity and engagement across all user touchpoints.</p>
                   </div>
                </div>
             </div>
             <div>
                <h4 className="text-sm font-mono uppercase text-white/40 mb-10 tracking-widest">Core Palette — Vibrant Digital-First</h4>
                <div className="flex gap-4">
                   {[
                     { bg: 'bg-brand-purple', label: '#A855F7' },
                     { bg: 'bg-brand-pink', label: '#EC4899' },
                     { bg: 'bg-brand-orange', label: '#F97316' },
                     { bg: 'bg-dark-bg', label: '#050505', border: 'border border-white/20' }
                   ].map((c, i) => (
                     <div key={i} className="flex-1">
                        <div className={`h-40 rounded-3xl mb-4 ${c.bg} ${c.border || ''}`} />
                        <span className="text-xs font-mono opacity-50 block text-center">{c.label}</span>
                     </div>
                   ))}
                </div>
                <div className="mt-12">
                   <h4 className="text-sm font-mono uppercase text-white/40 mb-6 tracking-widest">Interactive Components</h4>
                   <div className="flex flex-wrap gap-4">
                      <button className="px-8 py-3 bg-brand-purple rounded-full font-bold">Primary</button>
                      <button className="px-8 py-3 glass rounded-full font-bold">Secondary</button>
                      <button className="px-8 py-3 border border-white/20 rounded-full font-bold hover:bg-white/5">Outline</button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader number="13 // LO-FI TO HI-FI" title="Wireframes" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1,2,3,4].map(i => (
              <div key={i} className="border border-white/5 rounded-[40px] bg-white/[0.02] p-8 aspect-[9/16] relative overflow-hidden group">
                 <div className="absolute inset-0 p-8 space-y-6">
                    <div className="h-4 w-1/2 bg-white/10 rounded" />
                    <div className="h-48 bg-white/5 rounded-3xl border border-dashed border-white/10 flex items-center justify-center text-white/20 text-xs">SCAN AREA</div>
                    <div className="space-y-2">
                       <div className="h-3 w-full bg-white/5 rounded" />
                       <div className="h-3 w-full bg-white/5 rounded" />
                       <div className="h-3 w-2/3 bg-white/5 rounded" />
                    </div>
                    <div className="flex gap-2">
                       <div className="w-10 h-10 rounded-full bg-white/5" />
                       <div className="w-10 h-10 rounded-full bg-white/5" />
                       <div className="w-10 h-10 rounded-full bg-white/5" />
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-tighter bg-dark-bg px-4 py-2 rounded-full border border-brand-purple/30">View Analysis</span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI Showcase */}
      <section className="section-padding bg-linear-to-b from-dark-bg to-brand-purple/10">
        <div className="container mx-auto">
          <SectionHeader number="14 // HI-FIDELITY" title="The Final Interface" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
             {/* Discovery Screen */}
             <PhoneMockup className="translate-y-0">
                <div className="p-6 h-full flex flex-col bg-linear-to-b from-[#1a1a1a] to-black">
                   <div className="flex justify-between items-center mb-12">
                      <span className="text-[10px] font-bold tracking-widest text-brand-purple">NI-HA</span>
                      <div className="text-[10px] px-3 py-1 glass rounded-full opacity-60">Sign In</div>
                   </div>
                   <div className="flex-1">
                      <h4 className="text-3xl font-bold mb-4 tracking-tighter leading-tight">Discover your <span className="text-brand-orange">perfect palette</span> for any destination.</h4>
                      <p className="text-[11px] text-gray-500 mb-8 leading-relaxed">Leverage advanced neural aesthetics to curate travel wardrobes that harmonize with the light, landscape, and spirit of your next arrival.</p>
                      
                      <button className="w-full py-3 bg-brand-orange text-black font-bold rounded-xl text-xs mb-3">Get Started</button>
                      <button className="w-full py-3 glass rounded-xl text-xs opacity-60">View Lookbook</button>
                   </div>
                   <div className="h-40 glass rounded-2xl relative overflow-hidden bg-[url('https://picsum.photos/seed/fashion1/400/800')] bg-cover">
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute bottom-4 left-4">
                         <div className="flex gap-1">
                            <div className="w-3 h-3 bg-brand-orange rounded-full" />
                            <div className="w-3 h-3 bg-brand-purple rounded-full" />
                         </div>
                      </div>
                   </div>
                </div>
             </PhoneMockup>

             {/* Home / Vibe Screen */}
             <PhoneMockup className="lg:translate-y-12">
                <div className="p-6 h-full flex flex-col bg-black text-left">
                   <div className="flex justify-between items-center mb-12">
                      <span className="text-[10px] font-bold">NI-HA</span>
                      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10" />
                   </div>
                   <h4 className="text-2xl font-bold mb-6">Hi, what's your <span className="text-brand-purple">vibe</span> today?</h4>
                   
                   <div className="flex gap-2 mb-8 flex-wrap">
                      {['Beach', 'Party', 'Office'].map(vibe => (
                        <div key={vibe} className={`px-4 py-2 glass rounded-full text-[10px] font-bold ${vibe === 'Beach' ? 'bg-brand-purple text-white' : ''}`}>{vibe}</div>
                      ))}
                   </div>

                   <div className="relative h-32 rounded-2xl overflow-hidden mb-6 group cursor-pointer">
                      <img src="https://picsum.photos/seed/places/400/300" alt="Destination" className="w-full h-full object-cover grayscale" />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/40 transition-all">
                         <div className="text-center">
                            <span className="text-[8px] uppercase tracking-widest text-white/40">Select Destination</span>
                            <div className="text-[10px] font-bold mt-1 uppercase flex items-center justify-center gap-2">Explore Places <ArrowRight className="w-2 h-2" /></div>
                         </div>
                      </div>
                   </div>

                   <div className="glass p-8 rounded-[32px] mb-auto text-center border-dashed border-white/10">
                      <Smartphone className="mx-auto w-6 h-6 mb-3 text-brand-purple" />
                      <h5 className="text-xs font-bold mb-1">Upload Outfit</h5>
                      <span className="text-[8px] opacity-40 uppercase tracking-widest">Select File</span>
                   </div>
                </div>
             </PhoneMockup>

             {/* Visual Scan Screen */}
             <PhoneMockup className="translate-y-0 lg:translate-y-0">
                <div className="p-0 h-full flex flex-col bg-black">
                   <div className="flex justify-between items-center p-6 bg-black/50 backdrop-blur-md absolute top-0 w-full z-20">
                      <span className="text-[10px] font-bold">NI-HA</span>
                      <div className="w-6 h-6 rounded-full glass flex items-center justify-center"><MoreHorizontal className="w-3 h-3" /></div>
                   </div>
                   <div className="flex-1 relative bg-[url('https://picsum.photos/seed/scan/400/800')] bg-cover bg-center">
                      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-72 border border-white/20 rounded-3xl backdrop-blur-[2px]">
                         <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-orange rounded-tl-2xl" />
                         <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[8px] font-mono tracking-widest text-[#FBBF24] uppercase mb-1">Neural Analysis Active</span>
                            <div className="w-16 h-0.5 bg-[#FBBF24] animate-bounce" />
                         </div>
                      </div>
                   </div>
                   <div className="p-6 bg-black">
                      <span className="text-[8px] uppercase tracking-widest text-gray-500 mb-4 block">Detected Colors</span>
                      <div className="flex gap-2 mb-8">
                         <div className="w-8 h-8 rounded-full bg-[#1c1c1c] border border-white/10" />
                         <div className="w-8 h-8 rounded-full bg-[#E5E5E5]" />
                         <div className="w-8 h-8 rounded-full bg-[#D4D4D4] opacity-50" />
                      </div>
                      <h4 className="text-xl font-bold mb-4">Matching Palettes</h4>
                      <div className="space-y-4">
                         <div className="glass p-3 rounded-2xl flex justify-between items-center">
                            <div className="flex gap-2">
                               <div className="w-4 h-4 bg-[#2D1B69] rounded-sm" />
                               <div className="w-4 h-4 bg-[#F172AC] rounded-sm" />
                            </div>
                            <span className="text-[10px] font-mono opacity-50">Noir Minimalism</span>
                         </div>
                      </div>
                   </div>
                </div>
             </PhoneMockup>

             {/* Curated Palettes Screen */}
             <PhoneMockup className="lg:translate-y-12">
                <div className="p-6 h-full flex flex-col bg-black">
                   <div className="mb-8">
                      <span className="text-[8px] uppercase tracking-widest text-gray-500 mb-1 block">AI-Generated Spectra</span>
                      <h4 className="text-2xl font-bold">Curated Palettes</h4>
                   </div>
                   <div className="flex-1 space-y-6 overflow-y-auto no-scrollbar">
                      <div className="glass p-4 rounded-3xl bg-linear-to-br from-[#111] to-black">
                         <div className="h-32 bg-[#00474F] rounded-2xl mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/30" />
                         </div>
                         <h5 className="font-bold mb-2">Ethereal Teal</h5>
                         <div className="flex gap-2 mb-4">
                            <div className="flex-1 h-2 bg-[#00474F] rounded" />
                            <div className="flex-1 h-2 bg-[#36D6D5] rounded" />
                            <div className="flex-1 h-2 bg-[#00FFFF] rounded" />
                         </div>
                         <button className="w-full py-2 bg-white text-black text-[10px] font-bold rounded-lg uppercase tracking-widest">Apply Selection</button>
                      </div>
                      
                      <div className="glass p-6 rounded-3xl border-dashed border-white/5">
                         <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4">
                            <Zap className="w-5 h-5 text-brand-orange" />
                         </div>
                         <h5 className="font-bold mb-1">Intelligent Matching</h5>
                         <p className="text-[9px] text-gray-500 leading-relaxed">ChromaAI doesn't just pick colors; it calculates visual harmony based on contrast ratios and emotional resonance.</p>
                      </div>
                   </div>
                </div>
             </PhoneMockup>

              {/* Saved Palettes Screen */}
              <PhoneMockup className="translate-y-0 lg:translate-y-0">
                <div className="p-6 h-full flex flex-col bg-black">
                    <div className="flex justify-between items-center mb-8">
                       <h4 className="text-xl font-bold">Saved Palettes</h4>
                       <Search className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="grid grid-cols-1 gap-6 overflow-y-auto no-scrollbar">
                       <div className="relative group grayscale hover:grayscale-0 transition-all cursor-pointer">
                          <div className="h-56 rounded-[32px] overflow-hidden">
                             <img src="https://picsum.photos/seed/italy/400/800" alt="Amalfi" className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                          </div>
                          <div className="absolute bottom-6 left-6 right-6">
                             <div className="flex gap-1 mb-2">
                                <div className="w-3 h-3 bg-[#EE9B00] rounded-full" />
                                <div className="w-3 h-3 bg-[#BB3E03] rounded-full" />
                                <div className="w-3 h-3 bg-[#AE2012] rounded-full" />
                             </div>
                             <h5 className="font-bold">Amalfi Golden Hour</h5>
                             <p className="text-[9px] opacity-40 italic">Rugged cliffs and sparkling Mediterranean waters.</p>
                          </div>
                       </div>
                       <div className="relative group grayscale hover:grayscale-0 transition-all cursor-pointer">
                          <div className="h-56 rounded-[32px] overflow-hidden">
                             <img src="https://picsum.photos/seed/lavender/400/800" alt="Lavender" className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                          </div>
                          <div className="absolute bottom-6 left-6 right-6">
                             <div className="flex gap-1 mb-2">
                                <div className="w-3 h-3 bg-[#C8A2C8] rounded-full" />
                                <div className="w-3 h-3 bg-[#E6E6FA] rounded-full" />
                             </div>
                             <h5 className="font-bold">Lavender Dreams</h5>
                             <p className="text-[9px] opacity-40 italic">A gentle ethereal mix of purples and pinks.</p>
                          </div>
                       </div>
                    </div>
                </div>
             </PhoneMockup>

             {/* Style DNA / Profile Screen */}
             <PhoneMockup className="lg:translate-y-12">
                <div className="p-6 h-full flex flex-col bg-black">
                    <div className="flex items-center gap-4 mb-10 pt-4">
                       <div className="w-16 h-16 rounded-[24px] bg-linear-to-br from-[#FF4D4D] to-[#F97316] p-0.5">
                          <img src="https://picsum.photos/seed/elena/200/200" alt="Elena" className="w-full h-full object-cover rounded-[22px] grayscale" />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold">Elena Vance</h4>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Creative Director</p>
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-10">
                       <div className="glass p-4 rounded-3xl text-center">
                          <span className="text-lg font-bold block">1.2K</span>
                          <span className="text-[7px] text-gray-500 uppercase font-bold tracking-widest">Generations</span>
                       </div>
                       <div className="glass p-4 rounded-3xl text-center">
                          <span className="text-lg font-bold block">84</span>
                          <span className="text-[7px] text-gray-500 uppercase font-bold tracking-widest">Assets</span>
                       </div>
                    </div>
                    <div className="space-y-6 flex-1">
                       <div>
                          <span className="text-[8px] uppercase tracking-widest text-gray-500 mb-4 block">Style DNA</span>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="glass p-4 rounded-2xl flex flex-col items-center">
                                <Zap className="w-4 h-4 text-brand-purple mb-2" />
                                <span className="text-[9px] font-bold">Surrealist</span>
                                <span className="text-[7px] opacity-40">Dreamy & Abstract</span>
                             </div>
                             <div className="glass p-4 rounded-2xl flex flex-col items-center">
                                <Smartphone className="w-4 h-4 text-brand-orange mb-2" />
                                <span className="text-[9px] font-bold">Minimal</span>
                                <span className="text-[7px] opacity-40">Clean & Precise</span>
                             </div>
                          </div>
                      </div>
                      <div>
                          <span className="text-[8px] uppercase tracking-widest text-gray-500 mb-4 block">Atmospheric Mood</span>
                          <div className="flex flex-wrap gap-2">
                             {['Ethereal', 'Noir', 'Cinematic', 'Vibrant', 'Brutalist'].map(mood => (
                               <span key={mood} className="px-3 py-1 bg-white/5 rounded-full text-[9px] border border-white/10">{mood}</span>
                             ))}
                          </div>
                      </div>
                    </div>
                    <div className="mt-auto h-12 glass rounded-full flex items-center px-6 gap-8 justify-center">
                       <Layout className="w-4 h-4 opacity-100 text-brand-purple" />
                       <MessageSquare className="w-4 h-4 opacity-40" />
                       <div className="w-6 h-6 rounded-full bg-brand-orange" />
                       <Briefcase className="w-4 h-4 opacity-40" />
                       <Users className="w-4 h-4 opacity-40" />
                    </div>
                </div>
             </PhoneMockup>
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto">
          <SectionHeader number="14 // EXPERIENCE" title="Seamless Onboarding" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
                <div className="glass p-8 rounded-[40px] border-l-4 border-l-brand-purple">
                   <h5 className="text-xl font-bold mb-2">Style Discovery</h5>
                   <p className="opacity-60">Simple 3-step quiz to identify initial user color temperature and preferences.</p>
                </div>
                <div className="glass p-8 rounded-[40px] border-l-4 border-l-brand-pink">
                   <h5 className="text-xl font-bold mb-2">Permission with Purpose</h5>
                   <p className="opacity-60">Brief explains WHY camera access is needed for better color extraction.</p>
                </div>
                <div className="glass p-8 rounded-[40px] border-l-4 border-l-brand-orange">
                   <h5 className="text-xl font-bold mb-2">Interactive Tutorial</h5>
                   <p className="opacity-60">Micro-interactions guide the user through their first scan experience.</p>
                </div>
             </div>
             <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[100px]" />
                <div className="flex gap-4 relative z-10 justify-center">
                   <PhoneMockup className="scale-90 opacity-60 grayscale">
                      <div className="flex items-center justify-center h-full text-white/20 italic">Welcome</div>
                   </PhoneMockup>
                   <PhoneMockup className="z-10 shadow-3xl">
                      <div className="p-8 flex flex-col h-full bg-linear-to-br from-brand-purple/30 to-brand-pink/30">
                         <div className="flex-1 flex flex-col justify-center text-center">
                            <Layers className="w-20 h-20 mx-auto text-white mb-8" />
                            <h4 className="text-2xl font-bold mb-4">Magic Scan</h4>
                            <p className="text-sm opacity-80">Point your camera at any outfit to unlock its hidden color potential.</p>
                         </div>
                         <button className="w-full py-4 bg-white text-dark-bg font-bold rounded-2xl mb-4">Next Step</button>
                      </div>
                   </PhoneMockup>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Usability Testing */}
      <section className="section-padding bg-dark-surface/50">
        <div className="container mx-auto">
          <SectionHeader number="15 // VALIDATION" title="Key Testing Insights" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { t: 'Navigational Friction', d: 'Initial testers found it hard to find saved palettes. We implemented a persistent bottom-bar shortcuts.', r: '32% faster task completion' },
               { t: 'Color Overload', d: 'Displaying 10+ colors was confusing. We reduced it to 3 primary and 2 accent colors per palette.', r: 'Improved legibility rating by 4.2x' },
               { t: 'Scan Latency', d: 'Users thought the app froze during AI analysis. We added a fluid scan animation to provide feedback.', r: '100% perception of app speed' }
             ].map((item, i) => (
               <div key={i} className="glass p-10 rounded-[48px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:bg-brand-purple/10 transition-colors" />
                  <h4 className="text-xl font-bold mb-4">{item.t}</h4>
                  <p className="text-white/60 mb-8">{item.d}</p>
                  <div className="pt-6 border-t border-white/5">
                     <span className="text-xs uppercase font-mono text-brand-purple">Result:</span>
                     <p className="font-bold">{item.r}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
           <SectionHeader title="The Impact" tagline="Numbers that validate the design decisions." />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              {[
                { label: 'Time Saved Daily', val: '18 min', icon: Clock },
                { label: 'User Rating', val: '4.9/5', icon: Target },
                { label: 'Palette Engagement', val: '+240%', icon: TrendingUp }
              ].map((stat, i) => (
                <div key={i} className="space-y-6">
                   <div className="w-20 h-20 rounded-3xl bg-brand-purple/10 mx-auto flex items-center justify-center text-brand-purple">
                      <stat.icon className="w-10 h-10" />
                   </div>
                   <div>
                      <h4 className="text-5xl font-bold mb-2">{stat.val}</h4>
                      <p className="text-white/40 uppercase font-mono tracking-widest text-sm">{stat.label}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Challenges & Learnings */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 rounded-[64px] overflow-hidden">
           <div className="bg-dark-bg p-12 lg:p-24">
              <h4 className="text-3xl font-bold mb-8">Challenges</h4>
              <ul className="space-y-8">
                 <li className="space-y-2">
                    <span className="text-brand-pink font-bold">01 // Lighting Variables</span>
                    <p className="opacity-60">Extracting accurate colors from inconsistent daylight versus warm indoor lighting was technically demanding.</p>
                 </li>
                 <li className="space-y-2">
                    <span className="text-brand-pink font-bold">02 // Cultural Color Theory</span>
                    <p className="opacity-60">Color meanings vary globally. We had to ensure the AI's recommendations were culturally sensitive.</p>
                 </li>
              </ul>
           </div>
           <div className="bg-dark-surface p-12 lg:p-24">
              <h4 className="text-3xl font-bold mb-8">Learnings</h4>
              <ul className="space-y-8">
                 <li className="space-y-2">
                    <span className="text-brand-purple font-bold">01 // Less is More</span>
                    <p className="opacity-60">Focusing on fewer, high-quality suggestions led to better user satisfaction than a massive database of colors.</p>
                 </li>
                 <li className="space-y-2">
                    <span className="text-brand-purple font-bold">02 // AI Trust</span>
                    <p className="opacity-60">Explainability in AI (telling the user WHY a recommendation was made) is crucial for adoption.</p>
                 </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Accessibility & Future Plans */}
      <section className="section-padding">
        <div className="container mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="glass p-12 rounded-[48px]">
                 <Accessibility className="w-10 h-10 text-brand-blue mb-8" />
                 <h4 className="text-2xl font-bold mb-6">Accessibility</h4>
                 <ul className="space-y-4 opacity-60">
                    <li>• Color blind mode with pattern-based color labeling</li>
                    <li>• Voice-over descriptions for all color palettes</li>
                    <li>• WCAG compliant contrast ratios across the UI</li>
                    <li>• Scalable typography for varying visual abilities</li>
                 </ul>
              </div>
              <div className="glass p-12 rounded-[48px]">
                 <Globe className="w-10 h-10 text-brand-orange mb-8" />
                 <h4 className="text-2xl font-bold mb-6">Future Plans</h4>
                 <ul className="space-y-4 opacity-60">
                    <li>• AR Try-on integration for virtual color testing</li>
                    <li>• B2B API for fashion e-commerce checkout integration</li>
                    <li>• Multi-user "Style Rooms" for collaborative palette building</li>
                    <li>• Advanced fabric texture recognition</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Prototype Section */}
      <section className="section-padding bg-linear-to-b from-transparent to-brand-purple/5">
        <div className="container mx-auto">
          <SectionHeader number="15 // HANDOFF" title="Interactive Prototype" tagline="Explore the core workflows in a high-fidelity interactive environment." />
          <div className="glass p-2 md:p-8 rounded-[64px] border-white/5 bg-white/[0.02]">
            <div className="aspect-video rounded-[48px] overflow-hidden bg-black relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-brand-purple/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                       <Play className="w-10 h-10 text-brand-purple fill-brand-purple" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Live Prototype Preview</h4>
                    <p className="text-white/40 text-sm mb-8">Click to interact with the neural scan engine.</p>
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-brand-purple hover:text-white transition-all">Launch Fullscreen</button>
                 </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-30 grayscale"
                alt="Prototype Preview"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <footer className="py-60 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-brand-purple/20 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
              <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter">Thanks for Scrolling.</h2>
              <p className="text-xl md:text-2xl text-white/40 mb-20 max-w-xl mx-auto">Liked what you saw? Let's talk about the future of fashion tech.</p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
                 <div className="text-left md:border-r border-white/10 pr-0 md:pr-12">
                    <p className="text-xs uppercase font-mono tracking-widest text-white/40 mb-2">Lead Designer</p>
                    <p className="text-2xl font-bold">Alex Rivera</p>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-brand-purple transition-colors cursor-pointer"><Instagram className="w-5 h-5" /></div>
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-brand-purple transition-colors cursor-pointer"><Linkedin className="w-5 h-5" /></div>
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-brand-purple transition-colors cursor-pointer"><Mail className="w-5 h-5" /></div>
                 </div>
              </div>

              <div className="flex justify-between items-center text-xs font-mono text-white/20 uppercase tracking-widest border-t border-white/5 pt-12">
                 <span>© 2026 NI-HA CASE STUDY</span>
                 <div className="flex gap-8">
                    <span className="hidden sm:inline">MADE WITH PASSION</span>
                    <span>BASED IN TOKYO</span>
                 </div>
              </div>
           </motion.div>
        </div>
      </footer>
    </div>
  );
}
