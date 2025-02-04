import type { DiceRoll } from '@dice-roller/rpg-dice-roller';

export interface Character {
  name: string;
  skills: Skill[];
  traits: string[];
  flaws: string[];
  arcs: Quest[];
}

export interface Skill {
  name: SkillType;
  value: number;
}

export type SkillType = 'Might' | 'Finesse' | 'Wits' | 'Resolve' | 'Influence' | 'Guile';

export interface Quest {
  name: string;
  complete: boolean;
}

export interface Story {
  name: string;
  scenes: Scene[];
  characters: Character[];
}

export interface Scene {
  name: string;
  logs: Log[];
}

export interface Log {
  timestamp: number;
  type: LogType;
  text: string;
  difficulty: DifficultyType;
  modifiers?: number[];
  advantage?: boolean;
  disadvantage?: boolean;
  result: Result;
}

export type LogType = 'oracle' | 'check' | 'random table' | 'ai' | 'other';

export type DifficultyType = 'easy' | 'moderate' | 'challenging' | 'hard' | 'impossible';

export interface Result {
  type: ResultType;
  roll?: DiceRoll;
  prompt?: string;
  answer: string;
  keywords?: string[];
}

export type ResultType = 'dice' | 'ai'