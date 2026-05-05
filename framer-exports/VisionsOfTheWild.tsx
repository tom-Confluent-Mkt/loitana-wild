// @framerSupportedLayoutWidth = any
// @framerSupportedLayoutHeight = any

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"
import { CSSProperties, useEffect, useRef, useState } from "react"

// ── Design tokens ─────────────────────────────────────────────────────────────
const PRIMARY = "#3E5F36"
const ON_SURFACE_VARIANT = "#444841"
const SECTION_BG = "#FFFFFF" // surface-container-lowest

// ── Layout constants ──────────────────────────────────────────────────────────
const GAP = 12
const TRACK_PADDING_LEFT = 32
// Card widths: desktop fixed | mobile ~72vw / ~52vw of the component's own width
const DESKTOP_FIRST_W = 380
const DESKTOP_CARD_W = 240
const MOBILE_FIRST_RATIO = 0.72
const MOBILE_CARD_RATIO = 0.52

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,600;1,400;1,600&family=Manrope:wght@400;600;700&display=swap');`

const DEFAULT_EPISODES = [
    { id: "01", title: "Twilight Migration", img: "" },
    { id: "02", title: "Cultural Roots", img: "" },
    { id: "03", title: "Predator Hour", img: "" },
    { id: "04", title: "Nocturnal Silence", img: "" },
    { id: "05", title: "The First Light", img: "" },
]

// ── Episode card ──────────────────────────────────────────────────────────────
interface Episode {
    id: string
    title: string
    img: string
}

function EpisodeCard({
    ep,
    cardWidth,
    isFirst,
}: {
    ep: Episode
    cardWidth: number
    isFirst: boolean
}) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            style={{
                flexShrink: 0,
                width: cardWidth,
                aspectRatio: "2 / 3",
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Photo */}
            <img
                src={ep.img || undefined}
                alt={ep.title}
                draggable={false}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 700ms ease",
                    transform: hovered ? "scale(1.1)" : "scale(1)",
                    pointerEvents: "none",
                    userSelect: "none",
                    background: "#2a2a2a",
                }}
            />

            {/* Gradient overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 45%, transparent 100%)",
                    pointerEvents: "none",
                }}
            />

            {/* Play button */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                }}
            >
                <div
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: hovered
                            ? "rgba(255,255,255,0.40)"
                            : "rgba(255,255,255,0.25)",
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)",
                        border: "1px solid rgba(255,255,255,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 300ms ease, background 300ms ease",
                        transform: hovered ? "scale(1.1)" : "scale(1)",
                    }}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="white"
                        style={{ marginLeft: 2 }}
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>

            {/* Episode label + title */}
            <div
                style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    pointerEvents: "none",
                }}
            >
                <p
                    style={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.6)",
                        margin: "0 0 4px 0",
                    }}
                >
                    Ep. {ep.id}
                </p>
                <h4
                    style={{
                        fontFamily: "Newsreader, Georgia, serif",
                        fontSize: isFirst ? 20 : 16,
                        fontWeight: 400,
                        color: "white",
                        lineHeight: 1.2,
                        margin: 0,
                    }}
                >
                    {ep.title}
                </h4>
            </div>
        </div>
    )
}

// ── Main component ────────────────────────────────────────────────────────────
interface Props {
    title?: string
    subtitle?: string
    episodes?: Episode[]
    style?: CSSProperties
}

export default function VisionsOfTheWild({
    title = "Visions of the Wild",
    subtitle = "Rare moments, captured in the heart of the savannah.",
    episodes = DEFAULT_EPISODES,
    style,
}: Props) {
    const sectionRef = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    // Component's own rendered width — drives responsive card sizing
    const [componentWidth, setComponentWidth] = useState(0)
    const [constraints, setConstraints] = useState({ left: 0, right: 0 })

    const isDesktop = componentWidth >= 768
    const firstCardW =
        componentWidth > 0
            ? isDesktop
                ? DESKTOP_FIRST_W
                : componentWidth * MOBILE_FIRST_RATIO
            : DESKTOP_FIRST_W
    const cardW =
        componentWidth > 0
            ? isDesktop
                ? DESKTOP_CARD_W
                : componentWidth * MOBILE_CARD_RATIO
            : DESKTOP_CARD_W

    // 1. Watch the section's width
    useEffect(() => {
        if (!sectionRef.current) return
        const ro = new ResizeObserver(([entry]) => {
            setComponentWidth(entry.contentRect.width)
        })
        ro.observe(sectionRef.current)
        setComponentWidth(sectionRef.current.offsetWidth)
        return () => ro.disconnect()
    }, [])

    // 2. Recompute drag constraints after cards re-render with new widths.
    //    requestAnimationFrame defers until after the paint so trackRef.scrollWidth
    //    reflects the freshly-rendered card widths.
    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            if (!containerRef.current || !trackRef.current) return
            const cw = containerRef.current.offsetWidth
            const tw = trackRef.current.scrollWidth
            setConstraints({ left: Math.min(0, cw - tw), right: 0 })
        })
        return () => cancelAnimationFrame(raf)
    }, [componentWidth, episodes])

    return (
        <section
            ref={sectionRef}
            style={{
                paddingTop: 96,
                paddingBottom: 96,
                background: SECTION_BG,
                overflow: "hidden",
                width: "100%",
                boxSizing: "border-box",
                ...style,
            }}
        >
            <style>{FONT_IMPORT}</style>

            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                {/* ── Header ── */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        marginBottom: 40,
                        padding: `0 ${TRACK_PADDING_LEFT}px`,
                    }}
                >
                    <div>
                        <h2
                            style={{
                                fontFamily: "Newsreader, Georgia, serif",
                                fontSize: isDesktop ? 48 : 32,
                                fontStyle: "italic",
                                fontWeight: 400,
                                color: PRIMARY,
                                margin: "0 0 8px 0",
                                lineHeight: 1.1,
                            }}
                        >
                            {title}
                        </h2>
                        <p
                            style={{
                                fontFamily: "Newsreader, Georgia, serif",
                                fontSize: 16,
                                fontWeight: 300,
                                color: ON_SURFACE_VARIANT,
                                margin: 0,
                                maxWidth: 400,
                                lineHeight: 1.6,
                            }}
                        >
                            {subtitle}
                        </p>
                    </div>

                    {/* "Drag →" hint hidden on mobile, matches original md:block */}
                    {isDesktop && (
                        <span
                            style={{
                                fontFamily: "Manrope, sans-serif",
                                fontSize: 11,
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.2em",
                                color: "rgba(116,121,109,0.6)",
                                paddingBottom: 4,
                                flexShrink: 0,
                            }}
                        >
                            Drag →
                        </span>
                    )}
                </div>

                {/* ── Carousel ── */}
                <div
                    ref={containerRef}
                    style={{
                        overflow: "hidden",
                        paddingLeft: TRACK_PADDING_LEFT,
                    }}
                >
                    <motion.div
                        ref={trackRef}
                        drag="x"
                        dragConstraints={constraints}
                        dragElastic={0.05}
                        dragMomentum
                        style={{
                            display: "flex",
                            gap: GAP,
                            paddingBottom: 24,
                            userSelect: "none",
                            cursor: "grab",
                        }}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {episodes.map((ep, i) => (
                            <EpisodeCard
                                key={ep.id || String(i)}
                                ep={ep}
                                cardWidth={i === 0 ? firstCardW : cardW}
                                isFirst={i === 0}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// ── Framer property controls ──────────────────────────────────────────────────
addPropertyControls(VisionsOfTheWild, {
    title: {
        type: ControlType.String,
        title: "Title",
        defaultValue: "Visions of the Wild",
    },
    subtitle: {
        type: ControlType.String,
        title: "Subtitle",
        defaultValue: "Rare moments, captured in the heart of the savannah.",
    },
    episodes: {
        type: ControlType.Array,
        title: "Episodes",
        control: {
            type: ControlType.Object,
            controls: {
                id: {
                    type: ControlType.String,
                    title: "Ep. Number",
                    defaultValue: "01",
                },
                title: {
                    type: ControlType.String,
                    title: "Title",
                    defaultValue: "Untitled",
                },
                img: {
                    type: ControlType.Image,
                    title: "Image",
                },
            },
        },
        defaultValue: DEFAULT_EPISODES,
    },
})
