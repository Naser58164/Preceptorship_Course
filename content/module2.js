const module2 = {
  id:'m2', code:'02', title:'Precepting Adult Learners',
  pages:[
    { type:'outcomes', code:'2.0', title:'Module 2 Outcomes',
      outcomes:[
        {text:'Describe the six core characteristics of adult learners (andragogy).', bloom:'Understand', bloomLevel:2},
        {text:'Adapt teaching strategies to four generational cohorts in the nursing workforce.', bloom:'Apply', bloomLevel:3},
        {text:'Apply the SNAPPS model to structure a case presentation.', bloom:'Apply', bloomLevel:3},
        {text:'Use Tanner\'s Clinical Judgment Model to structure a simulation debrief.', bloom:'Analyze', bloomLevel:4}
      ]
    },
    { type:'summary', code:'2.1', kicker:'Andragogy', title:'Six Core Characteristics of Adult Learners', cols:3, isModuleEnd:false,
      lede:'Adults learn differently from children — Knowles\' andragogy reframes the preceptor\'s job from instructing to facilitating.',
      points:[
        {title:'Self-Directed', text:'Adults take responsibility for their learning and prefer active participation over passive reception.'},
        {title:'Experience-Based', text:'They build on existing knowledge, connecting past experience to new information.'},
        {title:'Goal-Oriented', text:'They expect to meet the learning goals they\'ve set; clear objectives focus their effort.'},
        {title:'Action-Oriented', text:'They seek to immediately apply knowledge and need repetition to reinforce learning.'},
        {title:'Relevancy-Focused', text:'"What\'s in it for me?" — they need to know why something matters before engaging.'},
        {title:'Practical', text:'They expect organized, logical, immediately applicable content — not theoretical abstraction.'}
      ]
    },
    { type:'scenario', code:'2.2', kicker:'Active-Learning Framework', title:'From Instructor-Centered to Learner-Centered',
      setup:'Active learning centers on the learner\'s needs, occurs in a dynamic and meaningful environment, is bidirectionally collaborative, and relies on constructive, nonjudgmental feedback.',
      dialogue:[
        {role:'novice', name:'Traditional', text:'Instructor-centered lectures · Passive listening · One-way communication · Delayed feedback · Theoretical focus'},
        {role:'preceptor', name:'Active Learning', text:'Learner-centered experiences · Active participation · Bidirectional dialogue · In-the-moment feedback · Practical application'}
      ],
      tip:'Adult learners retain roughly 90% of what they do, versus 5% of what they merely hear in a lecture (Wolters Kluwer, Faculty Insights on Transforming Nursing Education).'
    },
    { type:'summary', code:'2.4', kicker:'Generational Teaching Strategies', title:'Four Generations, Four Approaches', cols:2, isModuleEnd:false,
      points:[
        {title:'Baby Boomers (1946–1964)', text:'Value teamwork and expertise. Create a caring, supportive environment; give frequent positive feedback; link content to their experience.'},
        {title:'Generation X (1965–1980)', text:'Self-reliant, comfortable with change. Make learning engaging and flexible; show clear workplace benefit; allow self-paced learning.'},
        {title:'Millennials / Gen Y (1981–2000)', text:'Tech-savvy, outcome-driven. Incorporate technology, group learning, and immediate feedback; let them advocate for their learning needs.'},
        {title:'Generation Z (2001–2016)', text:'True digital natives. Enable connectivity, provide face-to-face interaction, position yourself as coach rather than expert.'}
      ]
    },
    { type:'tps', code:'2.4-TPS', title:'Think–Pair–Share: Teaching Across Generations',
      think:'Recall a recent teaching moment with a preceptee. Which generational cohort were they likely part of, and did your approach match the strategies suited to that cohort?',
      exemplar:'A common mismatch: precepting a Gen X nurse with a heavily gamified, group-based approach designed for Gen Z can feel patronizing and slow. Conversely, a lecture-only approach with a Gen Z learner under-uses their appetite for connectivity and independent research. Matching strategy to cohort — while still individualizing — improves engagement without stereotyping any one learner.'
    },
    { type:'scenario', code:'2.5', kicker:'The SNAPPS Model', title:'Structured Active Learning for Case Presentations',
      setup:'SNAPPS transforms passive case presentation into active clinical reasoning: Summarize · Narrow · Analyze · Probe · Plan · Select.',
      dialogue:[
        {role:'novice', name:'S–N–A', text:'<strong>Summarize</strong> the case in under 3 minutes. <strong>Narrow</strong> to 2–3 likely conditions, avoiding rare "zebras." <strong>Analyze</strong> by comparing and contrasting possibilities aloud.'},
        {role:'preceptor', name:'P–P–S', text:'<strong>Probe</strong> the preceptor with targeted questions about uncertainties. <strong>Plan</strong> a management approach. <strong>Select</strong> a case-related issue for self-directed learning.'}
      ],
      tip:'Compared to traditional precepting, SNAPPS generates more differentials, more visible clinical reasoning, and more learning issues selected — without increasing presentation time.'
    },
    { type:'video', code:'2.5-MEDIA', title:'SNAPPS in a Busy Med-Surg Shift',
      lede:'A novice nurse uses SNAPPS to present a deteriorating patient in under four minutes, under real time pressure — the format that generates more differentials and more visible reasoning without adding to presentation length.',
      runtime:'4:20',
    },
    { type:'scenario', code:'2.6', kicker:"Tanner's Clinical Judgment Model", title:'Structuring Simulation for Clinical Judgment',
      setup:'Tanner\'s model structures how nurses move from awareness to action: Noticing → Interpreting → Responding → Reflection.',
      dialogue:[
        {role:'preceptor', name:'Noticing → Interpreting', text:'Becoming aware of the clinical situation and gaining overall understanding, then deepening that understanding using multiple reasoning patterns.'},
        {role:'novice', name:'Responding → Reflection', text:'Determining and taking appropriate nursing action, then learning through reflection on the results and applying insight to future scenarios.'}
      ],
      tip:'Simulation creates a safe environment for novices to practice clinical judgment without patient risk — research shows gains in theoretical/practical reasoning persist at 2-month follow-up.'
    },
    { type:'journal', code:'2.7-REFLECT', title:'The REFLECT Model — Individual Reflection',
      prompt:'Apply REFLECT to a recent clinical encounter you precepted or observed: Recall the events. Examine your responses. Feelings — what came up? Learn from the experience. Explore options you didn\'t take. Create an action plan. Timescale — when will you apply it?',
      placeholder:'Work through each letter of REFLECT for one specific encounter...'
    },
    { type:'dnd', code:'2.8-ACT', title:'Match the Teaching Strategy to the Generation',
      instructions:'Drag each strategy onto the generational cohort it best fits.',
      items:[
        {label:'Link new content to their prior experience', targetIdx:0},
        {label:'Offer flexibility and self-paced learning', targetIdx:1},
        {label:'Use group learning and gamified workgroups', targetIdx:2},
        {label:'Position yourself as coach, not expert', targetIdx:3},
        {label:'Emphasize team-based learning and respect for expertise', targetIdx:0},
        {label:'Support independent research and constant connectivity', targetIdx:3}
      ],
      targets:[
        {label:'Baby Boomers'},
        {label:'Generation X'},
        {label:'Millennials'},
        {label:'Generation Z'}
      ],
      feedback:'These are starting points, not stereotypes — always validate against the individual preceptee\'s stated preferences.'
    },
    { type:'kc', code:'2-CHECK', questions:[
      { domain:'Andragogy', stem:'Which of these best reflects the "relevancy-focused" characteristic of adult learners?',
        options:[
          {text:'They need to understand why something matters before engaging with it.', correct:true},
          {text:'They prefer passive lecture format.', correct:false},
          {text:'They avoid connecting new content to past experience.', correct:false},
          {text:'They require no clear learning goals.', correct:false}
        ], feedbackCorrect:'Correct — "What\'s in it for me?" drives adult learner engagement.'
      },
      { domain:'SNAPPS', stem:'In the SNAPPS model, what does the "Probe" step involve?',
        options:[
          {text:'The preceptor lectures on the topic.', correct:false},
          {text:'The learner asks the preceptor targeted questions about their own uncertainties.', correct:true},
          {text:'The preceptor grades the presentation.', correct:false},
          {text:'The learner summarizes the case again.', correct:false}
        ], feedbackCorrect:'Right — Probe reveals knowledge gaps and guides individualized teaching, driven by the learner\'s questions.'
      },
      { domain:"Tanner's Model", stem:'Which sequence correctly represents Tanner\'s Clinical Judgment Model?',
        options:[
          {text:'Responding → Noticing → Reflection → Interpreting', correct:false},
          {text:'Noticing → Interpreting → Responding → Reflection', correct:true},
          {text:'Interpreting → Reflection → Noticing → Responding', correct:false},
          {text:'Reflection → Responding → Noticing → Interpreting', correct:false}
        ], feedbackCorrect:'Correct — awareness leads to reasoning, then action, then learning through reflection.'
      }
    ]},
    { type:'summary', code:'2-SUM', points:[
      {title:'Andragogy', text:'Adults are self-directed, experience-based, goal-oriented, action-oriented, relevancy-focused, and practical.'},
      {title:'Generational Fit', text:'Boomers value experience and respect; Gen X wants flexibility; Millennials want tech and immediacy; Gen Z wants connectivity and coaching.'},
      {title:'SNAPPS', text:'A six-step structure (Summarize, Narrow, Analyze, Probe, Plan, Select) that shifts case presentations from passive to active.'},
      {title:"Tanner's Model & REFLECT", text:'Structure simulation debriefs around Noticing → Interpreting → Responding → Reflection, and guide individual reflection with REFLECT.'}
    ]}
  ]
};
