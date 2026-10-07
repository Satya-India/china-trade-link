/// <reference types="astro/client" />

type D1Database = any;

type ENV = {
  DB: D1Database;
};

type Runtime = {
  env: ENV;
  waitUntil: (promise: Promise<any>) => void;
  passThroughOnException: () => void;
};

declare namespace App {
  interface Locals {
    runtime?: Runtime;
  }
}
