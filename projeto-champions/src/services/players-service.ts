import { response } from "express"
import { deletePlayer } from "../controllers/players-controllers"
import { PlayerModel } from "../models/player-model"
import { statisticsModel } from "../models/statistics-model"
import { deleteOnePlayer, findAllPlayers, findAndModifyPlayer, findPlayerById, insertPlayer } from "../repositories/players-repository"
import { badRequest, created, noContent, ok } from "../utils/http-helper"


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

export const createPlayerService = async (player: PlayerModel) => {
  let response = null

  if (Object.keys(player).length !== 0) {
    await insertPlayer(player)
    response = created()
  } else {
    response = badRequest()
  }
  return response
}

export const deletePlayerService = async (id: number) => {
  let response = null
  const isDeleted = await deleteOnePlayer(id)

  if (isDeleted) {
    response = ok({ message: "Player deleted successfully" })
  } else {
    response = badRequest()
  }

  return response
  }

export const updatePlayerService = async (id: number, statistics: statisticsModel) => {
  const data = await findAndModifyPlayer(id, statistics)
  let response = null

  if (Object.keys(data).length === 0) {
    response = badRequest()
  } else {
    response = ok(data)
  }

  return response
  
}