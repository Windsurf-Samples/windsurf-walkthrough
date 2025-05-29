/**
 * Checks if the provided string is a valid e-mail address.
 *
 * Regular expression breakdown:
 *   ^[\w.-]+        → one or more word, dot, or dash characters at the very start (local part)
 *   @               → literal at-sign separating local and domain parts
 *   [\w.-]+         → domain name allowing sub-domains (letters, digits, underscore, dot, dash)
 *   \.[A-Za-z]{2,}$ → a dot followed by a top-level domain with at least two letters until the end of the string
 *
 * Matching example: "user@example.com"
 * Failing examples: "user@", "example.com", "@example.com"
 */
export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};