type ClassValue = string | number | null | undefined | false | ClassValue[];

/**
 * Lightweight className combiner (no external dependency needed).
 * Flattens falsy/nested values and joins the rest with a space.
 */
export function cn(...values: ClassValue[]): string {
  const out: string[] = [];

  const flatten = (value: ClassValue) => {
    if (!value && value !== 0) return;
    if (Array.isArray(value)) {
      value.forEach(flatten);
      return;
    }
    out.push(String(value));
  };

  values.forEach(flatten);
  return out.join(" ");
}
