import type { Unit, Lesson } from './types';

export const allUnits: Unit[] = [];

let curriculumPromise: Promise<Unit[]> | null = null;

export function loadCurriculum(): Promise<Unit[]> {
  if (allUnits.length > 0) return Promise.resolve(allUnits);

  curriculumPromise ??= Promise.all([
    import('./unit1').then(({ unit1 }) => unit1),
    import('./unit2').then(({ unit2 }) => unit2),
    import('./unit3').then(({ unit3 }) => unit3),
    import('./unit4').then(({ unit4 }) => unit4),
    import('./unit5').then(({ unit5 }) => unit5),
    import('./unit6').then(({ unit6 }) => unit6),
    import('./unit7').then(({ unit7 }) => unit7),
    import('./unit8').then(({ unit8 }) => unit8),
    import('./unit9').then(({ unit9 }) => unit9),
  ]).then((units) => {
    allUnits.splice(0, allUnits.length, ...units);
    return allUnits;
  });

  return curriculumPromise;
}

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

export function getPrevLesson(currentLessonId: string): Lesson | undefined {
  const currentLesson = getLessonById(currentLessonId);
  if (!currentLesson) return undefined;

  const currentUnit = getUnitById(currentLesson.unitId);
  if (!currentUnit) return undefined;

  const currentIndex = currentUnit.lessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex > 0) {
    return currentUnit.lessons[currentIndex - 1];
  }

  // If at first lesson of Unit N (N > 1), return last lesson of Unit N-1
  if (currentLesson.unitId > 1) {
    const prevUnit = getUnitById(currentLesson.unitId - 1);
    if (prevUnit && prevUnit.lessons.length > 0) {
      return prevUnit.lessons[prevUnit.lessons.length - 1];
    }
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

  // If at last lesson of Unit N (N < allUnits.length), return first lesson of Unit N+1
  if (currentLesson.unitId < allUnits.length) {
    const nextUnit = getUnitById(currentLesson.unitId + 1);
    if (nextUnit && nextUnit.lessons.length > 0) {
      return nextUnit.lessons[0];
    }
  }

  return undefined;
}

export * from './types';
