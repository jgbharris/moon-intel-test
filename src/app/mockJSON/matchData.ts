export interface MatchResult {
  team: string;
  result: "WIN" | "LOSS";
  odds: number;
}

export const matchData: MatchResult[] = [
  { team: "Burnley", result: "LOSS", odds: 9.0 },
  { team: "Man City", result: "WIN", odds: 1.33 },
  { team: "Arsenal", result: "WIN", odds: 1.18 },
  { team: "Nott'm Forest", result: "LOSS", odds: 15.0 },
  { team: "Bournemouth", result: "LOSS", odds: 2.63 },
  { team: "West Ham", result: "LOSS", odds: 2.6 },
  { team: "Brighton", result: "WIN", odds: 1.25 },
  { team: "Luton", result: "LOSS", odds: 11.0 },
  { team: "Everton", result: "LOSS", odds: 2.3 },
  { team: "Fulham", result: "WIN", odds: 3.2 },
  { team: "Sheffield United", result: "LOSS", odds: 3.6 },
  { team: "Crystal Palace", result: "WIN", odds: 2.15 },
  { team: "Newcastle", result: "WIN", odds: 1.62 },
  { team: "Aston Villa", result: "LOSS", odds: 5.25 },
  { team: "Brentford", result: "LOSS", odds: 2.5 },
  { team: "Tottenham", result: "LOSS", odds: 2.63 },
  { team: "Chelsea", result: "LOSS", odds: 3.1 },
  { team: "Liverpool", result: "LOSS", odds: 2.15 },
  { team: "Man United", result: "WIN", odds: 1.25 },
  { team: "Wolves", result: "LOSS", odds: 10.0 },
  { team: "Nott'm Forest", result: "WIN", odds: 1.91 },
  { team: "Sheffield United", result: "LOSS", odds: 4.2 },
  { team: "Fulham", result: "LOSS", odds: 2.8 },
  { team: "Brentford", result: "WIN", odds: 2.63 },
  { team: "Liverpool", result: "WIN", odds: 1.2 },
  { team: "Bournemouth", result: "LOSS", odds: 12.0 },
  { team: "Wolves", result: "LOSS", odds: 4.2 },
  { team: "Brighton", result: "WIN", odds: 1.8 },
  { team: "Tottenham", result: "WIN", odds: 3.0 },
  { team: "Man United", result: "LOSS", odds: 2.2 },
  { team: "Man City", result: "WIN", odds: 1.83 },
  { team: "Newcastle", result: "LOSS", odds: 4.33 },
  { team: "Aston Villa", result: "WIN", odds: 1.8 },
  { team: "Everton", result: "LOSS", odds: 4.2 },
  { team: "West Ham", result: "WIN", odds: 3.1 },
  { team: "Chelsea", result: "LOSS", odds: 2.15 },
  { team: "Crystal Palace", result: "LOSS", odds: 4.2 },
  { team: "Arsenal", result: "WIN", odds: 1.91 },
  { team: "Chelsea", result: "WIN", odds: 1.25 },
  { team: "Luton", result: "LOSS", odds: 11.0 },
  { team: "Bournemouth", result: "LOSS", odds: 3.5 },
  { team: "Tottenham", result: "WIN", odds: 2.0 },
  { team: "Arsenal", result: "LOSS", odds: 1.3 },
  { team: "Fulham", result: "LOSS", odds: 10.0 },
  { team: "Brentford", result: "LOSS", odds: 2.15 },
  { team: "Crystal Palace", result: "LOSS", odds: 3.5 },
  { team: "Everton", result: "LOSS", odds: 2.4 },
  { team: "Wolves", result: "WIN", odds: 2.9 },
  { team: "Man United", result: "WIN", odds: 1.36 },
  { team: "Nott'm Forest", result: "LOSS", odds: 8.0 },
  { team: "Brighton", result: "LOSS", odds: 1.5 },
  { team: "West Ham", result: "WIN", odds: 5.5 },
  { team: "Burnley", result: "LOSS", odds: 3.2 },
  { team: "Aston Villa", result: "WIN", odds: 2.25 },
  { team: "Sheffield United", result: "LOSS", odds: 12.0 },
  { team: "Man City", result: "WIN", odds: 1.2 },
  { team: "Newcastle", result: "LOSS", odds: 2.2 },
  { team: "Liverpool", result: "WIN", odds: 3.1 },
  { team: "Luton", result: "LOSS", odds: 4.5 },
  { team: "West Ham", result: "WIN", odds: 1.73 },
  { team: "Sheffield United", result: "LOSS", odds: 3.1 },
  { team: "Everton", result: "LOSS", odds: 2.38 },
  { team: "Brentford", result: "LOSS", odds: 1.73 },
  { team: "Bournemouth", result: "LOSS", odds: 4.5 },
  { team: "Burnley", result: "LOSS", odds: 3.5 },
  { team: "Tottenham", result: "WIN", odds: 1.95 },
  { team: "Chelsea", result: "LOSS", odds: 1.4 },
  { team: "Nott'm Forest", result: "WIN", odds: 7.5 },
  { team: "Man City", result: "WIN", odds: 1.18 },
  { team: "Fulham", result: "LOSS", odds: 13.0 },
  { team: "Brighton", result: "WIN", odds: 2.5 },
  { team: "Newcastle", result: "LOSS", odds: 2.5 },
  { team: "Crystal Palace", result: "WIN", odds: 1.85 },
  { team: "Wolves", result: "LOSS", odds: 4.5 },
  { team: "Liverpool", result: "WIN", odds: 1.6 },
  { team: "Aston Villa", result: "LOSS", odds: 4.75 },
  { team: "Arsenal", result: "WIN", odds: 1.75 },
  { team: "Man United", result: "LOSS", odds: 4.2 },
  { team: "Wolves", result: "LOSS", odds: 4.33 },
  { team: "Liverpool", result: "WIN", odds: 1.7 },
  { team: "Aston Villa", result: "WIN", odds: 1.95 },
  { team: "Crystal Palace", result: "LOSS", odds: 4.0 },
  { team: "Fulham", result: "WIN", odds: 1.65 },
  { team: "Luton", result: "LOSS", odds: 6.0 },
  { team: "Man United", result: "LOSS", odds: 2.0 },
  { team: "Brighton", result: "WIN", odds: 3.25 },
  { team: "Tottenham", result: "WIN", odds: 1.29 },
  { team: "Sheffield United", result: "LOSS", odds: 10.0 },
  { team: "West Ham", result: "LOSS", odds: 5.25 },
  { team: "Man City", result: "WIN", odds: 1.6 },
  { team: "Newcastle", result: "WIN", odds: 1.6 },
  { team: "Brentford", result: "LOSS", odds: 5.5 },
  { team: "Bournemouth", result: "LOSS", odds: 4.2 },
  { team: "Chelsea", result: "LOSS", odds: 1.83 },
  { team: "Everton", result: "LOSS", odds: 5.5 },
  { team: "Arsenal", result: "WIN", odds: 1.55 },
  { team: "Nott'm Forest", result: "LOSS", odds: 2.05 },
  { team: "Burnley", result: "LOSS", odds: 3.5 },
  { team: "Crystal Palace", result: "LOSS", odds: 2.05 },
  { team: "Fulham", result: "LOSS", odds: 3.8 },
  { team: "Luton", result: "LOSS", odds: 3.1 },
  { team: "Wolves", result: "LOSS", odds: 2.38 },
  { team: "Man City", result: "WIN", odds: 1.17 },
  { team: "Nott'm Forest", result: "LOSS", odds: 15.0 },
  { team: "Brentford", result: "LOSS", odds: 1.91 },
  { team: "Everton", result: "WIN", odds: 4.33 },
  { team: "Burnley", result: "LOSS", odds: 4.0 },
  { team: "Man United", result: "WIN", odds: 1.83 },
  { team: "Arsenal", result: "LOSS", odds: 1.62 },
  { team: "Tottenham", result: "LOSS", odds: 4.75 },
  { team: "Brighton", result: "WIN", odds: 1.5 },
  { team: "Bournemouth", result: "LOSS", odds: 5.5 },
  { team: "Chelsea", result: "LOSS", odds: 1.85 },
  { team: "Aston Villa", result: "WIN", odds: 4.0 },
  { team: "Liverpool", result: "WIN", odds: 1.36 },
  { team: "West Ham", result: "LOSS", odds: 7.5 },
  { team: "Sheffield United", result: "LOSS", odds: 6.0 },
  { team: "Newcastle", result: "WIN", odds: 1.53 },
  { team: "Aston Villa", result: "WIN", odds: 2.45 },
  { team: "Brighton", result: "LOSS", odds: 2.7 },
  { team: "Bournemouth", result: "LOSS", odds: 5.5 },
  { team: "Arsenal", result: "WIN", odds: 1.53 },
  { team: "Everton", result: "LOSS", odds: 1.67 },
  { team: "Luton", result: "WIN", odds: 5.25 },
  { team: "Man United", result: "LOSS", odds: 1.55 },
  { team: "Crystal Palace", result: "WIN", odds: 6.0 },
  { team: "Newcastle", result: "WIN", odds: 1.36 },
  { team: "Burnley", result: "LOSS", odds: 7.5 },
  { team: "West Ham", result: "WIN", odds: 1.44 },
  { team: "Sheffield United", result: "LOSS", odds: 7.0 },
  { team: "Wolves", result: "WIN", odds: 7.5 },
  { team: "Man City", result: "LOSS", odds: 1.4 },
  { team: "Tottenham", result: "WIN", odds: 3.0 },
  { team: "Liverpool", result: "LOSS", odds: 2.2 },
  { team: "Nott'm Forest", result: "LOSS", odds: 2.63 },
  { team: "Brentford", result: "LOSS", odds: 2.88 },
  { team: "Fulham", result: "LOSS", odds: 3.4 },
  { team: "Chelsea", result: "WIN", odds: 2.15 },
  { team: "Luton", result: "LOSS", odds: 2.88 },
  { team: "Burnley", result: "WIN", odds: 2.6 },
  { team: "Luton", result: "LOSS", odds: 7.0 },
  { team: "Tottenham", result: "WIN", odds: 1.4 },
  { team: "Burnley", result: "LOSS", odds: 5.25 },
  { team: "Chelsea", result: "WIN", odds: 1.67 },
  { team: "Everton", result: "WIN", odds: 1.85 },
  { team: "Bournemouth", result: "LOSS", odds: 4.0 },
  { team: "Fulham", result: "WIN", odds: 1.45 },
  { team: "Sheffield United", result: "LOSS", odds: 7.5 },
  { team: "Man United", result: "WIN", odds: 1.6 },
  { team: "Brentford", result: "LOSS", odds: 5.0 },
  { team: "Crystal Palace", result: "LOSS", odds: 2.25 },
  { team: "Nott'm Forest", result: "LOSS", odds: 3.4 },
  { team: "Brighton", result: "LOSS", odds: 3.2 },
  { team: "Liverpool", result: "LOSS", odds: 2.05 },
  { team: "West Ham", result: "LOSS", odds: 3.4 },
  { team: "Newcastle", result: "LOSS", odds: 2.0 },
  { team: "Wolves", result: "LOSS", odds: 3.75 },
  { team: "Aston Villa", result: "LOSS", odds: 2.0 },
  { team: "Arsenal", result: "WIN", odds: 2.9 },
  { team: "Man City", result: "LOSS", odds: 2.45 },
  { team: "Liverpool", result: "WIN", odds: 1.4 },
  { team: "Everton", result: "LOSS", odds: 7.0 },
  { team: "Bournemouth", result: "LOSS", odds: 2.25 },
  { team: "Wolves", result: "WIN", odds: 3.1 },
  { team: "Brentford", result: "WIN", odds: 1.7 },
  { team: "Burnley", result: "LOSS", odds: 4.75 },
  { team: "Man City", result: "WIN", odds: 1.36 },
  { team: "Brighton", result: "LOSS", odds: 6.5 },
  { team: "Newcastle", result: "WIN", odds: 1.45 },
  { team: "Crystal Palace", result: "LOSS", odds: 7.0 },
  { team: "Nott'm Forest", result: "LOSS", odds: 1.73 },
  { team: "Luton", result: "LOSS", odds: 5.25 },
  { team: "Chelsea", result: "LOSS", odds: 3.3 },
  { team: "Arsenal", result: "LOSS", odds: 2.25 },
  { team: "Sheffield United", result: "LOSS", odds: 7.5 },
  { team: "Man United", result: "WIN", odds: 1.36 },
  { team: "Aston Villa", result: "WIN", odds: 1.73 },
  { team: "West Ham", result: "LOSS", odds: 4.5 },
  { team: "Tottenham", result: "WIN", odds: 1.5 },
  { team: "Fulham", result: "LOSS", odds: 6.0 },
  { team: "Crystal Palace", result: "LOSS", odds: 4.5 },
  { team: "Tottenham", result: "WIN", odds: 1.75 },
  { team: "Chelsea", result: "LOSS", odds: 1.62 },
  { team: "Brentford", result: "WIN", odds: 5.25 },
  { team: "Arsenal", result: "WIN", odds: 1.13 },
  { team: "Sheffield United", result: "LOSS", odds: 19.0 },
  { team: "Bournemouth", result: "WIN", odds: 2.15 },
  { team: "Burnley", result: "LOSS", odds: 3.25 },
  { team: "Wolves", result: "LOSS", odds: 3.8 },
  { team: "Newcastle", result: "LOSS", odds: 1.91 },
  { team: "West Ham", result: "LOSS", odds: 2.1 },
  { team: "Everton", result: "WIN", odds: 3.4 },
  { team: "Aston Villa", result: "WIN", odds: 1.36 },
  { team: "Luton", result: "LOSS", odds: 7.5 },
  { team: "Brighton", result: "LOSS", odds: 1.62 },
  { team: "Fulham", result: "LOSS", odds: 5.5 },
  { team: "Liverpool", result: "WIN", odds: 1.22 },
  { team: "Nott'm Forest", result: "LOSS", odds: 11.0 },
  { team: "Man United", result: "LOSS", odds: 5.5 },
  { team: "Man City", result: "WIN", odds: 1.57 },
  { team: "Fulham", result: "LOSS", odds: 2.9 },
  { team: "Man United", result: "WIN", odds: 2.3 },
  { team: "Brentford", result: "WIN", odds: 2.15 },
  { team: "West Ham", result: "LOSS", odds: 3.3 },
  { team: "Burnley", result: "LOSS", odds: 3.25 },
  { team: "Crystal Palace", result: "WIN", odds: 2.3 },
  { team: "Everton", result: "LOSS", odds: 2.8 },
  { team: "Brighton", result: "LOSS", odds: 2.45 },
  { team: "Man City", result: "WIN", odds: 1.09 },
  { team: "Bournemouth", result: "LOSS", odds: 21.0 },
  { team: "Sheffield United", result: "WIN", odds: 4.2 },
  { team: "Wolves", result: "LOSS", odds: 1.85 },
  { team: "Newcastle", result: "WIN", odds: 2.8 },
  { team: "Arsenal", result: "LOSS", odds: 2.7 },
  { team: "Nott'm Forest", result: "WIN", odds: 3.75 },
  { team: "Aston Villa", result: "LOSS", odds: 1.91 },
  { team: "Luton", result: "LOSS", odds: 11.0 },
  { team: "Liverpool", result: "LOSS", odds: 1.2 },
  { team: "Tottenham", result: "LOSS", odds: 2.3 },
  { team: "Chelsea", result: "WIN", odds: 2.9 },
  { team: "Wolves", result: "WIN", odds: 3.1 },
  { team: "Tottenham", result: "LOSS", odds: 2.3 },
  { team: "Arsenal", result: "WIN", odds: 1.2 },
  { team: "Burnley", result: "LOSS", odds: 15.0 },
  { team: "Crystal Palace", result: "LOSS", odds: 2.6 },
  { team: "Everton", result: "WIN", odds: 2.9 },
  { team: "Man United", result: "WIN", odds: 1.29 },
  { team: "Luton", result: "LOSS", odds: 9.5 },
  { team: "Bournemouth", result: "WIN", odds: 4.0 },
  { team: "Newcastle", result: "LOSS", odds: 1.91 },
  { team: "Aston Villa", result: "WIN", odds: 1.62 },
  { team: "Fulham", result: "LOSS", odds: 5.25 },
  { team: "Brighton", result: "LOSS", odds: 1.25 },
  { team: "Sheffield United", result: "LOSS", odds: 10.0 },
  { team: "Liverpool", result: "WIN", odds: 1.36 },
  { team: "Brentford", result: "LOSS", odds: 7.5 },
  { team: "West Ham", result: "WIN", odds: 1.8 },
  { team: "Nott'm Forest", result: "LOSS", odds: 4.5 },
  { team: "Chelsea", result: "LOSS", odds: 4.75 },
  { team: "Man City", result: "LOSS", odds: 1.73 },
  { team: "Man City", result: "LOSS", odds: 1.7 },
  { team: "Liverpool", result: "LOSS", odds: 4.33 },
  { team: "Burnley", result: "LOSS", odds: 3.4 },
  { team: "West Ham", result: "WIN", odds: 2.15 },
  { team: "Luton", result: "WIN", odds: 4.0 },
  { team: "Crystal Palace", result: "LOSS", odds: 2.0 },
  { team: "Newcastle", result: "WIN", odds: 2.63 },
  { team: "Chelsea", result: "LOSS", odds: 2.5 },
  { team: "Nott'm Forest", result: "LOSS", odds: 3.6 },
  { team: "Brighton", result: "WIN", odds: 2.0 },
  { team: "Sheffield United", result: "LOSS", odds: 3.4 },
  { team: "Bournemouth", result: "WIN", odds: 2.15 },
  { team: "Brentford", result: "LOSS", odds: 5.5 },
  { team: "Arsenal", result: "WIN", odds: 1.6 },
  { team: "Tottenham", result: "LOSS", odds: 2.55 },
  { team: "Aston Villa", result: "WIN", odds: 2.5 },
  { team: "Everton", result: "LOSS", odds: 2.63 },
  { team: "Man United", result: "WIN", odds: 2.7 },
  { team: "Fulham", result: "WIN", odds: 2.38 },
  { team: "Wolves", result: "LOSS", odds: 3.0 },
  { team: "Arsenal", result: "WIN", odds: 1.22 },
  { team: "Wolves", result: "LOSS", odds: 12.0 },
  { team: "Brentford", result: "WIN", odds: 1.53 },
  { team: "Luton", result: "LOSS", odds: 6.0 },
  { team: "Burnley", result: "WIN", odds: 1.7 },
  { team: "Sheffield United", result: "LOSS", odds: 5.25 },
  { team: "Nott'm Forest", result: "LOSS", odds: 2.8 },
  { team: "Everton", result: "WIN", odds: 2.7 },
  { team: "Newcastle", result: "WIN", odds: 1.95 },
  { team: "Man United", result: "LOSS", odds: 3.6 },
  { team: "Bournemouth", result: "LOSS", odds: 3.0 },
  { team: "Aston Villa", result: "LOSS", odds: 2.1 },
  { team: "Chelsea", result: "WIN", odds: 1.57 },
  { team: "Brighton", result: "LOSS", odds: 5.25 },
  { team: "Liverpool", result: "WIN", odds: 1.25 },
  { team: "Fulham", result: "LOSS", odds: 10.0 },
  { team: "West Ham", result: "LOSS", odds: 1.91 },
  { team: "Crystal Palace", result: "LOSS", odds: 4.0 },
  { team: "Man City", result: "LOSS", odds: 1.25 },
  { team: "Tottenham", result: "LOSS", odds: 10.0 },
  { team: "Wolves", result: "WIN", odds: 1.91 },
  { team: "Burnley", result: "LOSS", odds: 4.0 },
  { team: "Luton", result: "LOSS", odds: 17.0 },
  { team: "Arsenal", result: "WIN", odds: 1.17 },
  { team: "Brighton", result: "WIN", odds: 1.7 },
  { team: "Brentford", result: "LOSS", odds: 4.5 },
  { team: "Crystal Palace", result: "LOSS", odds: 2.3 },
  { team: "Bournemouth", result: "WIN", odds: 3.0 },
  { team: "Fulham", result: "WIN", odds: 2.0 },
  { team: "Nott'm Forest", result: "LOSS", odds: 3.75 },
  { team: "Sheffield United", result: "LOSS", odds: 15.0 },
  { team: "Liverpool", result: "WIN", odds: 1.18 },
  { team: "Aston Villa", result: "WIN", odds: 5.0 },
  { team: "Man City", result: "LOSS", odds: 1.62 },
  { team: "Man United", result: "WIN", odds: 2.75 },
  { team: "Chelsea", result: "LOSS", odds: 2.45 },
  { team: "Everton", result: "WIN", odds: 3.1 },
  { team: "Newcastle", result: "LOSS", odds: 2.25 },
  { team: "Tottenham", result: "LOSS", odds: 1.7 },
  { team: "West Ham", result: "WIN", odds: 4.75 },
  { team: "Crystal Palace", result: "LOSS", odds: 6.5 },
  { team: "Liverpool", result: "WIN", odds: 1.44 },
  { team: "Brighton", result: "LOSS", odds: 1.55 },
  { team: "Burnley", result: "LOSS", odds: 5.75 },
  { team: "Man United", result: "LOSS", odds: 1.65 },
  { team: "Bournemouth", result: "WIN", odds: 4.5 },
  { team: "Sheffield United", result: "WIN", odds: 4.5 },
  { team: "Brentford", result: "LOSS", odds: 1.73 },
  { team: "Wolves", result: "LOSS", odds: 1.91 },
  { team: "Nott'm Forest", result: "LOSS", odds: 4.33 },
  { team: "Aston Villa", result: "WIN", odds: 3.6 },
  { team: "Arsenal", result: "LOSS", odds: 2.0 },
  { team: "Everton", result: "WIN", odds: 2.4 },
  { team: "Chelsea", result: "LOSS", odds: 2.8 },
  { team: "Fulham", result: "WIN", odds: 2.2 },
  { team: "West Ham", result: "LOSS", odds: 3.25 },
  { team: "Luton", result: "LOSS", odds: 13.0 },
  { team: "Man City", result: "WIN", odds: 1.18 },
  { team: "Tottenham", result: "WIN", odds: 2.0 },
  { team: "Newcastle", result: "LOSS", odds: 3.4 },
  { team: "Nott'm Forest", result: "LOSS", odds: 4.75 },
  { team: "Tottenham", result: "WIN", odds: 1.67 },
  { team: "Chelsea", result: "WIN", odds: 1.18 },
  { team: "Sheffield United", result: "LOSS", odds: 13.0 },
  { team: "Man City", result: "LOSS", odds: 1.17 },
  { team: "Crystal Palace", result: "LOSS", odds: 15.0 },
  { team: "Newcastle", result: "WIN", odds: 1.91 },
  { team: "Fulham", result: "LOSS", odds: 4.0 },
  { team: "Burnley", result: "LOSS", odds: 3.2 },
  { team: "Everton", result: "WIN", odds: 2.25 },
  { team: "Arsenal", result: "WIN", odds: 1.45 },
  { team: "Brighton", result: "LOSS", odds: 6.0 },
  { team: "Brentford", result: "LOSS", odds: 3.0 },
  { team: "Aston Villa", result: "WIN", odds: 2.25 },
  { team: "West Ham", result: "WIN", odds: 1.91 },
  { team: "Wolves", result: "LOSS", odds: 4.0 },
  { team: "Liverpool", result: "LOSS", odds: 1.33 },
  { team: "Man United", result: "LOSS", odds: 7.0 },
  { team: "Crystal Palace", result: "LOSS", odds: 3.4 },
  { team: "Brighton", result: "LOSS", odds: 2.25 },
  { team: "Aston Villa", result: "LOSS", odds: 1.2 },
  { team: "Sheffield United", result: "LOSS", odds: 13.0 },
  { team: "West Ham", result: "WIN", odds: 2.1 },
  { team: "Man United", result: "LOSS", odds: 3.25 },
  { team: "Fulham", result: "LOSS", odds: 1.67 },
  { team: "Burnley", result: "WIN", odds: 5.25 },
  { team: "Luton", result: "WIN", odds: 5.25 },
  { team: "Newcastle", result: "LOSS", odds: 1.62 },
  { team: "Nott'm Forest", result: "LOSS", odds: 2.9 },
  { team: "Bournemouth", result: "WIN", odds: 2.45 },
  { team: "Tottenham", result: "WIN", odds: 1.7 },
  { team: "Everton", result: "LOSS", odds: 4.33 },
  { team: "Liverpool", result: "LOSS", odds: 2.45 },
  { team: "Arsenal", result: "LOSS", odds: 2.63 },
  { team: "Wolves", result: "WIN", odds: 3.1 },
  { team: "Chelsea", result: "LOSS", odds: 2.15 },
  { team: "Newcastle", result: "LOSS", odds: 1.4 },
  { team: "Nott'm Forest", result: "WIN", odds: 6.5 },
  { team: "Bournemouth", result: "WIN", odds: 1.91 },
  { team: "Fulham", result: "LOSS", odds: 3.75 },
  { team: "Sheffield United", result: "LOSS", odds: 2.38 },
  { team: "Luton", result: "WIN", odds: 3.1 },
  { team: "Burnley", result: "LOSS", odds: 8.0 },
  { team: "Liverpool", result: "WIN", odds: 1.36 },
  { team: "Man United", result: "WIN", odds: 2.25 },
  { team: "Aston Villa", result: "LOSS", odds: 2.9 },
  { team: "Brentford", result: "LOSS", odds: 2.2 },
  { team: "Wolves", result: "WIN", odds: 3.3 },
  { team: "Chelsea", result: "WIN", odds: 1.75 },
  { team: "Crystal Palace", result: "LOSS", odds: 4.75 },
  { team: "Everton", result: "LOSS", odds: 5.0 },
  { team: "Man City", result: "WIN", odds: 1.65 },
  { team: "Brighton", result: "WIN", odds: 2.5 },
  { team: "Tottenham", result: "LOSS", odds: 2.63 },
  { team: "Arsenal", result: "LOSS", odds: 1.29 },
  { team: "West Ham", result: "WIN", odds: 9.5 },
  { team: "Luton", result: "LOSS", odds: 5.25 },
  { team: "Chelsea", result: "WIN", odds: 1.57 },
  { team: "Aston Villa", result: "WIN", odds: 1.36 },
  { team: "Burnley", result: "LOSS", odds: 7.0 },
  { team: "Crystal Palace", result: "WIN", odds: 2.05 },
  { team: "Brentford", result: "LOSS", odds: 3.75 },
  { team: "Man City", result: "WIN", odds: 1.08 },
  { team: "Sheffield United", result: "LOSS", odds: 19.0 },
  { team: "Wolves", result: "WIN", odds: 2.9 },
  { team: "Everton", result: "LOSS", odds: 2.5 },
  { team: "Nott'm Forest", result: "WIN", odds: 3.2 },
  { team: "Man United", result: "LOSS", odds: 2.15 },
  { team: "Fulham", result: "WIN", odds: 6.0 },
  { team: "Arsenal", result: "LOSS", odds: 1.57 },
  { team: "Tottenham", result: "WIN", odds: 1.75 },
  { team: "Bournemouth", result: "LOSS", odds: 3.8 },
  { team: "Liverpool", result: "WIN", odds: 1.36 },
  { team: "Newcastle", result: "LOSS", odds: 7.5 },
  { team: "West Ham", result: "LOSS", odds: 3.1 },
  { team: "Brighton", result: "LOSS", odds: 2.2 },
  { team: "Burnley", result: "LOSS", odds: 2.15 },
  { team: "Luton", result: "LOSS", odds: 3.4 },
  { team: "Chelsea", result: "WIN", odds: 1.62 },
  { team: "Fulham", result: "LOSS", odds: 5.25 },
  { team: "Newcastle", result: "LOSS", odds: 4.5 },
  { team: "Man City", result: "WIN", odds: 1.7 },
  { team: "Everton", result: "LOSS", odds: 2.55 },
  { team: "Aston Villa", result: "LOSS", odds: 2.7 },
  { team: "Man United", result: "LOSS", odds: 2.05 },
  { team: "Tottenham", result: "LOSS", odds: 3.25 },
  { team: "Arsenal", result: "WIN", odds: 1.25 },
  { team: "Crystal Palace", result: "LOSS", odds: 12.0 },
  { team: "Brentford", result: "WIN", odds: 1.75 },
  { team: "Nott'm Forest", result: "LOSS", odds: 4.75 },
  { team: "Sheffield United", result: "LOSS", odds: 2.75 },
  { team: "West Ham", result: "LOSS", odds: 2.6 },
  { team: "Bournemouth", result: "LOSS", odds: 4.33 },
  { team: "Liverpool", result: "WIN", odds: 1.67 },
  { team: "Brighton", result: "LOSS", odds: 1.62 },
  { team: "Wolves", result: "LOSS", odds: 5.0 },
  { team: "Nott'm Forest", result: "LOSS", odds: 8.5 },
  { team: "Arsenal", result: "WIN", odds: 1.4 },
  { team: "Fulham", result: "LOSS", odds: 2.25 },
  { team: "Everton", result: "LOSS", odds: 3.5 },
  { team: "Luton", result: "WIN", odds: 4.0 },
  { team: "Brighton", result: "LOSS", odds: 1.8 },
  { team: "Crystal Palace", result: "WIN", odds: 1.62 },
  { team: "Sheffield United", result: "LOSS", odds: 6.0 },
  { team: "Aston Villa", result: "LOSS", odds: 1.85 },
  { team: "Newcastle", result: "WIN", odds: 3.8 },
  { team: "Man City", result: "WIN", odds: 1.1 },
  { team: "Burnley", result: "LOSS", odds: 19.0 },
  { team: "Tottenham", result: "WIN", odds: 1.6 },
  { team: "Brentford", result: "LOSS", odds: 5.0 },
  { team: "Liverpool", result: "WIN", odds: 1.62 },
  { team: "Chelsea", result: "LOSS", odds: 4.75 },
  { team: "West Ham", result: "LOSS", odds: 2.38 },
  { team: "Bournemouth", result: "LOSS", odds: 2.8 },
  { team: "Wolves", result: "LOSS", odds: 2.8 },
  { team: "Man United", result: "WIN", odds: 2.4 },
  { team: "Everton", result: "LOSS", odds: 3.0 },
  { team: "Tottenham", result: "LOSS", odds: 2.2 },
  { team: "Brighton", result: "WIN", odds: 1.7 },
  { team: "Crystal Palace", result: "LOSS", odds: 5.0 },
  { team: "Burnley", result: "LOSS", odds: 2.9 },
  { team: "Fulham", result: "LOSS", odds: 2.4 },
  { team: "Newcastle", result: "LOSS", odds: 1.53 },
  { team: "Luton", result: "LOSS", odds: 5.5 },
  { team: "Sheffield United", result: "LOSS", odds: 5.0 },
  { team: "Aston Villa", result: "WIN", odds: 1.62 },
  { team: "Bournemouth", result: "LOSS", odds: 1.65 },
  { team: "Nott'm Forest", result: "LOSS", odds: 4.75 },
  { team: "Chelsea", result: "LOSS", odds: 1.55 },
  { team: "Wolves", result: "WIN", odds: 5.75 },
  { team: "Man United", result: "WIN", odds: 1.55 },
  { team: "West Ham", result: "LOSS", odds: 5.5 },
  { team: "Arsenal", result: "WIN", odds: 2.1 },
  { team: "Liverpool", result: "LOSS", odds: 3.25 },
  { team: "Brentford", result: "LOSS", odds: 7.5 },
  { team: "Man City", result: "WIN", odds: 1.4 },
  { team: "Man City", result: "WIN", odds: 1.2 },
  { team: "Everton", result: "LOSS", odds: 13.0 },
  { team: "Fulham", result: "WIN", odds: 2.55 },
  { team: "Bournemouth", result: "LOSS", odds: 2.63 },
  { team: "Liverpool", result: "WIN", odds: 1.18 },
  { team: "Burnley", result: "LOSS", odds: 17.0 },
  { team: "Luton", result: "LOSS", odds: 1.7 },
  { team: "Sheffield United", result: "WIN", odds: 4.75 },
  { team: "Tottenham", result: "WIN", odds: 1.73 },
  { team: "Brighton", result: "LOSS", odds: 4.0 },
  { team: "Wolves", result: "LOSS", odds: 2.2 },
  { team: "Brentford", result: "WIN", odds: 3.2 },
  { team: "Nott'm Forest", result: "LOSS", odds: 3.2 },
  { team: "Newcastle", result: "WIN", odds: 2.1 },
  { team: "West Ham", result: "LOSS", odds: 6.0 },
  { team: "Arsenal", result: "WIN", odds: 1.53 },
  { team: "Aston Villa", result: "LOSS", odds: 2.15 },
  { team: "Man United", result: "WIN", odds: 3.1 },
  { team: "Crystal Palace", result: "LOSS", odds: 4.75 },
  { team: "Chelsea", result: "WIN", odds: 1.7 },
  { team: "Brentford", result: "LOSS", odds: 4.75 },
  { team: "Liverpool", result: "WIN", odds: 1.67 },
  { team: "Burnley", result: "LOSS", odds: 10.0 },
  { team: "Arsenal", result: "WIN", odds: 1.29 },
  { team: "Fulham", result: "LOSS", odds: 2.9 },
  { team: "Aston Villa", result: "WIN", odds: 2.25 },
  { team: "Newcastle", result: "LOSS", odds: 1.95 },
  { team: "Bournemouth", result: "LOSS", odds: 3.4 },
  { team: "Nott'm Forest", result: "WIN", odds: 2.25 },
  { team: "West Ham", result: "LOSS", odds: 3.2 },
  { team: "Tottenham", result: "LOSS", odds: 1.5 },
  { team: "Wolves", result: "WIN", odds: 5.25 },
  { team: "Man City", result: "LOSS", odds: 1.33 },
  { team: "Chelsea", result: "LOSS", odds: 7.5 },
  { team: "Sheffield United", result: "LOSS", odds: 4.5 },
  { team: "Brighton", result: "WIN", odds: 1.67 },
  { team: "Luton", result: "LOSS", odds: 4.2 },
  { team: "Man United", result: "WIN", odds: 1.75 },
  { team: "Everton", result: "LOSS", odds: 1.8 },
  { team: "Crystal Palace", result: "LOSS", odds: 5.0 },
  { team: "Man City", result: "WIN", odds: 1.18 },
  { team: "Brentford", result: "LOSS", odds: 13.0 },
  { team: "Liverpool", result: "WIN", odds: 1.29 },
  { team: "Luton", result: "LOSS", odds: 8.0 },
  { team: "Aston Villa", result: "WIN", odds: 1.57 },
  { team: "Nott'm Forest", result: "LOSS", odds: 5.25 },
  { team: "Brighton", result: "LOSS", odds: 1.83 },
  { team: "Everton", result: "LOSS", odds: 4.0 },
  { team: "Crystal Palace", result: "WIN", odds: 1.95 },
  { team: "Burnley", result: "LOSS", odds: 4.0 },
  { team: "Man United", result: "LOSS", odds: 1.65 },
  { team: "Fulham", result: "WIN", odds: 5.0 },
  { team: "Bournemouth", result: "LOSS", odds: 7.0 },
  { team: "Man City", result: "WIN", odds: 1.44 },
  { team: "Arsenal", result: "WIN", odds: 1.36 },
  { team: "Newcastle", result: "LOSS", odds: 7.5 },
  { team: "Wolves", result: "WIN", odds: 1.45 },
  { team: "Sheffield United", result: "LOSS", odds: 7.0 },
  { team: "West Ham", result: "WIN", odds: 2.3 },
  { team: "Brentford", result: "LOSS", odds: 3.0 },
  { team: "Brentford", result: "LOSS", odds: 3.25 },
  { team: "Chelsea", result: "LOSS", odds: 2.15 },
  { team: "Everton", result: "LOSS", odds: 2.15 },
  { team: "West Ham", result: "WIN", odds: 3.3 },
  { team: "Fulham", result: "WIN", odds: 2.55 },
  { team: "Brighton", result: "LOSS", odds: 2.8 },
  { team: "Newcastle", result: "WIN", odds: 1.73 },
  { team: "Wolves", result: "LOSS", odds: 4.33 },
  { team: "Nott'm Forest", result: "LOSS", odds: 5.25 },
  { team: "Liverpool", result: "WIN", odds: 1.6 },
  { team: "Tottenham", result: "WIN", odds: 1.53 },
  { team: "Crystal Palace", result: "LOSS", odds: 5.75 },
  { team: "Luton", result: "LOSS", odds: 4.33 },
  { team: "Aston Villa", result: "WIN", odds: 1.7 },
  { team: "Burnley", result: "LOSS", odds: 3.6 },
  { team: "Bournemouth", result: "WIN", odds: 2.0 },
  { team: "Man City", result: "WIN", odds: 1.25 },
  { team: "Man United", result: "LOSS", odds: 9.5 },
  { team: "Sheffield United", result: "LOSS", odds: 13.0 },
  { team: "Arsenal", result: "WIN", odds: 1.18 },
  { team: "Man United", result: "WIN", odds: 1.91 },
  { team: "Everton", result: "LOSS", odds: 3.8 },
  { team: "Bournemouth", result: "LOSS", odds: 1.33 },
  { team: "Sheffield United", result: "LOSS", odds: 7.5 },
  { team: "Crystal Palace", result: "LOSS", odds: 1.91 },
  { team: "Luton", result: "LOSS", odds: 3.8 },
  { team: "Wolves", result: "WIN", odds: 2.4 },
  { team: "Fulham", result: "LOSS", odds: 2.88 },
  { team: "Arsenal", result: "WIN", odds: 1.2 },
  { team: "Brentford", result: "LOSS", odds: 13.0 },
  { team: "Aston Villa", result: "LOSS", odds: 2.4 },
  { team: "Tottenham", result: "WIN", odds: 2.6 },
  { team: "Brighton", result: "WIN", odds: 1.62 },
  { team: "Nott'm Forest", result: "LOSS", odds: 4.75 },
  { team: "West Ham", result: "LOSS", odds: 1.65 },
  { team: "Burnley", result: "LOSS", odds: 5.0 },
  { team: "Liverpool", result: "LOSS", odds: 3.4 },
  { team: "Man City", result: "LOSS", odds: 2.05 },
  { team: "Chelsea", result: "WIN", odds: 1.8 },
  { team: "Newcastle", result: "LOSS", odds: 3.75 },
  { team: "Bournemouth", result: "WIN", odds: 1.53 },
  { team: "Luton", result: "LOSS", odds: 5.5 },
  { team: "Burnley", result: "WIN", odds: 3.1 },
  { team: "Brentford", result: "LOSS", odds: 2.2 },
  { team: "Luton", result: "LOSS", odds: 2.63 },
  { team: "Nott'm Forest", result: "LOSS", odds: 2.63 },
  { team: "Fulham", result: "WIN", odds: 3.25 },
  { team: "Tottenham", result: "LOSS", odds: 2.0 },
  { team: "West Ham", result: "LOSS", odds: 2.38 },
  { team: "Aston Villa", result: "LOSS", odds: 2.8 },
  { team: "Newcastle", result: "WIN", odds: 1.83 },
  { team: "West Ham", result: "LOSS", odds: 3.75 },
  { team: "Bournemouth", result: "WIN", odds: 2.2 },
  { team: "Everton", result: "LOSS", odds: 3.2 },
  { team: "Chelsea", result: "LOSS", odds: 1.29 },
  { team: "Burnley", result: "LOSS", odds: 9.0 },
  { team: "Nott'm Forest", result: "LOSS", odds: 2.2 },
  { team: "Crystal Palace", result: "LOSS", odds: 3.4 },
  { team: "Sheffield United", result: "LOSS", odds: 4.75 },
  { team: "Fulham", result: "LOSS", odds: 1.7 },
  { team: "Tottenham", result: "WIN", odds: 1.22 },
  { team: "Luton", result: "LOSS", odds: 9.0 },
  { team: "Aston Villa", result: "WIN", odds: 1.53 },
  { team: "Wolves", result: "LOSS", odds: 5.75 },
  { team: "Brentford", result: "LOSS", odds: 3.25 },
  { team: "Man United", result: "LOSS", odds: 2.05 },
  { team: "Liverpool", result: "WIN", odds: 1.3 },
  { team: "Brighton", result: "LOSS", odds: 8.5 },
  { team: "Man City", result: "LOSS", odds: 2.0 },
  { team: "Arsenal", result: "LOSS", odds: 3.5 },
  { team: "Newcastle", result: "LOSS", odds: 1.95 },
  { team: "Everton", result: "LOSS", odds: 3.6 },
  { team: "Nott'm Forest", result: "WIN", odds: 2.7 },
  { team: "Fulham", result: "LOSS", odds: 2.6 },
  { team: "Bournemouth", result: "WIN", odds: 1.85 },
  { team: "Crystal Palace", result: "LOSS", odds: 3.8 },
  { team: "Burnley", result: "LOSS", odds: 2.3 },
  { team: "Wolves", result: "LOSS", odds: 2.9 },
  { team: "West Ham", result: "LOSS", odds: 3.4 },
  { team: "Tottenham", result: "LOSS", odds: 1.95 },
  { team: "Arsenal", result: "WIN", odds: 1.14 },
  { team: "Luton", result: "LOSS", odds: 15.0 },
  { team: "Brentford", result: "LOSS", odds: 2.45 },
  { team: "Brighton", result: "LOSS", odds: 2.63 },
  { team: "Man City", result: "WIN", odds: 1.22 },
  { team: "Aston Villa", result: "LOSS", odds: 11.0 },
  { team: "Liverpool", result: "WIN", odds: 1.07 },
  { team: "Sheffield United", result: "LOSS", odds: 21.0 },
  { team: "Chelsea", result: "WIN", odds: 1.8 },
  { team: "Man United", result: "LOSS", odds: 4.0 },
  { team: "Crystal Palace", result: "LOSS", odds: 10.0 },
  { team: "Man City", result: "WIN", odds: 1.33 },
  { team: "Aston Villa", result: "LOSS", odds: 1.62 },
  { team: "Brentford", result: "LOSS", odds: 5.5 },
  { team: "Everton", result: "WIN", odds: 1.73 },
  { team: "Burnley", result: "LOSS", odds: 4.75 },
  { team: "Fulham", result: "LOSS", odds: 2.38 },
  { team: "Newcastle", result: "WIN", odds: 2.88 },
  { team: "Luton", result: "WIN", odds: 3.8 },
  { team: "Bournemouth", result: "LOSS", odds: 1.91 },
  { team: "Wolves", result: "LOSS", odds: 2.7 },
  { team: "West Ham", result: "WIN", odds: 2.5 },
  { team: "Brighton", result: "LOSS", odds: 6.0 },
  { team: "Arsenal", result: "WIN", odds: 1.5 },
  { team: "Man United", result: "LOSS", odds: 4.75 },
  { team: "Liverpool", result: "LOSS", odds: 1.57 },
  { team: "Sheffield United", result: "LOSS", odds: 6.5 },
  { team: "Chelsea", result: "LOSS", odds: 1.44 },
  { team: "Tottenham", result: "WIN", odds: 1.45 },
  { team: "Nott'm Forest", result: "LOSS", odds: 5.75 },
  { team: "Newcastle", result: "WIN", odds: 2.55 },
  { team: "Tottenham", result: "LOSS", odds: 2.45 },
  { team: "Brentford", result: "WIN", odds: 1.5 },
  { team: "Sheffield United", result: "LOSS", odds: 6.0 },
  { team: "Burnley", result: "LOSS", odds: 3.75 },
  { team: "Brighton", result: "LOSS", odds: 1.85 },
  { team: "Man City", result: "WIN", odds: 1.08 },
  { team: "Luton", result: "LOSS", odds: 17.0 },
  { team: "Nott'm Forest", result: "LOSS", odds: 2.0 },
  { team: "Wolves", result: "LOSS", odds: 3.75 },
  { team: "Bournemouth", result: "LOSS", odds: 2.3 },
  { team: "Man United", result: "LOSS", odds: 2.63 },
  { team: "Liverpool", result: "LOSS", odds: 1.2 },
  { team: "Crystal Palace", result: "WIN", odds: 11.0 },
  { team: "West Ham", result: "LOSS", odds: 2.38 },
  { team: "Fulham", result: "WIN", odds: 2.8 },
  { team: "Arsenal", result: "LOSS", odds: 1.25 },
  { team: "Aston Villa", result: "WIN", odds: 10.0 },
  { team: "Chelsea", result: "WIN", odds: 1.65 },
  { team: "Everton", result: "LOSS", odds: 5.0 },
  { team: "Luton", result: "LOSS", odds: 2.8 },
  { team: "Brentford", result: "WIN", odds: 2.38 },
  { team: "Sheffield United", result: "LOSS", odds: 2.6 },
  { team: "Burnley", result: "WIN", odds: 2.63 },
  { team: "Wolves", result: "LOSS", odds: 11.0 },
  { team: "Arsenal", result: "WIN", odds: 1.22 },
  { team: "Everton", result: "WIN", odds: 2.25 },
  { team: "Nott'm Forest", result: "LOSS", odds: 3.4 },
  { team: "Aston Villa", result: "WIN", odds: 1.83 },
  { team: "Bournemouth", result: "LOSS", odds: 3.8 },
  { team: "Crystal Palace", result: "WIN", odds: 2.2 },
  { team: "West Ham", result: "LOSS", odds: 3.25 },
  { team: "Fulham", result: "LOSS", odds: 4.33 },
  { team: "Liverpool", result: "WIN", odds: 1.67 },
  { team: "Arsenal", result: "WIN", odds: 1.4 },
  { team: "Chelsea", result: "LOSS", odds: 7.0 },
  { team: "Wolves", result: "LOSS", odds: 2.7 },
  { team: "Bournemouth", result: "WIN", odds: 2.4 },
  { team: "Crystal Palace", result: "WIN", odds: 3.1 },
  { team: "Newcastle", result: "LOSS", odds: 2.2 },
  { team: "Everton", result: "WIN", odds: 7.0 },
  { team: "Liverpool", result: "LOSS", odds: 1.4 },
  { team: "Man United", result: "WIN", odds: 1.3 },
  { team: "Sheffield United", result: "LOSS", odds: 8.5 },
  { team: "Brighton", result: "LOSS", odds: 8.0 },
  { team: "Man City", result: "WIN", odds: 1.33 },
  { team: "West Ham", result: "LOSS", odds: 5.0 },
  { team: "Liverpool", result: "LOSS", odds: 1.55 },
  { team: "Fulham", result: "LOSS", odds: 2.05 },
  { team: "Crystal Palace", result: "LOSS", odds: 3.5 },
  { team: "Man United", result: "LOSS", odds: 1.5 },
  { team: "Burnley", result: "LOSS", odds: 5.5 },
  { team: "Newcastle", result: "WIN", odds: 1.2 },
  { team: "Sheffield United", result: "LOSS", odds: 11.0 },
  { team: "Wolves", result: "WIN", odds: 1.91 },
  { team: "Luton", result: "LOSS", odds: 3.75 },
  { team: "Everton", result: "WIN", odds: 2.8 },
  { team: "Brentford", result: "LOSS", odds: 2.4 },
  { team: "Aston Villa", result: "LOSS", odds: 2.05 },
  { team: "Chelsea", result: "LOSS", odds: 3.4 },
  { team: "Bournemouth", result: "WIN", odds: 1.91 },
  { team: "Brighton", result: "LOSS", odds: 3.5 },
  { team: "Tottenham", result: "LOSS", odds: 4.33 },
  { team: "Arsenal", result: "WIN", odds: 1.73 },
  { team: "Nott'm Forest", result: "LOSS", odds: 12.0 },
  { team: "Man City", result: "WIN", odds: 1.25 },
  { team: "Chelsea", result: "WIN", odds: 2.4 },
  { team: "Tottenham", result: "LOSS", odds: 2.6 },
  { team: "Luton", result: "LOSS", odds: 2.7 },
  { team: "Everton", result: "LOSS", odds: 2.45 },
  { team: "Arsenal", result: "WIN", odds: 1.2 },
  { team: "Bournemouth", result: "LOSS", odds: 13.0 },
  { team: "Brentford", result: "LOSS", odds: 2.05 },
  { team: "Fulham", result: "LOSS", odds: 3.25 },
  { team: "Burnley", result: "LOSS", odds: 3.4 },
  { team: "Newcastle", result: "WIN", odds: 1.95 },
  { team: "Sheffield United", result: "LOSS", odds: 4.75 },
  { team: "Nott'm Forest", result: "WIN", odds: 1.67 },
  { team: "Man City", result: "WIN", odds: 1.08 },
  { team: "Wolves", result: "LOSS", odds: 19.0 },
  { team: "Brighton", result: "WIN", odds: 2.3 },
  { team: "Aston Villa", result: "LOSS", odds: 2.8 },
  { team: "Chelsea", result: "WIN", odds: 1.5 },
  { team: "West Ham", result: "LOSS", odds: 5.5 },
  { team: "Liverpool", result: "WIN", odds: 1.44 },
  { team: "Tottenham", result: "LOSS", odds: 5.5 },
  { team: "Crystal Palace", result: "WIN", odds: 1.95 },
  { team: "Man United", result: "LOSS", odds: 3.6 },
  { team: "Fulham", result: "LOSS", odds: 12.0 },
  { team: "Man City", result: "WIN", odds: 1.2 },
  { team: "Bournemouth", result: "LOSS", odds: 2.15 },
  { team: "Brentford", result: "WIN", odds: 3.2 },
  { team: "Everton", result: "WIN", odds: 1.4 },
  { team: "Sheffield United", result: "LOSS", odds: 7.0 },
  { team: "Newcastle", result: "LOSS", odds: 1.57 },
  { team: "Brighton", result: "LOSS", odds: 5.0 },
  { team: "Tottenham", result: "WIN", odds: 1.29 },
  { team: "Burnley", result: "LOSS", odds: 8.0 },
  { team: "West Ham", result: "WIN", odds: 1.85 },
  { team: "Luton", result: "LOSS", odds: 3.8 },
  { team: "Wolves", result: "LOSS", odds: 3.2 },
  { team: "Crystal Palace", result: "WIN", odds: 2.2 },
  { team: "Nott'm Forest", result: "LOSS", odds: 4.0 },
  { team: "Chelsea", result: "WIN", odds: 1.85 },
  { team: "Man United", result: "LOSS", odds: 9.5 },
  { team: "Arsenal", result: "WIN", odds: 1.29 },
  { team: "Aston Villa", result: "LOSS", odds: 3.7 },
  { team: "Liverpool", result: "LOSS", odds: 1.75 },
  { team: "Tottenham", result: "LOSS", odds: 6.5 },
  { team: "Man City", result: "WIN", odds: 1.36 },
  { team: "Brighton", result: "LOSS", odds: 3.2 },
  { team: "Chelsea", result: "WIN", odds: 2.0 },
  { team: "Man United", result: "WIN", odds: 2.7 },
  { team: "Newcastle", result: "LOSS", odds: 2.35 },
  { team: "Arsenal", result: "WIN", odds: 1.22 },
  { team: "Everton", result: "LOSS", odds: 10.0 },
  { team: "Brentford", result: "LOSS", odds: 2.9 },
  { team: "Newcastle", result: "WIN", odds: 2.15 },
  { team: "Brighton", result: "LOSS", odds: 2.6 },
  { team: "Man United", result: "WIN", odds: 2.38 },
  { team: "Burnley", result: "LOSS", odds: 2.8 },
  { team: "Nott'm Forest", result: "WIN", odds: 2.3 },
  { team: "Chelsea", result: "WIN", odds: 1.38 },
  { team: "Bournemouth", result: "LOSS", odds: 7.0 },
  { team: "Crystal Palace", result: "WIN", odds: 1.57 },
  { team: "Aston Villa", result: "LOSS", odds: 4.75 },
  { team: "Liverpool", result: "WIN", odds: 1.13 },
  { team: "Wolves", result: "LOSS", odds: 17.0 },
  { team: "Luton", result: "LOSS", odds: 3.0 },
  { team: "Fulham", result: "WIN", odds: 2.15 },
  { team: "Man City", result: "WIN", odds: 1.07 },
  { team: "West Ham", result: "LOSS", odds: 19.0 },
  { team: "Sheffield United", result: "LOSS", odds: 7.5 },
  { team: "Tottenham", result: "WIN", odds: 1.33 },
];
