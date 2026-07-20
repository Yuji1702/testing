"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Production Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="mx-auto h-16 w-16 rounded-full bg-error/10 flex items-center justify-center">
          <span className="text-2xl font-bold text-error">!</span>
        </div>
        <h1 className="text-3xl font-bold text-heading">Something went wrong</h1>
        <p className="text-foreground">
          An unexpected error occurred. We apologize for the inconvenience.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row justify-center">
          <button
            onClick={() => reset()}
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-background shadow-lg transition-all hover:shadow-luxury active:scale-95"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-full bg-surface px-8 py-3 text-sm font-semibold text-foreground shadow-sm ring-1 ring-border transition-all hover:bg-background active:scale-95"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
