export interface Coach {
  id: string;
  name: string;
  role: string;
  quote: string;
  bio: string;
  focus: string[];
  image: string;
  signatureQuote: string;
}

export interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  title: string;
  text: string;
  avatar: string;
}

export interface ScheduleSession {
  id: string;
  sessionNum: number;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
}
