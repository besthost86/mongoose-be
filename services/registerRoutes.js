import express from 'express'

export default async function registerRoutes(modulePath) {
    const routes = await import(modulePath);
    const router = new express.Router();
    routes.default(router);
    return router;

}