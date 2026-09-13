import { getVideoContent } from "../../../lib/content.js";
import { errorResponse, jsonResponse, readSiteId } from "../../../lib/http.js";

export const revalidate = 60;

export async function GET(request) {
  try {
    return jsonResponse(getVideoContent(readSiteId(request)));
  } catch (error) {
    return errorResponse(error);
  }
}
