// ─── NON-CALCULATOR PAPER (sec: "A") ────────────────────────────────────────
// New types used below:
//   "order"   – drag/drop or fill 4 blanks in order
//   "multi"   – tick all that apply (array answer)
//   "twonumber" – already exists (quotient + remainder)
//   "table"   – fill missing cells in a table

export const questions = [

  // ── Non-calculator ──────────────────────────────────────────────────────────

  {
    id: "A1",
    sec: "A",
    marks: 1,
    type: "choice",
    text: "Lucy wants to wake up before seven o'clock. What time will Lucy set her alarm clock to?",
    imgSrc: "QB1.png",
    options: ["6:45", "1:00", "5:30", "7:00"],
    answer: "6:45",
    displayAnswer: "6:45",
    hint: "Look for a time that is before 7 o'clock.",
    explanation: "Any time before 7:00 is correct. The first clock shows 6:45, which is before 7 o'clock."
  },

  {
    id: "A2",
    sec: "A",
    marks: 1,
    type: "text",
    text: "Lucy looks at the waiting times for buses. Lucy takes a bus to the station. She takes the bus with the least waiting time. Which bus does Lucy take?",
    answer: "Bus 8",
    displayAnswer: "Bus 8",
    hint: "Look at the buses going to the station. Find the one with the smallest waiting time.",
    explanation: "Buses to station: Bus 4 (20 min), Bus 8 (9 min), Bus 13 (14 min). Bus 8 has the least waiting time of 9 minutes."
  },

  {
    id: "A3",
    sec: "A",
    marks: 1,
    type: "number",
    text: "Lucy compares the costs of rail and bus tickets. Lucy pays £11 for an adult week bus ticket. How much less does Lucy pay for an adult week bus ticket than an adult week rail ticket?",
    imgSrc: "QB3.png",
    answer: 16,
    displayAnswer: "£16",
    hint: "Find the cost of an adult week rail ticket on the chart, then subtract £11.",
    explanation: "Adult week rail ticket costs £27. £27 - £11 = £16 less for the bus ticket."
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION B – Calculator (15 questions, skip Q10)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "B1",
    sec: "B",
    marks: 1,
    type: "choice",
    text: "Lucy wants to wake up before seven o'clock. What time will Lucy set her alarm clock to? Tick the correct answer.",
    imgSrc: "QB1.png",
    options: ["6:45", "1:00", "5:30", "7:00"],
    answer: "6:45",
    displayAnswer: "6:45",
    hint: "Look for a time that is before 7 o'clock.",
    explanation: "Any time before 7:00 is correct. 6:45 is before 7 o'clock."
  },

  {
    id: "B2",
    sec: "B",
    marks: 1,
    type: "text",
    text: "Lucy looks at the waiting times for buses. Lucy takes a bus to the station. She takes the bus with the least waiting time. Which bus does Lucy take?",
    answer: "Bus 8",
    displayAnswer: "Bus 8",
    hint: "Find the bus going to the station with the shortest waiting time.",
    explanation: "Buses to station: Bus 4 (20 min), Bus 8 (9 min), Bus 13 (14 min). Bus 8 has the least waiting time."
  },

  {
    id: "B3",
    sec: "B",
    marks: 1,
    type: "number",
    text: "Lucy compares the costs of rail and bus tickets. Lucy pays £11 for an adult week bus ticket. How much less does Lucy pay for an adult week bus ticket than an adult week rail ticket?",
    imgSrc: "QB3.png",
    answer: 16,
    displayAnswer: "£16",
    hint: "Read the chart for adult week rail ticket cost. Subtract the bus ticket cost.",
    explanation: "Adult week rail ticket = £27. £27 - £11 = £16"
  },

  {
    id: "B4",
    sec: "B",
    marks: 1,
    type: "choice",
    text: "Lucy pays for her travel. She works out how much money is left over. She does this calculation: 154 − 29 ___ 125. What is the missing symbol?",
    options: ["+", "=", "×", "÷"],
    answer: "=",
    displayAnswer: "=",
    hint: "Work out 154 − 29 and see what it equals.",
    explanation: "154 − 29 = 125, so the missing symbol is = (equals)."
  },

  {
    id: "B5",
    sec: "B",
    marks: 1,
    type: "number",
    text: "Lucy sells lamps in the shape of a pyramid. How many corners does the base of the pyramid have?",
    imgSrc: "QB5.png",
    answer: 4,
    displayAnswer: "4",
    hint: "Look at the base of the pyramid. Count the corners.",
    explanation: "A pyramid has a square base. A square has 4 corners."
  },

  {
    id: "B6",
    sec: "B",
    marks: 3,
    type: "number",
    text: "Lucy puts a lamp into a box. The arrow shows how tall the lamp is. The box is 6 cm taller than the lamp. How tall is the box to the nearest division? Use the correct unit.",
    imgSrc: "QB6.png",
    answer: 95,
    displayAnswer: "95 cm",
    hint: "Read where the arrow points on the scale. Add 6 cm to that measurement.",
    explanation: "The lamp measures 89 cm. 89 + 6 = 95 cm."
  },

  {
    id: "B7",
    sec: "B",
    marks: 1,
    type: "choice",
    text: "Lucy sells a table. The top of the table is a hexagon. Which shape is a hexagon? Tick the correct answer.",
    imgSrc: "QB7.png",
    options: ["Circle", "Rectangle", "Hexagon", "Diamond", "Trapezium", "Pentagon"],
    answer: "Hexagon",
    displayAnswer: "Hexagon",
    hint: "A hexagon has 6 sides.",
    explanation: "A hexagon is the shape with 6 equal sides. It's the third shape shown."
  },

  {
    id: "B8",
    sec: "B",
    marks: 2,
    type: "yesno",
    text: "Lucy puts one box on a trolley. The box on the trolley has a weight of 27 kg. The most weight the trolley can take is 50 kg. She has another box with a weight of 19 kg. Can the trolley take the weight of both boxes? Show why you think this.",
    answer: "Yes",
    displayAnswer: "Yes",
    hint: "Add the two box weights together. Compare to the maximum weight of 50 kg.",
    explanation: "27 + 19 = 46 kg. 46 kg is less than 50 kg, so yes, the trolley can take both boxes."
  },

  {
    id: "B9a",
    sec: "B",
    marks: 1,
    type: "number",
    text: "Round 27 to the nearest 10.",
    answer: 30,
    displayAnswer: "30",
    hint: "Is 27 closer to 20 or 30?",
    explanation: "27 is closer to 30 than to 20, so rounded to nearest 10 it is 30."
  },

  {
    id: "B9b",
    sec: "B",
    marks: 1,
    type: "number",
    text: "Use the rounded number to check your answer to question 8.",
    answer: 49,
    displayAnswer: "49 kg or approximately 50 kg",
    hint: "Use 30 instead of 27. Add it to 19.",
    explanation: "30 + 19 = 49 kg. This is close to 50 kg, which confirms the trolley can take both boxes."
  },

  {
    id: "B11",
    sec: "B",
    marks: 3,
    type: "number",
    text: "A customer pays Lucy for 6 coat hooks at 12p each. How much does the customer pay in total? Use the correct symbol for money.",
    answer: "0.72",
    displayAnswer: "£0.72 or 72p",
    hint: "Multiply 6 by 12p.",
    explanation: "6 × 12p = 72p = £0.72"
  },

  {
    id: "B12",
    sec: "B",
    marks: 1,
    type: "number",
    text: "Lucy has information about cupboards for sale. Lucy looks for a grey cupboard with more than 3 drawers. How much will she spend?",
    imgSrc: "QB12.png",
    answer: 112,
    displayAnswer: "£112",
    hint: "Find the grey cupboards. Look for the one with more than 3 drawers.",
    explanation: "The grey cupboard with 4 drawers costs £112."
  },

  {
    id: "B13",
    sec: "B",
    marks: 1,
    type: "choice",
    text: "Lucy looks at a diagram about home deliveries. The first morning home delivery is nearest to the shop. Which morning home delivery is first? Tick the answer on the diagram.",
    imgSrc: "QB13.png",
    options: ["A", "C", "B"],
    answer: "C",
    displayAnswer: "C",
    hint: "Find which morning delivery (empty house symbol) is closest to the shop (filled circle).",
    explanation: "C is the morning home delivery that is nearest to the shop."
  },

  {
    id: "B14",
    sec: "B",
    marks: 1,
    type: "number",
    text: "Lucy counts the furniture deliveries she makes. Lucy needs a bar chart to show the information. Show the number of deliveries of tables on the chart.",
    imgSrc: "QB14a.png",
    answer: 21,
    displayAnswer: "21",
    hint: "Find the number of table deliveries from the data table and draw the bar to that height.",
    explanation: "The table shows 21 deliveries of tables. Draw a bar up to 21 on the chart."
  },

  {
    id: "B15",
    sec: "B",
    marks: 1,
    type: "choice",
    text: "Lucy buys hot food for lunch. She wants to pay less than £5. Which food will Lucy buy? Tick the correct answer.",
    options: ["Sandwich", "Pie", "Curry", "Salad", "Pizza", "Pasta"],
    answer: "Pie",
    displayAnswer: "Pie",
    hint: "Find the hot foods that cost less than £5.",
    explanation: "The hot foods are: Pie (£4) ✓, Curry (£6) ✗, Pizza (£8) ✗. Only Pie is hot AND less than £5."
  }
];

];