// ─── NON-CALCULATOR PAPER (sec: "A") ────────────────────────────────────────
// New types used below:
//   "order"   – drag/drop or fill 4 blanks in order
//   "multi"   – tick all that apply (array answer)
//   "twonumber" – already exists (quotient + remainder)
//   "table"   – fill missing cells in a table

export const questions = [

  // ── Non-calculator ──────────────────────────────────────────────────────────

  {
    id: "A1", sec: "A", marks: 1, type: "number",
    text: "Work out 48 × 19 =",
    hint: "Break it down: 48 × 20 = 960, then subtract 48.",
    answer: 912, displayAnswer: "912",
    explanation: "48 × 19 = 48 × 20 − 48 = 960 − 48 = 912",
  },

  {
    id: "A2", sec: "A", marks: 1, type: "order",
    // type "order": render 4 input boxes; accept any correct ordering string \n\n12\u00a0\u00a0\u00a0\u00a024\u00a0\u00a0\u00a0\u00a036\n
    text: "Write these amounts in order starting with the largest amount.\n\n330 ml\u00a0\u00a0\u00a0\u00a01 litre\u00a0\u00a0\u00a0\u00a0500 ml\u00a0\u00a0\u00a0\u00a0250 ml",
    hint: "Convert 1 litre to ml first.",
    answer: ["1 litre", "500 ml", "330 ml", "250 ml"],
    displayAnswer: "1 litre, 500 ml, 330 ml, 250 ml",
    explanation: "1 litre = 1000 ml. Order: 1000 ml, 500 ml, 330 ml, 250 ml.",
  },

  {
    id: "A3", sec: "A", marks: 1, type: "choice",
    image: "A3 – Weighing scales A B C D", imgSrc: "images/Q3.png",
    text: "Which one of the following is the best to measure out 300 g of flour?\n\nTick one.",
    hint: "You need scales that measure in grams accurately.",
    options: ["A", "B", "C", "D"],
    answer: "B", displayAnswer: "B",
    explanation: "B is a kitchen/cooking scale — best for accurately measuring 300 g of flour.",
  },

  {
    id: "A4", sec: "A", marks: 1, type: "twonumber",
    text: "896 ÷ 5 =",
    hint: "How many times does 5 go into 896? What is left over?",
    labels: ["answer", "remainder"],
    answer: [179, 1], displayAnswer: "179 remainder 1",
    explanation: "896 ÷ 5 = 179 remainder 1  (5 × 179 = 895; 896 − 895 = 1)",
  },

  {
    id: "A5", sec: "A", marks: 1, type: "number",
    text: "What is the next number in this sequence?\n\n3.4\u00a0\u00a0\u00a0\u00a05.1\u00a0\u00a0\u00a0\u00a0 6.8\u00a0\u00a0\u00a0\u00a0     ___",
    hint: "What is added each time?",
    answer: 8.5, displayAnswer: "8.5",
    explanation: "+1.7 each time: 3.4 → 5.1 → 6.8 → 8.5",
  },

  {
    id: "A6", sec: "A", marks: 1, type: "number",
    text: "What is £567.27 rounded to the nearest pound?",
    hint: "Look at the pence: 27p is less than 50p, so round down.",
    answer: 567, displayAnswer: "£567",
    explanation: "27p < 50p, so round down: £567.",
  },

  {
    id: "A7", sec: "A", marks: 1, type: "text",
    image: "A7 – Circle divided into 5 equal segments, 1 shaded", imgSrc: "images/Q7.png",
    text: "What fraction of this shape is shaded?",
    hint: "Count the total sections and the shaded sections.",
    answer: "1/5", displayAnswer: "1/5",
    check: v => v.trim().replace(/\s/g, "") === "1/5",
    explanation: "The circle has 5 equal parts; 1 is shaded → 1/5.",
  },

  {
    id: "A8", sec: "A", marks: 1, type: "choice",
    pretext:"A woman sees three job advertisements.\n\nShe wants to apply for the job nearest to where she lives.",
    customContent: "jobs",
    text: "Which job will she apply for?",
    hint: "Find the smallest distance.",
    options: ["Job A", "Job B", "Job C"],
    answer: "Job C", displayAnswer: "Job C",
    explanation: "148 km < 152 km < 154 km. Nearest = Job C.",
  },

  {
    id: "A9", sec: "A", marks: 1, type: "twotext",
    // type "multi": two free-text boxes (or a multi-select from month names)
    image: "A9 – Bar chart: factory workers Jan–Jun", imgSrc: "images/Q9.png",
    text: "The bar chart shows the number of workers employed in a factory from January to June.\n\nIn which two months did the factory employ the same number of workers?",
    hint: "Look for two bars that reach the same height.",
    answer: ["January", "April"],
    displayAnswer: "January and April",
    explanation: "January and April both show approximately 430 workers — the same bar height.",
  },

  {
    id: "A10", sec: "A", marks: 1, type: "table",
    // type "table": render partial table; user fills in the two missing cells
    image: "A10 – Tally / raw data", imgSrc: "images/Q10.png",
    preText: "At a workplace induction people were asked how they travelled to work that morning.\n\nThese are the results:",
    text: "Complete the frequency table.\n\nbus = 6, car = 5, cycle = 5 (given). Fill in walk and train.",
    hint: "Count the tally marks for walk and train in the raw data.",
    tableData: {
      headers: ["Travel to work", "Frequency"],
      rows: [
        { label: "bus",   value: 6,    given: true  },
        { label: "car",   value: 5,    given: true  },
        { label: "cycle", value: 5,    given: true  },
        { label: "walk",  value: null, given: false },
        { label: "train", value: null, given: false },
      ],
    },
    answer: { walk: 6, train: 3 },
    displayAnswer: "walk = 6, train = 3",
    explanation: "Counting from the raw data: walk appears 6 times, train appears 3 times. Total = 6+5+5+6+3 = 25 ✓",
  },

  // ── Calculator paper (sec: "B") ─────────────────────────────────────────────
  {
    id: "B1", sec: "B", marks: 1, type: "number",
    text: "242 + 361 + 295 =",
    hint: "Add the hundreds, tens and units separately if needed.",
    answer: 898, displayAnswer: "898",
    explanation: "242 + 361 = 603; 603 + 295 = 898",
  },

  {
    id: "B2", sec: "B", marks: 1, type: "multi",
    image: "B2 – Letters A C E G", imgSrc: "images/B-Q2.png",
    text: "Tick all the letters that have a line of symmetry.",
    hint: "Fold each letter in half — does one side mirror the other?",
    options: ["A", "C", "E", "G"],
    answer: ["A", "C","E"],   // A C = vertical symmetry; E = horizontal symmetry;  G do not
    displayAnswer: "A, C and E",
    explanation: "A and C have a vertical line of symmetry; E has a horizontal line of symmetry.",
  },

  {
    id: "B3", sec: "B", marks: 1, type: "number",
    text: "What is the next number in this sequence?\n\n39\u00a0\u00a0\u00a0\u00a0     52 \u00a0\u00a0\u00a0\u00a0      65 \u00a0\u00a0\u00a0\u00a0      78 \u00a0\u00a0\u00a0\u00a0      ___",
    hint: "What is added each time?",
    answer: 91, displayAnswer: "91",
    explanation: "+13 each time: 78 + 13 = 91",
  },

  // Q4 is split into four sub-questions
  {
    id: "B4a", sec: "B", marks: 2, type: "number",
   
    preText: "A man sees a job advert in a newspaper.\n\nHe decides to apply for the job.\n\nHe wants to work out how many hours each week he will have to work.",
    customContent:"jobAdvert",
    text: "What number of hours will he need to work each week?",
    hint: "How many hours is 6am to 2pm? Multiply by the number of days.",
    answer: 40, displayAnswer: "40 hours",
    suffix: "hours",
    explanation: "6am to 2pm = 8 hours per day × 5 days = 40 hours per week.",
  },

  {
    id: "B4b", sec: "B", marks: 3, type: "number",
    preText: " The man uses this table to find out how much he should be paid each week before any deductions are made.\n\nThe man is 17 years old.",
    image: "B4 – Job advert & wage table", imgSrc: "images/B-Q4.png",
    text: "What will the man be paid each week? Give units with your answer.",
    hint: "Find the correct wage band for age 17, then multiply by hours.",
    answer: 211.20, displayAnswer: "£211.20",
    check: v => Math.abs(parseFloat(v.replace(/^£/, "")) - 211.20) < 0.01,
    explanation: "Age 17 = Under 18 rate: £5.28 × 40 hours = £211.20",
  },

  {
    id: "B4c", sec: "B", marks: 1, type: "text",
    text: "Give a reason for the National Minimum Wage you used.",
    hint: "State the man's age and the relevant band.",
    answer: "under18",
    check: v => v.toLowerCase().includes("17") || v.toLowerCase().includes("under 18"),
    displayAnswer: "He is 17 years old, which is under 18.",
    explanation: "The man is 17 so the 'Under 18 years' rate of £5.28 per hour applies.",
  },

  {
    id: "B4d", sec: "B", marks: 2, type: "number",
    text: "The man wants to work out approximately how much the pay would be for one month.\nHe uses four weeks for one month.\n\nWhat would the approximate pay be?\n\nShow your working.",
    hint: "Round the weekly pay first, then multiply by 4.",
    answer: 844.80,   // exact; accept rounded values
    check: v => {
      const n = parseFloat(v.replace(/^£/, ""));
      // Accept exact (£211.20×4=£844.80) or rounded approximations
      return n >= 800 && n <= 900;
    },
    displayAnswer: "≈ £844.80",
    explanation: "£211.20 × 4 = £844.80. A reasonable approximation: £210 × 4 = £840.",
  },

  {
    id: "B5", sec: "B", marks: 3, type: "calendar",
    // type "calendar": display an August calendar; user marks two dates with notes
    image: "B5 – August calendar", imgSrc: "images/B-Q5.png",
    preText: "The man applies for the job. He checks the advert for the closing date for the job application and when the interviews will be held.\n\nHe makes note of this information.",
    customContent:"deadline",
    text: "Write on the calendar the information he needs to note.",
    hint: "Mark both the closing date (12 Aug) and the interview date/times (14 Aug, 10am–3pm).",
    answer: {
      "12": "Closing date for job application",
      "14": "Interview 10am–3pm",
    },
    displayAnswer: "12 Aug: closing date noted; 14 Aug: interview 10am–3pm noted",
    explanation: "Award marks for correctly identifying and labelling both dates with the relevant information.",
  },

  {
    id: "B6a", sec: "B", marks: 3, type: "number",
    // type "shopping": display image grid of items; user picks one from each category
    image: "B6 – Clothes grid A–I", imgSrc: "images/B-Q6.png",
    preText: "The man gets an interview for the job.\n He wants to look smart for his interview.\n\nHe has £60 to spend on clothes.\n He needs to buy a pair of trousers,a shirt and a jacket.\n\nHe looks online and chooses from these items. ",
    text: "Make a list of the items he needs to buy.\n\nWhat will he pay for the items he chose?",
    hint: "Choose one from each group. The total must be £60 or less.",
    // Any valid combination ≤ £60 is accepted. Cheapest = A+E+G = £47.08
    answer: null,   // open — validate in check()
    check: (trouser, shirt, jacket) => {
      const prices = { A:15.40,B:17.45,C:31.50,D:24.95,E:11.69,F:14.95,G:19.99,H:39.99,I:24.99 };
      const valid = { trouser:["A","B","C"], shirt:["D","E","F"], jacket:["G","H","I"] };
      if (!valid.trouser.includes(trouser) || !valid.shirt.includes(shirt) || !valid.jacket.includes(jacket)) return false;
      return prices[trouser] + prices[shirt] + prices[jacket] <= 60;
    },
    displayAnswer: "Any valid combination ≤ £60, e.g. A + E + G = £47.08",
    explanation: "Cheapest possible: A(£15.40) + E(£11.69) + G(£19.99) = £47.08. Multiple valid answers.",
  },

  {
    id: "B6b", sec: "B", marks: 1, type: "number",
    text: "He wants to spend the money he has left on a haircut. \n\nWhat will he have left to spend on a haircut?\n\nShow your working.",
    hint: "Subtract your total from £60.",
    answer: null,  // depends on C6a; validate as 60 minus their total
    check: (leftover, total) => Math.abs(leftover + total - 60) < 0.01,
    displayAnswer: "£60 − their total, e.g. £60 − £47.08 = £12.92",
    explanation: "£60 minus the amount paid in C6a.",
  },

  {
    id: "B6c", sec: "B", marks: 1, type: "text",
    text: "Use approximation to check your answer.\n\nWrite your check here.",
    hint: "Round each item price to the nearest pound, add them, subtract from £60.",
    answer: null,  // free text — any reasonable approximation
    displayAnswer: "e.g. £15 + £12 + £20 = £47 → £60 − £47 = £13 ✓",
    explanation: "Award the mark for a valid approximate check consistent with their answer.",
  },

  {
    id: "B7a", sec: "B", marks: 1, type: "choice",
    image: "B7 – Map with compass N arrow; home is east, supermarket is west", imgSrc: "images/B-Q7.png",
    text: "In which direction is the supermarket from the man's home?",
    hint: "N is shown on the map. The supermarket is to the left of home.",
    options: ["North", "South", "East", "West"],
    answer: "West", displayAnswer: "West",
    explanation: "The arrow on the map points left (west) from the man's home to the supermarket.",
  },

  {
    id: "B7b", sec: "B", marks: 1, type: "choice",
    text: "The website shows four routes. He wants the shortest.\n\nRoute A: 1.5 miles \nRoute B: 1.3 miles   \nRoute B: 1.7 miles  \nRoute D: 1.6 miles\n\nTick the route the man will take.",
    hint: "Find the smallest distance.",
    options: ["Route A", "Route B", "Route C", "Route D"],
    answer: "Route B", displayAnswer: "Route B",
    explanation: "1.3 miles is the shortest route.",
  },

  {
    id: "B8", sec: "B", marks: 2, type: "yesno",
    image: "B8 – Phone showing 13:50", imgSrc: "images/B-Q8.png",
    text: "The man's interview is at 2:15 pm.\n\nWhen he arrives at the supermarket, his phone shows 13:50.\n\nIs he on time for his interview?\n\nGive a reason for your answer. Use the times to help you explain.",
    hint: "Convert 2:15 pm to 24-hour time, then compare.",
    answer: "Yes", displayAnswer: "Yes",
    explanation: "2:15 pm = 14:15. His phone shows 13:50, which is 25 minutes before 14:15. He arrives early.",
  },

  {
    id: "B9a", sec: "B", marks: 3, type: "table",
    // type "table": render 7-row table Mon–Sun; user ticks correct rows
    preText: "Stockroom temperature must be between 10°C and 15°C.\n\nTemperatures recorded:\nMonday 12.5°C | Tuesday 13.6°C | Wednesday 14.8°C | Thursday 15.3°C | Friday 14.4°C | Saturday 10.5°C | Sunday 9°C",
    text: "Complete the table starting with Monday. Tick each day to show if the temperature was between 10°C and 15°C.",
    hint: "Remember the range is 10°C ≤ temp ≤ 15°C.",
    tableData: {
      headers: ["Day", "Temperature °C", "Between 10°C and 15°C ✓"],
      rows: [
        { label: "Monday",    value: "12.5°C", tick: true  },
        { label: "Tuesday",   value: "13.6°C", tick: true  },
        { label: "Wednesday", value: "14.8°C", tick: false },
        { label: "Thursday",  value: "15.3°C", tick: false },
        { label: "Friday",    value: "14.4°C", tick: true  },
        { label: "Saturday",  value: "10.5°C", tick: true  },
        { label: "Sunday",    value: "9°C",    tick: false },
      ],
    },
    answer: { ticked: ["Monday","Tuesday","Friday","Saturday"] },
    displayAnswer: "Ticked: Monday, Tuesday, Friday, Saturday",
    explanation: "14.8°C (Wed) and 15.3°C (Thu) exceed 15°C. 9°C (Sun) is below 10°C. All others are within range.",
  },

  {
    id: "B9b", sec: "B", marks: 2, type: "yesno",
    image: "C9b – Thermometer showing ~15°C", imgSrc: "images/B-Q9.png",
    text: "The temperature in the supermarket should be about 18°C.\n\nThis thermometer shows the temperature in the supermarket today.\n\nIs the temperature about right?\n\nGive a reason for your answer.",
    hint: "Read the thermometer value and compare it to 18°C.",
    answer: "No", displayAnswer: "No",
    explanation: "The thermometer reads approximately 15°C, which is not about 18°C. The temperature is too low.",
  },

  {
    id: "B10a", sec: "B", marks: 1, type: "multi",
    image: "C10 – Boxes A(18kg) B(20kg) C(13kg) D(900g)", imgSrc: "images/B-Q10.png",
    preText: "Maximum weight for lifting boxes for women is up to 16 kg.\nMaximum weight for lifting boxes for men is up to 25 kg.",
    text: "Which of these boxes is a woman allowed to lift? Tick the boxes.\n\nA: 18 kg   B: 20 kg   C: 13 kg   D: 900 g",
    hint: "Women can lift up to 16 kg. Convert 900 g to kg.",
    options: ["A (18 kg)", "B (20 kg)", "C (13 kg)", "D (900 g)"],
    answer: ["C (13 kg)", "D (900 g)"],
    displayAnswer: "C and D",
    explanation: "13 kg ≤ 16 kg ✓ and 0.9 kg ≤ 16 kg ✓. 18 kg and 20 kg both exceed 16 kg.",
  },

  {
    id: "B10b", sec: "B", marks: 1, type: "multi",
    image: "C10b – Boxes A(22kg) B(32kg) C(23kg) D(790g)", imgSrc: "images/B-Q10b.png",
    text: "Which of these boxes is a man allowed to lift? Tick the boxes.\n\nA: 22 kg   B: 32 kg   C: 23 kg   D: 790 g",
    hint: "Men can lift up to 25 kg.",
    options: ["A (22 kg)", "B (32 kg)", "C (23 kg)", "D (790 g)"],
    answer: ["A (22 kg)", "C (23 kg)", "D (790 g)"],
    displayAnswer: "A, C and D",
    explanation: "22 kg, 23 kg and 0.79 kg are all ≤ 25 kg ✓. 32 kg exceeds the 25 kg limit.",
  },
];