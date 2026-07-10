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
  },
  "49": {
    "level": 49,
    "categoryName": "Król Liczb (+ - × ÷)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 34,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #e6fffa, #b2f5ea)",
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
        "largerFirst": false
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
  "50": {
    "level": 50,
    "categoryName": "Król Liczb (+ - × ÷)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 36,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #e6fffa, #b2f5ea)",
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
        "largerFirst": false
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
  "51": {
    "level": 51,
    "categoryName": "Król Liczb (+ - × ÷)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 38,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #e6fffa, #b2f5ea)",
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
        "largerFirst": false
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
  "52": {
    "level": 52,
    "categoryName": "Król Liczb (+ - × ÷)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 40,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #e6fffa, #b2f5ea)",
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
        "largerFirst": false
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
  "53": {
    "level": 53,
    "categoryName": "Król Liczb (+ - × ÷)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 42,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #e6fffa, #b2f5ea)",
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
        "largerFirst": false
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
  "54": {
    "level": 54,
    "categoryName": "Król Liczb (+ - × ÷)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 44,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #e6fffa, #b2f5ea)",
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
        "largerFirst": false
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
  },
  "55": {
    "level": 55,
    "categoryName": "Magik Dodawania (+)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 34,
    "streakBonus": 3,
    "background": "linear-gradient(to bottom, #fffff0, #fefcbf)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          0
        ],
        "range2": [
          0,
          30
        ],
        "resultRange": [
          -30,
          30
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "56": {
    "level": 56,
    "categoryName": "Magik Dodawania (+)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 36,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fffff0, #fefcbf)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          4
        ],
        "range2": [
          0,
          34
        ],
        "resultRange": [
          -30,
          30
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "57": {
    "level": 57,
    "categoryName": "Magik Dodawania (+)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 38,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fffff0, #fefcbf)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          8
        ],
        "range2": [
          0,
          38
        ],
        "resultRange": [
          -30,
          30
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "58": {
    "level": 58,
    "categoryName": "Magik Dodawania (+)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 40,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fffff0, #fefcbf)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          12
        ],
        "range2": [
          0,
          42
        ],
        "resultRange": [
          -30,
          30
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "59": {
    "level": 59,
    "categoryName": "Magik Dodawania (+)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 42,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fffff0, #fefcbf)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          16
        ],
        "range2": [
          0,
          46
        ],
        "resultRange": [
          -30,
          30
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "60": {
    "level": 60,
    "categoryName": "Magik Dodawania (+)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 44,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fffff0, #fefcbf)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          20
        ],
        "range2": [
          0,
          50
        ],
        "resultRange": [
          -30,
          30
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "61": {
    "level": 61,
    "categoryName": "Super Magik Dodawania (+)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 37,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #f7fafc, #edf2f7)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          30
        ],
        "range2": [
          -30,
          10
        ],
        "resultRange": [
          -60,
          40
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "62": {
    "level": 62,
    "categoryName": "Super Magik Dodawania (+)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 39,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #f7fafc, #edf2f7)",
    "quiz": 3,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          34
        ],
        "range2": [
          -30,
          14
        ],
        "resultRange": [
          -60,
          40
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "63": {
    "level": 63,
    "categoryName": "Super Magik Dodawania (+)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 41,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #f7fafc, #edf2f7)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          38
        ],
        "range2": [
          -30,
          18
        ],
        "resultRange": [
          -60,
          40
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "64": {
    "level": 64,
    "categoryName": "Super Magik Dodawania (+)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 43,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #f7fafc, #edf2f7)",
    "quiz": 5,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          42
        ],
        "range2": [
          -30,
          22
        ],
        "resultRange": [
          -60,
          40
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "65": {
    "level": 65,
    "categoryName": "Super Magik Dodawania (+)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 45,
    "streakBonus": 5,
    "background": "linear-gradient(to bottom, #f7fafc, #edf2f7)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          46
        ],
        "range2": [
          -30,
          26
        ],
        "resultRange": [
          -60,
          40
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "66": {
    "level": 66,
    "categoryName": "Super Magik Dodawania (+)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 47,
    "streakBonus": 5,
    "background": "linear-gradient(to bottom, #f7fafc, #edf2f7)",
    "quiz": 0,
    "operations": [
      {
        "type": "+",
        "range1": [
          -30,
          50
        ],
        "range2": [
          -30,
          30
        ],
        "resultRange": [
          -60,
          40
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "67": {
    "level": 67,
    "categoryName": "Magik Odejmowania (-)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 40,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fff7ed, #ffedd5)",
    "quiz": 3,
    "operations": [
      {
        "type": "-",
        "range1": [
          0,
          30
        ],
        "range2": [
          0,
          30
        ],
        "resultRange": [
          -30,
          0
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "68": {
    "level": 68,
    "categoryName": "Magik Odejmowania (-)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 42,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fff7ed, #ffedd5)",
    "quiz": 3,
    "operations": [
      {
        "type": "-",
        "range1": [
          4,
          38
        ],
        "range2": [
          0,
          34
        ],
        "resultRange": [
          -30,
          0
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "69": {
    "level": 69,
    "categoryName": "Magik Odejmowania (-)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 44,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fff7ed, #ffedd5)",
    "quiz": 5,
    "operations": [
      {
        "type": "-",
        "range1": [
          8,
          46
        ],
        "range2": [
          0,
          38
        ],
        "resultRange": [
          -30,
          0
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "70": {
    "level": 70,
    "categoryName": "Magik Odejmowania (-)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 46,
    "streakBonus": 5,
    "background": "linear-gradient(to bottom, #fff7ed, #ffedd5)",
    "quiz": 5,
    "operations": [
      {
        "type": "-",
        "range1": [
          12,
          54
        ],
        "range2": [
          0,
          42
        ],
        "resultRange": [
          -30,
          0
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "71": {
    "level": 71,
    "categoryName": "Magik Odejmowania (-)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 48,
    "streakBonus": 5,
    "background": "linear-gradient(to bottom, #fff7ed, #ffedd5)",
    "quiz": 0,
    "operations": [
      {
        "type": "-",
        "range1": [
          16,
          62
        ],
        "range2": [
          0,
          46
        ],
        "resultRange": [
          -30,
          0
        ],
        "hint": true,
        "largerFirst": false
      }
    ]
  },
  "72": {
    "level": 72,
    "categoryName": "Magik Odejmowania (-)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 50,
    "streakBonus": 5,
    "background": "linear-gradient(to bottom, #fff7ed, #ffedd5)",
    "quiz": 0,
    "operations": [
      {
        "type": "-",
        "range1": [
          20,
          70
        ],
        "range2": [
          0,
          50
        ],
        "resultRange": [
          -30,
          0
        ],
        "hint": false,
        "largerFirst": false
      }
    ]
  },
  "73": {
    "level": 73,
    "categoryName": "Potęgowanie (^)",
    "difficultyLabel": "Łatwy (Quiz 3, Podpowiedzi)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 43,
    "streakBonus": 4,
    "background": "linear-gradient(to bottom, #fae8ff, #f5d0fe)",
    "quiz": 3,
    "operations": [
      {
        "type": "^",
        "range1": [
          2,
          2
        ],
        "range2": [
          0,
          12
        ],
        "resultRange": [
          1,
          4096
        ],
        "hint": true
      }
    ]
  },
  "74": {
    "level": 74,
    "categoryName": "Potęgowanie (^)",
    "difficultyLabel": "Średni (Quiz 3, Bez hinta)",
    "tasksCount": 10,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 45,
    "streakBonus": 5,
    "background": "linear-gradient(to bottom, #fae8ff, #f5d0fe)",
    "quiz": 3,
    "operations": [
      {
        "type": "^",
        "range1": [
          2,
          2
        ],
        "range2": [
          0,
          12
        ],
        "resultRange": [
          1,
          4096
        ],
        "hint": false
      }
    ]
  },
  "75": {
    "level": 75,
    "categoryName": "Potęgowanie (^)",
    "difficultyLabel": "Trudny (Quiz 5, Podpowiedzi)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 47,
    "streakBonus": 5,
    "background": "linear-gradient(to bottom, #fae8ff, #f5d0fe)",
    "quiz": 5,
    "operations": [
      {
        "type": "^",
        "range1": [
          2,
          2
        ],
        "range2": [
          0,
          12
        ],
        "resultRange": [
          1,
          4096
        ],
        "hint": true
      },
      {
        "type": "^",
        "range1": [
          3,
          3
        ],
        "range2": [
          0,
          4
        ],
        "resultRange": [
          1,
          81
        ],
        "hint": true
      },
      {
        "type": "^",
        "range1": [
          4,
          4
        ],
        "range2": [
          0,
          5
        ],
        "resultRange": [
          1,
          1024
        ],
        "hint": true
      }
    ]
  },
  "76": {
    "level": 76,
    "categoryName": "Potęgowanie (^)",
    "difficultyLabel": "Ekspert (Quiz 5, Bez hinta)",
    "tasksCount": 12,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 49,
    "streakBonus": 5,
    "background": "linear-gradient(to bottom, #fae8ff, #f5d0fe)",
    "quiz": 5,
    "operations": [
      {
        "type": "^",
        "range1": [
          2,
          2
        ],
        "range2": [
          0,
          12
        ],
        "resultRange": [
          1,
          4096
        ],
        "hint": false
      },
      {
        "type": "^",
        "range1": [
          3,
          3
        ],
        "range2": [
          0,
          4
        ],
        "resultRange": [
          1,
          81
        ],
        "hint": false
      },
      {
        "type": "^",
        "range1": [
          4,
          4
        ],
        "range2": [
          0,
          5
        ],
        "resultRange": [
          1,
          1024
        ],
        "hint": false
      }
    ]
  },
  "77": {
    "level": 77,
    "categoryName": "Potęgowanie (^)",
    "difficultyLabel": "Mistrz (Wpisuj, Podpowiedzi)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 51,
    "streakBonus": 5,
    "background": "linear-gradient(to bottom, #fae8ff, #f5d0fe)",
    "quiz": 0,
    "operations": [
      {
        "type": "^",
        "range1": [
          2,
          2
        ],
        "range2": [
          0,
          12
        ],
        "resultRange": [
          1,
          4096
        ],
        "hint": true
      },
      {
        "type": "^",
        "range1": [
          3,
          3
        ],
        "range2": [
          0,
          4
        ],
        "resultRange": [
          1,
          81
        ],
        "hint": true
      },
      {
        "type": "^",
        "range1": [
          4,
          4
        ],
        "range2": [
          0,
          5
        ],
        "resultRange": [
          1,
          1024
        ],
        "hint": true
      }
    ]
  },
  "78": {
    "level": 78,
    "categoryName": "Potęgowanie (^)",
    "difficultyLabel": "Arcymistrz (Wpisuj, Bez hinta)",
    "tasksCount": 15,
    "maxHealth": 3,
    "streakRecovery": 5,
    "basePoints": 53,
    "streakBonus": 5,
    "background": "linear-gradient(to bottom, #fae8ff, #f5d0fe)",
    "quiz": 0,
    "operations": [
      {
        "type": "^",
        "range1": [
          2,
          2
        ],
        "range2": [
          0,
          12
        ],
        "resultRange": [
          1,
          4096
        ],
        "hint": false
      },
      {
        "type": "^",
        "range1": [
          3,
          3
        ],
        "range2": [
          0,
          4
        ],
        "resultRange": [
          1,
          81
        ],
        "hint": false
      },
      {
        "type": "^",
        "range1": [
          4,
          4
        ],
        "range2": [
          0,
          5
        ],
        "resultRange": [
          1,
          1024
        ],
        "hint": false
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LevelsConfig };
} else {
    window.LevelsConfig = LevelsConfig;
}
