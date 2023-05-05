import express from "express";
import {
  EmitterWebhookEvent as WebhookEvent,
  Webhooks,
} from "@octokit/webhooks";
import LRUCache from "lru-cache";
import Redis from "ioredis";
import { Options as LoggingOptions } from "pino-http";

import { Nextbot } from "./index";
import { Context } from "./context";
import { NextbotOctokit } from "./octokit/nextbot-octokit";

import type { Logger, LogFn } from "pino";

export interface Options {
  privateKey?: string;
  githubToken?: string;
  appId?: number | string;

  Octokit?: typeof NextbotOctokit;
  log?: Logger;
  redisConfig?: Redis.RedisOptions | string;
  secret?: string;
  logLevel?: "trace" | "debug" | "info" | "warn" | "error" | "fatal";
  logMessageKey?: string;
  port?: number;
  host?: string;
  baseUrl?: string;
}

export type State = {
  appId?: number;
  privateKey?: string;
  githubToken?: string;
  log: Logger;
  Octokit: typeof NextbotOctokit;
  octokit: InstanceType<typeof NextbotOctokit>;
  cache?: LRUCache<number, string>;
  webhooks: {
    secret?: string;
  };
  port?: number;
  host?: string;
  baseUrl?: string;
};

export type NextbotWebhooks = Webhooks<Omit<Context, keyof WebhookEvent>>;

export type DeprecatedLogger = LogFn & Logger;

export type ApplicationFunctionOptions = {
  getRouter?: (path?: string) => express.Router;
  [key: string]: unknown;
};
export type ApplicationFunction = (
  app: Nextbot,
  options: ApplicationFunctionOptions
) => void;

export type ServerOptions = {
  log?: Logger;
  port?: number;
  host?: string;
  webhookPath?: string;
  webhookProxy?: string;
  Nextbot: typeof Nextbot;
  loggingOptions?: LoggingOptions;
};

export type MiddlewareOptions = {
  nextbot: Nextbot;
  webhooksPath?: string;
  [key: string]: unknown;
};