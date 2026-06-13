import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import env from '../config/env.js';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
constructor() {
    const adapter = new PrismaPg({
        connectionString: env.DB.URL as string,
    });
    super({ adapter });
}

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}