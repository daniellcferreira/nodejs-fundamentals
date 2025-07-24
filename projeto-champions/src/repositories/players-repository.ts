interface PlayerModel {
  id: number,
  name: string
}

const database: PlayerModel[] = [
  { id: 1, name: "Player 1" },
  { id: 2, name: "Player 2" },
  { id: 3, name: "Player 3" },
  { id: 4, name: "Player 4" },
  { id: 5, name: "Player 5" }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === id)
}