/**
 * Renders a JSON-LD block. The payload is built server-side from our own
 * config, never from user input, so stringifying it here is safe; the
 * `<` escape guards against a future string value closing the script tag.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
