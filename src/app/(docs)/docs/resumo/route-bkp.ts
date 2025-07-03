import fs from 'fs'
import {
  NextRequest,
  NextResponse
} from 'next/server'

type ResponseData = {
  message: string
}

export async function GET(req: NextRequest) {
  const file = fs.readFileSync(
    'README.md',
    'utf8'
  )
  return new NextResponse(file)
}
