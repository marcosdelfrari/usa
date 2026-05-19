"use client";

import { Share, Check } from "lucide-react";
import { useCallback, useState } from "react";
import { SITE_TAGLINE, SITE_URL } from "@/lib/site";

const SHARE_URL = `${SITE_URL}/linktree`;
const SHARE_TITLE = "USA — Links e contato";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: SHARE_TITLE,
      text: SITE_TAGLINE,
      url: SHARE_URL,
    };

    if (typeof navigator.share === "function") {
      try {
        if (!navigator.canShare || navigator.canShare(shareData)) {
          await navigator.share(shareData);
          return;
        }
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copie o link:", SHARE_URL);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label={copied ? "Link copiado" : "Compartilhar página"}
      title={copied ? "Link copiado!" : "Compartilhar"}
      className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#9f515e] shadow-md transition-colors hover:bg-gray-100"
    >
      {copied ? <Check size={20} aria-hidden /> : <Share size={20} aria-hidden />}
    </button>
  );
}
