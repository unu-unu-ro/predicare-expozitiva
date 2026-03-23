import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { email, firstName, lastName } = body;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !listId) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName || "",
          LASTNAME: lastName || "",
        },
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      // "duplicate parameter" means the contact already exists – treat as success
      if (data.code === "duplicate_parameter") {
        return NextResponse.json({ message: "Already subscribed" });
      }
      return NextResponse.json(
        { error: data.message || "Brevo API error" },
        { status: response.status },
      );
    }

    return NextResponse.json({ message: "Subscribed successfully" });
  } catch {
    return NextResponse.json({ error: "Failed to connect to Brevo" }, { status: 500 });
  }
}
