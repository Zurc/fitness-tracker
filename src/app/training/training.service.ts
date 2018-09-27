import { Exercise } from './exercise.model';

export class TrainingService {
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side lunges', duration: 120, calories: 8 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];
  private runningExercise: Exercise;

  getAvailableExercises() {
    return [ ...this.availableExercises];
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
  }

}
