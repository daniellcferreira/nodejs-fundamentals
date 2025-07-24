import { noContent, ok } from "../utils/http-helper"


export const getPlayerService = async () => {
  const data = { message: "Hello World" }
  let response = null

  if (data) {
    response = ok(data)
  } else {
    response = noContent()
  }

  return response
}