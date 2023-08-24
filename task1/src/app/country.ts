export interface Country {
  flags: any;
  common: string;
  capital: string;
  region: string;
  currencies: string;
  population: number;
  timezones: any;
}
export interface Task {
  task_id: number;
  title: string;
  task_description: string;
  created_date: string;
  updated_date: string;
  completed: boolean;
}