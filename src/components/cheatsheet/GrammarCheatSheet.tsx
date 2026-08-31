import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Zap, 
  Sparkles, 
  Calendar,
  Tag,
  Scale,
  Shuffle,
  CornerDownRight,
  Split,
  History,
  CloudRain,
  CheckSquare,
  FastForward,
  Filter
} from 'lucide-react';
import { AudioButton } from '../common/AudioButton';

export const GrammarCheatSheet: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<number | 'all'>('all');

  const cheatSheetSections = [
    // -------------------------------------------------------------
    // UNIT 1 CHEAT SHEETS
    // -------------------------------------------------------------
    {
      id: 'u1-gender',
      unitId: 1,
      unitTitle: 'Unit 1: Fundamentals',
      title: 'Noun Gender Rules & Exceptions',
      icon: Sparkles,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100">
              <span className="font-extrabold text-indigo-900 block mb-1">Masculine Nouns (el)</span>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Usually ends in <strong>-o</strong> (el libro, el perro)</li>
                <li>• Greek origin in <strong>-ma, -pa, -ta</strong> (el problema, el mapa, el idioma)</li>
                <li>• Days of week & numbers (el lunes, el tres)</li>
              </ul>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100">
              <span className="font-extrabold text-rose-900 block mb-1">Feminine Nouns (la)</span>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Usually ends in <strong>-a</strong> (la casa, la mesa)</li>
                <li>• Suffixes <strong>-ción, -sión</strong> (la lección, la televisión)</li>
                <li>• Suffixes <strong>-dad, -tad, -tud</strong> (la ciudad, la libertad)</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2">
              ⚠️ Famous Gender Exceptions to Memorize:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>el día</strong> (day)</span>
                <AudioButton text="el día" size="sm" />
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>el mapa</strong> (map)</span>
                <AudioButton text="el mapa" size="sm" />
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>la mano</strong> (hand)</span>
                <AudioButton text="la mano" size="sm" />
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>la foto</strong> (photo)</span>
                <AudioButton text="la foto" size="sm" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'u1-articles',
      unitId: 1,
      unitTitle: 'Unit 1: Fundamentals',
      title: 'Definite & Indefinite Articles Matrix',
      icon: FileText,
      content: (
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-4 py-2.5">Type</th>
                <th className="px-4 py-2.5">Masc Sing</th>
                <th className="px-4 py-2.5">Fem Sing</th>
                <th className="px-4 py-2.5">Masc Plur</th>
                <th className="px-4 py-2.5">Fem Plur</th>
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
                <td className="px-4 py-3 font-bold text-amber-900">Indefinite ("A/Some")</td>
                <td className="px-4 py-3"><span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono font-bold">un</span> gato</td>
                <td className="px-4 py-3"><span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-mono font-bold">una</span> casa</td>
                <td className="px-4 py-3"><span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono font-bold">unos</span> gatos</td>
                <td className="px-4 py-3"><span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-mono font-bold">unas</span> casas</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: 'u1-verbs',
      unitId: 1,
      unitTitle: 'Unit 1: Fundamentals',
      title: 'Regular Present Tense Endings (-AR, -ER, -IR)',
      icon: Zap,
      content: (
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-4 py-2.5">Pronoun</th>
                <th className="px-4 py-2.5">-AR (Hablar)</th>
                <th className="px-4 py-2.5">-ER (Comer)</th>
                <th className="px-4 py-2.5">-IR (Vivir)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white font-medium">
              <tr>
                <td className="px-4 py-2.5 font-bold text-slate-600">yo</td>
                <td className="px-4 py-2.5 text-indigo-700 font-bold">habl-<strong>o</strong></td>
                <td className="px-4 py-2.5 text-indigo-700 font-bold">com-<strong>o</strong></td>
                <td className="px-4 py-2.5 text-indigo-700 font-bold">viv-<strong>o</strong></td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-bold text-slate-600">tú</td>
                <td className="px-4 py-2.5">habl-<strong>as</strong></td>
                <td className="px-4 py-2.5">com-<strong>es</strong></td>
                <td className="px-4 py-2.5">viv-<strong>es</strong></td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-bold text-slate-600">él / ella / usted</td>
                <td className="px-4 py-2.5">habl-<strong>a</strong></td>
                <td className="px-4 py-2.5">com-<strong>e</strong></td>
                <td className="px-4 py-2.5">viv-<strong>e</strong></td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-bold text-slate-600">nosotros / nosotras</td>
                <td className="px-4 py-2.5 text-emerald-700 font-bold">habl-<strong>amos</strong></td>
                <td className="px-4 py-2.5 text-emerald-700 font-bold">com-<strong>emos</strong></td>
                <td className="px-4 py-2.5 text-emerald-700 font-bold">viv-<strong>imos</strong></td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-bold text-slate-600">ellos / ellas / ustedes</td>
                <td className="px-4 py-2.5">habl-<strong>an</strong></td>
                <td className="px-4 py-2.5">com-<strong>en</strong></td>
                <td className="px-4 py-2.5">viv-<strong>en</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: 'u1-numbers-days',
      unitId: 1,
      unitTitle: 'Unit 1: Fundamentals',
      title: 'Numbers 1–30 & Days of the Week',
      icon: Calendar,
      content: (
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs sm:text-sm">
            <span className="font-bold text-indigo-950 block mb-1">📅 Days of Week ("el lunes" = on Monday):</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
              {[
                { s: 'el lunes', e: 'Monday' },
                { s: 'el martes', e: 'Tuesday' },
                { s: 'el miércoles', e: 'Wednesday' },
                { s: 'el jueves', e: 'Thursday' },
                { s: 'el viernes', e: 'Friday' },
                { s: 'el sábado', e: 'Saturday' },
                { s: 'el domingo', e: 'Sunday' }
              ].map((d, i) => (
                <div key={i} className="p-2 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="font-bold">{d.s}</span>
                  <AudioButton text={d.s} size="sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },

    // -------------------------------------------------------------
    // UNIT 2 CHEAT SHEETS
    // -------------------------------------------------------------
    {
      id: 'u2-ser-estar',
      unitId: 2,
      unitTitle: 'Unit 2: Ser vs Estar & Syntax',
      title: 'Ser vs. Estar: D.O.C.T.O.R. vs P.L.A.C.E.',
      icon: Scale,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
              <span className="font-extrabold text-indigo-950 text-base block mb-2">SER (D.O.C.T.O.R.)</span>
              <ul className="space-y-1 text-slate-700">
                <li>• <strong>D</strong>escription (El cielo es azul)</li>
                <li>• <strong>O</strong>ccupation (Soy profesor)</li>
                <li>• <strong>C</strong>haracteristic (Ella es alta)</li>
                <li>• <strong>T</strong>ime & Date (Son las tres)</li>
                <li>• <strong>O</strong>rigin (Soy de España)</li>
                <li>• <strong>R</strong>elationship (Es mi hermano)</li>
                <li>• <strong>Events location</strong> (La fiesta es aquí)</li>
              </ul>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="font-extrabold text-emerald-950 text-base block mb-2">ESTAR (P.L.A.C.E.)</span>
              <ul className="space-y-1 text-slate-700">
                <li>• <strong>P</strong>osition (El libro está en la mesa)</li>
                <li>• <strong>L</strong>ocation (Estoy en Madrid)</li>
                <li>• <strong>A</strong>ction -ando/-iendo (Estoy comiendo)</li>
                <li>• <strong>C</strong>ondition (La puerta está abierta)</li>
                <li>• <strong>E</strong>motion (Estoy feliz hoy)</li>
                <li>• <strong>Food taste</strong> (La sopa está rica)</li>
              </ul>
            </div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border text-xs text-slate-600">
            <strong>Contractions:</strong> <code>a + el = al</code> (Voy al parque) | <code>de + el = del</code> (El libro del profesor).
          </div>
        </div>
      )
    },
    {
      id: 'u2-tener-idioms',
      unitId: 2,
      unitTitle: 'Unit 2: Ser vs Estar & Syntax',
      title: 'Expressions with "Tener" & Weather',
      icon: Tag,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="font-bold text-amber-950 block mb-2">Tener Physical Sensation Idioms:</span>
            <ul className="space-y-1 text-slate-800">
              <li>• <strong>Tengo hambre:</strong> I am hungry</li>
              <li>• <strong>Tengo sed:</strong> I am thirsty</li>
              <li>• <strong>Tengo calor / frío:</strong> I am hot / cold</li>
              <li>• <strong>Tengo ... años:</strong> I am ... years old</li>
              <li>• <strong>Tengo prisa:</strong> I am in a hurry</li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200">
            <span className="font-bold text-sky-950 block mb-2">Weather with "Hacer":</span>
            <ul className="space-y-1 text-slate-800">
              <li>• <strong>Hace sol:</strong> It is sunny</li>
              <li>• <strong>Hace frío / calor:</strong> It is cold / hot</li>
              <li>• <strong>Hace buen tiempo:</strong> Good weather</li>
              <li>• <strong>Está nublado:</strong> It is cloudy</li>
            </ul>
          </div>
        </div>
      )
    },

    // -------------------------------------------------------------
    // UNIT 3 CHEAT SHEETS
    // -------------------------------------------------------------
    {
      id: 'u3-stem-changers',
      unitId: 3,
      unitTitle: 'Unit 3: Stem-Changers & Comparatives',
      title: 'Boot Stem-Changing Verbs & Periphrasis',
      icon: Shuffle,
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 font-bold uppercase text-[11px]">
                <tr>
                  <th className="px-4 py-2">Pattern</th>
                  <th className="px-4 py-2">Verbs</th>
                  <th className="px-4 py-2">Yo Form</th>
                  <th className="px-4 py-2">Nosotros (No change!)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-4 py-2 font-bold text-indigo-700">o → ue</td>
                  <td className="px-4 py-2">poder, dormir, volver</td>
                  <td className="px-4 py-2 font-mono">puedo, duermo</td>
                  <td className="px-4 py-2 font-mono">podemos, dormimos</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-indigo-700">e → ie</td>
                  <td className="px-4 py-2">querer, entender, empezar</td>
                  <td className="px-4 py-2 font-mono">quiero, entiendo</td>
                  <td className="px-4 py-2 font-mono">queremos, entendemos</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-indigo-700">e → i (-IR)</td>
                  <td className="px-4 py-2">pedir, servir, repetir</td>
                  <td className="px-4 py-2 font-mono">pido, sirvo</td>
                  <td className="px-4 py-2 font-mono">pedimos, servimos</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs space-y-1">
            <p>• <strong>Near Future:</strong> <code>ir + a + infinitive</code> (Voy a estudiar)</p>
            <p>• <strong>Just Done:</strong> <code>acabar + de + infinitive</code> (Acabo de comer)</p>
            <p>• <strong>Do Again:</strong> <code>volver + a + infinitive</code> (Vuelvo a intentar)</p>
          </div>
        </div>
      )
    },

    // -------------------------------------------------------------
    // UNIT 4 CHEAT SHEETS
    // -------------------------------------------------------------
    {
      id: 'u4-pronouns',
      unitId: 4,
      unitTitle: 'Unit 4: Object Pronouns & Gustar',
      title: 'Direct, Indirect & Double Pronouns ("Se Lo")',
      icon: CornerDownRight,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
              <span className="font-bold text-indigo-950 block mb-1">Direct Objects (What/Whom?)</span>
              <p className="font-mono text-indigo-700 mb-1">me, te, lo, la, nos, os, los, las</p>
              <p className="text-xs text-slate-600">Lo compro (I buy it) / Quiero comprarlo.</p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
              <span className="font-bold text-rose-950 block mb-1">Indirect Objects (To/For Whom?)</span>
              <p className="font-mono text-rose-700 mb-1">me, te, le, nos, os, les</p>
              <p className="text-xs text-slate-600">Le doy el libro a Juan (To him I give it).</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
            <strong>Double Object Rule:</strong> Indirect first, Direct second. <code>le + lo → se lo</code> (Se lo doy).
          </div>
        </div>
      )
    },

    // -------------------------------------------------------------
    // UNIT 5 CHEAT SHEETS
    // -------------------------------------------------------------
    {
      id: 'u5-por-para',
      unitId: 5,
      unitTitle: 'Unit 5: Saber/Conocer & Por/Para',
      title: 'POR vs. PARA & Saber vs. Conocer',
      icon: Split,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900 block mb-1">POR (Cause / Reason / Duration)</span>
            <ul className="space-y-1 text-slate-700 text-xs">
              <li>• Reason/Cause (Gracias <strong>por</strong> tu ayuda)</li>
              <li>• Duration (Estudio <strong>por</strong> dos horas)</li>
              <li>• Exchange (Pagué $20 <strong>por</strong> el libro)</li>
              <li>• By means of (Hablamos <strong>por</strong> teléfono)</li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
            <span className="font-bold text-indigo-950 block mb-1">PARA (Goal / Destination / Recipient)</span>
            <ul className="space-y-1 text-slate-700 text-xs">
              <li>• Purpose (Estudio <strong>para</strong> aprender)</li>
              <li>• Recipient (El regalo es <strong>para</strong> ti)</li>
              <li>• Deadline (La tarea es <strong>para</strong> el viernes)</li>
              <li>• Destination (Salgo <strong>para</strong> Madrid)</li>
            </ul>
          </div>
        </div>
      )
    },

    // -------------------------------------------------------------
    // UNIT 6 CHEAT SHEETS
    // -------------------------------------------------------------
    {
      id: 'u6-past-tenses',
      unitId: 6,
      unitTitle: 'Unit 6: Past Tenses',
      title: 'Preterite vs. Imperfect Master Guide',
      icon: History,
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 font-bold uppercase text-[11px]">
                <tr>
                  <th className="px-4 py-2">Tense</th>
                  <th className="px-4 py-2">-AR Endings</th>
                  <th className="px-4 py-2">-ER / -IR Endings</th>
                  <th className="px-4 py-2">Irregulars</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-4 py-2 font-bold text-rose-700">Preterite (Specific)</td>
                  <td className="px-4 py-2 font-mono">-é, -aste, -ó, -amos, -aron</td>
                  <td className="px-4 py-2 font-mono">-í, -iste, -ió, -imos, -ieron</td>
                  <td className="px-4 py-2 text-xs">fui (ser/ir), estuve, tuve, hice, dije</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-indigo-700">Imperfect (Habits/Scene)</td>
                  <td className="px-4 py-2 font-mono">-aba, -abas, -aba, -ábamos, -aban</td>
                  <td className="px-4 py-2 font-mono">-ía, -ías, -ía, -íamos, -ían</td>
                  <td className="px-4 py-2 text-xs">ONLY 3: era (ser), iba (ir), veía (ver)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },

    // -------------------------------------------------------------
    // UNIT 7 CHEAT SHEETS
    // -------------------------------------------------------------
    {
      id: 'u7-subjunctive',
      unitId: 7,
      unitTitle: 'Unit 7: Subjunctive Mood',
      title: 'Present Subjunctive: Opposite Vowels & D.I.S.H.E.S.',
      icon: CloudRain,
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs sm:text-sm">
            <span className="font-bold text-indigo-950 block mb-1">Opposite Vowel Conjugation:</span>
            <p className="text-slate-700">• <strong>-AR Verbs take -E:</strong> hable, hables, hable, hablemos, hablen</p>
            <p className="text-slate-700">• <strong>-ER/-IR Verbs take -A:</strong> coma, comas, coma, comamos, coman | viva, vivas, viva...</p>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
            <span className="font-bold text-amber-950 block mb-1">D.I.S.H.E.S. Irregular Subjunctives:</span>
            <p><strong>D</strong>ar (dé), <strong>I</strong>r (vaya), <strong>S</strong>er (sea), <strong>H</strong>aber (haya), <strong>E</strong>star (esté), <strong>S</strong>aber (sepa).</p>
          </div>
        </div>
      )
    },

    // -------------------------------------------------------------
    // UNIT 8 CHEAT SHEETS
    // -------------------------------------------------------------
    {
      id: 'u8-commands',
      unitId: 8,
      unitTitle: 'Unit 8: Commands & Pronouns',
      title: 'Imperative Commands (Mandatos)',
      icon: CheckSquare,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="font-bold text-emerald-950 block mb-1">Affirmative Tú Commands:</span>
            <p className="text-xs text-slate-700 mb-2">Use 3rd person indicative: ¡Habla!, ¡Come!</p>
            <span className="font-bold text-emerald-900 block text-xs">8 Vin Diesel Irregulars:</span>
            <p className="font-mono text-xs text-emerald-900">Ven, Di, Sal, Haz, Ten, Ve, Pon, Sé</p>
          </div>
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
            <span className="font-bold text-rose-950 block mb-1">Negative & Formal Commands:</span>
            <p className="text-xs text-slate-700">• <strong>Negative Tú:</strong> ¡No hables!, ¡No comas!, ¡No hagas!</p>
            <p className="text-xs text-slate-700">• <strong>Formal Ud.:</strong> ¡Hable!, ¡Coma!, ¡Pase!</p>
          </div>
        </div>
      )
    },

    // -------------------------------------------------------------
    // UNIT 9 CHEAT SHEETS
    // -------------------------------------------------------------
    {
      id: 'u9-future-conditional',
      unitId: 9,
      unitTitle: 'Unit 9: Future, Conditional & Perfect',
      title: 'Future, Conditional & Present Perfect',
      icon: FastForward,
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200">
              <span className="font-bold text-indigo-950 block mb-1">Future (Will do)</span>
              <p className="text-xs text-slate-600">Infinitive + <strong>-é, -ás, -á, -emos, -án</strong></p>
              <p className="font-mono text-xs text-indigo-800 mt-1">hablaré, comeré</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200">
              <span className="font-bold text-purple-950 block mb-1">Conditional (Would)</span>
              <p className="text-xs text-slate-600">Infinitive + <strong>-ía, -ías, -ía...</strong></p>
              <p className="font-mono text-xs text-purple-800 mt-1">hablaría, comería</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="font-bold text-emerald-950 block mb-1">Present Perfect</span>
              <p className="text-xs text-slate-600"><strong>he, has, ha, hemos, han</strong> + -ado/-ido</p>
              <p className="font-mono text-xs text-emerald-800 mt-1">he hablado, he comido</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const filteredSections = cheatSheetSections.filter((s) => {
    const matchesUnit = selectedUnitFilter === 'all' || s.unitId === selectedUnitFilter;
    const matchesSearch = 
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.unitTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesUnit && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
              <FileText className="w-4 h-4" />
              <span>9-Unit App Reference Guide</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 m-0 text-left">
              Spanish Grammar Cheat Sheet
            </h1>
            <p className="text-sm text-slate-600 font-medium mt-1">
              Quick formulas, charts, and rules for the topics currently taught across all 9 units.
            </p>
          </div>

          {/* Search input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              name="grammar-search"
              aria-label="Search grammar topics"
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search grammar topics…"
              className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-slate-50"
            />
          </div>
        </div>

        {/* Unit Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-slate-100 pb-1 scrollbar-none">
          <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Filter:
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
              className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-colors cursor-pointer ${
                selectedUnitFilter === uNum
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Unit {uNum}
            </button>
          ))}
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-6">
        {filteredSections.map((section) => {
          const Icon = section.icon;

          return (
            <div
              key={section.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                      {section.unitTitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">
                      {section.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div>{section.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
