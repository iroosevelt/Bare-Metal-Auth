/**
 * An array of publicly accessible routes
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes used for authentication
 * These routes will redirect logged in user to /dashboard
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/signup", "/auth/error"];

/**
 * Prefix for API authentication routes
 * Routes that begin with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
