import type { ComponentType } from "react";

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO YYYY-MM-DD
  readingTime: string;
  heroImage: string;
  author?: string;
};

export type Post = PostMeta & {
  Body: ComponentType;
};

import * as summerGrilling from "./summer-grilling-temecula-beef-cuts";
import * as whereToBuy from "./where-to-buy-grass-fed-beef-temecula-winchester";
import * as quarterBeef from "./ordering-quarter-beef-southern-california-guide";
import * as freezerSpace from "./freezer-space-bulk-beef-socal-home";
import * as grassVsGrain from "./grass-fed-vs-grain-fed-riverside-county";
import * as pastureChicken from "./pasture-raised-chicken-temecula-families";
import * as regenerative from "./regenerative-farming-riverside-county";
import * as holidayRoasts from "./holiday-roasts-local-prime-rib-turkey-socal";
import * as whySwitching from "./winchester-families-switching-local-pasture-raised";
import * as wholeBeef from "./ordering-whole-beef-southern-california-first-time";

export const posts: Post[] = [
  { ...summerGrilling.meta, Body: summerGrilling.default },
  { ...whereToBuy.meta, Body: whereToBuy.default },
  { ...quarterBeef.meta, Body: quarterBeef.default },
  { ...freezerSpace.meta, Body: freezerSpace.default },
  { ...grassVsGrain.meta, Body: grassVsGrain.default },
  { ...pastureChicken.meta, Body: pastureChicken.default },
  { ...regenerative.meta, Body: regenerative.default },
  { ...holidayRoasts.meta, Body: holidayRoasts.default },
  { ...whySwitching.meta, Body: whySwitching.default },
  { ...wholeBeef.meta, Body: wholeBeef.default },
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getRelatedPosts(currentSlug: string, count = 3): Post[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return posts.slice(0, count);
  return posts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aScore = a.category === current.category ? 1 : 0;
      const bScore = b.category === current.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, count);
}
