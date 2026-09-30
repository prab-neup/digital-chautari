"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import styles from "./ContactForm.module.css";

const PROJECT_TYPES = [
  "Digital Marketing",
  "Content Creation",
  "Software Development",
  "Branding & Design",
  "Health-Tech",
  "Something Else",
];

type FieldErrors = Record<string, string>;
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");

  function toggleType(type: string) {
    setProjectTypes((current) =>
      current.includes(type)
        ? current.filter((t) => t !== type)
        : [...current, type]
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrors({});
    setNotice("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
      projectTypes,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors ?? {});
        setStatus("error");
        setNotice(result.message ?? "Please check the highlighted fields.");
        return;
      }

      form.reset();
      setProjectTypes([]);
      setStatus("sent");
      setNotice(result.message);
    } catch {
      setStatus("error");
      setNotice("Something went wrong sending that. Please try again.");
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.pair}>
        <Field label="Name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={cx(styles.input, errors.name && styles.invalid)}
          />
        </Field>

        <Field label="Email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={cx(styles.input, errors.email && styles.invalid)}
          />
        </Field>
      </div>

      <Field label="Subject" name="subject" error={errors.subject}>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What is this about?"
          className={cx(styles.input, errors.subject && styles.invalid)}
        />
      </Field>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Project Type</legend>
        <div className={styles.tags}>
          {PROJECT_TYPES.map((type) => {
            const selected = projectTypes.includes(type);
            return (
              <button
                key={type}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleType(type)}
                className={cx(styles.tag, selected && styles.tagSelected)}
              >
                {type}
              </button>
            );
          })}
        </div>
      </fieldset>

      <Field label="Message" name="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about the project, the timeline and anything you have already tried."
          className={cx(styles.input, styles.textarea, errors.message && styles.invalid)}
        />
      </Field>

      <div className={styles.footer}>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>

        {notice ? (
          <p
            role="status"
            aria-live="polite"
            className={cx(styles.notice, status === "error" && styles.noticeError)}
          >
            {notice}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {children}
      {error ? <span className={styles.error}>{error}</span> : null}
    </div>
  );
}
