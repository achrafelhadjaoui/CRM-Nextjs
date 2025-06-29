import {getAllClients}   from '@/lib/clients'
import { NextResponse } from 'next/server'

export async function GET() {
  const clients = await getAllClients ()
  return NextResponse.json({
    data: clients,
    success: true
})
}
