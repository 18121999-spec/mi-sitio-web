import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="mt-auto border-t border-line bg-ink py-10 text-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <p className="font-serif text-lg tracking-[0.3em]">LA DOLCE VITA</p>
        <p className="text-xs text-bg/60">Ecuador — {dict.footer.addressPending}</p>
        <p className="text-xs text-bg/40">
          © {new Date().getFullYear()} LA DOLCE VITA. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
