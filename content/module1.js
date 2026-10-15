const module1 = {
  id:'m1', code:'01', title:'Foundations of Preceptorship',
  pages:[
    { type:'outcomes', code:'1.0', title:'Module 1 Outcomes',
      outcomes:[
        {text:'Define preceptorship and distinguish it from mentorship and orientation.', bloom:'Understand', bloomLevel:2},
        {text:'Explain the four core preceptor roles and their component behaviors.', bloom:'Understand', bloomLevel:2},
        {text:'Apply the COPA model\'s eight competencies to a clinical orientation plan.', bloom:'Apply', bloomLevel:3},
        {text:'Assess your own readiness to precept using a validated self-assessment.', bloom:'Evaluate', bloomLevel:5}
      ]
    },
    { type:'scenario', code:'1.1', kicker:'Definitions & Concept', title:'What Is a Preceptorship — Really?',
      setup:'A preceptorship is the formal, one-to-one teaching/learning relationship between an experienced nurse (preceptor) and a novice nurse or student (the preceptee). Orientees include nursing students, newly graduated nurses, and experienced nurses new to a unit.',
      dialogue:[
        {role:'preceptor', name:'Concept', text:'<strong>Preceptorship</strong> — formal, time-limited, clinically focused, and centered on skill acquisition within a specific unit.'},
        {role:'novice', name:'Contrast', text:'<strong>Mentorship</strong> is informal, long-term, and career-focused. <strong>Orientation</strong> is administrative and facility-wide, covering general policies. Preceptorship sits between them: structured, bedside, and assessment-driven.'}
      ],
      tip:'A preceptor commits to guiding the preceptee\'s development within a specific clinical context — modeling professional behavior and clinical judgment while formally assessing competency.'
    },
    { type:'tps', code:'1.1-TPS', title:'Think–Pair–Share: Three Relationships, One Nurse',
      think:'Think of a new colleague on your unit. Which of their needs would be best met by a preceptor, a mentor, or general orientation — and why might conflating the three create confusion for either party?',
      pair:'Compare notes with a fellow preceptor or post your distinction in the cohort discussion board before your next shift.',
      exemplar:'Preceptorship should resolve unit-specific clinical skill gaps within a defined timeframe (e.g., 6–12 weeks) and end in a competency sign-off. Mentorship can continue indefinitely and address career trajectory, not task performance. Orientation is a one-time administrative onboarding. Confusing them often leads to preceptors being expected to provide open-ended career counseling, or orientees assuming clinical sign-off happens automatically once "orientation" is finished.'
    },
    { type:'timeline', code:'1.2', kicker:'Four Core Roles', title:'The Preceptor Wears Four Hats',
      lede:'Effective preceptors move fluidly between these roles depending on the orientee\'s needs and the clinical moment.',
      items:[
        {period:'Role 1', title:'Leader', desc:'Supervises patient care, provides psychosocial support, delivers timely feedback, and fosters reflective decision-making.', action:'Supervise & support'},
        {period:'Role 2', title:'Educator', desc:'Assesses learning needs, designs clinical experiences, teaches skills, and links theory to practice.', action:'Teach & connect'},
        {period:'Role 3', title:'Socializer', desc:'Introduces the orientee to the nursing role and clinical environment, building a positive, welcoming atmosphere.', action:'Welcome & integrate'},
        {period:'Role 4', title:'Role Model', desc:'Demonstrates professional and ethical behavior, exemplifying clinical excellence and evidence-based practice.', action:'Model excellence'}
      ]
    },
    { type:'dnd', code:'1.2-ACT', title:'Match the Behavior to the Role',
      instructions:'Drag each observed behavior onto the preceptor role it best represents.',
      items:[
        {label:'Fosters reflective decision-making', targetIdx:0},
        {label:'Links nursing theory to practice', targetIdx:1},
        {label:'Introduces unit-specific workflows', targetIdx:2},
        {label:'Demonstrates evidence-based care at the bedside', targetIdx:3},
        {label:'Provides timely, constructive feedback', targetIdx:0},
        {label:'Designs a clinical learning experience', targetIdx:1}
      ],
      targets:[
        {label:'Leader'},
        {label:'Educator'},
        {label:'Socializer'},
        {label:'Role Model'}
      ],
      feedback:'Remember: these roles overlap constantly — the same conversation can be leadership, teaching, and role modeling at once.'
    },
    { type:'video', code:'1.2-MEDIA', title:'Role Modeling in Action',
      lede:'A bedside vignette showing a preceptor shifting fluidly between the Leader and Educator roles during a medication pass — narrated in the moment, not scripted after the fact.',
      runtime:'3:40',
    },
    { type:'scenario', code:'1.3', kicker:'The COPA Model', title:'Competency Outcomes Performance Assessment',
      setup:'Developed by Dr. Lenburg, the COPA model identifies eight essential competencies that form the foundation of professional nursing practice, compatible with QSEN knowledge, skills, and attitudes.',
      dialogue:[
        {role:'preceptor', name:'Eight Competencies', text:'1. Assessment & Intervention · 2. Communication · 3. Critical Thinking · 4. Teaching · 5. Human Caring Relationships · 6. Management · 7. Leadership · 8. Knowledge Integration'}
      ],
      tip:'A competency-based orientation balances didactic content (policies, protocols) with clinical content (hands-on practice) — never more than 2–3 consecutive didactic days without clinical application.'
    },
    { type:'selfassessment', code:'1.3-PPSA', kicker:'Preceptor Preparation Self-Assessment',
      title:'PPSA — Rate Yourself Across Eight Domains',
      lede:'This is the full, validated 72-item Preceptor Preparation Self-Assessment (PPSA), covering Core Competencies through Evaluator. Rate each item honestly on the 1–4 scale below — your domain averages and overall score will calculate automatically once every item is answered.',
      passRate: 3.0,
      domains:[
        { code:'A', name:'Core Competencies', items:[
          'Applies evidence-based practice',
          'Solves problems',
          'Respects others\u2019 opinions, viewpoints, time',
          'Respects diversity',
          'Maintains preceptee\u2019s confidentiality',
          'Promotes preceptee\u2019s self-stewardship (commitment to oneself)'
        ]},
        { code:'B', name:'Role Model', items:[
          'Recognizes impact of preceptor\u2019s personal attitudes/attributes, behaviors, competency level on preceptee',
          'Demonstrates competent, evidence-based practice (e.g., knowledge, skills, abilities, judgment)',
          'Demonstrates personal responsibility and accountability',
          'Demonstrates healthy and safe behaviors',
          'Demonstrates commitment to professional development'
        ]},
        { code:'C', name:'Teacher/Coach', items:[
          'Applies principles of adult learning and other applicable learning theories',
          'Incorporates cognitive, psychomotor, and affective domains of learning',
          'Establishes an ongoing collaborative and trusting relationship with preceptee',
          'Assesses preceptee\u2019s understanding (e.g., situational awareness, knowledge)',
          'Determines desired learning outcomes for preceptee',
          'Focuses on key learning opportunities',
          'Promotes progressive experiential learning',
          'Fosters the preceptee\u2019s ownership of learning',
          'Develops the preceptee\u2019s strengths',
          'Modifies experiences based on assessment of preceptee\u2019s individual needs',
          'Uses a positive approach to ask questions, to promote self-awareness, search for solutions, and focus on processes',
          'Uses silence appropriately to allow preceptee to process information when communicating',
          'Fosters situational awareness with questions, observation of patterns, or absence of expected patterns',
          'Thinks out loud to demonstrate critical thinking and decision-making processes',
          'Guides preceptee in differentiating what data/information is important and what is not',
          'Guides preceptee to analyze situations and intervene appropriately (e.g., consider alternatives and desired outcomes)',
          'Develops preceptee\u2019s ability to prioritize both individual patient care and simultaneous care of multiple patients',
          'Helps preceptee identify errors and near misses',
          'Supports preceptee\u2019s correct demonstration of skill/behavior even when confronted with incorrect practices of others',
          'Guides preceptee to seek evidence/information from credible resources (e.g., policies and procedures, decision support tools, etc.)',
          'Redirects counterproductive preceptee behaviors',
          'Entrusts preceptee with progressively independent activities as appropriate',
          'Debriefs after preceptee\u2019s experiences',
          'Encourages preceptee self-awareness, reflection, and thinking aloud'
        ]},
        { code:'D', name:'Facilitator', items:[
          'Recognizes learning opportunities',
          'Creates purposeful learning experiences related to the preceptee\u2019s assessed learning needs and interests',
          'Negotiates learning opportunities (e.g., accompany patient to procedure, assist with other patients)',
          'Provides resources for support',
          'Determines effectiveness of learning situations'
        ]},
        { code:'E', name:'Protector', items:[
          'Clarifies with preceptee that preceptor may intervene during patient care to ensure safety',
          'Ensures a physically and psychologically safe environment for the preceptee (e.g., free of workplace injuries and physical abuse; ergonomics; sharps safety; hazardous materials management)',
          'Promotes a just culture including differentiation of types of errors that may occur (e.g., human, at-risk, reckless)',
          'Encourages preceptee to advocate for self and others (e.g., courage to speak own truth)',
          'Anticipates issues/concerns that can result in moral distress to prepare preceptee',
          'Promotes acceptance of preceptee by all staff members',
          'Intervenes when confronted with disruptive/abusive behavior from others',
          'Uses disruptive/abusive behaviors as a learning opportunity for prevention and future management'
        ]},
        { code:'F', name:'Socialization Agent', items:[
          'Recognizes \u201creality shock\u201d (i.e., expectation in school versus reality)',
          'Shares unspoken rules, and norms, values, and culture of shift, unit, department, and organization',
          'Includes the preceptee in unit/department activities',
          'Provides opportunities for unit, interprofessional, and organizational engagement for preceptee'
        ]},
        { code:'G', name:'Leader/Influencer', items:[
          'Advocates for patient choice',
          'Demonstrates accountability (e.g., obligation, commitment, willingness, intent, trust)',
          'Demonstrates professional values',
          'Recognizes scope of practice of healthcare team members',
          'Facilitates effective interprofessional team practice',
          'Practices the \u201crights\u201d of delegation',
          'Supports formation of preceptee\u2019s professional role identity',
          'Provides meaningful recognition to preceptee',
          'Ensures smooth transition of preceptee between preceptors',
          'Adheres to organizational compliance program and code of conduct',
          'Adheres to HIPAA regulations',
          'Participates in unit/organization professional activities',
          'Reflects on own leadership competencies'
        ]},
        { code:'H', name:'Evaluator', items:[
          'Holds preceptee accountable',
          'Validates performance of critical components for each required competency',
          'Describes gap that exists between expectation and performance',
          'Provides feedback to preceptee (e.g., timely, positive, constructive, nonpunitive, concise, and specifically focused feedback)',
          'Provide accurate, specific, written, and verbal evaluation of preceptee performance',
          'Manages difficult conversations when providing constructive feedback (e.g., resolves differences, demonstrates flexibility)',
          'Communicates preceptee behavioral patterns (e.g., strengths, opportunities for improvement) using documents, reports, or other forms of communication'
        ]}
      ]
    },
    { type:'branch', code:'1.4', title:'Activity: Am I Ready to Precept?',
      nodes:{
        start:{
          prompt:'You complete the Preceptor Preparation Self-Assessment (PPSA) and your average domain score is <strong>2.4</strong> (on a 1–4 scale). What should you do next?',
          options:[
            {text:'Accept a preceptee assignment immediately — a 2.4 is passing.', severity:'risk', feedback:'A score of 2.0–2.9 falls in the "Developing — Needs Support" band. Precepting now risks inconsistent teaching and feedback for your orientee.'},
            {text:'Identify your lowest-scoring domain and pair with an experienced preceptor before taking an assignment.', severity:'good', feedback:'Correct. The PPSA is meant to drive a targeted development plan — connect with a mentor, shadow an experienced preceptor, and reassess before independently precepting.', next:'follow'},
            {text:'Ignore the result — self-assessment isn\'t a reliable measure anyway.', severity:'caution', feedback:'Self-assessment has real limits, but a validated 73-item tool with α = 0.98 overall reliability is a credible signal worth acting on, not dismissing.'}
          ]
        },
        follow:{
          prompt:'Three months later, you retake the PPSA and score 3.6 overall. What\'s the appropriate next step?',
          options:[
            {text:'Begin precepting — you\'re in the "Good – Prepared" band with only minor development areas.', severity:'good', feedback:'Correct. 3.0–3.9 indicates adequate competency; continue seeking mentorship for the areas still developing.'},
            {text:'Wait until you hit a perfect 4.0 before precepting anyone.', severity:'caution', feedback:'Perfection isn\'t the bar — "Good – Prepared" is sufficient to begin, with continued growth alongside your first preceptee.'}
          ]
        }
      }
    },
    { type:'kc', code:'1-CHECK', questions:[
      { domain:'Definitions', stem:'What primarily distinguishes preceptorship from mentorship?',
        options:[
          {text:'Preceptorship is informal and career-focused.', correct:false},
          {text:'Preceptorship is formal, time-limited, and clinically focused; mentorship is informal and long-term.', correct:true},
          {text:'They are functionally identical.', correct:false},
          {text:'Mentorship always involves formal competency sign-off.', correct:false}
        ], feedbackCorrect:'Exactly — preceptorship has a predetermined endpoint and an assessment function that mentorship lacks.'
      },
      { domain:'Core Roles', stem:'A preceptor who explains unit-specific documentation systems and helps the orientee feel welcomed on the team is primarily acting as a:',
        options:[
          {text:'Leader', correct:false},
          {text:'Socializer', correct:true},
          {text:'Role Model', correct:false},
          {text:'Evaluator', correct:false}
        ], feedbackCorrect:'Right — introducing the clinical environment and building a positive atmosphere is the Socializer role.'
      },
      { domain:'COPA Model', stem:'Which of the following is one of the COPA model\'s eight essential competencies?',
        options:[
          {text:'Nomophobia management', correct:false},
          {text:'Human caring relationships', correct:true},
          {text:'Payroll administration', correct:false},
          {text:'Generational marketing', correct:false}
        ], feedbackCorrect:'Correct — Human Caring Relationships is one of the eight COPA competencies, alongside Assessment, Communication, Critical Thinking, Teaching, Management, Leadership, and Knowledge Integration.'
      }
    ]},
    { type:'summary', code:'1-SUM', points:[
      {title:'Preceptorship, Defined', text:'A formal, time-limited, 1:1 teaching relationship distinct from mentorship (informal, career-long) and orientation (administrative, facility-wide).'},
      {title:'Four Core Roles', text:'Leader, Educator, Socializer, and Role Model — fluid, overlapping, and situational.'},
      {title:'The COPA Model', text:'Eight competencies (Assessment, Communication, Critical Thinking, Teaching, Caring, Management, Leadership, Knowledge Integration) anchor competency-based orientation.'},
      {title:'Self-Assessment First', text:'Use the PPSA to identify development needs before accepting a preceptee assignment.'}
    ]}
  ]
};
