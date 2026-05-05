// @framerSupportedLayoutWidth = any
// @framerSupportedLayoutHeight = any

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"
import { CSSProperties, useEffect, useRef, useState } from "react"

// ── Design tokens ─────────────────────────────────────────────────────────────
const PRIMARY = "#3E5F36"
const ON_PRIMARY = "#ffffff"
const TERTIARY_FIXED = "#F5E3CA"
const ON_TERTIARY_FIXED = "#3D2400"

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,600;1,400;1,600&family=Manrope:wght@400;600;700&display=swap');`

// ── Responsive hook (watches component's own container, not viewport) ──────────
function useContainerWidth(ref: React.RefObject<HTMLElement>) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (!ref.current) return
        const ro = new ResizeObserver(([entry]) => {
            setWidth(entry.contentRect.width)
        })
        ro.observe(ref.current)
        setWidth(ref.current.offsetWidth)
        return () => ro.disconnect()
    }, [])

    return width
}

// ── Component ─────────────────────────────────────────────────────────────────
interface Props {
    backgroundImage?: string
    badge?: string
    headlineMain?: string
    headlineItalic?: string
    primaryCta?: string
    primaryCtaUrl?: string
    secondaryCta?: string
    secondaryCtaUrl?: string
    style?: CSSProperties
}

export default function HeroSection({
    backgroundImage,
    badge = "The Exclusive Frontier",
    headlineMain = "Loitana Wild: 5,300 Acres. One Guest.",
    headlineItalic = "You.",
    primaryCta = "Begin Your Journey",
    primaryCtaUrl = "/the-residence",
    secondaryCta = "Explore the Outcrop",
    secondaryCtaUrl = "/the-residence",
    style,
}: Props) {
    const rootRef = useRef<HTMLElement>(null)
    const containerWidth = useContainerWidth(rootRef)
    const isDesktop = containerWidth >= 768

    const [primaryHovered, setPrimaryHovered] = useState(false)
    const [secondaryHovered, setSecondaryHovered] = useState(false)

    // Responsive values derived from container width
    const px = isDesktop ? 80 : 32
    const headlineSize = isDesktop ? 96 : Math.max(38, containerWidth * 0.083)
    const buttonDir = isDesktop ? "row" : "column"
    const buttonGap = isDesktop ? 24 : 16

    return (
        <section
            ref={rootRef}
            style={{
                position: "relative",
                height: "100svh",
                minHeight: 640,
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                width: "100%",
                boxSizing: "border-box",
                ...style,
            }}
        >
            <style>{FONT_IMPORT}</style>

            {/* ── Background ── */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                {backgroundImage ? (
                    <img
                        src={backgroundImage}
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                ) : (
                    // Placeholder when no image is set in Framer
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            background:
                                "linear-gradient(160deg, #1A2B18 0%, #2C3D28 50%, #1A1C18 100%)",
                        }}
                    />
                )}
                {/* Gradient overlay — matches .hero-gradient in index.css */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(26,28,24,0.45) 0%, rgba(26,28,24,0.15) 60%, rgba(26,28,24,0.35) 100%)",
                    }}
                />
            </div>

            {/* ── Content ── */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    padding: `0 ${px}px`,
                    boxSizing: "border-box",
                }}
            >
                <div style={{ maxWidth: 896 }}>
                    {/* Badge */}
                    <motion.span
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.75,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0,
                        }}
                        style={{
                            display: "inline-block",
                            background: TERTIARY_FIXED,
                            color: ON_TERTIARY_FIXED,
                            padding: "4px 12px",
                            marginBottom: 24,
                            fontSize: 12,
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            borderRadius: 4,
                        }}
                    >
                        {badge}
                    </motion.span>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.75,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1,
                        }}
                        style={{
                            fontFamily: "Newsreader, Georgia, serif",
                            fontSize: headlineSize,
                            fontWeight: 400,
                            fontStyle: "normal",
                            color: "white",
                            lineHeight: 1.05,
                            letterSpacing: "-0.025em",
                            margin: "0 0 32px 0",
                        }}
                    >
                        {headlineMain}{" "}
                        <em style={{ fontStyle: "italic" }}>{headlineItalic}</em>
                    </motion.h1>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.75,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.2,
                        }}
                        style={{
                            display: "flex",
                            flexDirection: buttonDir,
                            gap: buttonGap,
                            alignItems: isDesktop ? "center" : "stretch",
                        }}
                    >
                        {/* Primary */}
                        <a
                            href={primaryCtaUrl}
                            onMouseEnter={() => setPrimaryHovered(true)}
                            onMouseLeave={() => setPrimaryHovered(false)}
                            style={{
                                display: "block",
                                background: PRIMARY,
                                color: ON_PRIMARY,
                                padding: "20px 40px",
                                fontSize: 14,
                                fontFamily: "Manrope, sans-serif",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                borderRadius: 4,
                                textDecoration: "none",
                                textAlign: "center",
                                transition: "opacity 0.2s ease, transform 0.15s ease",
                                opacity: primaryHovered ? 0.9 : 1,
                                transform: primaryHovered ? "scale(0.98)" : "scale(1)",
                                cursor: "pointer",
                            }}
                        >
                            {primaryCta}
                        </a>

                        {/* Secondary (glass) */}
                        <a
                            href={secondaryCtaUrl}
                            onMouseEnter={() => setSecondaryHovered(true)}
                            onMouseLeave={() => setSecondaryHovered(false)}
                            style={{
                                display: "block",
                                background: secondaryHovered
                                    ? "rgba(255,255,255,0.20)"
                                    : "rgba(255,255,255,0.10)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                                color: "white",
                                border: "1px solid rgba(255,255,255,0.20)",
                                padding: "20px 40px",
                                fontSize: 14,
                                fontFamily: "Manrope, sans-serif",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                borderRadius: 4,
                                textDecoration: "none",
                                textAlign: "center",
                                transition: "background 0.2s ease, transform 0.15s ease",
                                transform: secondaryHovered ? "scale(0.98)" : "scale(1)",
                                cursor: "pointer",
                            }}
                        >
                            {secondaryCta}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// ── Framer property controls ──────────────────────────────────────────────────
addPropertyControls(HeroSection, {
    backgroundImage: {
        type: ControlType.Image,
        title: "Background",
    },
    badge: {
        type: ControlType.String,
        title: "Badge",
        defaultValue: "The Exclusive Frontier",
    },
    headlineMain: {
        type: ControlType.String,
        title: "Headline",
        defaultValue: "Loitana Wild: 5,300 Acres. One Guest.",
        displayTextArea: true,
    },
    headlineItalic: {
        type: ControlType.String,
        title: "Italic Suffix",
        defaultValue: "You.",
    },
    primaryCta: {
        type: ControlType.String,
        title: "Primary CTA",
        defaultValue: "Begin Your Journey",
    },
    primaryCtaUrl: {
        type: ControlType.String,
        title: "Primary URL",
        defaultValue: "/the-residence",
    },
    secondaryCta: {
        type: ControlType.String,
        title: "Secondary CTA",
        defaultValue: "Explore the Outcrop",
    },
    secondaryCtaUrl: {
        type: ControlType.String,
        title: "Secondary URL",
        defaultValue: "/the-residence",
    },
})
