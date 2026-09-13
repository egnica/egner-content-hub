import { getTechStack } from "../../../lib/content.js";
import { errorResponse, jsonResponse, readSiteId } from "../../../lib/http.js";

export const revalidate = 60;

export async function GET(request) {
  try {
    return jsonResponse(getTechStack(readSiteId(request)));
  } catch (error) {
    return errorResponse(error);
  }
}
