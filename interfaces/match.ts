export default interface MatchInterface {
  matchId: string,
  playerId: string,
  playerName: string,
  legs: number,
  score: {
    score: number,
    previousScore: number,
  }[]
}
