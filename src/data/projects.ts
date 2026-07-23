import memTomato from "@/assets/mem-tomato.jpg";
import memBook from "@/assets/mem-book.jpg";
import communityLearning from "@/assets/community-learning.png";

export interface Project {
  slug: string;
  title: string;
  tag: string;
  desc: string;
  fullContent: string;
  accent: string;
  image: string;
  highlights?: string[];
}

export const projectsData: Project[] = [
  {
    slug: "tomato-disease-detection",
    title: "Tomato Disease Detection",
    tag: "Research",
    desc: "টমেটো পাতার রোগ চিহ্নিতকরণে deep learning মডেল — কৃষকের জন্য সহজ mobile-friendly tool।",
    fullContent:
      "টমেটো পাতার ছবি বিশ্লেষণ করে রোগ শনাক্ত করার জন্য এই Deep Learning projectটি তৈরি করা হয়েছে। মডেলটি Early Blight, Late Blight, Leaf Moldসহ বিভিন্ন রোগ চিহ্নিত করতে পারে। ভবিষ্যতে এটিকে mobile-friendly tool হিসেবে তৈরি করার পরিকল্পনা রয়েছে, যাতে কৃষকেরা সহজেই পাতার ছবি তুলে সম্ভাব্য রোগ এবং প্রাথমিক করণীয় জানতে পারেন।",
    accent: "from-rose to-peach",
    image: memTomato,
    highlights: [
      "Deep Learning (Computer Vision Model)",
      "Early Blight, Late Blight & Leaf Mold detection",
      "Mobile-friendly tool roadmap for farmers",
    ],
  },
  {
    slug: "little-world-journal",
    title: "Little World Journal",
    tag: "Personal",
    desc: "প্রতিদিনের ছোট মুহূর্ত, রেসিপি আর ভাবনা — একটা ডিজিটাল ডায়েরি।",
    fullContent:
      "Little World Journal হলো আমার প্রতিদিনের ছোট ছোট মুহূর্ত, প্রিয় রেসিপি, ব্যক্তিগত ভাবনা ও স্মৃতি সংরক্ষণের একটি ডিজিটাল জায়গা। সাধারণ diary-র মতো হলেও ছবি, category এবং সুন্দরভাবে সাজানো লেখার কারণে পুরোনো মুহূর্তগুলো সহজেই আবার খুঁজে পাওয়া যায়। এটি আমার শেখা ও সৃজনশীলতা প্রকাশের একটি ব্যক্তিগত project।",
    accent: "from-peach to-gold",
    image: memBook,
    highlights: [
      "Digital Diary & Memories",
      "Categorized thoughts, recipes & moments",
      "Creative self-expression platform",
    ],
  },
  {
    slug: "community-learning-circle",
    title: "Community Learning Circle",
    tag: "Future Initiative",
    desc: "স্কুল-পড়ুয়া মেয়েদের জন্য সপ্তাহান্তে বিজ্ঞান ও ইংরেজি সেশন।",
    fullContent:
      "Community Learning Circle-এর উদ্দেশ্য হলো স্কুলপড়ুয়া মেয়েদের বিজ্ঞান, ইংরেজি এবং প্রযুক্তি শেখার প্রতি আগ্রহী করে তোলা। সপ্তাহান্তের ছোট ছোট session-এ সহজ উদাহরণ, গল্প ও interactive activity-এর মাধ্যমে বিভিন্ন বিষয় বোঝানো হয়। ভবিষ্যতে আরও শিক্ষার্থী ও volunteer যুক্ত করে উদ্যোগটি বড় করার ইচ্ছা রয়েছে।",
    accent: "from-gold to-rose",
    image: communityLearning,
    highlights: [
      "Weekend STEM & English sessions",
      "Interactive stories & activities for school girls",
      "Future community expansion initiative",
    ],
  },
];
