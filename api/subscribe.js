export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, firstName, lastName } = req.body || {};

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email is required" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !listId) {
    return res.status(500).json({ error: "Server configuration error" });
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
        return res.status(200).json({ message: "Already subscribed" });
      }
      return res
        .status(response.status)
        .json({ error: data.message || "Brevo API error" });
    }

    return res.status(200).json({ message: "Subscribed successfully" });
  } catch {
    return res.status(500).json({ error: "Failed to connect to Brevo" });
  }
}
