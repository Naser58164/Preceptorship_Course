const module6 = {
  id:'m6', code:'06', title:'Managing Reality Shock',
  pages:[
    { type:'outcomes', code:'6.0', title:'Module 6 Outcomes',
      outcomes:[
        {text:'Define reality shock and its impact on novice nurse retention.', bloom:'Understand', bloomLevel:2},
        {text:'Recognize the signs and four phases of Kramer\'s Reality Shock theory.', bloom:'Analyze', bloomLevel:4},
        {text:'Apply phase-appropriate preceptor support strategies.', bloom:'Apply', bloomLevel:3},
        {text:'Practice conflict resolution for interpersonal reality-shock scenarios.', bloom:'Apply', bloomLevel:3}
      ]
    },
    { type:'scenario', code:'1.1', kicker:'Definition', title:'What Is Reality Shock?',
      setup:'Reality shock is the transition phenomenon experienced by new nurses moving from the controlled educational environment to the complex, fast-paced professional practice setting — the gap between what nurses learned in school and the actual demands of practice.',
      dialogue:[
        {role:'preceptor', name:'Key Insight', text:'Reality shock can also affect experienced nurses transitioning between clinical units, not just new graduates.'},
        {role:'novice', name:'The Preceptor\'s Role', text:'Preceptors serve as the primary buffer — providing individualized support, bridging theory-practice gaps, offering professional advice, and fostering a supportive sense of belonging.'}
      ],
      tip:'Preceptor programs reduce work stress, increase job satisfaction, and decrease intention to leave among new graduate nurses (Çamveren, Kocaman & Vatan, 2022).'
    },
    { type:'summary', code:'6.1', kicker:'Expectation vs. Reality', title:'Novice Nurse Expectations vs. Clinical Reality', cols:2, isModuleEnd:false,
      points:[
        {title:'Expected: Welcoming Environment', text:'Reality: heavy, unmanageable workloads, time pressure, and competing priorities.'},
        {title:'Expected: Professional Excitement', text:'Reality: exposure to death and dying, and the emotional weight of grieving families.'},
        {title:'Expected: Recognition & Respect', text:'Reality: interpersonal conflicts with supervisors, physicians, or team members.'},
        {title:'Expected: Manageable Responsibilities', text:'Reality: treatment uncertainty and poor emotional preparation for the demands of practice.'}
      ]
    },
    { type:'journal', code:'6.2-REFLECT', title:'Signs of Reality Shock in Your Own Precepting',
      prompt:'Have you noticed lack of confidence, feelings of inadequate preparation, high stress, abandonment feelings, communication gaps, or safety concerns in a current or recent preceptee? Describe what you observed and what factors (educational background, work duration, area of work) might be contributing.',
      placeholder:'Note specific observed behaviors rather than general impressions...'
    },
    { type:'timeline', code:'6.3', kicker:"Kramer's Reality Shock Theory", title:'The Four Phases',
      lede:'A developmental framework for understanding — and timing your support to — a novice nurse\'s first year.',
      items:[
        {period:'First few weeks', title:'Honeymoon Phase', desc:'Excitement, high energy, optimism, and feeling well-supported.', action:'Build trust, give positive reinforcement, set learning goals'},
        {period:'3–6 months', title:'Shock Phase', desc:'Feelings of failure, frustration, anger, and disillusionment. Highest risk for leaving.', action:'Intensive support — this is the critical period'},
        {period:'6–10 months', title:'Recovery Phase', desc:'Realistic expectations, decreased tension, developing coping strategies, beginning to help other nurses.', action:'Encourage autonomy, give constructive feedback'},
        {period:'End of first year', title:'Resolution Phase', desc:'Reconciling expectations with reality; risk of adopting poor professional values if unaddressed.', action:'Reinforce professional values, model ethical practice'}
      ]
    },
    { type:'scenario', code:'6.3-PREVENT', kicker:'Prevention', title:'Evidence-Based Prevention Strategies',
      setup:'Optimism and adaptability are career-resilience factors that reduce the impact of reality shock — but evidence-based, comprehensive transition programs are equally essential.',
      dialogue:[
        {role:'preceptor', name:'Prevention Strategies', text:'Increase clinical experience hours before graduation · give an accurate practice description · enhance skills-lab time · extend clinical hours · establish formal preceptorship.'}
      ],
      tip:'Reality shock levels are statistically lower among nurses who received clinical guidance, in-house orientation, and in-unit orientation training (p < 0.05) (Stolzman, 2021).'
    },
    { type:'dnd', code:'6.4-ACT', title:'Match the Strategy to the Reality-Shock Phase',
      instructions:'Drag each preceptor action onto the phase it\'s best suited for.',
      items:[
        {label:'Build trust and set initial learning goals', targetIdx:0},
        {label:'Provide intensive, high-frequency support', targetIdx:1},
        {label:'Encourage growing autonomy with constructive feedback', targetIdx:2},
        {label:'Reinforce professional values and ethical modeling', targetIdx:3},
        {label:'Watch closely for anger, frustration, or disillusionment', targetIdx:1}
      ],
      targets:[
        {label:'Honeymoon (Weeks 1+)'},
        {label:'Shock (3–6 Months)'},
        {label:'Recovery (6–10 Months)'},
        {label:'Resolution (Year\'s End)'}
      ],
      feedback:'The Shock phase is the highest-risk window for turnover — flexible, intensive support here has an outsized impact on retention.'
    },
    { type:'video', code:'6.4-MEDIA', title:'Recognizing the Shock Phase Early',
      lede:'A charge nurse and preceptor discuss subtle warning signs at month four — a documentation-style conversation, not a dramatized vignette, modeling how to name a concern before it becomes a resignation.',
      runtime:'2:50',
    },
    { type:'scenario', code:'6.6.1.A', kicker:'Interactive Activity', title:'Demo: Resolving an Interpersonal Conflict',
      setup:'Sarah, a novice nurse in her third month, approaches her preceptor Noora with concerns about senior staff dismissing her questions during shift change.',
      dialogue:[
        {role:'novice', name:'Sarah', text:'"Yesterday during handoff, I asked about a patient\'s IV drip rate, and Nurse H.M said, \'Didn\'t you learn this in nursing school?\' in front of everyone. I felt so stupid."'},
        {role:'preceptor', name:'Noora', text:'"I understand why that would be upsetting. That response wasn\'t helpful or professional. Here\'s what we\'ll do: I\'ll speak with Nurse H.M privately, I\'ll accompany you during the next few handoffs to model asking questions assertively, and we\'ll practice a response you can use if this happens again."'}
      ],
      tip:'Conflict resolution steps: acknowledge the conflict → identify its type → use active listening → express with "I" statements → seek common ground → collaborate on solutions → follow up.'
    },
    { type:'branch', code:'6.6.1.B', title:'Activity: Identify the Phase of Reality Shock',
      nodes:{
        start:{
          prompt:'Eman, 26, first month as an ICU nurse: "I can\'t believe I\'m finally a real nurse!" — arrives early, asks enthusiastic questions, feels well-supported, stays late to observe procedures. Which phase is she in?',
          options:[
            {text:'Honeymoon Phase', severity:'good', feedback:'Correct — high energy, optimism, and feeling supported are classic Honeymoon-phase markers in the first weeks.', next:'said'},
            {text:'Shock Phase', severity:'risk', feedback:'Shock phase presents as frustration and disillusionment — the opposite of Eman\'s enthusiasm and confidence here.'},
            {text:'Resolution Phase', severity:'caution', feedback:'Resolution occurs around the one-year mark, reconciling expectations with reality — too early for someone in month one.'}
          ]
        },
        said:{
          prompt:'Said, 25, four months on a medical-surgical unit: "I don\'t know if I made the right career choice." Overwhelmed, anxious before shifts, sleep-disturbed, questioning his competence. Which phase?',
          options:[
            {text:'Shock Phase', severity:'good', feedback:'Correct — 3–6 months, self-doubt, anxiety, and consideration of leaving are hallmark Shock-phase signs. This is the highest-risk period for turnover.', next:'jokha'},
            {text:'Honeymoon Phase', severity:'risk', feedback:'Honeymoon is marked by optimism and energy — Said\'s self-doubt and anxiety point elsewhere.'}
          ]
        },
        jokha:{
          prompt:'Jokha, 24, nine months in the emergency department: "I\'m finally getting the hang of this!" Developing routines, starting to help orient newer nurses, feeling part of the team. Which phase?',
          options:[
            {text:'Recovery Phase', severity:'good', feedback:'Correct — 6–10 months, building confidence, developing coping strategies, and beginning to help others define the Recovery phase.'},
            {text:'Shock Phase', severity:'risk', feedback:'Shock is marked by frustration and high turnover risk — Jokha\'s growing confidence and stability point to Recovery instead.'}
          ]
        }
      }
    },
    { type:'tps', code:'6.7-TPS', title:'Think–Pair–Share: Your Unit\'s Turnover Story',
      think:'Consider your unit\'s turnover pattern over the past year. Does it cluster around the 3–6 month "Shock" window Kramer describes? What would a more deliberate Shock-phase support plan look like for your team?',
      pair:'Bring this reflection to your next preceptor coordinator meeting or unit huddle.',
      exemplar:'Many units find their highest resignation rate clusters almost exactly at 3–5 months — matching Kramer\'s Shock phase. A deliberate plan might include a scheduled check-in at week 10–12 specifically probing for disillusionment signs, paired debriefing sessions with peers at the same stage, and protected (non-punitive) time to voice frustration before it becomes a resignation letter.'
    },
    { type:'kc', code:'6-CHECK', questions:[
      { domain:'Reality Shock', stem:'Reality shock is best defined as:',
        options:[
          {text:'A permanent personality trait of new graduates', correct:false},
          {text:'The gap between educational preparation and the actual demands of clinical practice', correct:true},
          {text:'A formal medical diagnosis', correct:false},
          {text:'Something that only affects nursing students, never experienced nurses', correct:false}
        ], feedbackCorrect:'Correct — and it can also affect experienced nurses transitioning between units.'
      },
      { domain:"Kramer's Phases", stem:'Which phase carries the highest risk for a novice nurse leaving their position?',
        options:[
          {text:'Honeymoon Phase', correct:false},
          {text:'Shock Phase', correct:true},
          {text:'Recovery Phase', correct:false},
          {text:'Resolution Phase', correct:false}
        ], feedbackCorrect:'Right — the Shock phase (3–6 months) shows the highest vulnerability to resignation.'
      },
      { domain:'Prevention', stem:'Which is cited as an evidence-based strategy for preventing reality shock?',
        options:[
          {text:'Reducing clinical hours before graduation', correct:false},
          {text:'Establishing formal preceptorship programs', correct:true},
          {text:'Removing in-unit orientation training', correct:false},
          {text:'Avoiding realistic descriptions of nursing practice', correct:false}
        ], feedbackCorrect:'Correct — formal preceptorship, alongside increased clinical experience and skills-lab time, is a core prevention strategy.'
      }
    ]},
    { type:'summary', code:'6-SUM', points:[
      {title:'Reality Shock, Defined', text:'The gap between educational preparation and professional practice demands — preceptors are the primary buffer.'},
      {title:"Kramer's Four Phases", text:'Honeymoon → Shock (highest risk) → Recovery → Resolution, each requiring a different preceptor approach.'},
      {title:'Prevention & Support', text:'Formal preceptorship, realistic practice previews, and phase-matched support reduce turnover and adverse events.'},
      {title:'Conflict Resolution', text:'Acknowledge, listen actively, use "I" statements, collaborate on solutions, and follow up.'}
    ]}
  ]
};
