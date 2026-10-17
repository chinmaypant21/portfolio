/** Small "In progress" marker, matching the availability dot in the hero. */
export function InProgress() {
  return (
    <span className="label-mono inline-flex items-center gap-2 text-accent">
      <span
        className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse"
        aria-hidden
      />
      In progress
    </span>
  );
}
