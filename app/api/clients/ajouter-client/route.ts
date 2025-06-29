// app/api/clients/add/route.ts
import { NextRequest, NextResponse } from "next/server";
import { addClient } from "@/lib/clients";
import { z } from "zod";
import { v4 as uuid } from "uuid";

const clientSchema = z.object({
  nom: z.string().min(1),
  email: z.string().email(),
  telephone: z.string().min(10),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = clientSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { success: false, errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const newClient = {
    id: uuid(),
    ...validation.data,
    date: new Date().toISOString(),
  };

  addClient(newClient); // ✅ Use function instead of direct push

  return NextResponse.json({ success: true, client: newClient });
}
