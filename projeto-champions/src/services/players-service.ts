import { findAllPlayers, findPlayerById } from "../repositories/players-repository"
import { noContent, ok } from "../utils/http-helper"


export const getPlayerService = async () => {
  const data = await findAllPlayers()
  let response = null

  if (data) {
    response = ok(data)
  } else {
    response = noContent()
  }

  return response
}

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id)
  let response = null

  if (data) {
    response = ok(data)
  } else {
    response = noContent()
  }

  return response
}