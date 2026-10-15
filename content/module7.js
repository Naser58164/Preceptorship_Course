const module7 = {
  id:'m7', code:'FA', title:'Final Assessment & Certificate',
  pages:[
    { type:'scenario', code:'FA-PREP', kicker:'Before You Begin', title:'Final Competency Assessment',
      setup:'This scored assessment draws on all six modules and mirrors the "Does" level of Miller\'s Pyramid — applying frameworks to realistic clinical scenarios, not just recalling definitions. A pass mark of 80% validates your readiness to precept.',
      dialogue:[
        {role:'preceptor', name:'Format', text:'12 scenario-based questions, one attempt shown at a time, immediate scoring on submission. You may retry if you do not pass.'}
      ],
      tip:'Take a moment to review any module summary pages before continuing, if you\'d like a refresher.'
    },
    { type:'finalassessment', title:'Precepting Excellence — Final Competency Assessment',
      instructions:'Answer all questions, then submit for your score. A minimum of 80% (10/12) is required to validate competency and unlock your certificate.',
      passRate:0.8,
      questions:[
        { domain:'Foundations', stem:'What is the core distinction between preceptorship and mentorship?',
          options:[
            {text:'Preceptorship is formal and time-limited; mentorship is informal and long-term.', correct:true},
            {text:'They are interchangeable terms.', correct:false},
            {text:'Mentorship always includes a competency assessment.', correct:false},
            {text:'Preceptorship covers general facility policy, not clinical skill.', correct:false}
          ]},
        { domain:'Foundations', stem:'Which preceptor role is primarily responsible for introducing the orientee to unit-specific workflows and building a welcoming atmosphere?',
          options:[
            {text:'Leader', correct:false},
            {text:'Educator', correct:false},
            {text:'Socializer', correct:true},
            {text:'Evaluator', correct:false}
          ]},
        { domain:'COPA Model', stem:'Which is one of the eight COPA competencies?',
          options:[
            {text:'Human caring relationships', correct:true},
            {text:'Payroll administration', correct:false},
            {text:'Shift scheduling', correct:false},
            {text:'Equipment procurement', correct:false}
          ]},
        { domain:'Adult Learning', stem:'A preceptee says, "Just tell me why this matters before we start." Which andragogy characteristic is this?',
          options:[
            {text:'Practical', correct:false},
            {text:'Relevancy-focused', correct:true},
            {text:'Experience-based', correct:false},
            {text:'Goal-oriented', correct:false}
          ]},
        { domain:'Teaching Models', stem:'In the SNAPPS model, which step involves the learner asking the preceptor about their own uncertainties?',
          options:[
            {text:'Summarize', correct:false},
            {text:'Probe', correct:true},
            {text:'Select', correct:false},
            {text:'Narrow', correct:false}
          ]},
        { domain:'Evaluation', stem:'An end-of-orientation assessment using BKAT is an example of which evaluation type?',
          options:[
            {text:'Formative', correct:false},
            {text:'Summative', correct:true},
            {text:'Peer review', correct:false},
            {text:'Self-assessment only', correct:false}
          ]},
        { domain:'Bias Mitigation', stem:'Which practice best reduces evaluation bias?',
          options:[
            {text:'Using absolute language like "always" and "never" for clarity', correct:false},
            {text:'Relying solely on your own single observation', correct:false},
            {text:'Behavior-based, dated documentation cross-checked against a second data source', correct:true},
            {text:'Avoiding all documentation to prevent formal disputes', correct:false}
          ]},
        { domain:'Communication', stem:'A nurse states: "I recommend starting broad-spectrum antibiotics and drawing blood cultures." Which SBAR component is this?',
          options:[
            {text:'Situation', correct:false},
            {text:'Background', correct:false},
            {text:'Assessment', correct:false},
            {text:'Recommendation', correct:true}
          ]},
        { domain:'Communication', stem:'Which SACCIA competency addresses framing communication within hierarchy, timing, and cultural context?',
          options:[
            {text:'Sufficiency', correct:false},
            {text:'Contextualization', correct:true},
            {text:'Accuracy', correct:false},
            {text:'Clarity', correct:false}
          ]},
        { domain:'Time Management', stem:'Under the ABC prioritization framework, an escalating chest pain complaint should be treated as:',
          options:[
            {text:'A "C" — comfort and education, addressed last', correct:false},
            {text:'An "A" — immediate action required', correct:true},
            {text:'Something to delegate to a CNA', correct:false},
            {text:'Lower priority than a scheduled treatment', correct:false}
          ]},
        { domain:'Critical Thinking', stem:'In the eight-step critical thinking process, "Validate" occurs directly after which step?',
          options:[
            {text:'Assess', correct:true},
            {text:'Formulate', correct:false},
            {text:'Evaluate', correct:false},
            {text:'Consider', correct:false}
          ]},
        { domain:'Reality Shock', stem:'Which phase of Kramer\'s Reality Shock theory carries the highest risk of a novice nurse resigning?',
          options:[
            {text:'Honeymoon Phase', correct:false},
            {text:'Shock Phase (3–6 months)', correct:true},
            {text:'Recovery Phase', correct:false},
            {text:'Resolution Phase', correct:false}
          ]}
      ]
    },
    { type:'certificate', passRate:0.8 }
  ]
};
