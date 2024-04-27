import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    const { name, email } = request.body as { name: string, email: string };
    // console.log(name, email);

    const customService = new CreateCustomerService();

    const customer = await customService.execute({ name, email });

    reply.send(customer)

  }
}

export { CreateCustomerController };