const module3 = {
  id:'m3', code:'03', title:'Evaluating Novice Performance',
  pages:[
    { type:'outcomes', code:'3.0', title:'Module 3 Outcomes',
      outcomes:[
        {text:'Differentiate formative from summative evaluation.', bloom:'Understand', bloomLevel:2},
        {text:'Apply validated tools (BKAT, CTBI) and the five domains of precepting to evaluation.', bloom:'Apply', bloomLevel:3},
        {text:'Identify sources of evaluation bias and select mitigation strategies.', bloom:'Analyze', bloomLevel:4},
        {text:'Score a novice nurse using Benner\'s Novice-to-Expert framework.', bloom:'Evaluate', bloomLevel:5}
      ]
    },
    { type:'scenario', code:'3.1', kicker:'Formative vs. Summative', title:'Two Evaluation Types, Two Purposes',
      setup:'Formative evaluation occurs during learning, offering ongoing, informal, task-oriented feedback. Summative evaluation occurs at the end of a program or rotation, measuring overall competency against standardized criteria.',
      dialogue:[
        {role:'preceptor', name:'Formative', text:'Frequent, informal, immediate application, bidirectional. Example: One-Minute Preceptor feedback during a clinical encounter.'},
        {role:'novice', name:'Summative', text:'Formal, structured, comprehensive, standardized. Example: End-of-orientation evaluation using BKAT or CTBI.'}
      ],
      tip:'Research shows comprehensive preceptorship programs using both evaluation types improve confidence and psychological stability for new nurses (Irwin et al., 2018; Quek & Shorey, 2018).'
    },
    { type:'tps', code:'3.2-TPS', title:'Think–Pair–Share: The Cost of Delayed Feedback',
      think:'Recall a time feedback was delayed until a formal evaluation instead of given in the moment. What did the delay cost — for the novice, for patient safety, or for the relationship?',
      exemplar:'Delayed feedback often means the specific behavior is no longer fresh in memory, making the conversation vaguer and more likely to feel personal rather than task-oriented. For patient-safety-relevant errors, immediate correction is not optional — waiting risks repetition of the error before the next scheduled check-in.'
    },
    { type:'summary', code:'3.3', kicker:'Validated Evaluation Tools', title:'BKAT, CTBI, and the Five Domains of Precepting', cols:2, isModuleEnd:false,
      points:[
        {title:'BKAT — Basic Knowledge Assessment Tool', text:'Validates preceptor clinical competency before role assignment; assesses foundational nursing knowledge and clinical reasoning.'},
        {title:'CTBI — Clinical Teaching Behavior Inventory', text:'Evaluates preceptor teaching behaviors, providing structured feedback on instructional methods and learner engagement.'},
        {title:'Five Domains (Brink et al., 2018)', text:'Learner Assessment, Practice-Based Reflection, Role Modeling, Learner Centeredness, and Communication Skills.'},
        {title:'Implementation Note', text:'Consider using BKAT or CTBI to assess preceptor clinical competency before assigning the preceptor role (Barba et al., 2019; Ward & McComb, 2018).'}
      ]
    },
    { type:'scenario', code:'3.3-BIAS', kicker:'Bias Mitigation', title:'Recognizing and Mitigating Evaluation Bias',
      setup:'Four common bias sources threaten fair evaluation: Implicit Bias (unconscious stereotypes), Truth Triggers (defensiveness from personal insecurity), Relationship Triggers (low trust/credibility), and Identity Triggers (feedback that threatens identity rather than addressing behavior).',
      dialogue:[
        {role:'preceptor', name:'Mitigation Strategies', text:'1. Behavior-based assessment — only witnessed behaviors. 2. Objective language — avoid "always"/"never." 3. Diversity-aware matching. 4. Standardized criteria with clear behavioral anchors. 5. Multiple data sources — observation, self-assessment, and peer input.'}
      ],
      tip:'Consider establishing a preceptor coordinator role to further evolve coaching tools, preceptor selection, and performance evaluation (Barba et al., 2019).'
    },
    { type:'branch', code:'3.3-DECISION', title:'Decision: Delivering a Difficult Evaluation',
      nodes:{
        start:{
          prompt:'During a summative evaluation, you notice yourself thinking "she\'s just not cut out for this unit" about a struggling orientee. What should you do?',
          options:[
            {text:'Write that assessment into the evaluation as your professional judgment.', severity:'risk', feedback:'This is a character judgment, not a behavior-based observation — a classic bias trap ("truth trigger" territory) that the COPA/five-domains framework is designed to prevent.'},
            {text:'Pause and reframe the concern into specific, observed behaviors with dates and context.', severity:'good', feedback:'Correct. Behavior-based, dated, specific documentation protects both the orientee\'s fair treatment and your evaluation\'s defensibility.', next:'next'},
            {text:'Avoid the evaluation topic entirely to sidestep discomfort.', severity:'caution', feedback:'Avoidance denies the orientee actionable feedback and delays a needed support plan — not a safe middle ground.'}
          ]
        },
        next:{
          prompt:'You\'ve reframed the concern into three specific behavioral observations. What should happen next?',
          options:[
            {text:'Cross-check your observations against a second data source (self-assessment or peer input) before finalizing.', severity:'good', feedback:'Correct — multiple data sources reduce the risk that one evaluator\'s bias drives the outcome.'},
            {text:'Finalize the evaluation alone without further input.', severity:'caution', feedback:'Workable in low-stakes situations, but for a struggling orientee, triangulating data strengthens fairness and defensibility.'}
          ]
        }
      }
    },
    { type:'timeline', code:'3.4', kicker:"Benner's Novice-to-Expert", title:'Scoring the Developmental Continuum',
      lede:'At orientation start, the new nurse self-assesses using this scale — self-assessment is not valid for competency validation, but informs the learning plan.',
      items:[
        {period:'Level 1', title:'Novice', desc:'Rule-based, supervised practice; no experiential background to draw on.'},
        {period:'Level 2', title:'Advanced Beginner (Passing)', desc:'Consistently recognizes when unfamiliar with an aspect of care and seeks appropriate assistance or guidance.'},
        {period:'Level 3', title:'Competent', desc:'Deliberate planning, goal-oriented, efficient organization — typically 2–3 years\' experience.'},
        {period:'Level 4', title:'Proficient', desc:'Holistic understanding; sees situations as a whole rather than a checklist — typically 3–5 years.'},
        {period:'Level 5', title:'Expert', desc:'Intuitive grasp, fluid performance, innovative solutions — typically 5+ years.'}
      ]
    },
    { type:'dnd', code:'3.4-ACT', title:'Universal or Unit-Specific?',
      instructions:'Sort each competency statement into the correct assessment tool category.',
      items:[
        {label:'IV insertion technique specific to the ED', targetIdx:1},
        {label:'Professional communication applicable to any unit', targetIdx:0},
        {label:'Neonatal resuscitation equipment familiarity (NICU)', targetIdx:1},
        {label:'Evidence-based documentation standards', targetIdx:0},
        {label:'Ventilator weaning protocol (ICU)', targetIdx:1}
      ],
      targets:[
        {label:'Universal Competency Tool'},
        {label:'Unit-Specific Tool'}
      ],
      feedback:'Universal tools cross-train across specialties; unit-specific tools address the equipment, procedures, and patient population unique to one setting.'
    },
    { type:'video', code:'3-MEDIA', title:'A Fair Summative Conversation',
      lede:'A preceptor delivers a summative evaluation using behavior-based language and two independent data sources — the exact bias-mitigation strategy taught earlier in this module, shown rather than just described.',
      runtime:'4:50',
    },
    { type:'kc', code:'3-CHECK', questions:[
      { domain:'Formative vs Summative', stem:'A One-Minute Preceptor conversation given right after a clinical encounter is an example of:',
        options:[
          {text:'Summative evaluation', correct:false},
          {text:'Formative evaluation', correct:true},
          {text:'Bias mitigation', correct:false},
          {text:'Unit-specific competency tool', correct:false}
        ], feedbackCorrect:'Correct — immediate, informal, task-oriented feedback during learning is formative.'
      },
      { domain:'Bias', stem:'Using the phrase "you always rush through assessments" instead of a dated, specific example is most likely to introduce which bias risk?',
        options:[
          {text:'Diversity-aware matching', correct:false},
          {text:'Absolute, non-behavior-based language that invites defensiveness', correct:true},
          {text:'Standardized criteria', correct:false},
          {text:'Multiple data sources', correct:false}
        ], feedbackCorrect:'Right — absolute terms like "always" and "never" undermine objective, behavior-based feedback.'
      },
      { domain:"Benner's Scale", stem:'A score of 2 (Advanced Beginner / "Capable") on Benner\'s scale means the nurse:',
        options:[
          {text:'Has an intuitive, fluid grasp of care delivery.', correct:false},
          {text:'Consistently recognizes when unfamiliar with an aspect of care and seeks assistance.', correct:true},
          {text:'Requires no further orientation.', correct:false},
          {text:'Should now precept other novices.', correct:false}
        ], feedbackCorrect:'Correct — that is the passing threshold and accountability statement for Advanced Beginner.'
      }
    ]},
    { type:'summary', code:'3-SUM', points:[
      {title:'Formative vs. Summative', text:'Ongoing, informal feedback during learning vs. formal, standardized assessment at rotation\'s end.'},
      {title:'Validated Tools', text:'BKAT and CTBI, plus the five domains of precepting, structure objective evaluation.'},
      {title:'Bias Mitigation', text:'Behavior-based, dated, multi-source evaluation counters implicit bias and defensive "truth triggers."'},
      {title:"Benner's Continuum", text:'Novice → Advanced Beginner → Competent → Proficient → Expert — self-assessment informs, but does not replace, validation.'}
    ]}
  ]
};
