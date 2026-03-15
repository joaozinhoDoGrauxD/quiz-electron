
export type Topic = 
  | 'Arquitetura e Estratégia Electron'
  | 'Janelas e Ciclo de Vida'
  | 'Hardware e Comunicação Segura'
  | 'Integração com o Sistema Operacional';

export interface Question {
  id: string;
  topic: Topic;
  question: string;
  options: string[];
  correctAnswer: number; // Index of options array (0-4)
  explanation: string;
}

export interface QuizState {
  currentTopic: Topic | null;
  currentQuestionIndex: number;
  score: number;
  userAnswers: { [questionId: string]: number };
  isFinished: boolean;
}
