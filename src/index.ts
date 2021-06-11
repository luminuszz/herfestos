#!/usr/bin/env node

import "reflect-metadata";

import "./container/index";

import { container } from "tsyringe";
import { Herfestos } from "./cli";

const bootstrap = async () => {
  const herfestosInstance = container.resolve(Herfestos);

  herfestosInstance.ignite(process.argv);
};

bootstrap();
