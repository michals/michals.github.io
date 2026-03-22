const LevelsConfig = {
  "1": {
    "level": 1,
    "categoryName": "Dodawanie (+)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 10,
    "streakBonus": 1,
    "background": "linear-gradient(to bottom, #ebf8ff, #bee3f8)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          10
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      }
    ]
  },
  "2": {
    "level": 2,
    "categoryName": "Dodawanie (+)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 12,
    "streakBonus": 1,
    "background": "linear-gradient(to bottom, #ebf8ff, #bee3f8)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          14
        ],
        "range2": [
          1,
          14
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      }
    ]
  },
  "3": {
    "level": 3,
    "categoryName": "Dodawanie (+)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 14,
    "streakBonus": 1,
    "background": "linear-gradient(to bottom, #ebf8ff, #bee3f8)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          18
        ],
        "range2": [
          1,
          18
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      }
    ]
  },
  "4": {
    "level": 4,
    "categoryName": "Dodawanie (+)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 16,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #ebf8ff, #bee3f8)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          22
        ],
        "range2": [
          1,
          22
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      }
    ]
  },
  "5": {
    "level": 5,
    "categoryName": "Dodawanie (+)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 18,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #ebf8ff, #bee3f8)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          26
        ],
        "range2": [
          1,
          26
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      }
    ]
  },
  "6": {
    "level": 6,
    "categoryName": "Dodawanie (+)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 20,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #ebf8ff, #bee3f8)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          30
        ],
        "range2": [
          1,
          30
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      }
    ]
  },
  "7": {
    "level": 7,
    "categoryName": "Odejmowanie (-)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 13,
    "streakBonus": 1,
    "background": "linear-gradient(to bottom, #fff5f5, #fed7d7)",
    "quiz": 3,
    "operations": [
      {
        "type": "-",
        "range1": [
          10,
          20
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "8": {
    "level": 8,
    "categoryName": "Odejmowanie (-)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 15,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #fff5f5, #fed7d7)",
    "quiz": 3,
    "operations": [
      {
        "type": "-",
        "range1": [
          14,
          28
        ],
        "range2": [
          1,
          14
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "9": {
    "level": 9,
    "categoryName": "Odejmowanie (-)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 17,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #fff5f5, #fed7d7)",
    "quiz": 5,
    "operations": [
      {
        "type": "-",
        "range1": [
          18,
          36
        ],
        "range2": [
          1,
          18
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "10": {
    "level": 10,
    "categoryName": "Odejmowanie (-)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 19,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #fff5f5, #fed7d7)",
    "quiz": 5,
    "operations": [
      {
        "type": "-",
        "range1": [
          22,
          44
        ],
        "range2": [
          1,
          22
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "11": {
    "level": 11,
    "categoryName": "Odejmowanie (-)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 21,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #fff5f5, #fed7d7)",
    "quiz": 0,
    "operations": [
      {
        "type": "-",
        "range1": [
          26,
          52
        ],
        "range2": [
          1,
          26
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "12": {
    "level": 12,
    "categoryName": "Odejmowanie (-)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 23,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #fff5f5, #fed7d7)",
    "quiz": 0,
    "operations": [
      {
        "type": "-",
        "range1": [
          30,
          60
        ],
        "range2": [
          1,
          30
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "13": {
    "level": 13,
    "categoryName": "Dodawanie i Odejmowanie (+ -)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 16,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #f0fff4, #c6f6d5)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          10
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          10,
          20
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "14": {
    "level": 14,
    "categoryName": "Dodawanie i Odejmowanie (+ -)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 18,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #f0fff4, #c6f6d5)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          14
        ],
        "range2": [
          1,
          14
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          14,
          28
        ],
        "range2": [
          1,
          14
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "15": {
    "level": 15,
    "categoryName": "Dodawanie i Odejmowanie (+ -)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 20,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #f0fff4, #c6f6d5)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          18
        ],
        "range2": [
          1,
          18
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          18,
          36
        ],
        "range2": [
          1,
          18
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "16": {
    "level": 16,
    "categoryName": "Dodawanie i Odejmowanie (+ -)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 22,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #f0fff4, #c6f6d5)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          22
        ],
        "range2": [
          1,
          22
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          22,
          44
        ],
        "range2": [
          1,
          22
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "17": {
    "level": 17,
    "categoryName": "Dodawanie i Odejmowanie (+ -)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 24,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #f0fff4, #c6f6d5)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          26
        ],
        "range2": [
          1,
          26
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          26,
          52
        ],
        "range2": [
          1,
          26
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "18": {
    "level": 18,
    "categoryName": "Dodawanie i Odejmowanie (+ -)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 26,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #f0fff4, #c6f6d5)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          30
        ],
        "range2": [
          1,
          30
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          30,
          60
        ],
        "range2": [
          1,
          30
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "19": {
    "level": 19,
    "categoryName": "Mnożenie (×)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 19,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #faf5ff, #e9d8fd)",
    "quiz": 3,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          3
        ],
        "range2": [
          1,
          5
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "20": {
    "level": 20,
    "categoryName": "Mnożenie (×)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 21,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #faf5ff, #e9d8fd)",
    "quiz": 3,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          3
        ],
        "range2": [
          1,
          6
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "21": {
    "level": 21,
    "categoryName": "Mnożenie (×)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 23,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #faf5ff, #e9d8fd)",
    "quiz": 5,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          4
        ],
        "range2": [
          1,
          7
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "22": {
    "level": 22,
    "categoryName": "Mnożenie (×)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 25,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #faf5ff, #e9d8fd)",
    "quiz": 5,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          4
        ],
        "range2": [
          1,
          8
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "23": {
    "level": 23,
    "categoryName": "Mnożenie (×)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 27,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #faf5ff, #e9d8fd)",
    "quiz": 0,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          5
        ],
        "range2": [
          1,
          9
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "24": {
    "level": 24,
    "categoryName": "Mnożenie (×)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 29,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #faf5ff, #e9d8fd)",
    "quiz": 0,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          5
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "25": {
    "level": 25,
    "categoryName": "Mix (+ - ×)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 22,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #fffaf0, #feebc8)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          10
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          10,
          20
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          3
        ],
        "range2": [
          1,
          5
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "26": {
    "level": 26,
    "categoryName": "Mix (+ - ×)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 24,
    "streakBonus": 2,
    "background": "linear-gradient(to bottom, #fffaf0, #feebc8)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          14
        ],
        "range2": [
          1,
          14
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          14,
          28
        ],
        "range2": [
          1,
          14
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          3
        ],
        "range2": [
          1,
          6
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "27": {
    "level": 27,
    "categoryName": "Mix (+ - ×)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 26,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #fffaf0, #feebc8)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          18
        ],
        "range2": [
          1,
          18
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          18,
          36
        ],
        "range2": [
          1,
          18
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          4
        ],
        "range2": [
          1,
          7
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "28": {
    "level": 28,
    "categoryName": "Mix (+ - ×)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 28,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #fffaf0, #feebc8)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          22
        ],
        "range2": [
          1,
          22
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          22,
          44
        ],
        "range2": [
          1,
          22
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          4
        ],
        "range2": [
          1,
          8
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "29": {
    "level": 29,
    "categoryName": "Mix (+ - ×)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 30,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #fffaf0, #feebc8)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          26
        ],
        "range2": [
          1,
          26
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          26,
          52
        ],
        "range2": [
          1,
          26
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          5
        ],
        "range2": [
          1,
          9
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "30": {
    "level": 30,
    "categoryName": "Mix (+ - ×)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 32,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #fffaf0, #feebc8)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          30
        ],
        "range2": [
          1,
          30
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          30,
          60
        ],
        "range2": [
          1,
          30
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          5
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "31": {
    "level": 31,
    "categoryName": "Dzielenie (÷)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 25,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #f5f5f5, #e2e8f0)",
    "quiz": 3,
    "operations": [
      {
        "type": "/",
        "range1": [
          1,
          5
        ],
        "range2": [
          2,
          5
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "32": {
    "level": 32,
    "categoryName": "Dzielenie (÷)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 27,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #f5f5f5, #e2e8f0)",
    "quiz": 3,
    "operations": [
      {
        "type": "/",
        "range1": [
          1,
          6
        ],
        "range2": [
          2,
          5
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "33": {
    "level": 33,
    "categoryName": "Dzielenie (÷)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 29,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #f5f5f5, #e2e8f0)",
    "quiz": 5,
    "operations": [
      {
        "type": "/",
        "range1": [
          1,
          7
        ],
        "range2": [
          2,
          6
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "34": {
    "level": 34,
    "categoryName": "Dzielenie (÷)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 31,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #f5f5f5, #e2e8f0)",
    "quiz": 5,
    "operations": [
      {
        "type": "/",
        "range1": [
          1,
          8
        ],
        "range2": [
          2,
          6
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "35": {
    "level": 35,
    "categoryName": "Dzielenie (÷)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 33,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #f5f5f5, #e2e8f0)",
    "quiz": 0,
    "operations": [
      {
        "type": "/",
        "range1": [
          1,
          9
        ],
        "range2": [
          2,
          7
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "36": {
    "level": 36,
    "categoryName": "Dzielenie (÷)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 35,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #f5f5f5, #e2e8f0)",
    "quiz": 0,
    "operations": [
      {
        "type": "/",
        "range1": [
          1,
          10
        ],
        "range2": [
          2,
          7
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "37": {
    "level": 37,
    "categoryName": "Mnożenie i Dzielenie (× ÷)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 28,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #ebf4ff, #c3dafe)",
    "quiz": 3,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          3
        ],
        "range2": [
          1,
          5
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          5
        ],
        "range2": [
          2,
          5
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "38": {
    "level": 38,
    "categoryName": "Mnożenie i Dzielenie (× ÷)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 30,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #ebf4ff, #c3dafe)",
    "quiz": 3,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          3
        ],
        "range2": [
          1,
          6
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          6
        ],
        "range2": [
          2,
          5
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "39": {
    "level": 39,
    "categoryName": "Mnożenie i Dzielenie (× ÷)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 32,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #ebf4ff, #c3dafe)",
    "quiz": 5,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          4
        ],
        "range2": [
          1,
          7
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          7
        ],
        "range2": [
          2,
          6
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "40": {
    "level": 40,
    "categoryName": "Mnożenie i Dzielenie (× ÷)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 34,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #ebf4ff, #c3dafe)",
    "quiz": 5,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          4
        ],
        "range2": [
          1,
          8
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          8
        ],
        "range2": [
          2,
          6
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "41": {
    "level": 41,
    "categoryName": "Mnożenie i Dzielenie (× ÷)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 36,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #ebf4ff, #c3dafe)",
    "quiz": 0,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          5
        ],
        "range2": [
          1,
          9
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          9
        ],
        "range2": [
          2,
          7
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "42": {
    "level": 42,
    "categoryName": "Mnożenie i Dzielenie (× ÷)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 38,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #ebf4ff, #c3dafe)",
    "quiz": 0,
    "operations": [
      {
        "type": "*",
        "range1": [
          1,
          5
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          10
        ],
        "range2": [
          2,
          7
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "43": {
    "level": 43,
    "categoryName": "Wielki Mistrz (+ - × ÷)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 31,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #fff5f7, #fed7e2)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          10
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          10,
          20
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          3
        ],
        "range2": [
          1,
          5
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          5
        ],
        "range2": [
          2,
          5
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "44": {
    "level": 44,
    "categoryName": "Wielki Mistrz (+ - × ÷)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 33,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #fff5f7, #fed7e2)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          14
        ],
        "range2": [
          1,
          14
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          14,
          28
        ],
        "range2": [
          1,
          14
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          3
        ],
        "range2": [
          1,
          6
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          6
        ],
        "range2": [
          2,
          5
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "45": {
    "level": 45,
    "categoryName": "Wielki Mistrz (+ - × ÷)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 35,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fff5f7, #fed7e2)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          18
        ],
        "range2": [
          1,
          18
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          18,
          36
        ],
        "range2": [
          1,
          18
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          4
        ],
        "range2": [
          1,
          7
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          7
        ],
        "range2": [
          2,
          6
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "46": {
    "level": 46,
    "categoryName": "Wielki Mistrz (+ - × ÷)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 37,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fff5f7, #fed7e2)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          22
        ],
        "range2": [
          1,
          22
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          22,
          44
        ],
        "range2": [
          1,
          22
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          4
        ],
        "range2": [
          1,
          8
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          8
        ],
        "range2": [
          2,
          6
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "47": {
    "level": 47,
    "categoryName": "Wielki Mistrz (+ - × ÷)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 39,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fff5f7, #fed7e2)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          26
        ],
        "range2": [
          1,
          26
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": true,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          26,
          52
        ],
        "range2": [
          1,
          26
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          5
        ],
        "range2": [
          1,
          9
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": true,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          9
        ],
        "range2": [
          2,
          7
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "48": {
    "level": 48,
    "categoryName": "Wielki Mistrz (+ - × ÷)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 41,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fff5f7, #fed7e2)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          1,
          30
        ],
        "range2": [
          1,
          30
        ],
        "resultRange": [
          1,
          100
        ],
        "hint": false,
        "largerFirst": true
      },
      {
        "type": "-",
        "range1": [
          30,
          60
        ],
        "range2": [
          1,
          30
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "*",
        "range1": [
          1,
          5
        ],
        "range2": [
          1,
          10
        ],
        "resultRange": [
          2,
          100
        ],
        "hint": false,
        "largerFirst": false
      },
      {
        "type": "/",
        "range1": [
          1,
          10
        ],
        "range2": [
          2,
          7
        ],
        "resultRange": [
          1,
          50
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LevelsConfig };
} else {
    window.LevelsConfig = LevelsConfig;
}
