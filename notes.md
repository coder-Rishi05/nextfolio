next book : https://nextjs.org/learn/dashboard-app

next learning : https://nextjs.org/learn/dashboard-app

next-learn repo (for mockdata or json) : https://github.com/vercel/next-learn/tree/main/dashboard/starter-example

docs : https://nextjs.org/docs

Desc:

My very first design first nextjs kind of portfolio site.
```html
inspiration : <a href="https://yaronschoen.com/" ></a>
inspiration : <a href="https://www.tatianamac.com/" ></a>
inspiration : <a href="https://robbowen.digital/" ></a>
inspiration : <a href="https://www.jevinsidhu.com/" ></a>
```
# first error/bug and learning

Tailwind CSS Layout Pitfalls & Best Practices

(Next.js + Tailwind v4)

This document explains common Tailwind CSS layout mistakes that cause sections to “break”, overflow, or behave inconsistently across screen sizes, and how to fix them using Tailwind-native patterns.

1. ❌ Using h-screen with Vertical Padding
Problem

Using h-screen together with padding adds extra height beyond the viewport.

<div class="h-screen py-12">


h-screen = exactly 100vh

py-12 adds extra height

Result: overflow, clipped content, unexpected scroll

✅ Correct Approach

Use min-h-screen instead:

<div class="min-h-screen py-12">


This allows the section to grow naturally if content exceeds the viewport height.

2. ❌ Mixing Fixed Widths with Large Padding
Problem

Combining width utilities with large responsive padding causes layout collapse.

<div class="w-1/2 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80">


Why this breaks:

w-1/2 already limits available space

Large padding removes remaining width

Text wraps awkwardly or overflows on large screens

✅ Correct Approach

Use max-width + auto margin instead of fixed widths.

<div class="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">


This creates:

Predictable layout

Proper centering

Responsive spacing without math conflicts

3. ❌ Overusing the * CSS Reset with Tailwind
Problem

Manually resetting margin and padding conflicts with Tailwind’s built-in Preflight.

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


This can:

Override Tailwind utilities

Cause spacing inconsistencies

Break component layouts

✅ Correct Approach

Tailwind v4 already includes a modern CSS reset (Preflight).
Do not manually reset margins and padding.

Keep globals.css minimal:

html,
body {
  height: 100%;
  width: 100%;
}

4. ❌ Inconsistent Typography Scaling
Problem

Reducing font size at larger breakpoints:

text-sm sm:text-base md:text-xl lg:text-[18px]


This causes visual inconsistency and breaks typographic hierarchy.

✅ Correct Approach

Scale text upward consistently:

text-sm sm:text-base md:text-lg lg:text-xl

5. ❌ Unnecessary Width Constraints for Headings
Problem

Restricting headings with width utilities:

<div class="w-1/2">
  <h1>Projects</h1>
</div>


This:

Misaligns headings from content

Causes awkward centering issues

✅ Correct Approach

Align headings and content to the same container width:

<div class="w-full max-w-5xl mx-auto px-6">
  <h1>Projects</h1>
</div>

6. ✅ Recommended Section Layout Pattern

Use this pattern for almost all sections:

<section class="w-full min-h-screen py-12">
  <div class="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
    <!-- section content -->
  </div>
</section>


This prevents:

Overflow bugs

Spacing conflicts

Responsive breakage

7. 🧠 Core Tailwind Mental Model

Don’t think in percentages.
Think in constraints.

❌ “This should be half the screen”
✅ “This should never exceed a readable width”

Tailwind works best when:

Layout = max-w-* + mx-auto

Spacing = px-*, py-*

Height = min-h-*, not fixed values

8. Summary (Golden Rules)

✅ Use min-h-screen, not h-screen

❌ Avoid w-1/2 for content blocks

✅ Center with max-w-* + mx-auto

❌ Don’t reset margins/padding globally

✅ Trust Tailwind Preflight

✅ Keep padding reasonable and consistent
