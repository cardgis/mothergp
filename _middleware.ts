import { NextResponse } from "next/server";

export function middleware(request: Request) {
  console.log("Requête entrante :", request.url);
  return NextResponse.next();
}
