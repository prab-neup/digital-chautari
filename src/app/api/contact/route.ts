import { NextResponse } from "next/server";

const PROJECT_TYPES = [
  "Digital Marketing",
  "Content Creation",
  "Software Development",
  "Branding & Design",
  "Health-Tech",
  "Something Else",
];

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  projectTypes: string[];
  message: string;
};

type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: Partial<ContactPayload>): FieldErrors {
  const errors: FieldErrors = {};

  if (!body.name?.trim()) {
    errors.name = "Please tell us your name.";
  }

  if (!body.email?.trim()) {
    errors.email = "Please add an email address.";
  } else if (!EMAIL_PATTERN.test(body.email.trim())) {
    errors.email = "That email address does not look right.";
  }

  if (!body.subject?.trim()) {
    errors.subject = "Please add a subject.";
  }

  if (!body.message?.trim()) {
    errors.message = "Please tell us a little about the project.";
  } else if (body.message.trim().length < 20) {
    errors.message = "A few more details would help - 20 characters minimum.";
  }

  const types = body.projectTypes ?? [];
  if (types.some((type) => !PROJECT_TYPES.includes(type))) {
    errors.projectTypes = "Unrecognised project type.";
  }

  return errors;
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not read that request." },
      { status: 400 }
    );
  }

  const errors = validate(body);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // No mail provider or datastore is specified for this build, so the
  // submission is logged server-side. Swapping this for a transactional
  // email call is the only change needed to make it live.
  console.info("[contact] new enquiry", {
    name: body.name,
    email: body.email,
    subject: body.subject,
    projectTypes: body.projectTypes ?? [],
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: "Thanks. We will get back to you within one business day.",
  });
}
