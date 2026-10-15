/* ============================================================
   Minimal SCORM 2004 (3rd/4th Ed) API wrapper
   Finds the API in the parent/opener chain, initializes the
   session, and exposes get/set/commit/terminate helpers plus
   convenience methods used by course-engine.js
   ============================================================ */
const SCORM = (function(){
  let api = null;
  let initialized = false;
  const MAX_SEARCH_UP = 10;

  function findAPI(win){
    let attempts = 0;
    while (win && !win.API_1484_11 && attempts < MAX_SEARCH_UP){
      if (win.parent && win.parent !== win){ win = win.parent; } else { break; }
      attempts++;
    }
    return win ? win.API_1484_11 : null;
  }

  function getAPI(){
    if (api) return api;
    api = findAPI(window);
    if (!api && window.opener) api = findAPI(window.opener);
    return api;
  }

  function init(){
    const a = getAPI();
    if (!a){ console.warn('[SCORM] No LMS API found — running in standalone/preview mode.'); return false; }
    const ok = a.Initialize('');
    initialized = (ok === 'true' || ok === true);
    if (initialized){
      a.SetValue('cmi.completion_status', 'incomplete');
      a.SetValue('cmi.success_status', 'unknown');
      a.Commit('');
    }
    return initialized;
  }

  function get(key){
    const a = getAPI();
    if (!a || !initialized) return '';
    return a.GetValue(key);
  }

  function set(key, val){
    const a = getAPI();
    if (!a || !initialized) return false;
    a.SetValue(key, String(val));
    return true;
  }

  function commit(){
    const a = getAPI();
    if (!a || !initialized) return false;
    a.Commit('');
    return true;
  }

  function recordInteraction(id, type, learnerResponse, correctResponse, result, description){
    const a = getAPI();
    if (!a || !initialized) return;
    // find next interaction index
    let n = 0;
    try { n = parseInt(get('cmi.interactions._count') || '0', 10); } catch(e){ n = 0; }
    const p = `cmi.interactions.${n}.`;
    set(p + 'id', id);
    set(p + 'type', type);
    set(p + 'timestamp', new Date().toISOString().substr(11,8));
    set(p + 'learner_response', learnerResponse);
    set(p + 'correct_responses.0.pattern', correctResponse);
    set(p + 'result', result);
    set(p + 'description', description || '');
    commit();
  }

  function setScore(raw, max){
    set('cmi.score.raw', raw);
    set('cmi.score.max', max);
    set('cmi.score.scaled', (max > 0 ? (raw/max).toFixed(2) : 0));
  }

  function setCompletion(status){ set('cmi.completion_status', status); commit(); }
  function setSuccess(status){ set('cmi.success_status', status); commit(); }
  function saveSuspendData(obj){ set('cmi.suspend_data', JSON.stringify(obj)); commit(); }
  function loadSuspendData(){
    const raw = get('cmi.suspend_data');
    if (!raw) return null;
    try { return JSON.parse(raw); } catch(e){ return null; }
  }
  function setLocation(loc){ set('cmi.location', loc); commit(); }
  function getLocation(){ return get('cmi.location'); }

  function terminate(){
    const a = getAPI();
    if (!a || !initialized) return;
    commit();
    a.Terminate('');
    initialized = false;
  }

  window.addEventListener('beforeunload', function(){ if (initialized) terminate(); });

  return {
    init, get, set, commit, terminate,
    recordInteraction, setScore, setCompletion, setSuccess,
    saveSuspendData, loadSuspendData, setLocation, getLocation,
    isActive: () => initialized
  };
})();
