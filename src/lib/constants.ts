export const FRAMES_PATH  = "/frames";
export const FRAME_COUNT  = 166;
export const FRAME_EXT    = "jpg" as const;

export const SERVICES = [
  {
    icon: "Layers",
    title: "Motion Graphics",
    body: "Animated titles, kinetic typography, logo reveals, and full motion packages. Built in After Effects with the kind of timing that makes people rewatch.",
    tag: "After Effects",
  },
  {
    icon: "Scissors",
    title: "Video Editing",
    body: "Story-driven cuts for YouTube, social, brand films, and short-form content. Pacing, rhythm, and narrative — not just trimming clips.",
    tag: "Premiere Pro",
  },
  {
    icon: "Music2",
    title: "Sound Design",
    body: "SFX layering, audio cleanup, music sync, and mix. The part of the edit most people forget — until it's missing.",
    tag: "Audition",
  },
] as const;

export const PORTFOLIO_ITEMS = [
  { title: "Showreel",           url: "https://youtu.be/cesPUFP6xrM",                                          tag: "Motion / Edit" },
  { title: "Motion Graphics",    url: "https://youtu.be/NdAgUyOKbnk",                                          tag: "Motion Graphics" },
  { title: "Edit Reel",          url: "https://youtu.be/GFdzv1qzgBI",                                          tag: "Video Editing" },
  { title: "Short-form",         url: "https://youtube.com/shorts/ifv2NaoycBU?feature=share",                  tag: "Short-form" },
  { title: "Full Portfolio",     url: "https://drive.google.com/drive/folders/1ehbHPYtOk5dLNryfVgKOTnI4S3xi5jTJ?usp=sharing", tag: "Google Drive" },
] as const;

export const REASONS = [
  { icon: "User",        title: "One person. Full focus.", body: "You work directly with Andrei — not passed to a junior editor. Every project gets my full attention from brief to delivery." },
  { icon: "Clock",       title: "Fast turnaround",         body: "First cut within 48 hours. Revisions within 24. No waiting on account managers or approval chains." },
  { icon: "Repeat2",     title: "Revisions until right",   body: "We go back and forth until the edit feels exactly the way you imagined it — no revision limits, no extra charges." },
  { icon: "Headphones",  title: "Sound is not an afterthought", body: "SFX and audio mix are part of every project. Clean audio and well-timed sound design make the difference between good and great." },
] as const;

export const PROCESS_STEPS = [
  { n: "01", title: "Brief",     body: "Tell me about the project — your vision, references, and deadline. A 15-minute call or a written brief both work." },
  { n: "02", title: "Assembly",  body: "I build the first cut and walk you through every key decision via a Loom video. You leave notes directly on the timeline." },
  { n: "03", title: "Refine",    body: "We go back and forth on pacing, graphics, and audio until it feels right. No revision limits." },
  { n: "04", title: "Delivery",  body: "Final export in any format you need — YouTube, Instagram, broadcast, or raw master. Files arrive the same day picture is locked." },
] as const;

export const STATS = [
  { value: "24+",    label: "Projects Delivered"   },
  { value: "3",      label: "Core Services"        },
  { value: "48h",    label: "First Cut Turnaround" },
  { value: "100%",   label: "Revision Satisfaction" },
] as const;

export const TESTIMONIALS = [
  { quote: "Andrei doesn't just edit — he tells the story. The pacing on our brand film was exactly what we'd hoped for, and the motion graphics elevated the whole thing.", name: "Laura M.",    role: "Brand Director" },
  { quote: "Fast, clean, and he actually listens. Got a first cut back in under 48 hours and it was already 80% there. Will be working together again.",                   name: "Tom R.",      role: "YouTube Creator" },
  { quote: "The sound design on our product launch video was what set it apart. Details I hadn't even thought to ask for — just appeared in the edit.",                    name: "Cristina P.", role: "Marketing Lead" },
  { quote: "I was sceptical about working remotely with a freelancer for something this important. FlowMedia changed my mind completely. Smooth process, great result.",    name: "Alex D.",     role: "Documentary Producer" },
  { quote: "Clean motion graphics, solid editing, and he actually hits deadlines. That last part alone puts him ahead of half the industry.",                              name: "Mia K.",      role: "Agency Creative Director" },
] as const;

export const FAQ_ITEMS = [
  { q: "What kind of projects do you take on?",          a: "Motion graphics, video editing, and sound design — mainly for YouTube channels, brand films, social content, and short-form video. If you have something unusual, just ask." },
  { q: "How do I share my footage?",                     a: "Google Drive, WeTransfer, or Frame.io — whatever you already use. I'll send a link after we confirm the project." },
  { q: "How many revision rounds do we get?",            a: "There's no limit. We keep going until it feels right. In practice, most projects land in 2–3 rounds." },
  { q: "What does the 48-hour first cut include?",       a: "A full rough cut with music, SFX bed, and rough colour — not a rough assembly. You get a Loom walkthrough explaining every major decision." },
  { q: "Do you work with international clients?",        a: "Yes. Most of my clients are remote. I work async across timezones and schedule calls when needed." },
  { q: "What are your rates?",                           a: "Rates depend on the project length, complexity, and turnaround. Send me a brief and I'll give you a clear quote — no vague 'starting from' pricing." },
] as const;

export const PARTNERS = ["YouTube", "Instagram", "Premiere Pro", "After Effects", "Audition"] as const;
