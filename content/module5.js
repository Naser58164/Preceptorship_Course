const module5 = {
  id:'m5', code:'05', title:'Critical Thinking & Time Management',
  pages:[
    { type:'outcomes', code:'5.0', title:'Module 5 Outcomes',
      outcomes:[
        {text:'Identify factors contributing to poor time management in novice nurses.', bloom:'Understand', bloomLevel:2},
        {text:'Coach prioritization using the ABC framework and time-blocking.', bloom:'Apply', bloomLevel:3},
        {text:'Apply the eight-step critical thinking process to a clinical scenario.', bloom:'Apply', bloomLevel:3},
        {text:'Design a preceptee learning journal that builds reflective autonomy.', bloom:'Create', bloomLevel:6}
      ]
    },
    { type:'scenario', code:'5.0-EVIDENCE', kicker:'Why Structure Matters', title:'The Business Case for Structured Preceptorship',
      setup:'A minimum 3–6 month formalized transition program with dedicated preceptor assignment, sound infrastructure, and leadership support materially changes outcomes.',
      dialogue:[
        {role:'preceptor', name:'Structured Program', text:'15.5% turnover rate — compared to 26.8% in a control group without a structured program, and a 27.1% national RN turnover average (NCSBN, 2017; NSI Nursing Solutions, 2022).'}
      ],
      tip:'The preceptor\'s five essential qualifications — clinical expertise, teaching ability, goal-setting experience, interpersonal skills, and communication/problem-solving — directly support critical thinking and time-management coaching.'
    },
    { type:'summary', code:'5.1', kicker:'Time Management', title:'What Undermines a Novice\'s Time Management', cols:2, isModuleEnd:false,
      points:[
        {title:'Contributing Factors', text:'Poor self-efficacy, heavy workload, poor self-control, nomophobia (phone-checking during shifts), staffing shortages, and even depression can all erode time management.'},
        {title:'Common Time Wasters', text:'Personal tasks and calls, waiting times, inability to say no, and frequent interruptions.'},
        {title:'Consequences', text:'Increased job stress, 12.8% intention to leave post an 8-week orientation, sleep disturbance, and decreased job satisfaction and self-esteem.'},
        {title:'The Upside', text:'When novice nurses manage time effectively, they can focus more fully on clinical learning itself.'}
      ]
    },
    { type:'timeline', code:'5.1-STRATEGIES', kicker:'Preceptor Strategies', title:'Teaching Time Management, Step by Step',
      items:[
        {period:'Step 1', title:'Orient to Unit Routines', desc:'Medication timing, vital sign schedules, supply locations.'},
        {period:'Step 2', title:'Role-Model Care Planning', desc:'Demonstrate prioritization and organization in real time.'},
        {period:'Step 3', title:'Frequent Progress Assessment', desc:'Regular check-ins with prompt, specific feedback.'},
        {period:'Step 4', title:'Break Down Complex Tasks', desc:'Divide nursing tasks into manageable, sequenced steps.'},
        {period:'Step 5', title:'Create Activity Plans', desc:'Assist with appropriate delegation to support staff.'},
        {period:'Step 6', title:'Practice Clinical Reasoning', desc:'Seek out decision-making opportunities within the shift.'},
        {period:'Step 7', title:'Ask Open-Ended Questions', desc:'Encourage critical thinking rather than simply directing.'},
        {period:'Step 8', title:'Foster Team Integration', desc:'Encourage the novice\'s active participation with the wider team.'}
      ]
    },
    { type:'scenario', code:'5.2', kicker:'Developing Clinical Reasoning', title:'The Eight-Step Critical Thinking Process',
      setup:'Recognize → Assess → Validate → Analyze → Determine → Consider → Formulate → Evaluate. Five components underpin it: knowledge base, experience, environment, mindset, and professional standards.',
      dialogue:[
        {role:'preceptor', name:'Basic → Complex → Commitment', text:'Critical thinking progresses from concrete, rule-based thinking (Basic) through independent, flexible reasoning (Complex) to accepting full accountability for decisions and their results (Commitment).'}
      ],
      tip:'Ask meaningful questions across four categories: clinical situation ("What are the patient\'s priority needs right now?"), disease process, care planning, and decision-making under deterioration.'
    },
    { type:'video', code:'5.2-MEDIA', title:'Socratic Questioning at the Bedside',
      lede:'A preceptor uses open-ended questioning to build clinical reasoning rather than supplying the answer — the "Asking Meaningful Questions" framework applied to a real deterioration scenario.',
      runtime:'3:15',
    },
    { type:'scenario', code:'5.4', kicker:'Prioritization Exercise', title:'Time-Blocking a Four-Patient Assignment',
      setup:'Shift 0700–1500, four medical-surgical patients: Room 101 (post-op, needs discharge teaching), Room 102 (COPD, breathing treatment due 0800), Room 103 (diabetic, BS 280, new insulin orders pending), Room 104 (chest pain r/o MI, family requesting update).',
      alert:true,
      dialogue:[
        {role:'novice', name:'Competing at 0700', text:'Room 104 reports increased chest pain (4/10) · Meds due for all 4 patients · Physician rounding in 30 minutes · Charge nurse needs help with an admission · Room 103 needs a glucose check · Room 104\'s family is on the phone.'},
        {role:'preceptor', name:'ABC Framework', text:'<strong>A</strong> — Airway, Breathing, Circulation: immediate action required. <strong>B</strong> — Basic needs & safety: important, can delegate or delay briefly. <strong>C</strong> — Comfort & education: address once A & B are handled.'}
      ],
      tip:'Delegate what you can (vital signs, bed-making, non-critical transport to a CNA) so your own attention stays on ABC-level priorities.'
    },
    { type:'dnd', code:'5.4-ACT', title:'Build the Time-Blocking Plan',
      instructions:'Drag each task into the time block where it belongs, using the ABC framework.',
      items:[
        {label:'Assess Room 104 (chest pain)', targetIdx:0},
        {label:'Check glucose for Room 103', targetIdx:0},
        {label:'Administer critical medications', targetIdx:0},
        {label:'Breathing treatment, Room 102', targetIdx:1},
        {label:'Prepare for physician rounds', targetIdx:1},
        {label:'Family communication, Room 104', targetIdx:2},
        {label:'Discharge teaching, Room 101', targetIdx:2}
      ],
      targets:[
        {label:'0700–0800 · Must Do (A)'},
        {label:'0800–0900 · Should Do (B)'},
        {label:'0900–1000 · Nice to Do (C)'}
      ],
      feedback:'Notice how Room 104\'s chest pain — an Airway/Breathing/Circulation concern — takes precedence even over a scheduled 0800 treatment.'
    },
    { type:'branch', code:'5.4-DECISION', title:'Decision: Room 104 Deteriorates',
      nodes:{
        start:{
          prompt:'While you\'re mid-way through Room 102\'s breathing treatment, Room 104 reports chest pain has risen to 7/10. What do you coach the novice to do?',
          options:[
            {text:'Finish the breathing treatment first since it was already in progress.', severity:'risk', feedback:'Chest pain rising to 7/10 is an escalating A/B/C concern that outranks an in-progress but stable treatment — reassess priorities immediately.'},
            {text:'Pause, ask a colleague to complete or hold the breathing treatment, and reassess Room 104 now.', severity:'good', feedback:'Correct — this models real-time re-prioritization and appropriate delegation under the ABC framework.'},
            {text:'Ask the family to call back later and continue as planned.', severity:'risk', feedback:'This ignores an escalating clinical symptom in favor of an administrative task — a patient-safety risk.'}
          ]
        }
      }
    },
    { type:'journal', code:'5.5-REFLECT', title:'Daily Learning Journal Template',
      prompt:'Build today\'s entry using the structure: Date/shift · Patient cases encountered · Skills practiced · Critical thinking moments (what happened, what I thought, what I did, what I learned) · Questions for my preceptor · What worked / didn\'t work with time management · Goals for next shift.',
      placeholder:'Draft a full entry using the template above — this becomes a reusable habit for your preceptees, too.'
    },
    { type:'kc', code:'5-CHECK', questions:[
      { domain:'Time Management', stem:'Which of the following is identified as a factor contributing to poor time management in novice nurses?',
        options:[
          {text:'Nomophobia (phone-checking during shifts)', correct:true},
          {text:'Excessive delegation to support staff', correct:false},
          {text:'Too much protected debriefing time', correct:false},
          {text:'Overuse of the ABC framework', correct:false}
        ], feedbackCorrect:'Correct — nomophobia is explicitly named alongside heavy workload, staffing shortages, and poor self-efficacy.'
      },
      { domain:'Prioritization', stem:'Under the ABC framework, a patient\'s escalating chest pain falls under:',
        options:[
          {text:'Comfort & education — can wait', correct:false},
          {text:'Airway, Breathing, Circulation — immediate action', correct:true},
          {text:'Basic needs — delegate to a CNA', correct:false},
          {text:'Documentation — end of shift', correct:false}
        ], feedbackCorrect:'Right — a life-threatening or escalating symptom is always an "A" priority.'
      },
      { domain:'Critical Thinking', stem:'In the eight-step critical thinking process, which step comes immediately after "Assess"?',
        options:[
          {text:'Evaluate', correct:false},
          {text:'Validate', correct:true},
          {text:'Formulate', correct:false},
          {text:'Recognize', correct:false}
        ], feedbackCorrect:'Correct — after gathering information (Assess), the nurse validates its accuracy before analyzing patterns.'
      }
    ]},
    { type:'summary', code:'5-SUM', points:[
      {title:'Time Management Coaching', text:'Orient to routines, role-model planning, break down tasks, and foster open-ended clinical questioning.'},
      {title:'Eight-Step Critical Thinking', text:'Recognize → Assess → Validate → Analyze → Determine → Consider → Formulate → Evaluate.'},
      {title:'ABC Prioritization', text:'Airway/Breathing/Circulation first, then basic needs and safety, then comfort and education.'},
      {title:'Reflective Journaling', text:'A structured daily template builds autonomy and accelerates the novice-to-competent transition.'}
    ]}
  ]
};
