import Link from "next/link";
import type { PostMeta } from "./registry";

export const meta: PostMeta = {
  slug: "holiday-roasts-local-prime-rib-turkey-socal",
  title: "Holiday Roasts: Sourcing Local Prime Rib & Turkey in Southern California",
  excerpt:
    "How to secure a pasture-raised prime rib or heritage turkey for your Christmas, Hanukkah, or New Year's table — and why ordering local in November beats a last-minute grocery run.",
  category: "Holidays",
  date: "2025-12-15",
  readingTime: "6 min read",
  heroImage:
    "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1600&auto=format&fit=crop",
  author: "Baker Farms",
};

export default function Post() {
  return (
    <>
      <p className="lede">
        Every year around mid-December, our phone lights up with the same
        request: &quot;Do you have any prime rib left?&quot; And every year we
        have to say, &quot;We wish — sold out.&quot; The truth is that the
        best holiday roasts in Southern California are reserved months in
        advance. If you want to serve real, pasture-raised beef and heritage
        turkey at your holiday table, here&apos;s how to do it right.
      </p>

      <h2>Why Local Beats a Costco Prime Rib Every Time</h2>
      <p>
        A commodity prime rib from a chain grocery store is USDA Choice at
        best, from a grain-finished feedlot animal, wet-aged in a bag for
        speed. It&apos;s fine. Your guests will eat it and be happy.
      </p>
      <p>
        A pasture-raised, dry-aged prime rib from a local farm is a
        different animal — literally and figuratively. Deeper flavor, more
        yellow fat, a firm crust when you sear it, and the confidence of
        knowing exactly where dinner came from. On a night like Christmas
        Eve, that upgrade matters.
      </p>

      <h2>The Holiday Ordering Timeline (Save This)</h2>
      <ul>
        <li>
          <strong>September–October:</strong> reserve Thanksgiving turkeys.
          Heritage and pasture-raised birds are limited and the good ones sell
          out first.
        </li>
        <li>
          <strong>Late October–November:</strong> reserve Christmas prime
          rib, standing rib roast, or tenderloin. Baker Farms holiday cuts
          usually sell out by early December.
        </li>
        <li>
          <strong>December:</strong> if you missed the window, ask about
          smaller specialty roasts (chuck roll, sirloin tip) that can pinch
          hit beautifully.
        </li>
      </ul>

      <h2>What Baker Farms Offers for the Holidays</h2>
      <p>
        Seasonally, from our Winchester, CA farm:
      </p>
      <ul>
        <li>
          <strong>Dry-aged bone-in prime rib</strong> — the classic holiday
          centerpiece. Serves 6–10 depending on size.
        </li>
        <li>
          <strong>Standing rib roast (boneless)</strong> — easier to carve,
          same flavor profile.
        </li>
        <li>
          <strong>Whole beef tenderloin</strong> — for smaller gatherings or
          Beef Wellington.
        </li>
        <li>
          <strong>Pasture-raised turkeys (Thanksgiving)</strong> — limited
          supply, first-come first-served.
        </li>
        <li>
          <strong>Ham (seasonal, pork)</strong> — cured on the farm when
          available.
        </li>
      </ul>
      <p>
        See the current lineup on our <Link href="/#products">shares page</Link>.
        Availability changes weekly during Q4.
      </p>

      <h2>How to Cook a Pasture-Raised Prime Rib</h2>
      <p>
        Because our beef is leaner than commodity, the technique matters.
        Here&apos;s our recommended method for a bone-in prime rib:
      </p>
      <ol>
        <li>
          Pull the roast from the freezer 3 full days before you cook it —
          thaw in the fridge, never on the counter.
        </li>
        <li>
          Salt heavily on all sides 24 hours ahead. Leave uncovered in the
          fridge (dry brine).
        </li>
        <li>
          The day of: bring to room temp for 2 hours before cooking.
        </li>
        <li>
          Reverse sear method: 250°F oven until internal 115°F (about 20 min
          per pound). Rest 30 minutes.
        </li>
        <li>
          Blast in a 500°F oven for 8–10 minutes to build a crust. Final
          internal should read 125–130°F for medium-rare.
        </li>
        <li>
          Rest again 15 minutes, then carve.
        </li>
      </ol>
      <p>
        For freezer storage while you&apos;re holding it until the big day,
        the{" "}
        <a
          href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety"
          target="_blank"
          rel="noopener noreferrer"
        >
          USDA&apos;s freezing and food safety page
        </a>{" "}
        is the definitive reference.
      </p>

      <h2>Holiday Delivery Across Southern California</h2>
      <p>
        We ship most beef roasts across Southern California — LA, OC, San
        Diego, Riverside — packed with dry ice and expedited. See the{" "}
        <Link href="/shipping">full shipping details</Link> for cutoff dates
        the last two weeks of December. Local pickup at the farm in Winchester
        is available up through the day before major holidays; we&apos;ll
        confirm your window when your order is ready.
      </p>

      <h2>Reserve Now, Cook Later</h2>
      <p>
        Head to our{" "}
        <Link href="/#products">seasonal shares</Link> to secure your
        Christmas roast or heritage turkey, and pair it with our{" "}
        <Link href="/blog/summer-grilling-temecula-beef-cuts">
          grass-fed cooking guide
        </Link>{" "}
        for temperature and timing help. Questions about a specific cut?{" "}
        <Link href="/#order">Contact the farm directly</Link> — we&apos;ll
        walk you through what&apos;s available and what will feed your table
        best.
      </p>
    </>
  );
}
