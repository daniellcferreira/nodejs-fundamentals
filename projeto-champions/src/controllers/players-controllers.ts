import { Request, Response } from "express"
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerService, updatePlayerService } from "../services/players-service"
import { noContent, ok } from "../utils/http-helper"
import { statisticsModel } from "../models/statistics-model"

export const getPlayer = async (req: Request, res: Response) => {
  const HttpResponse = await getPlayerService()

  res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  const HttpResponse = await getPlayerByIdService(id)

  res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body

  const httpResponse = await createPlayerService(bodyValue)

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body)
  } else {
    const response = await noContent()
    res.status(response.statusCode).json(response.body)
  }
}

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const httpResponse = await deletePlayerService(id)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const bodyValue: statisticsModel = req.body

  const httpResponse = await updatePlayerService(id, bodyValue)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}