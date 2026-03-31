# Design System Strategy: The Architectural Ledger

## 1. Overview & Creative North Star
The creative North Star for this design system is **"The Sovereign Analyst."** 

Unlike generic fintech apps that rely on playful rounded corners and flat blue boxes, this system adopts an editorial, high-end posture. It treats financial data as a premium asset. We move beyond "standard UI" by embracing a layout strategy that feels like a bespoke physical ledger translated into a digital medium. 

The aesthetic is defined by **tonal depth and atmospheric breathing room**. We break the rigid, "boxed-in" grid by utilizing intentional asymmetry—where data cards might offset slightly or use varying heights—to guide the eye toward critical insights. This is not just a tool; it is a sophisticated environment for growth.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the authority of `primary` (#00193c) and the vitality of `tertiary` (#caf300). 

### The "No-Line" Rule
**Traditional 1px solid borders are strictly prohibited for sectioning.** To define boundaries, designers must rely exclusively on background shifts.
- A `surface-container-low` (#f3f4f5) section should sit directly against a `surface` (#f8f9fa) background. 
- The contrast is felt, not seen, creating a sophisticated "seamless" interface.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets of fine, semi-translucent paper.
*   **Level 0 (Base):** `surface` (#f8f9fa) – The canvas.
*   **Level 1 (Sections):** `surface-container-low` (#f3f4f5) – Use for large structural blocks.
*   **Level 2 (Active Cards):** `surface-container-lowest` (#ffffff) – Use for data modules to make them "pop" against the base.
*   **Level 3 (Interactions):** `surface-container-high` (#e7e8e9) – Use for hover states or inset elements.

### The "Glass & Gradient" Rule
To evoke a modern, "live" feeling in a data-centric environment:
*   **Floating Navigation:** Use `surface-container-lowest` at 80% opacity with a `backdrop-blur` of 20px.
*   **Signature CTAs:** Primary buttons should use a subtle linear gradient from `primary` (#00193c) to `primary_container` (#002d62) at a 135-degree angle. This adds "soul" and a tactile, weighted quality.

---

## 3. Typography: Editorial Authority
We pair **Manrope** (Display/Headline) with **Inter** (Body/Labels) to balance character with precision.

*   **Display-LG (3.5rem):** Reserved for portfolio totals or high-impact growth percentages.
*   **Headline-SM (1.5rem):** Used for section titles. These should often be "hanging" (indented or slightly offset) to break the grid.
*   **Body-MD (0.875rem):** The workhorse for all financial data tables and descriptions.
*   **Label-SM (0.6875rem):** Used for "Live" indicators or micro-metadata. Always set in All-Caps with +5% letter spacing to maintain a "ticker" aesthetic.

---

## 4. Elevation & Depth
Depth is a functional tool for hierarchy, never a decorative afterthought.

*   **Tonal Layering:** Avoid shadows on standard cards. Achieving lift is done by placing a `#ffffff` (`surface-container-lowest`) element on a `#f3f4f5` (`surface-container-low`) background.
*   **Ambient Shadows:** For floating modals or "active" price tickers, use a soft, wide-spread shadow: `0px 24px 48px rgba(25, 28, 29, 0.06)`. The tint is derived from `on-surface`, ensuring it feels like natural light.
*   **The "Ghost Border" Fallback:** If a border is required for high-density data tables, use `outline-variant` (#c4c6d1) at **15% opacity**. It should be a whisper, not a statement.

---

## 5. Components

### Live Price Tickers
*   **Visual Style:** Horizontal strips using `surface-container-highest`. 
*   **Motion:** Smooth, non-stepped CSS transforms.
*   **Data Points:** Positive movement uses `secondary` (#29695b) with a `secondary_container` background. Negative uses `error` (#ba1a1a).

### Data Cards (The Core Unit)
*   **Constraint:** Zero borders. No dividers between header and body.
*   **Structure:** Use `spacing-5` (1.1rem) internal padding.
*   **Interaction:** On hover, the card should transition from `surface-container-lowest` to a subtle gradient of `surface-bright` to `surface-container-low`.

### Input Forms
*   **State:** Default inputs use the `surface-container-highest` background. 
*   **Focus:** Instead of a thick border, use a 2px `surface_tint` (#3e5e95) bottom-border only, or a subtle "glow" using the `primary_fixed` color.
*   **Labels:** Use `label-md` in `on-surface-variant` positioned 0.4rem above the field.

### Buttons
*   **Primary:** `primary` background, `on-primary` text. `rounded-md` (0.375rem). 
*   **Secondary/Accent:** Use the "Growth Color" `tertiary_fixed` (#caf300) for high-conversion CTAs. This creates a sharp, professional contrast against the navy background.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical white space. Leave a larger gap (`spacing-16`) at the top of a page than at the bottom to create "Editorial Air."
*   **Do** use `tertiary` (#caf300) sparingly. It is a laser, not a floodlight. Use it only for the final "Commit" or "Invest" action.
*   **Do** nest containers to show parent-child relationships rather than using lines.

### Don’t
*   **Don’t** use black (#000000) for text. Always use `on-surface` (#191c1d) to maintain the sophisticated tonal range.
*   **Don’t** use "Drop Shadows" on every card. It creates visual noise and cheapens the "Sovereign" look.
*   **Don’t** use standard 8px grid rounding for everything. Use `rounded-sm` (2px) for data-heavy elements to keep them feeling sharp and "calculated."
