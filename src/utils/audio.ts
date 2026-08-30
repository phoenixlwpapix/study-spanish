/**
 * Spanish Text-to-Speech (TTS) using standard Web Speech API
 */

class AudioService {
  private synth: SpeechSynthesis | null = null;
  private spanishVoice: SpeechSynthesisVoice | null = null;
  private initialized = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prefer Spain Spanish (es-ES) or Mexican Spanish (es-MX) or any Spanish voice
    this.spanishVoice = 
      voices.find(v => v.lang.toLowerCase() === 'es-es') ||
      voices.find(v => v.lang.toLowerCase() === 'es-mx') ||
      voices.find(v => v.lang.toLowerCase().startsWith('es')) ||
      null;
    this.initialized = true;
  }

  public speak(text: string, rate: number = 0.9): Promise<void> {
    return new Promise((resolve) => {
      if (!this.synth) {
        resolve();
        return;
      }

      // Cancel any ongoing speech
      this.synth.cancel();

      if (!this.initialized || !this.spanishVoice) {
        this.initVoices();
      }

      const cleanText = text.replace(/¿|¡/g, '').trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'es-ES';
      if (this.spanishVoice) {
        utterance.voice = this.spanishVoice;
      }
      utterance.rate = Math.max(0.6, Math.min(1.2, rate));
      utterance.pitch = 1.0;

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      this.synth.speak(utterance);
    });
  }

  public cancel() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const audioService = new AudioService();
