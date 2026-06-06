
  # Build personal portfolio website

  This is a code bundle for Build personal portfolio website. The original project is available at https://my-portfolio-srl.netlify.app/#.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Contact form setup

  This project uses EmailJS to send contact form messages directly from the frontend.

  1. Copy `.env.example` to `.env`.
  2. Fill in the required values from your EmailJS dashboard:
     - `VITE_EMAILJS_SERVICE_ID` = `YOUR_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID` = `YOUR_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY` = `YOUR_PUBLIC_KEY`
  3. Start the frontend with `npm run dev`.

  ## Testing the contact form

  - Submit the contact form from the website UI.
  - Or use curl:

    ```bash
    curl -X POST http://localhost:4000/api/contact \
      -H "Content-Type: application/json" \
      -d '{"name":"Test User","email":"test@example.com","subject":"Hello","message":"This is a test","botField":""}'
    ```

  ## Notes

  - The frontend sends requests to `/api/contact`.
  - The backend validates email, sanitizes inputs, protects against spam, and logs delivery status.
  - No database is required; the system works by sending email notifications only.
  