import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

// URL for MailerLite API v2 - groups endpoint for adding a subscriber
const MAILERLITE_API_URL = "https://api.mailerlite.com/api/v2/groups/";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const { MAILERLITE_API_KEY, MAILERLITE_GROUP_ID } = process.env;

  if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
    console.error("MailerLite API Key or Group ID not set in environment variables.");
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server configuration error." }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const email = body.email;

    if (!email || !email.includes("@")) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid email address" }),
      };
    }

    const subscriberData = {
      email: email,
      // You can add more fields here if needed by MailerLite and if you collect them
      // e.g., name: body.name, fields: { company: body.company }
    };

    const fullApiUrl = `${MAILERLITE_API_URL}${MAILERLITE_GROUP_ID}/subscribers`;

    const response = await fetch(fullApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": MAILERLITE_API_KEY,
      },
      body: JSON.stringify(subscriberData),
    });

    if (response.ok || response.status === 201) { // 200 OK or 201 Created
      // const responseData = await response.json(); // Optional: if you need to process the response
      console.log(`Email ${email} successfully added to MailerLite group ${MAILERLITE_GROUP_ID}`);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Email subscribed successfully!" }),
      };
    } else {
      const errorData = await response.json();
      console.error("MailerLite API Error:", response.status, errorData);
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: errorData.message || "Failed to subscribe email via MailerLite." }),
      };
    }
  } catch (error) {
    console.error("Error processing MailerLite subscription:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error processing subscription." }),
    };
  }
};

export { handler };
