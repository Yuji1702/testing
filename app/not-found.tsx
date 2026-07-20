import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-6xl font-bold text-heading">404</h1>
        <h2 className="text-2xl font-semibold text-primary">Page Not Found</h2>
        <p className="text-foreground">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-background shadow-lg transition-all hover:shadow-luxury active:scale-95"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
