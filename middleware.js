import { next } from "@vercel/functions";

const CANONICAL_ORIGIN = "https://www.ankarakapindaservis.com";
const COMTR_HOSTS = new Set([
  "ankarakapindaservis.com.tr",
  "www.ankarakapindaservis.com.tr",
]);

export default function middleware(request) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  if (!COMTR_HOSTS.has(host)) {
    return next();
  }

  const url = new URL(request.url);
  return Response.redirect(
    `${CANONICAL_ORIGIN}${url.pathname}${url.search}`,
    308
  );
}
