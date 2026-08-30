import type { Unit, Lesson } from './types';
import { unit1 } from './unit1';
import { unit2 } from './unit2';
import { unit3 } from './unit3';
import { unit4 } from './unit4';
import { unit5 } from './unit5';
import { unit6 } from './unit6';
import { unit7 } from './unit7';
import { unit8 } from './unit8';
import { unit9 } from './unit9';

export const allUnits: Unit[] = [
  unit1,
  unit2,
  unit3,
  unit4,
  unit5,
  unit6,
  unit7,
  unit8,
  unit9
];

export function getUnitById(id: number): Unit | undefined {
  return allUnits.find(u => u.id === id);
}

export function getLessonById(lessonId: string): Lesson | undefined {
  for (const unit of allUnits) {
    const found = unit.lessons.find(l => l.id === lessonId);
    if (found) return found;
  }
  return undefined;
}

export function getNextLesson(currentLessonId: string): Lesson | undefined {
  const currentLesson = getLessonById(currentLessonId);
  if (!currentLesson) return undefined;

  const currentUnit = getUnitById(currentLesson.unitId);
  if (!currentUnit) return undefined;

  const currentIndex = currentUnit.lessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex >= 0 && currentIndex < currentUnit.lessons.length - 1) {
    return currentUnit.lessons[currentIndex + 1];
  }
  return undefined;
}

export * from './types';
export { unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9 };
