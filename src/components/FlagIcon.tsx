import type { Locale } from "@/i18n/config";

export default function FlagIcon({ locale, size = 26 }: { locale: Locale; size?: number }) {
    return (
        <img
            src={`/flags/${locale}.png`}
            width={size}
            height={size * 0.75}
            alt=""
            aria-hidden="true"
            className="rounded-sm object-cover"
            style={{ width: size, height: size * 0.7 }}
            loading="lazy"
        />
    );
}