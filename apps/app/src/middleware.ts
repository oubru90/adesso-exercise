import { NextRequest } from "next/server";
import { updateSession, detectUserLanguage } from "@adesso-exercise/commons";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const language = await detectUserLanguage(request);
  console.log(`Detected language: ${language}`);

  return await updateSession(request);
}

export const config = {
  matcher: ['/((?!api|login|register|_next/static|_next/image|.*\\.png$).*)'],
}
