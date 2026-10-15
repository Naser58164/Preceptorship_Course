const module4 = {
  id:'m4', code:'04', title:'Professional Communication & Feedback',
  pages:[
    { type:'outcomes', code:'4.0', title:'Module 4 Outcomes',
      outcomes:[
        {text:'Apply the SBAR framework to a clinical handover or escalation.', bloom:'Apply', bloomLevel:3},
        {text:'Explain the five competencies of the SACCIA safe communication model.', bloom:'Understand', bloomLevel:2},
        {text:'Deliver feedback using the Feedback Sandwich and R2C2 models.', bloom:'Apply', bloomLevel:3},
        {text:'Build psychological safety that supports open, nonjudgmental feedback.', bloom:'Analyze', bloomLevel:4}
      ]
    },
    { type:'scenario', code:'4.1', kicker:'SBAR Framework', title:'A Standardized Language for Clinical Communication',
      setup:'Originally developed by the U.S. Navy for nuclear submarine communication, SBAR was adapted for healthcare in the 1990s and is now endorsed by the Joint Commission, IHI, and WHO.',
      dialogue:[
        {role:'preceptor', name:'S — Situation', text:'Identify yourself, the patient, and the reason for communication — what\'s happening right now that requires attention.'},
        {role:'preceptor', name:'B — Background', text:'Admission diagnosis, prior procedures, current medications, allergies, and relevant results.'},
        {role:'novice', name:'A — Assessment', text:'Your professional conclusion — vital signs, symptoms, and clinical judgment about current status.'},
        {role:'novice', name:'R — Recommendation', text:'What action is needed, specifically and with a timeframe.'}
      ],
      tip:'SBAR bridges the narrative style nurses are trained in with the succinct style physicians expect — leveling hierarchy between disciplines.'
    },
    { type:'scenario', code:'4.1-CASE', kicker:'Clinical Application', title:'SBAR in Practice: Emergency Escalation',
      setup:'A novice nurse calls a physician about a deteriorating ICU patient.',
      alert:true,
      dialogue:[
        {role:'novice', name:'Situation', text:'"Dr. Ahmed, this is Nurse Ali from ICU. I\'m calling about Mrs. Jokha in Bed 2, who has developed a high fever and hypotension."'},
        {role:'novice', name:'Background', text:'"72-year-old female admitted 3 days ago with pneumonia, receiving IV antibiotics. History includes hypertension and diabetes."'},
        {role:'novice', name:'Assessment', text:'"Temp 39.4°C, BP 88/54, HR 110. Despite fluids, remains hypotensive and increasingly lethargic."'},
        {role:'novice', name:'Recommendation', text:'"I recommend starting broad-spectrum antibiotics for possible sepsis and considering vasopressor support. Should we draw blood cultures?"'}
      ],
      tip:'Organize thoughts before communicating, be concise, use readback for verification, and collaborate on the action plan.'
    },
    { type:'tps', code:'4.1-TPS', title:'Think–Pair–Share: Coach an Incomplete SBAR',
      think:'A novice tells you: "The patient looks bad, can you come check?" What\'s missing from an SBAR standpoint, and how would you coach them to restructure it in the moment?',
      exemplar:'This statement skips Situation specifics (who, where, what\'s different right now), all of Background, and gives no Assessment or Recommendation. A supportive in-the-moment coaching response: "Let\'s SBAR this together — what are you seeing right now? What\'s their history? What do you think is happening, and what do you want me to do?" This turns a vague alert into a structured, actionable handover while teaching the framework live.'
    },
    { type:'scenario', code:'4.2', kicker:'SACCIA Safe Communication', title:'Five Competencies for Shared Understanding',
      setup:'SACCIA addresses why up to 80% of preventable healthcare-induced patient harm stems from unsafe interpersonal communication among clinicians and with patients.',
      dialogue:[
        {role:'preceptor', name:'S · A · C', text:'<strong>Sufficiency</strong> — enough information exchanged. <strong>Accuracy</strong> — correct information, verified. <strong>Clarity</strong> — unambiguous, jargon-free expression.'},
        {role:'novice', name:'C · IA', text:'<strong>Contextualization</strong> — framing within functional, relational, chronological, environmental, and cultural circumstances. <strong>Interpersonal Adaptation</strong> — responding to expressed and unspoken needs with empathy.'}
      ],
      tip:'SACCIA operates through three processes: Encoding (turning thoughts into words), Decoding (interpreting received messages), and the Transactional process (interactive sense-making).'
    },
    { type:'journal', code:'4.2-REFLECT', title:'Psychological Safety in Your Own Precepting',
      prompt:'Psychological safety is the belief that the environment is safe for interpersonal risk-taking — admitting mistakes, asking questions, voicing concerns. On a recent shift, did your preceptee show any of the four dimensions of psychological safety (safe to ask questions, admit mistakes, seek help, voice concerns)? Where could you strengthen it?',
      placeholder:'Reflect on a specific interaction and one concrete strategy you\'ll try next shift...'
    },
    { type:'scenario', code:'4.3', kicker:'The Feedback Sandwich', title:'A Structured Approach to Balanced Feedback',
      setup:'Positive Feedback → Constructive Feedback → Positive Reinforcement. Strengths: highly structured, cushions critical feedback, maintains engagement. Limitations: can create anticipation anxiety, feel formulaic if overused, and risk false-positive impressions if mostly praise.',
      dialogue:[
        {role:'preceptor', name:'1. Positive', text:'"You thoroughly assessed the patient\'s pain using the 0–10 scale and documented it promptly."'},
        {role:'preceptor', name:'2. Constructive', text:'"Next time, use the two-identifier rule before administering medications. Let\'s practice together."'},
        {role:'preceptor', name:'3. Reinforcement', text:'"I know you can master this with practice. I\'m here to support you, and we\'ll review this again tomorrow."'}
      ]
    },
    { type:'video', code:'4.5-MEDIA', title:'Feedback Sandwich: Missed Medication Timing',
      lede:'A preceptor addresses a medication timing lapse while reinforcing genuine strengths — the "Missed Medication" live-demonstration scenario, staged shot by shot.',
      runtime:'3:30',
    },
    { type:'scenario', code:'4.5-R2C2', kicker:'R2C2 Model', title:'A Deeper Feedback Framework',
      setup:'R2C2 adds relational depth to the feedback sandwich: Rapport → Reaction → Content → Coaching.',
      dialogue:[
        {role:'preceptor', name:'Rapport & Reaction', text:'Build trust and psychological safety first, then explore the learner\'s own perspective and emotional response to the situation.'},
        {role:'novice', name:'Content & Coaching', text:'Deliver specific, behavior-based feedback with clear examples, then collaborate on strategies for improvement and future development.'}
      ],
      tip:'Reinforce verbal feedback nonverbally — body language (like a genuine smile at a well-executed procedure) significantly impacts how the message lands.'
    },
    { type:'dnd', code:'4.6-ACT', title:'Behavior-Focused or Character-Focused?',
      instructions:'Sort each feedback statement by whether it follows nonjudgmental, behavior-focused principles.',
      items:[
        {label:'"I noticed the allergy check wasn\'t done before administration — tell me about that."', targetIdx:0},
        {label:'"You\'re just careless with medications."', targetIdx:1},
        {label:'"I observed you verified two identifiers — that builds patient trust."', targetIdx:0},
        {label:'"You never take this seriously."', targetIdx:1},
        {label:'"How do you think that assessment went?"', targetIdx:0}
      ],
      targets:[
        {label:'Behavior-Focused (Effective)'},
        {label:'Character-Focused (Avoid)'}
      ],
      feedback:'Use "I" statements, ask open-ended questions, and invite explanation ("Tell me about that") rather than judging character.'
    },
    { type:'branch', code:'4.6-DECISION', title:'Decision: The Overwhelmed Novice',
      nodes:{
        start:{
          prompt:'A novice nurse appeared overwhelmed and froze during a rapid response, requiring senior staff to step in. In your debrief, what\'s the best opening move?',
          options:[
            {text:'"You froze during a code — that\'s a serious problem for someone in your position."', severity:'risk', feedback:'Character-focused and judgmental framing; likely to trigger defensiveness and shut down honest reflection.'},
            {text:'"That must have been intense. Walk me through what you were experiencing in that moment."', severity:'good', feedback:'Correct — this uses SACCIA\'s Interpersonal Adaptation and opens with empathy before addressing skill development, consistent with R2C2\'s Rapport-then-Reaction sequence.', next:'next'},
            {text:'Say nothing and hope it doesn\'t happen again.', severity:'caution', feedback:'Avoidance misses a critical opportunity to build both confidence and competence for high-acuity situations.'}
          ]
        },
        next:{
          prompt:'The novice shares they felt frozen with fear. What\'s the appropriate next step?',
          options:[
            {text:'Move to Coaching: co-create a simple role in future codes (e.g., timekeeper) to build graduated confidence.', severity:'good', feedback:'Correct — this pairs emotional support with a concrete skill-development plan, per R2C2\'s Coaching phase.'},
            {text:'Assign them to the next code with full responsibility to "get over it."', severity:'risk', feedback:'Skips graduated exposure and risks reinforcing the freeze response rather than building competence.'}
          ]
        }
      }
    },
    { type:'kc', code:'4-CHECK', questions:[
      { domain:'SBAR', stem:'In SBAR, "I recommend starting broad-spectrum antibiotics and drawing blood cultures" belongs to which component?',
        options:[
          {text:'Situation', correct:false},
          {text:'Background', correct:false},
          {text:'Assessment', correct:false},
          {text:'Recommendation', correct:true}
        ], feedbackCorrect:'Correct — Recommendation states the specific action or intervention needed.'
      },
      { domain:'SACCIA', stem:'Framing communication within hierarchy, timing, and cultural norms describes which SACCIA competency?',
        options:[
          {text:'Accuracy', correct:false},
          {text:'Contextualization', correct:true},
          {text:'Clarity', correct:false},
          {text:'Sufficiency', correct:false}
        ], feedbackCorrect:'Right — Contextualization frames communication within functional, relational, chronological, environmental, and cultural circumstances.'
      },
      { domain:'Feedback Models', stem:'Which is a documented limitation of the Feedback Sandwich model?',
        options:[
          {text:'It is too unstructured for new preceptors.', correct:false},
          {text:'It can feel formulaic if overused and risks a false-positive impression.', correct:true},
          {text:'It cannot be used for positive feedback.', correct:false},
          {text:'It replaces the need for psychological safety.', correct:false}
        ], feedbackCorrect:'Correct — overuse can feel scripted, and heavy praise can dilute the corrective message.'
      }
    ]},
    { type:'summary', code:'4-SUM', points:[
      {title:'SBAR', text:'Situation, Background, Assessment, Recommendation — a shared mental model for handoffs and escalations.'},
      {title:'SACCIA', text:'Sufficiency, Accuracy, Clarity, Contextualization, Interpersonal Adaptation — safe, shared understanding.'},
      {title:'Feedback Sandwich & R2C2', text:'Structure balanced feedback, and deepen it with Rapport, Reaction, Content, and Coaching.'},
      {title:'Psychological Safety', text:'The foundation that lets novices ask questions, admit mistakes, seek help, and voice concerns without fear.'}
    ]}
  ]
};
