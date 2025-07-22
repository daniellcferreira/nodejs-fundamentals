import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger: true});

server.register(cors, {
  origin: "*",
})

const teams = [
  {id: 1, name: "Mercedes", base: "Germany"},
  {id: 2, name: "Red Bull", base: "Austria"},
  {id: 3, name: "Ferrari", base: "Italy"},
  {id: 4, name: "McLaren", base: "United Kingdom"},
  {id: 5, name: "Williams", base: "United Kingdom"}
]

const drivers = [
  {id: 1, name: "Lewis Hamilton", team: "Mercedes"},
  {id: 2, name: "Max Verstappen", team: "Red Bull"},
  {id: 3, name: "Sebastian Vettel", team: "Ferrari"},
  {id: 4, name: "Daniel Ricciardo", team: "McLaren"},
  {id: 5, name: "Kimi Raikkonen", team: "Williams"}
]

server.get("/teams", async(request, response) => {
  response.type("application/json").code(200)

  return {teams}
})

server.get("/drivers", async(request, response) => {
  response.type("application/json").code(200)

  return {drivers}
})

interface DriverParams {
  id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response) => {
  const id = parseInt(request.params.id)

  const driver = drivers.find(driver => driver.id === id)

  if (!driver) {
    response.code(404)
    return {error: "Driver not found"}
  } else {
    response.type("application/json").code(200)
    return driver
  }  
})

server.listen({port: 3333}, () => {
  console.log("HTTP server running on http://localhost:3333")
})
