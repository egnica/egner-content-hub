import sites from "../content/sites.js";
import { DEFAULT_SITE_ID } from "./content.js";

const CACHE_CONTROL =
  "public, max-age=60, s-maxage=300, stale-while-revalidate=86400";

const BASE_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": CACHE_CONTROL,
  "Content-Type": "application/json; charset=utf-8",
};

export function readSiteId(request) {
  const siteId = new URL(request.url).searchParams.get("site") || DEFAULT_SITE_ID;

  if (!sites[siteId]) {
    throw new RangeError(`Unknown site: ${siteId}`);
  }

  return siteId;
}

export function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: BASE_HEADERS,
  });
}

export function errorResponse(error) {
  const status = error instanceof RangeError ? 400 : 500;

  return jsonResponse(
    {
      error: status === 400 ? error.message : "Unable to load content",
    },
    status,
  );
}

