import { NextRequest } from "next/server";
import { updateSession } from "@adesso-exercise/commons";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ['/((?!api|login|register|_next/static|_next/image|.*\\.png$).*)'],
}
