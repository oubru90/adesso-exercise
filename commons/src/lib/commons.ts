import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { User } from "./interfaces";

const secretKey = process.env.JWT_SECRET;
const sessionDuration = 5 * 24 * 60 * 60 * 1000; // 4 hours
const key = new TextEncoder().encode(secretKey);

const supportedLanguages = ["en", "it"];
const defaultLanguage = "en";

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("5 days from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(user: User) {
  // Create the session
  const expires = new Date(Date.now() + sessionDuration);
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = cookies().get("session")?.value;
  if (!session) {
    return Response.redirect(new URL('/login', request.url))
  }
  try {
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + sessionDuration);
    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: await encrypt(parsed),
      httpOnly: true,
      expires: parsed.expires,
    });
    return res;
  } catch (error) {
    return Response.redirect(new URL('/login', request.url));
  }
}

export async function detectUserLanguage(request: NextRequest) {
  const lang = cookies().get("lang")?.value;
  if (!lang) {
    const acceptLanguage = request.headers.get("Accept-Language");
    let language = defaultLanguage;
    if (acceptLanguage) {
      language = acceptLanguage.split("-")[0];
    }
    const res = NextResponse.next();
    res.cookies.set({
      name: "lang",
      value: language,
      httpOnly: true,
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    });
    return language;
  } else {
    return lang
  }
}

export async function getUserLanguage() {
  return cookies().get("lang")?.value || defaultLanguage;
}

export async function changeUserLanguage() {
  const userLanguage = await getUserLanguage();
  const [lang] = supportedLanguages.filter((supportedLang) => supportedLang !== userLanguage);
  cookies().set("lang", lang, { expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) });
}
