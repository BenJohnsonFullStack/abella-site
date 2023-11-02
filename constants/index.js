import {
  sherri,
  maggie,
  kaitlyn,
  watermelon,
  watermelonLarge,
  sunset,
  sunsetLarge,
} from "@/assets";

const buttonText = {
  schedule: "Schedule Today",
  action: "Learn More",
  submit: "Submit",
};

const highlights = [
  {
    id: 1,
    smallImg: watermelon,
    largeImg: watermelonLarge,
    link: "#sign-up",
    title: "Who We Are.",
    description:
      "Focusing on areas such as nutrition, exercise, stress management, and overall self-care, our qualified coaches aim to empower individuals to take charge of their health and make sustainable choices that align with their goals. We provide personalized strategies tailored to each client's unique needs, helping them cultivate healthier habits, boost energy levels, manage weight, reduce stress, and improve their overall quality of life.",
  },
  {
    id: 2,
    smallImg: sunset,
    largeImg: sunsetLarge,
    link: "#sign-up",
    title: "The Inspire Program.",
    description:
      "Motivation and inspiration drives us to be successful and creative. Here at Abella we thrive on your success. That's why we created Inspire Points to help motivate and inspire you to stay engaged with your health coach and indivudualized wellness program. Your participation will earn points that provide you with free benefits such as health coaching sessions, yoga, fitness, or energy healing sessions, Abella gear, meal plans, and much more.",
  },
];

const inputFields = [
  {
    id: "first_name",
    label: "First Name",
    name: "first_name",
    placeholder: "Enter your first name",
    type: "text",
  },
  {
    id: "last_name",
    label: "Last Name",
    name: "last_name",
    placeholder: "Enter your last name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    id: "phone",
    label: "Phone Number",
    name: "phone",
    placeholder: "Enter your phone number",
    type: "text",
  },
  {
    id: "street_address",
    label: "Street Address",
    name: "street_address",
    placeholder: "Enter your street address",
    type: "text",
  },
  {
    id: "city",
    label: "City",
    name: "city",
    placeholder: "Enter your city",
    type: "text",
  },
  {
    id: "state",
    label: "State",
    name: "state",
    options: [
      {
        text: "Select Your State",
        value: "",
      },
      {
        text: "AL",
        value: "AL",
      },
      {
        text: "AK",
        value: "AK",
      },
      {
        text: "AR",
        value: "AR",
      },
      {
        text: "AZ",
        value: "AZ",
      },
      {
        text: "CA",
        value: "CA",
      },
      {
        text: "CO",
        value: "CO",
      },
      {
        text: "CT",
        value: "CT",
      },
      {
        text: "DC",
        value: "DC",
      },
      {
        text: "DE",
        value: "DE",
      },
      {
        text: "FL",
        value: "FL",
      },
      {
        text: "GA",
        value: "GA",
      },
      {
        text: "HI",
        value: "HI",
      },
      {
        text: "IA",
        value: "IA",
      },
      {
        text: "ID",
        value: "ID",
      },
      {
        text: "IL",
        value: "IL",
      },
      {
        text: "IN",
        value: "IN",
      },
      {
        text: "KS",
        value: "KS",
      },
      {
        text: "KY",
        value: "KY",
      },
      {
        text: "LA",
        value: "LA",
      },
      {
        text: "MA",
        value: "MA",
      },
      {
        text: "MD",
        value: "MD",
      },
      {
        text: "ME",
        value: "ME",
      },
      {
        text: "MI",
        value: "MI",
      },
      {
        text: "MN",
        value: "MN",
      },
      {
        text: "MO",
        value: "MO",
      },
      {
        text: "MS",
        value: "MS",
      },
      {
        text: "MT",
        value: "MT",
      },
      {
        text: "NC",
        value: "NC",
      },
      {
        text: "ND",
        value: "ND",
      },
      {
        text: "NE",
        value: "NE",
      },
      {
        text: "NH",
        value: "NH",
      },
      {
        text: "NJ",
        value: "NJ",
      },
      {
        text: "NM",
        value: "NM",
      },
      {
        text: "NV",
        value: "NV",
      },
      {
        text: "NY",
        value: "NY",
      },
      {
        text: "OH",
        value: "OH",
      },
      {
        text: "OK",
        value: "OK",
      },
      {
        text: "OR",
        value: "OR",
      },
      {
        text: "PA",
        value: "PA",
      },
      {
        text: "RI",
        value: "RI",
      },
      {
        text: "SC",
        value: "SC",
      },
      {
        text: "SD",
        value: "SD",
      },
      {
        text: "TN",
        value: "TN",
      },
      {
        text: "TX",
        value: "TX",
      },
      {
        text: "UT",
        value: "UT",
      },
      {
        text: "VT",
        value: "VT",
      },
      {
        text: "VA",
        value: "VA",
      },
      {
        text: "WA",
        value: "WA",
      },
      {
        text: "WI",
        value: "WI",
      },
      {
        text: "WV",
        value: "WV",
      },
      {
        text: "WY",
        value: "WY",
      },
    ],
  },
  {
    id: "zip_code",
    label: "Zip Code",
    name: "zip_code",
    placeholder: "Enter your zip code",
    type: "text",
  },
  {
    id: "date_of_birth",
    label: "Date of Birth",
    name: "date_of_birth",
    placeholder: "MM-DD-YYYY",
    type: "text",
  },
];

const navLinks = [
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "our-team",
    title: "Our Team",
  },
  {
    id: "sign-up",
    title: "Sign Up",
  },
];

const programs = [
  {
    id: 1,
    title: "Eat Clean",
    description: "5-Day Menu Plan",
  },
  {
    id: 2,
    title: "Calibrate",
    description: "7-Day Challenge",
  },
  {
    id: 3,
    title: "Reset",
    description: "30-Day Program",
  },
  {
    id: 4,
    title: "Nourish",
    description: "3-Month Program",
  },
  {
    id: 5,
    title: "Better Life",
    description: "6-Month Program",
  },
];

const team = [
  {
    id: 1,
    image: sherri,
    name: "Sherri Johnston",
    role: "President",
    credentials: "MSN, RN, Certified CCP, Health Coach",
    description:
      "I'm a Registered Nurse certified in Chronic Disease Management, Health Coaching, and Yoga. I have dedicated my professional life to serving and empowering others to adopt healthier lifestyle behaviors, manage chronic conditions, and promote self-efficacy.",
  },
  {
    id: 2,
    image: maggie,
    name: "Maggie Johnson",
    role: "Health Coach, Reiki Master",
    credentials:
      "Yoga Alliance Certified, IIN Health Coach, Certified Tantric Reiki Master Healer",
    description:
      "I'm a certified Integrative Health and Wellness Coach, Yoga, Instructor, and Reiki Practitioner. My passion lies in unlocking the body's natural healing process through sustainable lifestyle changes and mental health awareness.",
  },
  {
    id: 3,
    image: kaitlyn,
    name: "Kaitlyn Dillard",
    role: "Health Coach",
    credentials: "MSN, RN, IIN Health Coach",
    description:
      "I am a Registered Nurse, Integrative Health Coach, and Yoga Instructor with primary experience in maternal and postpartum health and chronic disease management. I have seen firsthand how improving your health can improve all other areas of your life, and I can't wait to meet you and join you on your journey of hope health, and happiness.",
  },
];

export { buttonText, highlights, inputFields, navLinks, programs, team };
