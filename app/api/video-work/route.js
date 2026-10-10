import { getVideoContent } from "../../../lib/content.js";
import { errorResponse, jsonResponse, readSiteId } from "../../../lib/http.js";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const response = jsonResponse(getVideoContent(readSiteId(request)));
    response.headers.set("Cache-Control", "no-store, max-age=0");
    return response;
  } catch (error) {
    return errorResponse(error);
  }
}
