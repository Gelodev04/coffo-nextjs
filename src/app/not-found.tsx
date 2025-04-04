// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-main">404 - Page Not Found</h1>
      <p className="text-lg text-gray-500 mt-2">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-4 text-red-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
