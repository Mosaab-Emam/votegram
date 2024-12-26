import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Votegram</h1>
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Votegram is a platform for creating and managing Telegram polls.{" "}
          <Link
            className="underline underline-offset-4"
            href="create"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create a poll
          </Link>
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="text-sm">
          Created with ❤️ by{" "}
          <a
            className="underline underline-offset-4"
            href="https://github.com/Mosaab-Emam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mosaab Emam
          </a>
        </div>
        <a
          className="flex items-center gap-2 underline underline-offset-4"
          href="https://github.com/Mosaab-Emam/votegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
        <a
          className="flex items-center gap-2 underline underline-offset-4"
          href="https://buymeacoffee.com/mosaabemam9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy me a coffee
        </a>
      </footer>
    </div>
  );
}
