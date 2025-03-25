# Integrating With HubSpot I: Foundations Practicum

This project is a Node.js application built as part of the HubSpot Academy's **Integrating with HubSpot I: Foundations** practicum.

It demonstrates how to:
- Create and use a custom object in HubSpot (in this case, a `Car` object)
- Make authenticated API requests using Axios
- Build a server using Express
- Collect form data and create new CRM records
- Display custom object data in a table using Pug templates

## Tech Stack

- Node.js
- Express.js
- Axios
- Pug templating engine
- HubSpot CRM API
- dotenv

## Custom Object

**Object Name:** `Car`  
**Custom Properties:** `name`, `brand`, `type`

---

## Custom Object List View

[View my custom object in HubSpot](https://app.hubspot.com/contacts/YOUR-PORTAL-ID/objects/p242354783_car/views/all/list)

> Replace `YOUR-PORTAL-ID` in the link above with your actual test portal ID from HubSpot.

---

## How to Run

1. Create a `.env` file and add:
2. Run `node index.js`
3. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## Submission

This repo was created and submitted for the **HubSpot Academy Developer Practicum Certification**.
