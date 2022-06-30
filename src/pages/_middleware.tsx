import { NextResponse } from 'next/server'

interface Request {
  nextUrl: {
    pathname: string,
  };
}

export async function middleware (req: Request) {
  const { pathname } = req.nextUrl

  if (pathname === '/') return NextResponse.redirect('/store')
  return NextResponse.next()
}
