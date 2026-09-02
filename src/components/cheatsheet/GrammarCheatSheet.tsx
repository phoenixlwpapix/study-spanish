import React, { useState, useMemo } from 'react';
import { 
  Search, 
  FileText, 
  Zap, 
  Sparkles, 
  Tag,
  Scale,
  Shuffle,
  CornerDownRight,
  Split,
  History,
  CloudRain,
  CheckSquare,
  FastForward,
  Filter,
  Clock,
  HelpCircle,
  BookOpen,
  Heart
} from 'lucide-react';
import { AudioButton } from '../common/AudioButton';

interface CheatSection {
  id: string;
  unitId: number;
  unitTitle: string;
  title: string;
  subtitle?: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  keywords: string[];
  content: React.ReactNode;
}

const CHEAT_SHEET_SECTIONS: CheatSection[] = [
    // =============================================================
    // UNIT 1: SPANISH GRAMMAR FUNDAMENTALS
    // =============================================================
    {
      id: 'u1-gender',
      unitId: 1,
      unitTitle: 'Unit 1: Fundamentals',
      title: 'Noun Gender Patterns & Tricky Exceptions',
      subtitle: 'Masculine vs Feminine endings, Greek -ma words, and famous exceptions',
      category: 'Nouns & Articles',
      icon: Sparkles,
      keywords: ['gender', 'masculine', 'feminine', 'el', 'la', 'dia', 'mapa', 'mano', 'problema', 'nouns'],
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100">
              <span className="font-extrabold text-indigo-900 block mb-1 text-sm">Masculine Nouns (el / los)</span>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Usually ends in <strong>-o</strong> (el libro, el perro, el chico)</li>
                <li>• Greek origin ending in <strong>-ma, -pa, -ta</strong> (el problema, el mapa, el planeta, el idioma, el sistema)</li>
                <li>• Days of the week, months, and numbers (el lunes, el tres)</li>
                <li>• Mountains, rivers, oceans (el Everest, el Amazonas)</li>
              </ul>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100">
              <span className="font-extrabold text-rose-900 block mb-1 text-sm">Feminine Nouns (la / las)</span>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Usually ends in <strong>-a</strong> (la casa, la mesa, la chica)</li>
                <li>• Abstract suffixes <strong>-ción, -sión</strong> (la lección, la canción, la televisión)</li>
                <li>• Qualities in <strong>-dad, -tad, -tud</strong> (la ciudad, la libertad, la actitud)</li>
                <li>• Suffixes <strong>-umbre, -ie, -ez</strong> (la costumbre, la serie, la vejez)</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-black uppercase tracking-wider text-slate-800 block mb-2">
              ⚠️ Famous Gender Exceptions to Memorize:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>el día</strong> (the day)</span>
                <AudioButton text="el día" size="sm" />
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>el mapa</strong> (the map)</span>
                <AudioButton text="el mapa" size="sm" />
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>el problema</strong> (problem)</span>
                <AudioButton text="el problema" size="sm" />
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>el idioma</strong> (language)</span>
                <AudioButton text="el idioma" size="sm" />
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>la mano</strong> (the hand)</span>
                <AudioButton text="la mano" size="sm" />
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>la foto</strong> (photograph)</span>
                <AudioButton text="la foto" size="sm" />
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>la moto</strong> (motorcycle)</span>
                <AudioButton text="la moto" size="sm" />
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>el agua</strong> (water - fem sing)</span>
                <AudioButton text="el agua" size="sm" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'u1-articles-plurals',
      unitId: 1,
      unitTitle: 'Unit 1: Fundamentals',
      title: 'Articles Matrix & Pluralization Rules',
      subtitle: 'Definite vs Indefinite articles and noun plural formations',
      category: 'Nouns & Articles',
      icon: FileText,
      keywords: ['articles', 'definite', 'indefinite', 'plural', 'el', 'la', 'los', 'las', 'un', 'una'],
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-2.5">Category</th>
                  <th className="px-4 py-2.5">Masc Singular</th>
                  <th className="px-4 py-2.5">Fem Singular</th>
                  <th className="px-4 py-2.5">Masc Plural</th>
                  <th className="px-4 py-2.5">Fem Plural</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white font-medium">
                <tr>
                  <td className="px-4 py-3 font-bold text-indigo-900">Definite ("The")</td>
                  <td className="px-4 py-3"><span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono font-bold">el</span> libro</td>
                  <td className="px-4 py-3"><span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-mono font-bold">la</span> mesa</td>
                  <td className="px-4 py-3"><span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono font-bold">los</span> libros</td>
                  <td className="px-4 py-3"><span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-mono font-bold">las</span> mesas</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-amber-900">Indefinite ("A / Some")</td>
                  <td className="px-4 py-3"><span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono font-bold">un</span> coche</td>
                  <td className="px-4 py-3"><span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-mono font-bold">una</span> casa</td>
                  <td className="px-4 py-3"><span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono font-bold">unos</span> coches</td>
                  <td className="px-4 py-3"><span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-mono font-bold">unas</span> casas</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1">1. Ends in Vowel</span>
              <p className="text-slate-600">Add <strong>-s</strong>:</p>
              <p className="font-mono text-indigo-700 mt-0.5">libro → libros | casa → casas</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1">2. Ends in Consonant</span>
              <p className="text-slate-600">Add <strong>-es</strong>:</p>
              <p className="font-mono text-indigo-700 mt-0.5">papel → papeles | flor → flores</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1">3. Ends in -Z</span>
              <p className="text-slate-600">Change <strong>-z → -ces</strong>:</p>
              <p className="font-mono text-indigo-700 mt-0.5">lápiz → lápices | pez → peces</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'u1-present-regular',
      unitId: 1,
      unitTitle: 'Unit 1: Fundamentals',
      title: 'Regular Present Tense Endings (-AR, -ER, -IR)',
      subtitle: 'The foundation of Spanish verb conjugation',
      category: 'Verbs & Conjugation',
      icon: Zap,
      keywords: ['present', 'conjugation', 'regular', 'hablar', 'comer', 'vivir', 'ar', 'er', 'ir'],
      content: (
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-4 py-2.5">Pronoun</th>
                <th className="px-4 py-2.5">-AR (HABLAR)</th>
                <th className="px-4 py-2.5">-ER (COMER)</th>
                <th className="px-4 py-2.5">-IR (VIVIR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white font-medium">
              <tr>
                <td className="px-4 py-2.5 font-bold text-slate-600">yo</td>
                <td className="px-4 py-2.5 text-indigo-700 font-bold font-mono">habl-<strong>o</strong></td>
                <td className="px-4 py-2.5 text-indigo-700 font-bold font-mono">com-<strong>o</strong></td>
                <td className="px-4 py-2.5 text-indigo-700 font-bold font-mono">viv-<strong>o</strong></td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-bold text-slate-600">tú</td>
                <td className="px-4 py-2.5 font-mono">habl-<strong>as</strong></td>
                <td className="px-4 py-2.5 font-mono">com-<strong>es</strong></td>
                <td className="px-4 py-2.5 font-mono">viv-<strong>es</strong></td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-bold text-slate-600">él / ella / usted</td>
                <td className="px-4 py-2.5 font-mono">habl-<strong>a</strong></td>
                <td className="px-4 py-2.5 font-mono">com-<strong>e</strong></td>
                <td className="px-4 py-2.5 font-mono">viv-<strong>e</strong></td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-bold text-slate-600">nosotros / nosotras</td>
                <td className="px-4 py-2.5 text-emerald-700 font-bold font-mono">habl-<strong>amos</strong></td>
                <td className="px-4 py-2.5 text-emerald-700 font-bold font-mono">com-<strong>emos</strong></td>
                <td className="px-4 py-2.5 text-emerald-700 font-bold font-mono">viv-<strong>imos</strong></td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-bold text-slate-600">vosotros / vosotras</td>
                <td className="px-4 py-2.5 font-mono">habl-<strong>áis</strong></td>
                <td className="px-4 py-2.5 font-mono">com-<strong>éis</strong></td>
                <td className="px-4 py-2.5 font-mono">viv-<strong>ís</strong></td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-bold text-slate-600">ellos / ellas / ustedes</td>
                <td className="px-4 py-2.5 font-mono">habl-<strong>an</strong></td>
                <td className="px-4 py-2.5 font-mono">com-<strong>en</strong></td>
                <td className="px-4 py-2.5 font-mono">viv-<strong>en</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },

    // =============================================================
    // UNIT 2: SER VS ESTAR, NEGATION & TENER
    // =============================================================
    {
      id: 'u2-ser-estar',
      unitId: 2,
      unitTitle: 'Unit 2: Ser vs Estar & Syntax',
      title: 'Ser vs. Estar: D.O.C.T.O.R. vs P.L.A.C.E.',
      subtitle: 'Permanent identity vs temporary state, location, and adjective shifts',
      category: 'Core Verbs',
      icon: Scale,
      keywords: ['ser', 'estar', 'doctor', 'place', 'adjectives', 'location', 'origin', 'condition'],
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200">
              <span className="font-extrabold text-indigo-950 text-base block mb-2">SER (D.O.C.T.O.R.)</span>
              <ul className="space-y-1.5 text-slate-700 text-xs sm:text-sm">
                <li>• <strong>D</strong>escription: <em>El cielo es azul.</em></li>
                <li>• <strong>O</strong>ccupation: <em>Soy profesor de español.</em></li>
                <li>• <strong>C</strong>haracteristic: <em>Ella es muy inteligente.</em></li>
                <li>• <strong>T</strong>ime & Date: <em>Hoy es lunes. Son las tres.</em></li>
                <li>• <strong>O</strong>rigin / Material: <em>Soy de España. La mesa es de madera.</em></li>
                <li>• <strong>R</strong>elationship: <em>Carlos es mi hermano.</em></li>
                <li>• <strong>Location of EVENTS</strong>: <em>El concierto <strong>es</strong> en el estadio.</em></li>
              </ul>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
              <span className="font-extrabold text-emerald-950 text-base block mb-2">ESTAR (P.L.A.C.E.)</span>
              <ul className="space-y-1.5 text-slate-700 text-xs sm:text-sm">
                <li>• <strong>P</strong>osition: <em>El libro está en la mesa.</em></li>
                <li>• <strong>L</strong>ocation (Entities): <em>Madrid está en España.</em></li>
                <li>• <strong>A</strong>ction (-ando / -iendo): <em>Estoy estudiando ahora.</em></li>
                <li>• <strong>C</strong>ondition: <em>La puerta está cerrada. El café está caliente.</em></li>
                <li>• <strong>E</strong>motion: <em>Hoy estoy muy contento.</em></li>
                <li>• <strong>Food Taste (sensory)</strong>: <em>La sopa <strong>está</strong> riquísima.</em></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs">
            <span className="font-bold text-amber-950 block mb-1.5">⚡ Adjectives That Change Meaning:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
              <div>• <strong>ser aburrido:</strong> to be boring (character)</div>
              <div>• <strong>estar aburrido:</strong> to feel bored (state)</div>
              <div>• <strong>ser listo:</strong> to be clever / smart</div>
              <div>• <strong>estar listo:</strong> to be ready / prepared</div>
              <div>• <strong>ser rico:</strong> to be wealthy</div>
              <div>• <strong>estar rico:</strong> to taste delicious</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'u2-negation-questions',
      unitId: 2,
      unitTitle: 'Unit 2: Ser vs Estar & Syntax',
      title: 'Negation, Double Negatives & Interrogatives',
      subtitle: 'How to form questions and handle Spanish double negatives',
      category: 'Syntax & Questions',
      icon: HelpCircle,
      keywords: ['negation', 'double negative', 'nadie', 'nada', 'nunca', 'preguntas', 'interrogatives', 'que', 'quien', 'donde'],
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-2">Double Negation Words:</span>
              <ul className="space-y-1 text-slate-700 text-xs">
                <li>• <strong>nada</strong> (nothing) | <strong>nadie</strong> (nobody)</li>
                <li>• <strong>nunca / jamás</strong> (never) | <strong>tampoco</strong> (neither)</li>
                <li>• <strong>ningún / ninguno / ninguna</strong> (none / no)</li>
              </ul>
              <div className="mt-2 p-2 bg-white rounded-lg border text-xs text-indigo-900 font-mono">
                No tengo nada (I have nothing) | No veo a nadie
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200">
              <span className="font-bold text-indigo-950 block mb-2">Key Question Words (Always Accented!):</span>
              <div className="grid grid-cols-2 gap-1 text-xs text-slate-700">
                <div>• <strong>¿Qué?</strong> (What?)</div>
                <div>• <strong>¿Quién?</strong> (Who?)</div>
                <div>• <strong>¿Dónde?</strong> (Where?)</div>
                <div>• <strong>¿Cuándo?</strong> (When?)</div>
                <div>• <strong>¿Por qué?</strong> (Why?)</div>
                <div>• <strong>¿Cómo?</strong> (How?)</div>
                <div>• <strong>¿Cuánto/a?</strong> (How much?)</div>
                <div>• <strong>¿Cuál / Cuáles?</strong> (Which?)</div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-100 rounded-xl text-xs text-slate-700">
            <strong>Mandatory Contractions:</strong> <code>a + el = al</code> (Voy al parque) | <code>de + el = del</code> (El libro del profesor). <em>(No contraction with la, los, las).</em>
          </div>
        </div>
      )
    },
    {
      id: 'u2-tener-idioms',
      unitId: 2,
      unitTitle: 'Unit 2: Ser vs Estar & Syntax',
      title: 'Tener Idioms & Weather Expressions',
      subtitle: 'Expressing age, physical states, obligation and weather in Spanish',
      category: 'Idioms & Weather',
      icon: Tag,
      keywords: ['tener', 'idioms', 'weather', 'hacer', 'frio', 'calor', 'hambre', 'sed', 'edad'],
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
            <span className="font-bold text-amber-950 block mb-2">Tener Idiomatic Sensations:</span>
            <ul className="space-y-1 text-slate-800 text-xs">
              <li>• <strong>Tener hambre / sed:</strong> to be hungry / thirsty</li>
              <li>• <strong>Tener calor / frío:</strong> to be hot / cold</li>
              <li>• <strong>Tener prisa / miedo:</strong> to be in a hurry / afraid</li>
              <li>• <strong>Tener razón / sueño:</strong> to be right / sleepy</li>
              <li>• <strong>Tener [X] años:</strong> to be [X] years old</li>
              <li>• <strong>Tener que + inf:</strong> to have to do something</li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200">
            <span className="font-bold text-sky-950 block mb-2">Weather with "Hacer" & Natural Verbs:</span>
            <ul className="space-y-1 text-slate-800 text-xs">
              <li>• <strong>Hace frío / calor:</strong> It is cold / hot</li>
              <li>• <strong>Hace sol / viento:</strong> It is sunny / windy</li>
              <li>• <strong>Hace buen / mal tiempo:</strong> Nice / bad weather</li>
              <li>• <strong>Llueve (llover):</strong> It is raining</li>
              <li>• <strong>Nieva (nevar):</strong> It is snowing</li>
              <li>• <strong>Está nublado:</strong> It is cloudy (estar)</li>
            </ul>
          </div>
        </div>
      )
    },

    // =============================================================
    // UNIT 3: STEM-CHANGING VERBS & COMPARISONS
    // =============================================================
    {
      id: 'u3-stem-changers',
      unitId: 3,
      unitTitle: 'Unit 3: Stem-Changers & Comparatives',
      title: 'Present Stem-Changing "Boot" Verbs (o:ue, e:ie, e:i)',
      subtitle: 'Vowel shifts occur inside the boot (all forms EXCEPT nosotros and vosotros)',
      category: 'Verbs & Conjugation',
      icon: Shuffle,
      keywords: ['stem changers', 'boot verbs', 'o:ue', 'e:ie', 'e:i', 'dormir', 'poder', 'querer', 'pedir'],
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 font-bold uppercase text-[11px]">
                <tr>
                  <th className="px-4 py-2">Pattern</th>
                  <th className="px-4 py-2">Key Verbs</th>
                  <th className="px-4 py-2">Yo Form</th>
                  <th className="px-4 py-2">Él / Ella</th>
                  <th className="px-4 py-2">Nosotros (NO CHANGE!)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-bold text-amber-700">o → ue</td>
                  <td className="px-4 py-2.5 text-xs">dormir, poder, volver, costar, almorzar</td>
                  <td className="px-4 py-2.5 font-mono font-bold">duermo, puedo</td>
                  <td className="px-4 py-2.5 font-mono">duerme, puede</td>
                  <td className="px-4 py-2.5 font-mono text-emerald-700 font-bold">dormimos, podemos</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-bold text-indigo-700">e → ie</td>
                  <td className="px-4 py-2.5 text-xs">querer, entender, pensar, cerrar, empezar</td>
                  <td className="px-4 py-2.5 font-mono font-bold">quiero, entiendo</td>
                  <td className="px-4 py-2.5 font-mono">quiere, entiende</td>
                  <td className="px-4 py-2.5 font-mono text-emerald-700 font-bold">queremos, entendemos</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-bold text-rose-700">e → i (-IR)</td>
                  <td className="px-4 py-2.5 text-xs">pedir, servir, repetir, seguir, vestir</td>
                  <td className="px-4 py-2.5 font-mono font-bold">pido, sirvo</td>
                  <td className="px-4 py-2.5 font-mono">pide, sirve</td>
                  <td className="px-4 py-2.5 font-mono text-emerald-700 font-bold">pedimos, servimos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs space-y-1">
            <span className="font-bold text-indigo-950 block mb-1">🔗 Essential Verbal Periphrasis Formulas:</span>
            <p>• <strong>Near Future:</strong> <code>ir + a + infinitivo</code> → <em>Voy a estudiar (I am going to study)</em></p>
            <p>• <strong>Recent Past ("Just done"):</strong> <code>acabar + de + infinitivo</code> → <em>Acabo de llegar (I have just arrived)</em></p>
            <p>• <strong>Repetition ("Do again"):</strong> <code>volver + a + infinitivo</code> → <em>Vuelvo a intentar (I try again)</em></p>
          </div>
        </div>
      )
    },
    {
      id: 'u3-comparisons',
      unitId: 3,
      unitTitle: 'Unit 3: Stem-Changers & Comparatives',
      title: 'Comparisons (Inequality, Equality) & Superlatives',
      subtitle: 'más que, tan como, tanto como, and the -ísimo suffix',
      category: 'Comparatives',
      icon: Scale,
      keywords: ['comparisons', 'mas que', 'menos que', 'tan como', 'tanto como', 'superlative', 'isimo'],
      content: (
        <div className="space-y-4 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-indigo-50/80 rounded-2xl border border-indigo-100">
              <span className="font-bold text-indigo-950 block mb-1">1. Inequality</span>
              <p className="text-slate-700 mb-1"><strong>más / menos... que</strong></p>
              <p className="text-xs text-slate-600"><em>Juan es más alto que Pedro.</em></p>
              <p className="text-xs text-rose-700 font-bold mt-1">⚠️ Numbers: más DE 20 euros</p>
            </div>
            <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-100">
              <span className="font-bold text-emerald-950 block mb-1">2. Equality</span>
              <p className="text-slate-700 mb-1"><strong>tan... como</strong> (adjectives)</p>
              <p className="text-xs text-slate-600 mb-1"><em>Tan rápido como tú.</em></p>
              <p className="text-slate-700"><strong>tanto/a/os/as... como</strong> (nouns)</p>
            </div>
            <div className="p-3.5 bg-amber-50/80 rounded-2xl border border-amber-100">
              <span className="font-bold text-amber-950 block mb-1">3. Superlative & -ísimo</span>
              <p className="text-slate-700 mb-1"><strong>el/la más... DE</strong></p>
              <p className="text-xs text-slate-600 mb-1"><em>El más alto del mundo.</em></p>
              <p className="text-xs text-slate-700">rico → <strong>riquísimo</strong> (c→qu)</p>
            </div>
          </div>
        </div>
      )
    },

    // =============================================================
    // UNIT 4: OBJECT PRONOUNS, GUSTAR & PROGRESSIVE
    // =============================================================
    {
      id: 'u4-pronouns-mastery',
      unitId: 4,
      unitTitle: 'Unit 4: Pronouns, Gustar & Progressive',
      title: 'Pronoun Master Map: Direct, Indirect & "Se Lo"',
      subtitle: 'Placement rules, the R.I.D. order, and the tongue-twister avoidance rule',
      category: 'Pronouns',
      icon: CornerDownRight,
      keywords: ['pronouns', 'direct object', 'indirect object', 'se lo', 'me', 'te', 'lo', 'la', 'le', 'nos', 'les'],
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200">
              <span className="font-bold text-indigo-950 block mb-1">Direct Object Pronouns (What / Whom?)</span>
              <div className="font-mono text-indigo-700 font-bold mb-1">me, te, lo/la, nos, os, los/las</div>
              <p className="text-xs text-slate-700">Replaces the direct receiver: <em>Compro el libro → <strong>Lo</strong> compro.</em></p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200">
              <span className="font-bold text-rose-950 block mb-1">Indirect Object Pronouns (To / For Whom?)</span>
              <div className="font-mono text-rose-700 font-bold mb-1">me, te, le, nos, os, les</div>
              <p className="text-xs text-slate-700">Replaces beneficiary: <em><strong>Le</strong> doy flores a María. (Mandatory doubling!)</em></p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs space-y-1">
            <span className="font-bold text-amber-950 block mb-1">⚡ Double Pronoun Blueprint ("Se Lo" Transformation):</span>
            <p>1. <strong>Order:</strong> Indirect Object comes FIRST, Direct Object comes SECOND (<strong>IO + DO</strong>).</p>
            <p>2. <strong>The "L-to-S" Rule:</strong> When <em>le/les</em> is followed by <em>lo/la/los/las</em>, change the first pronoun to <strong>SE</strong>:</p>
            <div className="p-2 bg-white rounded-lg font-mono text-amber-900 border mt-1">
              le + lo → <strong>se lo</strong> (Yo se lo doy) | les + las → <strong>se las</strong> (Ella se las manda)
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border text-xs text-slate-700">
            <strong>Placement Options:</strong> Placed <em>in front of</em> conjugated verb (<em>Lo quiero comprar</em>) OR <em>attached to</em> infinitive/gerund (<em>Quiero comprarlo</em> / <em>Estoy comiéndolo</em>).
          </div>
        </div>
      )
    },
    {
      id: 'u4-gustar-progressive',
      unitId: 4,
      unitTitle: 'Unit 4: Pronouns, Gustar & Progressive',
      title: 'Verbs Like Gustar & Present Progressive',
      subtitle: 'Inverted subject agreement and forming the -ando/-iendo progressive tense',
      category: 'Core Verbs',
      icon: Heart,
      keywords: ['gustar', 'encantar', 'interesar', 'doler', 'progressive', 'gerundio', 'ando', 'iendo', 'leyendo', 'durmiendo'],
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200">
              <span className="font-bold text-rose-950 block mb-1">Verbs Like Gustar (Inverted Agreement):</span>
              <p className="text-xs text-slate-700 mb-2">The verb agrees with the <strong>thing liked</strong>, NOT the person!</p>
              <div className="space-y-1 text-xs">
                <div>• <strong>Me gusta + singular noun / verb:</strong> <em>Me gusta el café / bailar</em></div>
                <div>• <strong>Me gustan + plural noun:</strong> <em>Me gustan los tacos</em></div>
                <div>• Similar verbs: <strong>encantar</strong>, <strong>interesar</strong>, <strong>importar</strong>, <strong>doler (o:ue)</strong></div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200">
              <span className="font-bold text-indigo-950 block mb-1">Present Progressive (Estar + Gerundio):</span>
              <p className="text-xs text-slate-700 mb-2">Used strictly for actions happening <strong>right now</strong>:</p>
              <div className="space-y-1 text-xs">
                <div>• -AR verbs → <strong>-ando</strong> (hablando, estudiando)</div>
                <div>• -ER / -IR verbs → <strong>-iendo</strong> (comiendo, viviendo)</div>
                <div>• <em>i → y change:</em> leer → <strong>leyendo</strong>, oír → <strong>oyendo</strong></div>
                <div>• <em>stem change:</em> dormir → <strong>durmiendo</strong>, pedir → <strong>pidiendo</strong></div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // =============================================================
    // UNIT 5: SABER VS CONOCER, POR VS PARA & REFLEXIVES
    // =============================================================
    {
      id: 'u5-saber-conocer-por-para',
      unitId: 5,
      unitTitle: 'Unit 5: Saber/Conocer & Por/Para',
      title: 'Saber vs. Conocer & The Definitive POR vs. PARA',
      subtitle: 'Facts vs Familiarity, and the P.E.R.F.E.C.T. mnemonic for PARA',
      category: 'Prepositions & Verbs',
      icon: Split,
      keywords: ['por', 'para', 'saber', 'conocer', 'perfect', 'prepositions', 'time', 'facts', 'people'],
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">SABER (Facts / Info / Skills)</span>
              <p className="text-xs text-slate-700 mb-1"><em>Sé la verdad / Sé nadar (know how to)</em></p>
              <span className="font-bold text-indigo-900 block mt-2 mb-1">CONOCER (People / Places)</span>
              <p className="text-xs text-slate-700"><em>Conozco a Juan (personal a!) / Conozco Madrid</em></p>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200">
              <span className="font-bold text-indigo-950 block mb-1">PARA (P.E.R.F.E.C.T. Forward Arrow)</span>
              <ul className="text-xs text-slate-700 space-y-0.5">
                <li>• <strong>P</strong>urpose: <em>Estudio para aprender.</em></li>
                <li>• <strong>E</strong>xact Deadline: <em>Para el lunes.</em></li>
                <li>• <strong>R</strong>ecipient: <em>Es para ti.</em></li>
                <li>• <strong>F</strong>uture Goal: <em>Estudia para médico.</em></li>
                <li>• <strong>E</strong>mployment: <em>Trabajo para Google.</em></li>
                <li>• <strong>C</strong>omparison: <em>Para un niño, lee bien.</em></li>
                <li>• <strong>T</strong>oward Destination: <em>Salgo para Madrid.</em></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs">
            <span className="font-bold text-emerald-950 block mb-1">POR (Cause / Duration / Exchange / Means):</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-700">
              <div>• <strong>Cause / Reason:</strong> <em>Gracias por tu ayuda</em></div>
              <div>• <strong>Duration:</strong> <em>Estudié por tres horas</em></div>
              <div>• <strong>Price / Exchange:</strong> <em>Pagué $20 por el libro</em></div>
              <div>• <strong>Means of Transport/Comm:</strong> <em>Por teléfono / tren</em></div>
              <div>• <strong>Through / Along:</strong> <em>Caminamos por el parque</em></div>
              <div>• <strong>On behalf of:</strong> <em>Trabajo por mi amigo</em></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'u5-reflexives-time',
      unitId: 5,
      unitTitle: 'Unit 5: Saber/Conocer & Por/Para',
      title: 'Reflexive Daily Routines & Clock Time',
      subtitle: 'me, te, se, nos, os, se and telling time with Es la una / Son las...',
      category: 'Daily Routines',
      icon: Clock,
      keywords: ['reflexives', 'time', 'hora', 'levantarse', 'ducharse', 'dormirse', 'irse', 'es la una', 'son las dos'],
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200">
            <span className="font-bold text-purple-950 block mb-1.5">Reflexive Verbs (me, te, se, nos, os, se):</span>
            <ul className="space-y-1 text-xs text-slate-700">
              <li>• <strong>despertarse (e:ie):</strong> to wake up</li>
              <li>• <strong>levantarse:</strong> to get out of bed</li>
              <li>• <strong>lavarse / ducharse:</strong> to wash / shower</li>
              <li>• <strong>acostarse (o:ue):</strong> to go to bed</li>
              <li>• <strong>dormir vs dormirse:</strong> sleep vs fall asleep</li>
              <li>• <strong>ir vs irse:</strong> to go vs to leave / take off</li>
              <li>• <em>Rule:</em> <strong>Me lavo las manos</strong> (never "mis manos")</li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200">
            <span className="font-bold text-sky-950 block mb-1.5">Telling Clock Time (SER):</span>
            <ul className="space-y-1 text-xs text-slate-700">
              <li>• <strong>1:00 (Singular):</strong> <em>Es la una en punto.</em></li>
              <li>• <strong>2:00–12:00 (Plural):</strong> <em>Son las dos / tres / ocho...</em></li>
              <li>• <strong>Quarter past / Half past:</strong> <em>...y cuarto / ...y media</em></li>
              <li>• <strong>Quarter to:</strong> <em>Son las diez menos cuarto (9:45)</em></li>
              <li>• <strong>Event Time:</strong> <em>La clase es <strong>a las</strong> cuatro.</em></li>
            </ul>
          </div>
        </div>
      )
    },

    // =============================================================
    // UNIT 6: PRETERITE VS. IMPERFECT (PAST TENSES)
    // =============================================================
    {
      id: 'u6-past-tenses-guide',
      unitId: 6,
      unitTitle: 'Unit 6: Past Tenses',
      title: 'Preterite vs. Imperfect Master Decision Guide',
      subtitle: 'S.I.M.B.A. (Preterite snapshot) vs. C.H.E.A.T.E.D. (Imperfect video background)',
      category: 'Past Tenses',
      icon: History,
      keywords: ['preterite', 'imperfect', 'simba', 'cheated', 'past', 'ayer', 'anoche', 'siempre', 'mientras', 'hablaron', 'comian'],
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200">
              <span className="font-extrabold text-rose-950 text-base block mb-2">PRETERITE (S.I.M.B.A.) 📸</span>
              <ul className="space-y-1.5 text-slate-700 text-xs sm:text-sm">
                <li>• <strong>S</strong>ingle completed action: <em>Ayer compré un libro.</em></li>
                <li>• <strong>I</strong>nterruption: <em>...cuando sonó el teléfono.</em></li>
                <li>• <strong>M</strong>ain plot event: <em>Llegué, vi y vencí.</em></li>
                <li>• <strong>B</strong>eginning / End: <em>La película terminó a las diez.</em></li>
                <li>• <strong>A</strong>ction completed: <em>Viví en Madrid por 2 años.</em></li>
                <li>• <em>Triggers:</em> ayer, anoche, el año pasado, de repente</li>
              </ul>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200">
              <span className="font-extrabold text-indigo-950 text-base block mb-2">IMPERFECT (C.H.E.A.T.E.D.) 🎥</span>
              <ul className="space-y-1.5 text-slate-700 text-xs sm:text-sm">
                <li>• <strong>C</strong>ontinuous / Habitual: <em>Siempre jugaba al fútbol.</em></li>
                <li>• <strong>H</strong>ealth / Physical state: <em>Estaba muy cansado.</em></li>
                <li>• <strong>E</strong>motion / Mental state: <em>Estaba feliz.</em></li>
                <li>• <strong>A</strong>ge in the past: <em>Tenía diez años.</em></li>
                <li>• <strong>T</strong>ime in the past: <em>Eran las tres de la tarde.</em></li>
                <li>• <strong>E</strong>ndless description: <em>Hacía frío y llovía.</em></li>
                <li>• <em>Triggers:</em> siempre, a menudo, todos los días, mientras</li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 font-bold uppercase text-[11px]">
                <tr>
                  <th className="px-4 py-2">Tense</th>
                  <th className="px-4 py-2">-AR Endings</th>
                  <th className="px-4 py-2">-ER / -IR Endings</th>
                  <th className="px-4 py-2">Key Irregulars</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-bold text-rose-700">Preterite</td>
                  <td className="px-4 py-2.5 font-mono">-é, -aste, -ó, -amos, -aron</td>
                  <td className="px-4 py-2.5 font-mono">-í, -iste, -ió, -imos, -ieron</td>
                  <td className="px-4 py-2.5 text-xs">tuv-, estuv-, pus-, pud-, sup-, hic-, dij-, fui</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-bold text-indigo-700">Imperfect</td>
                  <td className="px-4 py-2.5 font-mono">-aba, -abas, -aba, -ábamos, -aban</td>
                  <td className="px-4 py-2.5 font-mono">-ía, -ías, -ía, -íamos, -ían</td>
                  <td className="px-4 py-2.5 text-xs text-indigo-900 font-bold">ONLY 3: era (ser), iba (ir), veía (ver)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'u6-preterite-stems',
      unitId: 6,
      unitTitle: 'Unit 6: Past Tenses',
      title: 'Irregular Preterite Stems (U, I, J Groups)',
      subtitle: 'Universal unaccented endings (-e, -iste, -o, -imos, -isteis, -ieron)',
      category: 'Past Tenses',
      icon: Zap,
      keywords: ['irregular preterite', 'tuve', 'hice', 'dije', 'u-stems', 'j-stems', 'fui'],
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-indigo-50/80 rounded-2xl border border-indigo-200">
              <span className="font-bold text-indigo-950 block mb-1">U-Stems</span>
              <ul className="text-xs text-slate-700 space-y-0.5 font-mono">
                <li>• tener → <strong>tuv-</strong> (tuve)</li>
                <li>• estar → <strong>estuv-</strong> (estuve)</li>
                <li>• poner → <strong>pus-</strong> (puse)</li>
                <li>• poder → <strong>pud-</strong> (pude)</li>
                <li>• saber → <strong>sup-</strong> (supe)</li>
              </ul>
            </div>
            <div className="p-3.5 bg-purple-50/80 rounded-2xl border border-purple-200">
              <span className="font-bold text-purple-950 block mb-1">I-Stems</span>
              <ul className="text-xs text-slate-700 space-y-0.5 font-mono">
                <li>• hacer → <strong>hic-</strong> (hice, él hizo)</li>
                <li>• venir → <strong>vin-</strong> (vine)</li>
                <li>• querer → <strong>quis-</strong> (quise)</li>
              </ul>
            </div>
            <div className="p-3.5 bg-rose-50/80 rounded-2xl border border-rose-200">
              <span className="font-bold text-rose-950 block mb-1">J-Stems (take -eron!)</span>
              <ul className="text-xs text-slate-700 space-y-0.5 font-mono">
                <li>• decir → <strong>dij-</strong> (dije, dijeron)</li>
                <li>• traer → <strong>traj-</strong> (traje, trajeron)</li>
                <li>• conducir → <strong>conduj-</strong></li>
              </ul>
            </div>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium">
            ⚠️ <strong>Zero Accents Rule:</strong> Irregular stem preterites have NO accent marks on <em>yo</em> or <em>él</em> forms: <code>tuve, tuvo, hice, hizo, dije, dijo</code>.
          </div>
        </div>
      )
    },

    // =============================================================
    // UNIT 7: THE SUBJUNCTIVE MOOD
    // =============================================================
    {
      id: 'u7-subjunctive-blueprint',
      unitId: 7,
      unitTitle: 'Unit 7: Subjunctive Mood',
      title: 'Subjunctive Blueprint: W.E.I.R.D.O. & D.I.S.H.E.S.',
      subtitle: 'The 3-part recipe, opposite vowels (-AR→E, -ER/-IR→A), and the 6 irregulars',
      category: 'Subjunctive',
      icon: CloudRain,
      keywords: ['subjunctive', 'weirdo', 'dishes', 'opposite vowels', 'ojala', 'sea', 'vaya', 'tenga', 'haga'],
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 text-xs sm:text-sm">
            <span className="font-bold text-rose-950 block mb-1.5">The 3-Part Subjunctive Recipe:</span>
            <div className="p-2.5 bg-white rounded-xl border font-mono text-xs text-rose-900 mb-2">
              [S1 + Verbo WEIRDO] + "que" + [S2 + Verbo en Subjuntivo]
            </div>
            <p className="text-xs text-slate-700">
              <em>Quiero (S1) + que + tú comas (S2).</em> (If S1 = S2, use infinitive: <em>Quiero comer</em>).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200">
              <span className="font-bold text-indigo-950 block mb-1.5">W.E.I.R.D.O. Triggers:</span>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• <strong>W</strong>ishes: <em>Quiero que vengas</em></li>
                <li>• <strong>E</strong>motions: <em>Me alegro de que estés aquí</em></li>
                <li>• <strong>I</strong>mpersonal: <em>Es necesario que estudies</em></li>
                <li>• <strong>R</strong>ecommendations: <em>Te aconsejo que leas</em></li>
                <li>• <strong>D</strong>oubt / Denial: <em>Dudo que sea verdad</em></li>
                <li>• <strong>O</strong>jalá: <em>¡Ojalá que llueva!</em></li>
              </ul>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
              <span className="font-bold text-amber-950 block mb-1.5">D.I.S.H.E.S. Irregulars:</span>
              <ul className="space-y-1 text-xs text-slate-800 font-mono">
                <li>• <strong>D</strong>ar: dé, des, dé, demos, den</li>
                <li>• <strong>I</strong>r: vaya, vayas, vaya, vayamos, vayan</li>
                <li>• <strong>S</strong>er: sea, seas, sea, seamos, sean</li>
                <li>• <strong>H</strong>aber: haya (there be)</li>
                <li>• <strong>E</strong>star: esté, estés, esté, estemos, estén</li>
                <li>• <strong>S</strong>aber: sepa, sepas, sepa, sepamos, sepan</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // =============================================================
    // UNIT 8: RELATIVE PRONOUNS & COMMANDS
    // =============================================================
    {
      id: 'u8-commands-mastery',
      unitId: 8,
      unitTitle: 'Unit 8: Relative Pronouns & Commands',
      title: 'Commands Master Guide: Formal (Ud.) vs Informal (Tú)',
      subtitle: 'The 8 "Vin Diesel" irregulars and affirmative vs negative pronoun placement',
      category: 'Commands',
      icon: CheckSquare,
      keywords: ['commands', 'mandatos', 'tu commands', 'formal commands', 'vin diesel', 'haz', 'pon', 'di', 'no hagas', 'pronoun placement'],
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
              <span className="font-bold text-emerald-950 block mb-1">Affirmative Tú Commands (3rd Indicative)</span>
              <p className="text-xs text-slate-700 mb-1">¡Habla!, ¡Come!, ¡Escribe!</p>
              <span className="font-bold text-emerald-900 block text-xs mt-2 mb-1">8 "Vin Diesel" Irregulars:</span>
              <p className="font-mono text-xs text-emerald-900 font-bold">
                Ven, Di, Sal, Haz, Ten, Ve, Pon, Sé
              </p>
              <p className="text-[11px] text-slate-600 mt-1"><em>(venir, decir, salir, hacer, tener, ir, poner, ser)</em></p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200">
              <span className="font-bold text-rose-950 block mb-1">Negative Tú Commands (Subjunctive)</span>
              <p className="text-xs text-slate-700 mb-1">¡No hables!, ¡No comas!, ¡No hagas!</p>
              <span className="font-bold text-indigo-900 block text-xs mt-2 mb-1">Formal Commands (Usted / Uds):</span>
              <p className="font-mono text-xs text-indigo-900 font-bold">
                ¡Hable / Hablen!, ¡Coma / Coman!, ¡Pase!
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-xs space-y-1">
            <span className="font-bold text-indigo-950 block mb-1">⚡ Universal Command Pronoun Placement Rule:</span>
            <p>• <strong>Affirmative Commands:</strong> Attach pronouns to the END + add accent: <code>¡Dígamelo!</code> | <code>¡Hazlo!</code> | <code>¡Siéntate!</code></p>
            <p>• <strong>Negative Commands:</strong> Pronouns go IN FRONT between "no" and verb: <code>¡No me lo digas!</code> | <code>¡No lo hagas!</code></p>
          </div>
        </div>
      )
    },
    {
      id: 'u8-relative-pronouns',
      unitId: 8,
      unitTitle: 'Unit 8: Relative Pronouns & Commands',
      title: 'Relative Pronouns: Que, Quien & Lo Que',
      subtitle: 'Connecting clauses without noun repetition',
      category: 'Syntax & Questions',
      icon: Tag,
      keywords: ['relative pronouns', 'que', 'quien', 'lo que', 'clauses'],
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="p-3.5 bg-indigo-50/80 rounded-2xl border border-indigo-100">
            <span className="font-bold text-indigo-950 block mb-1">que (that / which / who)</span>
            <p className="text-xs text-slate-600">Universal connector for people and things.</p>
            <p className="font-mono text-xs text-indigo-800 mt-1">El libro que leo.</p>
          </div>
          <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-100">
            <span className="font-bold text-emerald-950 block mb-1">quien / quienes</span>
            <p className="text-xs text-slate-600">Refers to people AFTER prepositions (con, a, de).</p>
            <p className="font-mono text-xs text-emerald-800 mt-1">La chica con quien hablo.</p>
          </div>
          <div className="p-3.5 bg-purple-50/80 rounded-2xl border border-purple-100">
            <span className="font-bold text-purple-950 block mb-1">lo que (what / that which)</span>
            <p className="text-xs text-slate-600">Refers to an entire idea or abstract statement.</p>
            <p className="font-mono text-xs text-purple-800 mt-1">Lo que necesitas es paz.</p>
          </div>
        </div>
      )
    },

    // =============================================================
    // UNIT 9: FUTURE, CONDITIONAL & ADVANCED GRAMMAR
    // =============================================================
    {
      id: 'u9-future-conditional-perfect',
      unitId: 9,
      unitTitle: 'Unit 9: Future, Conditional & Advanced',
      title: 'Future, Conditional & Present Perfect Tenses',
      subtitle: 'Simple future, courteous conditionals, and auxiliary haber + participle',
      category: 'Advanced Tenses',
      icon: FastForward,
      keywords: ['future', 'conditional', 'present perfect', 'haber', 'participio', 'hablare', 'hablaria', 'he hablado', 'si clauses'],
      content: (
        <div className="space-y-4 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200">
              <span className="font-bold text-indigo-950 block mb-1">1. Future ("Will do")</span>
              <p className="text-xs text-slate-600">Infinitive + <strong>-é, -ás, -á, -emos, -án</strong></p>
              <p className="font-mono text-xs text-indigo-800 mt-1">hablaré, comeré, viviré</p>
              <p className="text-[11px] text-slate-600 mt-1"><em>tendré, haré, diré, saldré</em></p>
            </div>
            <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-200">
              <span className="font-bold text-purple-950 block mb-1">2. Conditional ("Would")</span>
              <p className="text-xs text-slate-600">Infinitive + <strong>-ía, -ías, -ía, -íamos, -ían</strong></p>
              <p className="font-mono text-xs text-purple-800 mt-1">hablaría, comería</p>
              <p className="text-[11px] text-slate-600 mt-1"><em>Me gustaría / ¿Podría usted?</em></p>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200">
              <span className="font-bold text-emerald-950 block mb-1">3. Present Perfect</span>
              <p className="text-xs text-slate-600"><strong>he, has, ha, hemos, han</strong> + -ado/-ido</p>
              <p className="font-mono text-xs text-emerald-800 mt-1">he hablado, he comido</p>
              <p className="text-[11px] text-slate-600 mt-1"><em>hecho, dicho, visto, escrito</em></p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'u9-imperfect-subjunctive-si',
      unitId: 9,
      unitTitle: 'Unit 9: Future, Conditional & Advanced',
      title: 'Imperfect Subjunctive & Hypothetical "Si" Clauses',
      subtitle: 'The 3rd plural preterite derivation and contrary-to-fact conditionals',
      category: 'Subjunctive',
      icon: Sparkles,
      keywords: ['imperfect subjunctive', 'si clauses', 'tuviera', 'fuera', 'hiciera', 'hypothetical', 'condicional'],
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200">
            <span className="font-bold text-indigo-950 block mb-1">Imperfect Subjunctive Formula (Preterite Ellos minus -ron + -ra):</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1 text-xs font-mono text-indigo-900">
              <div>• hablaron → <strong>hablara, hablaras...</strong></div>
              <div>• tuvieron → <strong>tuviera, tuvieras...</strong></div>
              <div>• fueron → <strong>fuera, fueras...</strong></div>
              <div>• hicieron → <strong>hiciera, hicieras...</strong></div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200">
            <span className="font-bold text-rose-950 block mb-1">Contrary-to-Fact "Si" Clause Blueprint:</span>
            <div className="p-2 bg-white rounded-lg font-mono text-xs text-rose-900 border mb-1.5">
              Si + [Imperfecto de Subjuntivo], [entonces] [Condicional]
            </div>
            <p className="text-xs text-slate-700">
              • <em>Si yo <strong>tuviera</strong> dinero, <strong>viajaría</strong> por el mundo.</em> (If I had money, I would travel).
            </p>
            <p className="text-xs text-slate-700">
              • <em>Si yo <strong>fuera</strong> tú, no lo <strong>haría</strong>.</em> (If I were you, I wouldn't do it).
            </p>
          </div>
        </div>
      )
    }
];

export const GrammarCheatSheet: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Extract all categories for filtering
  const allCategories = useMemo(() => {
    const cats = Array.from(new Set(CHEAT_SHEET_SECTIONS.map((s) => s.category)));
    return ['all', ...cats];
  }, []);

  const filteredSections = useMemo(() => {
    return CHEAT_SHEET_SECTIONS.filter((s) => {
      const matchesUnit = selectedUnitFilter === 'all' || s.unitId === selectedUnitFilter;
      const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
      const q = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.unitTitle.toLowerCase().includes(q) ||
        (s.subtitle && s.subtitle.toLowerCase().includes(q)) ||
        s.category.toLowerCase().includes(q) ||
        s.keywords.some((k) => k.toLowerCase().includes(q));
      return matchesUnit && matchesCategory && matchesSearch;
    });
  }, [selectedUnitFilter, selectedCategory, searchTerm]);

  return (
    <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto space-y-6">
      {/* Header & Control Center */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Comprehensive 9-Unit Reference Guide</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 m-0 text-left">
              Spanish Grammar Cheat Sheet
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Instant formulas, diagnostic tables, mnemonics, and conjugation matrices across all 108 lessons.
            </p>
          </div>

          {/* Search input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              name="grammar-search"
              aria-label="Search grammar topics or keywords"
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search (e.g. Por vs Para, SIMBA, Gustar)…"
              className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-slate-50"
            />
          </div>
        </div>

        {/* Unit Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
          <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Unit:
          </span>
          <button
            onClick={() => setSelectedUnitFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-colors cursor-pointer ${
              selectedUnitFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All 9 Units
          </button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((uNum) => (
            <button
              key={uNum}
              onClick={() => setSelectedUnitFilter(uNum)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-colors cursor-pointer ${
                selectedUnitFilter === uNum
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Unit {uNum}
            </button>
          ))}
        </div>

        {/* Category Filter Pills (Auto-wrapping to prevent clipping) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
            <Tag className="w-3.5 h-3.5" />
            Topic:
          </span>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold shrink-0 transition-colors cursor-pointer capitalize ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Topics' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Sections List */}
      <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-500">
        <span>Showing {filteredSections.length} reference cards</span>
        {(searchTerm || selectedUnitFilter !== 'all' || selectedCategory !== 'all') && (
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedUnitFilter('all');
              setSelectedCategory('all');
            }}
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Clear all filters
          </button>
        )}
      </div>

      <div className="space-y-6">
        {filteredSections.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <Search className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No grammar topics found</h3>
            <p className="text-xs text-slate-500">Try searching for keywords like "ser", "por", "imperfect", or "commands".</p>
          </div>
        ) : (
          filteredSections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start justify-between border-b border-slate-100 pb-3.5 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                          {section.unitTitle}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                          {section.category}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                        {section.title}
                      </h3>
                      {section.subtitle && (
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {section.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>{section.content}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
