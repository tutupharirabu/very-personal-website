# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# animation
- Use motion-v (Motion for Vue) for scroll-linked and hover animations, not framer-motion. Convert React framer-motion code to motion-v equivalents. Confidence: 0.70
- Use named exports from animejs v4 (e.g. `import { anime } from 'animejs'`), not default import. Confidence: 0.60

# mobile-ux
- Prioritize mobile UX: ensure no overlapping/duplicated controls across breakpoints (e.g. hide desktop-only action bars when a mobile bar already provides the same controls). Confidence: 0.80
- Use a dedicated small-screen breakpoint (≤600px) for mobile refinements: 40px+ tap targets, horizontally scrollable tab strips with hidden scrollbars, tighter padding/gutters. Confidence: 0.75
- Auto-close sidebars/overlays on mobile after the user takes an action (e.g. tapping a file in an explorer). Confidence: 0.65
- Reference platform tap-target standards when sizing controls (Apple HIG 44pt, Material 48dp). Confidence: 0.60
- Prefer compact vertical rhythm and tight line spacing in code-like/sidebar content; avoid oversized gaps between lines or paragraph spacer rows. Confidence: 0.85
