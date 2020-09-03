const subjects = ["Numerical Methods"]; //List of subjects
const emotes = [":bar_chart: "]; //List of emotes
const teachers = ["SG"]; //List of teachers

const info = {
  "routine": [{
      "_emotes": [emotes[0], ":bar_chart: ", ":control_knobs: ", ":control_knobs: ", "", ":construction_site: ", ":construction_site: ", ":bar_chart: ", "END"],
      "_periods": [subjects[0], "Numerical Methods", "Instrumentation I", "Instrumentation I", "B", "Applied Math", "Applied Math", "Numerical Methods", "END"],
      "_teachers": [teachers[0], "SG", "MB", "MB", "", "JG", "SG", "JRS", "END"],
      "_timing": [
        [
          [10, 15],
          [11, 5]
        ],
        [
          [11, 5],
          [11, 55]
        ],
        [
          [11, 55],
          [12, 45]
        ],
        [
          [12, 45],
          [13, 35]
        ],
        [
          [13, 35],
          [14, 25]
        ],
        [
          [14, 25],
          [15, 15]
        ],
        [
          [15, 15],
          [16, 5]
        ],
        [
          [16, 5],
          [16, 55]
        ]
      ]
    },
    {
      "_emotes": [":robot:", ":robot:", ":bar_chart:", ":bar_chart: ", "", ":construction_site: ", ":cd: ", ":cd: ", ":cd:", "END"],
      "_periods": ["Microprocessor", "Microprocessor", "Numerical Methods", "Numerical Methods", "B", "Applied Math", "Data Structure and Algorithm", "Data Structure and Algorithm", "Data Structure and Algorithm", "END"],
      "_teachers": ["DSB", "DSB", "BDM", "BDM", "", "SKM", "LAB", "LAB", "LAB", "END"],
      "_timing": [
        [[10, 15],[11, 5]], [[11, 5], [11, 55]], [[11, 55], [12, 45]], [[12, 45], [13, 35]], [[13, 35], [14, 25]], [[14, 25], [15, 15]],
        [[15, 15], [16, 5]], [[16, 5],[16, 55]]
      ]
    },
    {
      "_emotes": [":cd:", ":cd:", ":calendar_spiral:", ":calendar_spiral:", "", "END"],
      "_periods": ["Data Structure and Algorithm", "Data Structure and Algorithm", "Discrete Structure", "Discrete Structure", "B", "END"],
      "_teachers": ["BS", "BS", "SPP", "SPP", "", "END"],
      "_timing": [
        [[10, 15], [11, 5]], [[11, 5], [11, 55]], [[11, 55], [12, 45]], [[12, 45],[13, 35]],
        [[13, 35], [14, 25]], [[14, 25], [15, 15]], [[15, 15], [16, 5]], [[16, 5], [16, 55]]
      ]
    },
    {
      "_emotes": [":control_knobs:", ":control_knobs:", ":satellite_orbital:", ":satellite_orbital:", "", ":robot:", ":robot:", ":robot:", "END"],
      "_periods": ["Instrumentation I", "Instrumentation I", "Electric Machine", "Electric Machine", "B", "Microprocessor", "Microprocessor ", "Microprocessor ", "END"],
      "_teachers": ["MB", "MB", "KBT", "KBT", "", "LAB", "LAB", "LAB", "END"],
      "_timing": [
        [
          [10, 15],
          [11, 5]
        ],
        [
          [11, 5],
          [11, 55]
        ],
        [
          [11, 55],
          [12, 45]
        ],
        [
          [12, 45],
          [13, 35]
        ],
        [
          [13, 35],
          [14, 25]
        ],
        [
          [14, 25],
          [15, 15]
        ],
        [
          [15, 15],
          [16, 5]
        ],
        [
          [16, 5],
          [16, 55]
        ]
      ]
    },
    {
      "_emotes": [":satellite_orbital:", ":satellite_orbital:", ":calendar_spiral:", "", ":cd:", ":satellite_orbital:", ":satellite_orbital:", "END"],
      "_periods": ["Electric Machine", "Electric Machine", "Discrete Structure", "B", "Data Structure and Algorithm ", "Electric Machine / :control_knobs: Instrumentation I", "Electric Machine / :control_knobs: Instrumentation I", "END"],
      "_teachers": ["KBT", "KBT", "SPP", "", "BS", "LAB", "LAB", "END"],
      "_timing": [
        [
          [10, 15],
          [11, 5]
        ],
        [
          [11, 5],
          [11, 55]
        ],
        [
          [11, 55],
          [12, 45]
        ],
        [
          [12, 45],
          [13, 35]
        ],
        [
          [13, 35],
          [14, 25]
        ],
        [
          [14, 25],
          [15, 15]
        ],
        [
          [15, 15],
          [16, 5]
        ],
        [
          [16, 5],
          [16, 55]
        ]
      ]
    },
    {
      "_emotes": ["", ":robot:", ":robot:", "", ":construction_site:", ":bar_chart:", ":bar_chart:", "END"],
      "_periods": [" ", "Microprocessor", "Microprocessor", "B", "Applied Math", "Numerical Methods", "Numerical Methods", "END"],
      "_teachers": ["", "DSB", "DSB", "", "SG", "LAB", "LAB", "END"],
      "_timing": [
        [
          [10, 15],
          [11, 5]
        ],
        [
          [11, 5],
          [11, 55]
        ],
        [
          [11, 55],
          [12, 45]
        ],
        [
          [12, 45],
          [13, 35]
        ],
        [
          [13, 35],
          [14, 25]
        ],
        [
          [14, 25],
          [15, 15]
        ],
        [
          [15, 15],
          [16, 5]
        ],
        [
        [16, 5],
        [16, 55]
        ]
      ]
    }
  ],
  "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "Timing": [
    [
      [10, 15],
      [11, 5]
    ],
    [
      [11, 5],
      [11, 55]
    ],
    [
      [11, 55],
      [12, 45]
    ],
    [
      [12, 45],
      [13, 35]
    ],
    [
      [13, 35],
      [14, 25]
    ],
    [
      [14, 25],
      [15, 15]
    ],
    [
      [15, 15],
      [16, 5]
    ],
    [
    [16, 5],
    [16, 55]
    ]
  ]
};
module.exports = info;
