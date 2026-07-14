// Mock content for StudentCribHub.
// In production these would come from the API / CMS.

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export type RoomType = "Hostel" | "Apartment" | "Shared room" | "Studio";

export type Listing = {
  id: string;
  slug: string;
  title: string;
  type: RoomType;
  campus: string;
  address: string;
  distanceKm: number;
  pricePerMonth: number;
  rating: number;
  reviews: number;
  verified: boolean;
  beds: number;
  baths: number;
  available: string;
  amenities: string[];
  description: string;
  images: string[];
  landlord: { name: string; initials: string; responseTime: string; verified: boolean };
};

export const listings: Listing[] = [
  {
    id: "l1",
    slug: "sunrise-court-ensuite",
    title: "Sunrise Court — En-suite Room",
    type: "Hostel",
    campus: "University of Lagos",
    address: "12 Akoka Road, Yaba, Lagos",
    distanceKm: 0.4,
    pricePerMonth: 85000,
    rating: 4.8,
    reviews: 126,
    verified: true,
    beds: 1,
    baths: 1,
    available: "Available now",
    amenities: ["Wi-Fi", "24/7 power", "Study desk", "Security", "Water", "Kitchen access"],
    description:
      "A bright en-suite room in a well-run hostel just a 5-minute walk from the UNILAG main gate. Backup power around the clock, secure premises, and a quiet study environment. Perfect for a focused student who wants zero commute.",
    images: [
      img("photo-1522708323590-d24dbb6b0267"),
      img("photo-1502672260266-1c1ef2d93688"),
      img("photo-1484154218962-a197022b5858"),
      img("photo-1556020685-ae41abfc9365"),
    ],
    landlord: { name: "Mrs. Adeyemi", initials: "MA", responseTime: "within 2 hours", verified: true },
  },
  {
    id: "l2",
    slug: "maple-heights-1bed",
    title: "Maple Heights — 1-Bed Apartment",
    type: "Apartment",
    campus: "Covenant University",
    address: "Canaanland, Ota, Ogun",
    distanceKm: 1.2,
    pricePerMonth: 140000,
    rating: 4.6,
    reviews: 89,
    verified: true,
    beds: 1,
    baths: 1,
    available: "Available from Aug 1",
    amenities: ["Wi-Fi", "Air conditioning", "Furnished", "Parking", "Security", "Water"],
    description:
      "A modern self-contained apartment with its own kitchen and bathroom, fully furnished and ready to move in. Gated compound with parking and 24/7 security. Ideal for a final-year or postgraduate student who wants their own space.",
    images: [
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1554995207-c18c203602cb"),
      img("photo-1502672260266-1c1ef2d93688"),
      img("photo-1484154218962-a197022b5858"),
    ],
    landlord: { name: "Mr. Okonkwo", initials: "OK", responseTime: "within 1 hour", verified: true },
  },
  {
    id: "l3",
    slug: "scholars-lodge-shared",
    title: "Scholars Lodge — Shared Room",
    type: "Shared room",
    campus: "University of Ibadan",
    address: "Agbowo, Ibadan, Oyo",
    distanceKm: 0.8,
    pricePerMonth: 55000,
    rating: 4.7,
    reviews: 203,
    verified: true,
    beds: 2,
    baths: 1,
    available: "Available now",
    amenities: ["Wi-Fi", "Study desk", "Security", "Water", "Common lounge"],
    description:
      "Affordable shared room for two in a friendly, sociable lodge popular with UI students. Great community, walking distance to lecture halls, and one of the best-rated spots for value on the platform.",
    images: [
      img("photo-1540518614846-7eded433c457"),
      img("photo-1505691938895-1758d7feb511"),
      img("photo-1522771739844-6a9f6d5f14af"),
      img("photo-1493809842364-78817add7ffb"),
    ],
    landlord: { name: "Scholars Ltd", initials: "SL", responseTime: "within 4 hours", verified: true },
  },
  {
    id: "l4",
    slug: "campus-view-studio",
    title: "Campus View — Studio",
    type: "Studio",
    campus: "University of Lagos",
    address: "St. Finbarr's Rd, Akoka, Lagos",
    distanceKm: 0.9,
    pricePerMonth: 120000,
    rating: 4.9,
    reviews: 74,
    verified: true,
    beds: 1,
    baths: 1,
    available: "Available now",
    amenities: ["Wi-Fi", "Air conditioning", "Furnished", "24/7 power", "Security"],
    description:
      "A sleek modern studio with a full kitchenette and a private bathroom. Newly renovated, tastefully furnished, and one of the highest-rated homes near UNILAG.",
    images: [
      img("photo-1567767292278-a4f21aa2d36e"),
      img("photo-1554995207-c18c203602cb"),
      img("photo-1556020685-ae41abfc9365"),
      img("photo-1484154218962-a197022b5858"),
    ],
    landlord: { name: "Bright Homes", initials: "BH", responseTime: "within 3 hours", verified: true },
  },
  {
    id: "l5",
    slug: "unity-hall-ensuite",
    title: "Unity Hall — En-suite Room",
    type: "Hostel",
    campus: "Covenant University",
    address: "Km 10 Idiroko Rd, Ota, Ogun",
    distanceKm: 1.6,
    pricePerMonth: 95000,
    rating: 4.5,
    reviews: 158,
    verified: true,
    beds: 1,
    baths: 1,
    available: "Available from Sep 1",
    amenities: ["Wi-Fi", "24/7 power", "Laundry", "Security", "Water", "Kitchen access"],
    description:
      "Comfortable en-suite room in a purpose-built student hostel with laundry service and reliable power. A short shuttle ride from campus with a lively student community.",
    images: [
      img("photo-1505691938895-1758d7feb511"),
      img("photo-1540518614846-7eded433c457"),
      img("photo-1502672260266-1c1ef2d93688"),
      img("photo-1522771739844-6a9f6d5f14af"),
    ],
    landlord: { name: "Unity Estates", initials: "UE", responseTime: "within 5 hours", verified: true },
  },
  {
    id: "l6",
    slug: "green-court-2bed",
    title: "Green Court — 2-Bed Apartment",
    type: "Apartment",
    campus: "University of Ibadan",
    address: "Bodija, Ibadan, Oyo",
    distanceKm: 2.1,
    pricePerMonth: 175000,
    rating: 4.7,
    reviews: 61,
    verified: true,
    beds: 2,
    baths: 2,
    available: "Available now",
    amenities: ["Wi-Fi", "Air conditioning", "Furnished", "Parking", "Security", "Generator"],
    description:
      "Spacious two-bedroom apartment ideal for sharing with a coursemate to split costs. Two bathrooms, secure parking, and a calm residential neighbourhood a short drive from UI.",
    images: [
      img("photo-1560185007-cde436f6a4d0"),
      img("photo-1554995207-c18c203602cb"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1484154218962-a197022b5858"),
    ],
    landlord: { name: "Mr. Balogun", initials: "MB", responseTime: "within 2 hours", verified: true },
  },
  {
    id: "l7",
    slug: "harmony-lodge-shared",
    title: "Harmony Lodge — Shared Room",
    type: "Shared room",
    campus: "Yaba College of Technology",
    address: "Herbert Macaulay Way, Yaba, Lagos",
    distanceKm: 0.6,
    pricePerMonth: 48000,
    rating: 4.3,
    reviews: 97,
    verified: false,
    beds: 2,
    baths: 1,
    available: "Available now",
    amenities: ["Wi-Fi", "Study desk", "Water", "Security"],
    description:
      "Budget-friendly shared room right by Yabatech. Simple, clean and close to everything — transport, food and lecture halls all within a few minutes' walk.",
    images: [
      img("photo-1493809842364-78817add7ffb"),
      img("photo-1522771739844-6a9f6d5f14af"),
      img("photo-1505691938895-1758d7feb511"),
      img("photo-1540518614846-7eded433c457"),
    ],
    landlord: { name: "Harmony Ltd", initials: "HL", responseTime: "within a day", verified: false },
  },
  {
    id: "l8",
    slug: "palm-suites-studio",
    title: "Palm Suites — Premium Studio",
    type: "Studio",
    campus: "Covenant University",
    address: "Canaanland, Ota, Ogun",
    distanceKm: 0.7,
    pricePerMonth: 160000,
    rating: 4.9,
    reviews: 42,
    verified: true,
    beds: 1,
    baths: 1,
    available: "Available from Aug 15",
    amenities: ["Wi-Fi", "Air conditioning", "Furnished", "24/7 power", "Gym", "Security"],
    description:
      "Premium studio in a modern block with an on-site gym and round-the-clock power. Finished to a high standard for students who want a little more comfort and convenience.",
    images: [
      img("photo-1586023492125-27b2c045efd7"),
      img("photo-1598928506311-c55ded91a20c"),
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1567767292278-a4f21aa2d36e"),
    ],
    landlord: { name: "Palm Group", initials: "PG", responseTime: "within 1 hour", verified: true },
  },
];

export function getListing(slug: string) {
  return listings.find((l) => l.slug === slug);
}

export const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export const roomTypes: RoomType[] = ["Hostel", "Apartment", "Shared room", "Studio"];

export const campuses = [
  "University of Lagos",
  "Covenant University",
  "University of Ibadan",
  "Yaba College of Technology",
];

export type Stat = { value: string; label: string };
export const stats: Stat[] = [
  { value: "12,000+", label: "Students housed" },
  { value: "2,500+", label: "Rooms secured" },
  { value: "1,000+", label: "Services booked" },
  { value: "95%", label: "Satisfaction rate" },
];

export type Service = {
  name: string;
  blurb: string;
  icon: "scissors" | "zap" | "hammer" | "wrench";
};
export const services: Service[] = [
  { name: "Barbers & Stylists", blurb: "Fresh cut before class, near your hall.", icon: "scissors" },
  { name: "Electricians", blurb: "Fast, vetted help for repairs and wiring.", icon: "zap" },
  { name: "Carpenters", blurb: "Fix a desk, bunk or wardrobe in a tap.", icon: "hammer" },
  { name: "Plumbers", blurb: "Leaks and blockages sorted, same day.", icon: "wrench" },
];

export type Step = {
  n: number;
  title: string;
  body: string;
  icon: "search" | "calendar" | "shield";
};
export const steps: Step[] = [
  { n: 1, title: "Search", body: "Pick your university or area to browse verified hostels and apartments nearby.", icon: "search" },
  { n: 2, title: "Book", body: "Choose a room or service, check the details, and book instantly online.", icon: "calendar" },
  { n: 3, title: "Pay securely", body: "Make payments safely through verified channels — no hidden charges.", icon: "shield" },
];

export const features: string[] = [
  "Verified listings & landlords",
  "Real reviews from students",
  "Secure, protected payments",
  "Local services in a tap",
];

export type Review = { name: string; initials: string; meta: string; rating: number; body: string };
export const sampleReviews: Review[] = [
  {
    name: "Amara O.",
    initials: "AO",
    meta: "300L · stayed 8 months",
    rating: 5,
    body: "Exactly as pictured. Power was reliable and the landlord responded fast whenever I had an issue. Would recommend to any fresher.",
  },
  {
    name: "Tunde B.",
    initials: "TB",
    meta: "400L · stayed 1 year",
    rating: 4,
    body: "Great location, walking distance to class. Water could be more consistent but overall a solid place for the price.",
  },
  {
    name: "Zainab K.",
    initials: "ZK",
    meta: "200L · stayed 6 months",
    rating: 5,
    body: "Felt safe the whole time, security is serious here. Booking and payment through StudentCribHub was smooth and stress-free.",
  },
];
