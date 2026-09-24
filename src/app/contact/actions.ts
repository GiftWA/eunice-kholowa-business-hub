"use server";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  // Basic validation
  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email and message.",
    };
  }

  if (!email.includes("@")) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  // TODO Milestone 15: Send email via Resend
  // For now, log the submission
  console.log("Contact form submission:", {
    name, email, phone, subject, message,
    submittedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    message: `Thank you ${name}! Your message has been received. Eunice will get back to you shortly.`,
  };
}