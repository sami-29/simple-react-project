export const students = [
  {
    id: "1",
    name: "John Doe",
    username: "john.doe@example.com",
    birthday: "1990-05-22",
    profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
    certifications: {
      resume: true,
      linkedin: true,
      github: true,
      mockInterview: true,
    },
    codeWarsScore: 700,
    percentages: { math: 95, science: 88 },
    notes: [{ commenter: "Instructor", comment: "Great progress!" }],
    cohort: { name: "Winter", year: 2026 },
  },
  {
    id: "2",
    name: "Jane Smith",
    username: "jane.smith@example.com",
    birthday: "1985-11-15",
    profilePhoto: "https://randomuser.me/api/portraits/women/1.jpg",
    certifications: {
      resume: false,
      linkedin: true,
      github: false,
      mockInterview: true,
    },
    codeWarsScore: 500,
    percentages: { math: 70, science: 60 },
    notes: [
      { commenter: "Instructor", comment: "Needs improvement in coding." },
    ],
    cohort: { name: "Summer", year: 2025 },
  },
  ...Array.from({ length: 8 }, (_, index) => ({
    id: (index + 3).toString(),
    name: `Student ${index + 3}`,
    username: `student${index + 3}@example.com`,
    birthday: "1995-04-12",
    profilePhoto: `https://randomuser.me/api/portraits/men/${index + 2}.jpg`,
    certifications: {
      resume: index % 2 === 0,
      linkedin: index % 3 !== 0,
      github: index % 4 !== 0,
      mockInterview: index % 5 !== 0,
    },
    codeWarsScore: 600 + index * 10,
    percentages: { math: 80 - index, science: 85 - index },
    notes: [
      { commenter: "Instructor", comment: `Comment for student ${index + 3}` },
    ],
    cohort: {
      name: index % 2 === 0 ? "Spring" : "Fall",
      year: 2025 + Math.floor(index / 4),
    },
  })),
];

export const cohorts = [
  { name: "Winter", year: 2026 },
  { name: "Summer", year: 2025 },
  { name: "Spring", year: 2024 },
  { name: "Fall", year: 2023 },
  { name: "Winter", year: 2022 },
  { name: "Summer", year: 2021 },
  { name: "Spring", year: 2020 },
  { name: "Fall", year: 2019 },
  { name: "Winter", year: 2018 },
  { name: "Summer", year: 2017 },
];
