<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Medico Construction & Design Project Assessment</title>
<!-- Add Medico Meta Pixel here if needed -->

<style>body{margin:0;padding:32px 16px;background:#F5F7F8;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;}</style>
</head>
<body>




<!-- =========================================================
     PASTE EVERYTHING BELOW THIS LINE INTO YOUR CMS CODE BLOCK
     -----------------------------------------------------------
     data-webhook            : where the lead is POSTed
     data-otp-request-url    : Vercel endpoint to send the OTP code
     data-otp-verify-url     : Vercel endpoint to verify the OTP code
     OTP is active with text and call.
     ========================================================= -->

<div class="bp-root"
     data-webhook="https://connect.pabbly.com/webhook-listener/webhook/IjU3NjAwNTZiMDYzMjA0M2M1MjZjNTUzMiI_3D_pc/IjU3NjcwNTY4MDYzNDA0MzY1MjZmNTUzMjUxMzAi_pc"
     data-otp-request-url="/api/send-otp"
     data-otp-verify-url="/api/verify-otp">

<style>
.bp-root *,.bp-root *::before,.bp-root *::after{box-sizing:border-box}
.bp-root{
  --bp-primary:#143A52;
  --bp-primary-hover:#0F2F43;
  --bp-primary-active:#0A2535;
  --bp-primary-soft:#EAF1F4;
  --bp-primary-ring:rgba(20,58,82,0.22);
  --bp-navy:#143A52;
  --bp-header-bg:#EEF3F5;
  --bp-card-selected:#EEF5F7;
  --bp-ink-900:#0F172A;
  --bp-ink-700:#334155;
  --bp-ink-600:#475569;
  --bp-ink-500:#6B7280;
  --bp-ink-400:#9CA3AF;
  --bp-ink-300:#D1D5DB;
  --bp-ink-200:#E5E7EB;
  --bp-ink-100:#F3F4F6;
  --bp-bg:#FFFFFF;
  --bp-error:#DC2626;
  --bp-error-soft:#FEF2F2;
  --bp-ease:cubic-bezier(0.4,0,0.2,1);
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  color:var(--bp-ink-900);
  width:100%;
  max-width:720px;
  margin:0 auto;
  -webkit-font-smoothing:antialiased;
}
.bp-root button{font-family:inherit}

.bp-card-shell{
  background:var(--bp-bg);
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 1px 3px rgba(15,23,42,0.06),0 12px 32px rgba(15,23,42,0.10);
}

.bp-header{background:var(--bp-header-bg);padding:26px 28px 22px}
.bp-header-title{font-size:23px;line-height:1.28;font-weight:700;color:var(--bp-navy);margin:0 0 8px}
.bp-header-subtitle{margin:0 0 18px;color:var(--bp-ink-700);font-size:16px;line-height:1.5;font-weight:500}
.bp-header-trust{display:flex;flex-direction:column;gap:12px}
.bp-trust{display:flex;align-items:center;gap:9px;font-size:14px;color:var(--bp-ink-700);font-weight:500}
.bp-trust svg{width:20px;height:20px;flex-shrink:0;color:var(--bp-ink-400)}

.bp-body{padding:24px 28px 30px}

.bp-progress-wrap{margin-bottom:26px}
.bp-progress-meta{display:flex;justify-content:space-between;align-items:center;margin-bottom:9px;font-size:13px;color:var(--bp-ink-500);font-weight:500}
.bp-progress-meta strong{color:var(--bp-ink-700);font-weight:600}
.bp-progress-track{height:5px;background:var(--bp-ink-200);border-radius:999px;overflow:hidden}
.bp-progress-fill{height:100%;background:var(--bp-primary);border-radius:999px;width:0%;transition:width 420ms var(--bp-ease)}

.bp-stage{position:relative;min-height:340px}
.bp-step{opacity:0;transform:translateX(22px);transition:opacity 260ms var(--bp-ease),transform 260ms var(--bp-ease);will-change:opacity,transform}
.bp-step.bp-enter{opacity:1;transform:translateX(0)}
.bp-step.bp-exit{opacity:0;transform:translateX(-22px);transition-duration:210ms;pointer-events:none;position:absolute;top:0;left:0;right:0}
.bp-step.bp-from-left{transform:translateX(-22px)}

.bp-section{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.bp-section-num{width:36px;height:36px;border-radius:50%;background:var(--bp-primary-soft);color:var(--bp-primary);font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.bp-section-label{font-size:13px;font-weight:700;letter-spacing:0.09em;color:var(--bp-primary);text-transform:uppercase}

.bp-title{font-size:26px;line-height:1.2;font-weight:700;color:var(--bp-ink-900);margin:0 0 8px}
.bp-subtitle{font-size:15px;line-height:1.5;color:var(--bp-ink-500);margin:0 0 22px}

.bp-card-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.bp-card-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.bp-card-list .bp-card{width:100%;min-height:64px}
.bp-card{position:relative;display:flex;align-items:center;justify-content:center;min-height:62px;padding:14px 46px;background:var(--bp-bg);border:1.5px solid var(--bp-ink-300);border-radius:12px;font-weight:600;font-size:16px;color:var(--bp-ink-900);cursor:pointer;text-align:center;line-height:1.3;transition:border-color 150ms var(--bp-ease),background 150ms var(--bp-ease),box-shadow 200ms var(--bp-ease),transform 120ms var(--bp-ease);-webkit-tap-highlight-color:transparent}
.bp-card:hover{border-color:var(--bp-primary);background:var(--bp-primary-soft)}
.bp-card:active{transform:scale(0.99)}
.bp-card:focus-visible{outline:none;box-shadow:0 0 0 3px var(--bp-primary-ring)}
.bp-card.bp-selected{border-color:var(--bp-primary);background:var(--bp-card-selected);box-shadow:0 0 0 1px var(--bp-primary) inset}
.bp-card-check{position:absolute;right:14px;top:50%;transform:translateY(-50%);width:22px;height:22px;color:var(--bp-primary);opacity:0;transition:opacity 120ms var(--bp-ease)}
.bp-card-check svg{width:100%;height:100%}
.bp-card.bp-selected .bp-card-check{opacity:1}

.bp-input,.bp-select{width:100%;height:52px;background:var(--bp-bg);border:1.5px solid var(--bp-ink-300);border-radius:9px;padding:0 14px;font-size:16px;font-family:inherit;color:var(--bp-ink-900);transition:border-color 150ms var(--bp-ease),box-shadow 150ms var(--bp-ease);-webkit-appearance:none;-moz-appearance:none;appearance:none}
.bp-input::placeholder{color:var(--bp-ink-400)}
.bp-input:focus,.bp-select:focus{outline:none;border-color:var(--bp-primary);box-shadow:0 0 0 3px var(--bp-primary-ring)}
.bp-input.bp-invalid,.bp-select.bp-invalid{border-color:var(--bp-error);background:var(--bp-error-soft)}
.bp-input[type="date"]{color:var(--bp-ink-900);min-height:52px}
.bp-input[type="date"].bp-empty{color:var(--bp-ink-400)}
.bp-input[type="date"]::-webkit-calendar-picker-indicator{cursor:pointer;opacity:0.55}
.bp-input[type="date"]::-webkit-date-and-time-value{text-align:left}
.bp-select{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>");background-repeat:no-repeat;background-position:right 14px center;padding-right:44px}

.bp-field{margin-bottom:16px}
.bp-field-label{display:block;font-size:14px;font-weight:600;color:var(--bp-ink-700);margin-bottom:8px}
.bp-req{color:var(--bp-error)}
.bp-input-wrap{position:relative}
.bp-input-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--bp-ink-400);display:flex;pointer-events:none}
.bp-input-icon svg{width:20px;height:20px}
.bp-input-iconned{padding-left:42px}
.bp-field-row{display:flex;gap:12px}
.bp-field-row .bp-field{flex:1}

.bp-error-msg{font-size:13px;color:var(--bp-error);margin-top:6px;line-height:1.4;display:flex;align-items:center;gap:4px}
.bp-error-msg svg{flex-shrink:0}

.bp-slider-wrap{padding:6px 0 2px}
.bp-slider-value{text-align:center;font-size:30px;font-weight:700;color:var(--bp-primary);margin-bottom:18px;min-height:36px;letter-spacing:-0.01em}
.bp-slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;background:var(--bp-ink-200);border-radius:999px;outline:none;margin:0;cursor:pointer;background-image:linear-gradient(var(--bp-primary),var(--bp-primary));background-repeat:no-repeat}
.bp-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:var(--bp-primary);border:2px solid #fff;box-shadow:0 2px 6px rgba(20,58,82,0.30);cursor:pointer;transition:transform 100ms var(--bp-ease)}
.bp-slider::-webkit-slider-thumb:hover{transform:scale(1.1)}
.bp-slider::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:var(--bp-primary);border:2px solid #fff;box-shadow:0 2px 6px rgba(20,58,82,0.30);cursor:pointer}
.bp-slider:focus-visible{box-shadow:0 0 0 3px var(--bp-primary-ring)}
.bp-slider-bounds{display:flex;justify-content:space-between;font-size:13px;font-weight:500;color:var(--bp-ink-500);margin-top:8px}

.bp-verify-box{background:var(--bp-primary-soft);border:1px solid #CEDDE4;border-radius:12px;padding:18px 20px;display:flex;flex-direction:column;gap:16px}
.bp-verify-box-title{font-weight:700;color:var(--bp-ink-900);font-size:15px;margin-bottom:4px}
.bp-verify-box-text{font-size:14px;color:var(--bp-ink-600);line-height:1.5}
.bp-verify-methods{display:flex;gap:10px}
.bp-method{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:52px;padding:0 12px;border-radius:10px;font-weight:600;font-size:14px;line-height:1.2;cursor:pointer;border:1.5px solid var(--bp-ink-300);background:#fff;color:var(--bp-ink-700);text-align:center;transition:background 150ms var(--bp-ease),border-color 150ms var(--bp-ease),box-shadow 150ms var(--bp-ease);-webkit-tap-highlight-color:transparent}
.bp-method svg{width:18px;height:18px;flex-shrink:0}
.bp-method:hover{border-color:var(--bp-primary)}
.bp-method-primary{background:var(--bp-primary);border-color:var(--bp-primary);color:#fff}
.bp-method-primary:hover{background:var(--bp-primary-hover);border-color:var(--bp-primary-hover)}
.bp-method-chosen{box-shadow:0 0 0 3px var(--bp-primary-ring)}
.bp-method-err{color:var(--bp-error);font-size:13px;margin-top:10px}
.bp-otp-area{margin-top:20px}
.bp-otp-label{font-size:14px;color:var(--bp-ink-700);margin-bottom:10px;line-height:1.5}
.bp-otp-input{width:100%;max-width:260px;height:56px;text-align:center;font-size:24px;font-weight:700;letter-spacing:0.45em;border:1.5px solid var(--bp-ink-300);border-radius:10px;background:#fff;color:var(--bp-ink-900);padding-left:0.45em;font-family:inherit}
.bp-otp-input:focus{outline:none;border-color:var(--bp-primary);box-shadow:0 0 0 3px var(--bp-primary-ring)}
.bp-otp-input.bp-invalid{border-color:var(--bp-error);background:var(--bp-error-soft)}
.bp-otp-resend{display:inline-block;margin-top:12px;background:none;border:none;color:var(--bp-primary);font-weight:600;font-size:14px;cursor:pointer;padding:4px 0}
.bp-otp-resend:hover{text-decoration:underline}
.bp-otp-status{font-size:13px;color:var(--bp-ink-500);margin-top:10px}
.bp-otp-verified{display:flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:#0F9D6E;margin-top:12px}
.bp-otp-verified svg{width:18px;height:18px}


.bp-modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,0.45);z-index:999999;display:flex;align-items:center;justify-content:center;padding:18px}
.bp-modal{width:100%;max-width:460px;background:#fff;border-radius:16px;box-shadow:0 20px 60px rgba(15,23,42,0.25);padding:24px;text-align:left}
.bp-modal-title{font-size:21px;line-height:1.25;font-weight:700;color:var(--bp-ink-900);margin:0 0 10px}
.bp-modal-text{font-size:15px;line-height:1.55;color:var(--bp-ink-700);margin:0 0 20px}
.bp-modal-actions{display:flex;gap:12px;justify-content:flex-end}
.bp-modal-btn{height:46px;padding:0 18px;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;border:1.5px solid var(--bp-ink-300);background:#fff;color:var(--bp-ink-700)}
.bp-modal-btn-primary{background:var(--bp-primary);border-color:var(--bp-primary);color:#fff}
.bp-modal-btn-primary:hover{background:var(--bp-primary-hover)}
.bp-modal-btn:hover{border-color:var(--bp-primary)}
@media (max-width:479px){.bp-modal-actions{flex-direction:column-reverse}.bp-modal-btn{width:100%}}

.bp-actions{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:28px}
.bp-btn-back{display:inline-flex;align-items:center;gap:8px;height:48px;padding:0 20px;background:#fff;border:1.5px solid var(--bp-ink-300);border-radius:10px;color:var(--bp-ink-700);font-weight:600;font-size:15px;cursor:pointer;transition:background 150ms var(--bp-ease),border-color 150ms var(--bp-ease);-webkit-tap-highlight-color:transparent}
.bp-btn-back:hover:not(:disabled){background:var(--bp-ink-100)}
.bp-btn-back:disabled{color:var(--bp-ink-400);border-color:var(--bp-ink-200);cursor:not-allowed}
.bp-btn-back svg{width:18px;height:18px}
.bp-btn-next{display:inline-flex;align-items:center;gap:8px;height:48px;padding:0 26px;background:var(--bp-primary);border:none;border-radius:10px;color:#fff;font-weight:600;font-size:15px;cursor:pointer;transition:background 150ms var(--bp-ease),box-shadow 200ms var(--bp-ease),transform 100ms var(--bp-ease);-webkit-tap-highlight-color:transparent}
.bp-btn-next:hover{background:var(--bp-primary-hover);box-shadow:0 4px 12px rgba(20,58,82,0.24)}
.bp-btn-next:active{background:var(--bp-primary-active);transform:scale(0.99)}
.bp-btn-next:disabled{opacity:0.6;cursor:not-allowed;box-shadow:none}
.bp-btn-next svg{width:18px;height:18px}
.bp-btn-back:focus-visible,.bp-btn-next:focus-visible{outline:none;box-shadow:0 0 0 3px var(--bp-primary-ring)}

.bp-success{text-align:center;padding:18px 8px 8px}
.bp-success-icon{margin:0 auto 16px;width:80px;height:80px;display:flex;align-items:center;justify-content:center}
.bp-success-title{font-size:27px;font-weight:700;color:var(--bp-ink-900);margin:0 0 12px}
.bp-success-body{font-size:16px;line-height:1.6;color:var(--bp-ink-700);margin:0 auto;max-width:440px}
.bp-submit-state{display:flex;align-items:center;justify-content:center;gap:10px;padding:44px 16px;text-align:center;color:var(--bp-ink-600)}
.bp-spinner{width:20px;height:20px;border:2.5px solid var(--bp-ink-200);border-top-color:var(--bp-primary);border-radius:50%;animation:bp-spin 700ms linear infinite}
@keyframes bp-spin{to{transform:rotate(360deg)}}

.bp-footnote{text-align:center;font-size:14px;color:var(--bp-primary);margin:16px auto 0;padding:0 16px;line-height:1.5}

@media (min-width:560px){
  .bp-header{padding:30px 36px 24px}
  .bp-header-title{font-size:26px}
  .bp-header-trust{flex-direction:row;gap:30px;flex-wrap:wrap}
  .bp-verify-box{flex-direction:row;align-items:center;justify-content:space-between}
  .bp-verify-info{flex:1}
  .bp-verify-methods{min-width:310px}
  .bp-body{padding:26px 36px 32px}
  .bp-title{font-size:28px}
}
@media (max-width:479px){
  .bp-field-row{flex-direction:column;gap:0}
  .bp-card-grid,.bp-card-list{grid-template-columns:1fr}
  .bp-card{padding:14px 40px;font-size:15px}
}
@media (prefers-reduced-motion:reduce){
  .bp-step,.bp-progress-fill,.bp-card,.bp-btn-next,.bp-input,.bp-select,.bp-slider::-webkit-slider-thumb{transition-duration:120ms!important}
  .bp-step{transform:none!important}
  .bp-step.bp-exit{transform:none!important}
}
</style>

<div class="bp-card-shell">
  <div class="bp-header">
    <h1 class="bp-header-title">Planning a New Clinic? Get the Plan Right Before It Gets Expensive. </h1>
    <p class="bp-header-subtitle"> 
Take 60 seconds to tell us about your project and see how Team Medico can help..</p>
    <div class="bp-header-trust">
      <span class="bp-trust">✓ Healthcare Construction Specialists</span>
      <span class="bp-trust">✓ 15+ Years of Experience</span>
      <span class="bp-trust">✓ Planning, Design &amp; Construction</span>
    </div>
  </div>
  <div class="bp-body">
    <div class="bp-progress-wrap" id="bpProgressWrap" role="region" aria-label="Form progress">
      <div class="bp-progress-meta">
        <span>Step <strong id="bpStepNum">1</strong> of <strong id="bpStepTotal">6</strong></span>
        <span id="bpPercent">17% Complete</span>
      </div>
      <div class="bp-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="17" id="bpProgressBar">
        <div class="bp-progress-fill" id="bpProgressFill"></div>
      </div>
    </div>
    <div class="bp-stage" id="bpStage" aria-live="polite"></div>
  </div>
</div>

<p class="bp-footnote">Takes less than 60 seconds to tell us about your project.</p>

<script>
(function(){
  "use strict";

  var ROOT = document.currentScript.closest('.bp-root');
  var WEBHOOK = ROOT.getAttribute('data-webhook') || 'YOUR_MEDICO_WEBHOOK_URL';
  var OTP_REQUEST_URL = (ROOT.getAttribute('data-otp-request-url')||'').trim();
  var OTP_VERIFY_URL = (ROOT.getAttribute('data-otp-verify-url')||'').trim();
  var STORAGE_KEY = 'medico_project_assessment_v1';

  var ICON = {
    user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3l2 5-2 1c1 2 3 4 5 5l1-2 5 2v3a2 2 0 01-2 2C9 20 4 15 4 7a2 2 0 011-3z"/></svg>',
    message:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/></svg>',
    arrowRight:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    arrowLeft:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    error:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="0.6" fill="currentColor"/></svg>',
    party:'<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 66l8-26 18 18-26 8z" fill="#F58220"/><path d="M22 40l18 18 4-4-18-18-4 4z" fill="#B9570C"/><circle cx="56" cy="14" r="4" fill="#F59E0B"/><circle cx="68" cy="28" r="3.5" fill="#10B981"/><circle cx="50" cy="32" r="3" fill="#DC2626"/><circle cx="62" cy="46" r="3" fill="#7C3AED"/><circle cx="44" cy="20" r="2.5" fill="#F58220"/><circle cx="72" cy="58" r="2.5" fill="#F59E0B"/><path d="M40 8v6M44 14l4-4M48 22l5-2" stroke="#10B981" stroke-width="2" stroke-linecap="round"/><path d="M58 6l3 3M68 10l-2 4" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/></svg>'
  };


  var STEPS = [
    {id:'sector', section:'YOUR PROJECT', type:'cardlist', field:'project_sector',
      title:'What type of healthcare space are you planning?',
      subtitle:'Choose the option that best matches your project.',
      options:[
        {value:'medical_clinic', label:'Medical Clinic'},
        {value:'dental_clinic', label:'Dental Clinic'},
        {value:'pharmacy', label:'Pharmacy'},
        {value:'veterinary_clinic', label:'Veterinary Clinic'},
        {value:'optometry_eyecare', label:'Optometry / Eyecare'},
        {value:'physiotherapy_rehab', label:'Physiotherapy / Rehab'},
        {value:'med_spa_wellness', label:'Med Spa / Wellness'},
        {value:'other_healthcare', label:'Other Healthcare Space'}
      ]},
    {id:'location_status', section:'PROJECT STAGE', type:'cardlist', field:'location_status',
      title:'Have you secured a location for the project?',
      subtitle:'No problem if you are still looking. This simply helps us understand how far along you are.',
      options:[
        {value:'secured', label:'Yes, I Have the Space'},
        {value:'negotiating', label:'Negotiating a Lease / Purchase'},
        {value:'actively_looking', label:'Actively Looking for a Space'},
        {value:'early_planning', label:'Still in Early Planning'}
      ]},
    {id:'project_region', section:'LOCATION', type:'select', field:'project_region',
      title:'Where is your project located?',
      subtitle:'Team Medico serves healthcare projects across Western Canada.',
      placeholder:'Select project location',
      options:[
        {value:'metro_vancouver', label:'Metro Vancouver / Fraser Valley'},
        {value:'vancouver_island', label:'Vancouver Island'},
        {value:'other_bc', label:'Other British Columbia'},
        {value:'calgary', label:'Calgary Area'},
        {value:'edmonton', label:'Edmonton Area'},
        {value:'other_alberta', label:'Other Alberta'},
        {value:'other_western_canada', label:'Other Western Canada'}
      ]},
    {id:'project_size', section:'PROJECT SIZE', type:'cardlist', field:'project_size',
      title:'Approximately how large is the space?',
      subtitle:'An estimate is completely fine.',
      options:[
        {value:'under_1000', label:'Under 1,000 sq. ft.'},
        {value:'1000_2000', label:'1,000 – 2,000 sq. ft.'},
        {value:'2000_3500', label:'2,000 – 3,500 sq. ft.'},
        {value:'3500_5000', label:'3,500 – 5,000 sq. ft.'},
        {value:'5000_plus', label:'5,000+ sq. ft.'},
        {value:'not_sure', label:'Not Sure Yet'}
      ]},
    {id:'budget', section:'BUDGET', type:'cardlist', field:'project_budget',
      title:'What is your estimated project budget?',
      subtitle:'A general range helps our team recommend the right next step.',
      options:[
        {value:'under_100k', label:'Under $100,000'},
        {value:'100k_250k', label:'$100,000 – $250,000'},
        {value:'250k_500k', label:'$250,000 – $500,000'},
        {value:'500k_1m', label:'$500,000 – $1 Million'},
        {value:'1m_plus', label:'$1 Million+'},
        {value:'not_sure', label:'Not Sure Yet'}
      ]},
    {id:'timeline', section:'TIMELINE', type:'cardlist', field:'project_timeline',
      title:'When are you hoping to start?',
      subtitle:'Choose the timing that best matches your current plans.',
      options:[
        {value:'asap', label:'As Soon as Possible'},
        {value:'1_3_months', label:'Within 1 – 3 Months'},
        {value:'3_6_months', label:'Within 3 – 6 Months'},
        {value:'6_12_months', label:'Within 6 – 12 Months'},
        {value:'12_plus_months', label:'More Than 12 Months'},
        {value:'researching', label:'Just Researching for Now'}
      ]},
    {id:'contact', section:'NEXT STEP', type:'contact',
      title:'Your Project Deserves the Right Plan. Let’s Start Here.',
      subtitle:'Complete your details and a Team Medico specialist can review your project and discuss the best next step with you.',
      fields:[
        {key:'first_name', label:'First name', placeholder:'First name', icon:'user', autocomplete:'given-name', type:'text', half:true},
        {key:'last_name', label:'Last name', placeholder:'Last name', icon:'user', autocomplete:'family-name', type:'text', half:true},
        {key:'email', label:'Email address', placeholder:'you@example.com', icon:'mail', autocomplete:'email', type:'email'},
        {key:'phone', label:'Phone number', placeholder:'(604) 555-1234', icon:'phone', autocomplete:'tel-national', type:'tel'}
      ]},
    {id:'verify', section:'PHONE VERIFICATION', type:'verify',
      title:'Verify Your Phone Number',
      subtitle:'Choose text or call to receive your one-time verification code.'},
    {id:'success', type:'success',
      title:'Thanks! Your Project Details Are In',
      body:'A Team Medico specialist will review your information and reach out to discuss your project, timing, and the best next step.'}
  ];

  var state = { answers:{}, cursor:0, history:[], submitted:false };

  try{
    var saved = sessionStorage.getItem(STORAGE_KEY);
    if(saved){
      var parsed = JSON.parse(saved);
      if(parsed && parsed.answers && typeof parsed.cursor==='number'){
        state.answers = parsed.answers;
        state.cursor = Math.min(parsed.cursor, STEPS.length-2);
        state.history = parsed.history || [];
      }
    }
  }catch(e){}

  function persist(){ try{ sessionStorage.setItem(STORAGE_KEY, JSON.stringify({answers:state.answers, cursor:state.cursor, history:state.history})); }catch(e){} }
  function clearPersist(){ try{ sessionStorage.removeItem(STORAGE_KEY); }catch(e){} }
  function currentStep(){ return STEPS[Math.min(state.cursor, STEPS.length-1)]; }

  var stage = document.getElementById('bpStage');
  var stepNumEl = document.getElementById('bpStepNum');
  var stepTotalEl = document.getElementById('bpStepTotal');
  var percentEl = document.getElementById('bpPercent');
  var progressFill = document.getElementById('bpProgressFill');
  var progressBar = document.getElementById('bpProgressBar');
  var progressWrap = document.getElementById('bpProgressWrap');

  function el(tag, attrs, children){
    var n = document.createElement(tag);
    if(attrs){
      for(var k in attrs){
        if(k==='class') n.className = attrs[k];
        else if(k==='html') n.innerHTML = attrs[k];
        else if(k.indexOf('on')===0 && typeof attrs[k]==='function') n.addEventListener(k.slice(2), attrs[k]);
        else if(attrs[k]!=null) n.setAttribute(k, attrs[k]);
      }
    }
    if(children){
      (Array.isArray(children)?children:[children]).forEach(function(c){
        if(c==null) return;
        n.appendChild(typeof c==='string' ? document.createTextNode(c) : c);
      });
    }
    return n;
  }

  function buildErrorMsg(text){
    var n = el('div', {class:'bp-error-msg', html:ICON.error});
    n.appendChild(document.createTextNode(' '+text));
    return n;
  }
  function buildSection(num, label){
    return el('div',{class:'bp-section'},[
      el('span',{class:'bp-section-num'}, String(num)),
      el('span',{class:'bp-section-label'}, label)
    ]);
  }
  function buildTitle(text){ return el('h2',{class:'bp-title'}, text); }
  function buildSubtitle(text){ return el('p',{class:'bp-subtitle'}, text); }

  function buildActions(opts){
    var row = el('div',{class:'bp-actions'});
    var back = el('button',{type:'button',class:'bp-btn-back'});
    back.innerHTML = ICON.arrowLeft + '<span>Back</span>';
    back.disabled = !!opts.backDisabled;
    if(!opts.backDisabled) back.addEventListener('click', opts.onBack || goBack);
    row.appendChild(back);
    if(!opts.noNext){
      var next = el('button',{type:'button',class:'bp-btn-next'});
      next.innerHTML = '<span>'+(opts.nextLabel||'Continue')+'</span>' + ICON.arrowRight;
      next.addEventListener('click', opts.onNext);
      row.appendChild(next);
      row._next = next;
    }
    row._back = back;
    return row;
  }



  function maskPhone(p){
    var d = (p||'').replace(/\D/g,'');
    if(d.length < 4) return 'your phone';
    return '(\u2022\u2022\u2022) \u2022\u2022\u2022-' + d.slice(-4);
  }

  function isoDate(d){
    var y=d.getFullYear(), m=('0'+(d.getMonth()+1)).slice(-2), day=('0'+d.getDate()).slice(-2);
    return y+'-'+m+'-'+day;
  }
  function maxDobStr(minAge){ var d=new Date(); d.setFullYear(d.getFullYear()-minAge); return isoDate(d); }
  function minDobStr(maxAge){ var d=new Date(); d.setFullYear(d.getFullYear()-maxAge); return isoDate(d); }
  function calcAge(dobStr){
    if(!dobStr) return null;
    var p = dobStr.split('-');
    if(p.length!==3) return null;
    var d = new Date(parseInt(p[0],10), parseInt(p[1],10)-1, parseInt(p[2],10));
    if(isNaN(d.getTime())) return null;
    var t = new Date();
    var age = t.getFullYear()-d.getFullYear();
    var m = t.getMonth()-d.getMonth();
    if(m<0 || (m===0 && t.getDate()<d.getDate())) age--;
    return age;
  }

  function validateText(v){ if(!v||!v.trim()) return 'This field is required.'; return null; }
  function validateEmail(v){
    if(!v||!v.trim()) return 'Email is required.';
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())) return 'Please enter a valid email address.';
    return null;
  }
  function normalizePhoneDigits(raw){
    var d = String(raw || '').replace(/\D/g,'');

    // If a full NANP number is pasted with country code 1, remove the country code.
    if(d.length === 11 && d.charAt(0) === '1') d = d.slice(1);

    // Keep a maximum of 10 national digits.
    return d.slice(0,10);
  }

  function validatePhone(v){
    var d = normalizePhoneDigits(v);

    if(!d) return 'Phone number is required.';
    if(d.length !== 10) return 'Please enter a valid 10-digit phone number.';

    // NANP area code and exchange code cannot begin with 0 or 1.
    if(!/^[2-9]\d{2}[2-9]\d{6}$/.test(d)){
      return 'Please enter a valid Canadian or U.S. phone number.';
    }

    return null;
  }

  function formatPhone(raw){
    var d = String(raw || '').replace(/\D/g,'');

    // Handle +1 / 1 country code when pasted or autofilled.
    if(d.length === 11 && d.charAt(0) === '1') d = d.slice(1);

    d = d.slice(0,10);

    if(d.length <= 3) return d;
    if(d.length <= 6) return '(' + d.slice(0,3) + ') ' + d.slice(3);
    return '(' + d.slice(0,3) + ') ' + d.slice(3,6) + '-' + d.slice(6,10);
  }

  function phoneToE164(raw){
    var d = normalizePhoneDigits(raw);
    return d.length === 10 ? '+1' + d : '';
  }

  function buildSlider(step, num){
    var wrap = el('div',{class:'bp-step','data-step':step.id});
    wrap.appendChild(buildSection(num, step.section));
    wrap.appendChild(buildTitle(step.title));
    if(step.subtitle) wrap.appendChild(buildSubtitle(step.subtitle));
    var sw = el('div',{class:'bp-slider-wrap'});
    var current = state.answers[step.field];
    var fallback = (typeof step.defaultIndex==='number') ? step.defaultIndex : 0;
    var idx = (typeof current==='number' && current>=0 && current<step.values.length) ? current : fallback;
    var valLabel = el('div',{class:'bp-slider-value'}, step.values[idx]);
    var input = el('input',{type:'range', class:'bp-slider', min:'0', max:String(step.values.length-1), step:'1', value:String(idx),'aria-label':step.title});
    function setFill(){ input.style.backgroundSize = (parseInt(input.value,10)/(step.values.length-1))*100 + '% 100%'; }
    input.addEventListener('input', function(){ valLabel.textContent = step.values[parseInt(input.value,10)]; setFill(); });
    setFill();
    var bounds = el('div',{class:'bp-slider-bounds'},[ el('span',null,step.minLabel||'Min'), el('span',null,step.maxLabel||'Max') ]);
    sw.appendChild(valLabel); sw.appendChild(input); sw.appendChild(bounds);
    wrap.appendChild(sw);
    wrap.appendChild(buildActions({ backDisabled: state.history.length===0, onNext:function(){
      state.answers[step.field] = parseInt(input.value,10); persist(); goNext();
    }}));
    return wrap;
  }

  function buildCardGroup(step, num, listMode){
    var wrap = el('div',{class:'bp-step','data-step':step.id});
    wrap.appendChild(buildSection(num, step.section));
    wrap.appendChild(buildTitle(step.title));
    if(step.subtitle) wrap.appendChild(buildSubtitle(step.subtitle));
    var advancing = false;
    var grid = el('div',{class: listMode?'bp-card-list':'bp-card-grid', role:'radiogroup','aria-label':step.title});
    step.options.forEach(function(opt){
      var sel = state.answers[step.field]===opt.value;
      var card = el('button',{type:'button', class:'bp-card'+(sel?' bp-selected':''), role:'radio','aria-checked':sel?'true':'false','data-value':opt.value});
      card.appendChild(el('span',{class:'bp-card-text'}, opt.label));
      card.appendChild(el('span',{class:'bp-card-check', html:ICON.check,'aria-hidden':'true'}));
      card.addEventListener('click', function(){
        if(advancing) return;
        Array.prototype.forEach.call(grid.querySelectorAll('.bp-card'), function(c){ c.classList.remove('bp-selected'); c.setAttribute('aria-checked','false'); });
        card.classList.add('bp-selected'); card.setAttribute('aria-checked','true');
        state.answers[step.field] = opt.value;
        persist();

        advancing = true;
        setTimeout(goNext, 220);
      });
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    wrap.appendChild(buildActions({ backDisabled: state.history.length===0, noNext:true }));
    return wrap;
  }
  function buildCards(step, num){ return buildCardGroup(step, num, false); }
  function buildCardList(step, num){ return buildCardGroup(step, num, true); }

  function buildSelect(step, num){
    var wrap = el('div',{class:'bp-step','data-step':step.id});
    wrap.appendChild(buildSection(num, step.section));
    wrap.appendChild(buildTitle(step.title));
    if(step.subtitle) wrap.appendChild(buildSubtitle(step.subtitle));
    var advancing = false;
    var sel = el('select',{class:'bp-select','aria-label':step.title});
    sel.appendChild(el('option',{value:''}, step.placeholder||'Please Select'));
    step.options.forEach(function(opt){
      var o = el('option',{value:opt.value}, opt.label);
      if(state.answers[step.field]===opt.value) o.selected = true;
      sel.appendChild(o);
    });
    var errBox = el('div');
    sel.addEventListener('change', function(){
      sel.classList.remove('bp-invalid'); errBox.innerHTML='';
      if(!sel.value || advancing) return;
      state.answers[step.field] = sel.value; persist();
      advancing = true;
      setTimeout(goNext, 220);
    });
    wrap.appendChild(sel);
    wrap.appendChild(errBox);
    wrap.appendChild(buildActions({ backDisabled: state.history.length===0, onNext:function(){
      if(!sel.value){ sel.classList.add('bp-invalid'); errBox.innerHTML=''; errBox.appendChild(buildErrorMsg('Please select an option.')); sel.focus(); return; }
      state.answers[step.field] = sel.value; persist(); goNext();
    }}));
    return wrap;
  }

  function buildDate(step, num){
    var minAge = step.minAge||18, maxAge = step.maxAge||85;
    var wrap = el('div',{class:'bp-step','data-step':step.id});
    wrap.appendChild(buildSection(num, step.section));
    wrap.appendChild(buildTitle(step.title));
    if(step.subtitle) wrap.appendChild(buildSubtitle(step.subtitle));
    var input = el('input',{type:'date', class:'bp-input'+(state.answers[step.field]?'':' bp-empty'), value:state.answers[step.field]||'', max:maxDobStr(minAge), min:minDobStr(maxAge),'aria-label':step.title});
    var errBox = el('div');
    function showErr(m){ input.classList.add('bp-invalid'); errBox.innerHTML=''; errBox.appendChild(buildErrorMsg(m)); }
    function validate(){
      var v = input.value;
      if(!v){ showErr('Please enter your date of birth.'); return false; }
      var age = calcAge(v);
      if(age===null){ showErr('Please enter a valid date.'); return false; }
      if(age < minAge){ showErr('You must be at least '+minAge+' to request a quote online.'); return false; }
      if(age > maxAge){ showErr('Please call us directly so we can find the right coverage for you.'); return false; }
      input.classList.remove('bp-invalid'); errBox.innerHTML=''; return true;
    }
    input.addEventListener('change', function(){
      input.classList.toggle('bp-empty', !input.value);
      if(input.classList.contains('bp-invalid')) validate();
    });
    wrap.appendChild(input);
    wrap.appendChild(errBox);
    wrap.appendChild(buildActions({ backDisabled: state.history.length===0, onNext:function(){
      if(!validate()){ input.focus(); return; }
      state.answers[step.field] = input.value; persist(); goNext();
    }}));
    return wrap;
  }

  function buildContact(step, num){
    var wrap = el('div',{class:'bp-step','data-step':step.id});
    wrap.appendChild(buildSection(num, step.section));
    wrap.appendChild(buildTitle(step.title));
    if(step.subtitle) wrap.appendChild(buildSubtitle(step.subtitle));
    var refs = [];
    var halfRow = el('div',{class:'bp-field-row'});
    var rest = el('div');
    var hasHalf = false;
    step.fields.forEach(function(f){
      var field = el('div',{class:'bp-field'});
      var label = el('label',{class:'bp-field-label'});
      label.appendChild(document.createTextNode(f.label+' '));
      label.appendChild(el('span',{class:'bp-req'},'*'));
      field.appendChild(label);
      var iw = el('div',{class:'bp-input-wrap'});
      if(f.icon && ICON[f.icon]) iw.appendChild(el('span',{class:'bp-input-icon', html:ICON[f.icon],'aria-hidden':'true'}));
      var input = el('input',{
        type: f.type==='email'?'email':(f.type==='tel'?'tel':'text'),
        class:'bp-input bp-input-iconned',
        placeholder: f.placeholder||'',
        autocomplete: f.autocomplete||'off',
        inputmode: f.type==='tel'?'tel':(f.type==='email'?'email':'text'),
        value: state.answers[f.key]||''
      });
      var errBox = el('div');
      iw.appendChild(input);
      field.appendChild(iw);
      field.appendChild(errBox);
      refs.push({f:f, input:input, errBox:errBox});
      input.addEventListener('input', function(){
        if(f.type==='tel') input.value = formatPhone(input.value);
        if(input.classList.contains('bp-invalid')){ input.classList.remove('bp-invalid'); errBox.innerHTML=''; }
      });
      if(f.type==='tel'){
        input.addEventListener('change', function(){ input.value = formatPhone(input.value); });
        input.addEventListener('blur', function(){ input.value = formatPhone(input.value); });
      }
      input.addEventListener('keydown', function(e){ if(e.key==='Enter'){ e.preventDefault(); submitContact(); } });
      if(f.half){ hasHalf = true; halfRow.appendChild(field); } else { rest.appendChild(field); }
    });
    if(hasHalf) wrap.appendChild(halfRow);
    wrap.appendChild(rest);

    function validateAll(){
      var ok = true, firstBad = null;
      refs.forEach(function(r){
        var v = r.input.value, err = null;
        if(r.f.type==='email') err = validateEmail(v);
        else if(r.f.type==='tel') err = validatePhone(v);
        else err = validateText(v);
        if(err){ r.input.classList.add('bp-invalid'); r.errBox.innerHTML=''; r.errBox.appendChild(buildErrorMsg(err)); if(!firstBad) firstBad=r.input; ok=false; }
        else { r.input.classList.remove('bp-invalid'); r.errBox.innerHTML=''; }
      });
      if(firstBad) try{ firstBad.focus(); }catch(e){}
      return ok;
    }
    function submitContact(){
      if(!validateAll()) return;
      refs.forEach(function(r){
        state.answers[r.f.key] = r.f.type==='tel' ? formatPhone(r.input.value) : r.input.value.trim();
      });
      persist(); goNext();
    }
    wrap.appendChild(buildActions({ backDisabled: state.history.length===0, onNext: submitContact }));
    function normalizeAutofilledPhone(){
      refs.forEach(function(r){
        if(r.f.type==='tel' && r.input.value) r.input.value = formatPhone(r.input.value);
      });
    }
    setTimeout(normalizeAutofilledPhone, 250);
    setTimeout(normalizeAutofilledPhone, 800);
    setTimeout(function(){ try{ refs[0].input.focus({preventScroll:true}); }catch(e){} }, 320);
    return wrap;
  }

  function buildVerify(step, num){
    var wrap = el('div',{class:'bp-step','data-step':step.id});
    wrap.appendChild(buildSection(num, step.section));
    wrap.appendChild(buildTitle(step.title));
    if(step.subtitle) wrap.appendChild(buildSubtitle(step.subtitle));

    var phone = state.answers.phone || '';

    var box = el('div',{class:'bp-verify-box'});
    var infoBlk = el('div',{class:'bp-verify-info'});
    infoBlk.appendChild(el('div',{class:'bp-verify-box-title'}, 'Verify your number'));
    infoBlk.appendChild(el('div',{class:'bp-verify-box-text'}, 'Choose text or phone call, then enter the one-time code to confirm your number.'));
    var methods = el('div',{class:'bp-verify-methods'});
    var btnText = el('button',{type:'button', class:'bp-method bp-method-primary'});
    btnText.innerHTML = ICON.message + '<span>Text me the code</span>';
    var btnCall = el('button',{type:'button', class:'bp-method'});
    btnCall.innerHTML = ICON.phone + '<span>Call me instead</span>';
    methods.appendChild(btnText); methods.appendChild(btnCall);
    box.appendChild(infoBlk); box.appendChild(methods);
    wrap.appendChild(box);

    var methodErr = el('div',{class:'bp-method-err'});
    wrap.appendChild(methodErr);

    var otpArea = el('div',{class:'bp-otp-area', style:'display:none;'});
    var otpLabel = el('div',{class:'bp-otp-label'});
    var otpInput = el('input',{type:'text', inputmode:'numeric', autocomplete:'one-time-code', maxlength:'6', class:'bp-otp-input', placeholder:'------','aria-label':'Six-digit verification code'});
    var otpStatus = el('div',{class:'bp-otp-status'});
    var otpVerified = el('div',{class:'bp-otp-verified', style:'display:none;', html:ICON.check});
    otpVerified.appendChild(document.createTextNode(' Number verified'));
    var otpErr = el('div');
    var resend = el('button',{type:'button', class:'bp-otp-resend'}, 'Resend code');
    otpArea.appendChild(otpLabel); otpArea.appendChild(otpInput); otpArea.appendChild(otpStatus); otpArea.appendChild(otpVerified); otpArea.appendChild(otpErr); otpArea.appendChild(resend);
    wrap.appendChild(otpArea);

    var chosenMethod = state.answers.verify_method || null;
    var verified = false, verifying = false, actionsRow;

    function setSubmit(on){ if(actionsRow && actionsRow._next) actionsRow._next.disabled = !on; }
    function setChosen(m){
      btnText.classList.toggle('bp-method-chosen', m==='sms');
      btnCall.classList.toggle('bp-method-chosen', m==='call');
    }
    function resetCode(){
      verified = false; verifying = false;
      otpInput.value = ''; otpInput.disabled = false;
      otpInput.classList.remove('bp-invalid');
      otpStatus.textContent = ''; otpErr.innerHTML = '';
      otpVerified.style.display = 'none';
      resend.style.display = '';
      setSubmit(false);
    }
    function showVerified(){
      verified = true; verifying = false;
      otpInput.disabled = true; otpInput.classList.remove('bp-invalid');
      otpStatus.textContent = ''; otpErr.innerHTML = '';
      otpVerified.style.display = '';
      resend.style.display = 'none';
      setSubmit(true);
    }
    function autoVerify(code){
      if(verifying || verified) return;
      verifying = true;
      otpErr.innerHTML = ''; otpStatus.textContent = 'Verifying\u2026';

      if(!OTP_VERIFY_URL){
        verifying = false;
        otpStatus.textContent = '';
        otpInput.classList.add('bp-invalid');
        otpErr.appendChild(buildErrorMsg('OTP verification is not connected. Please contact support.'));
        return;
      }

      fetch(OTP_VERIFY_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({phone:phone, code:code})
      })
        .then(function(res){ return res.json().catch(function(){ return {}; }); })
        .then(function(data){
          if(data && data.success === true && data.status === 'approved'){
            showVerified();
          } else {
            throw new Error('not approved');
          }
        })
        .catch(function(){
          verifying = false;
          otpStatus.textContent = '';
          otpInput.classList.add('bp-invalid');
          otpErr.innerHTML = '';
          otpErr.appendChild(buildErrorMsg('That code didn\u2019t match. Please try again.'));
        });
    }
    function revealOtp(m, post){
      chosenMethod = m;
      state.answers.verify_method = m; persist();
      setChosen(m);
      methodErr.textContent = '';
      otpArea.style.display = '';
      otpLabel.textContent = (m==='call' ? 'We\u2019re calling ' : 'We sent a 6-digit code to ') + maskPhone(phone) + (m==='call' ? ' with your code.' : '.');
      resetCode();
      if(post && OTP_REQUEST_URL){
        fetch(OTP_REQUEST_URL, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({phone:phone, method:m})}).catch(function(){});
      }
      if(post){ try{ otpInput.focus({preventScroll:true}); }catch(e){} }
    }
    btnText.addEventListener('click', function(){ revealOtp('sms', true); });
    btnCall.addEventListener('click', function(){ revealOtp('call', true); });
    resend.addEventListener('click', function(){ if(chosenMethod) revealOtp(chosenMethod, true); });
    otpInput.addEventListener('input', function(){
      otpInput.value = otpInput.value.replace(/\D/g,'').slice(0,6);
      if(otpInput.classList.contains('bp-invalid')){ otpInput.classList.remove('bp-invalid'); otpErr.innerHTML=''; }
      otpStatus.textContent = '';
      if(otpInput.value.length === 6) autoVerify(otpInput.value);
    });

    function attemptSubmit(){
      if(!verified){
        if(!chosenMethod){ methodErr.textContent = 'Choose how you\u2019d like to get your code.'; return; }
        otpInput.classList.add('bp-invalid'); otpErr.innerHTML=''; otpErr.appendChild(buildErrorMsg('Enter the code we sent to verify your number.')); try{ otpInput.focus(); }catch(e){} return;
      }
      submitForm({ method:chosenMethod, code_provided:true, verified: OTP_VERIFY_URL ? true : 'unverified_demo' });
    }
    actionsRow = buildActions({ nextLabel:'Submit', backDisabled: state.history.length===0, onNext: attemptSubmit });
    wrap.appendChild(actionsRow);
    setSubmit(false);

    if(chosenMethod) revealOtp(chosenMethod, false);
    return wrap;
  }

  function buildSuccess(step){
    var wrap = el('div',{class:'bp-step','data-step':step.id});
    var box = el('div',{class:'bp-success'});
    box.appendChild(el('div',{class:'bp-success-icon', html:ICON.party,'aria-hidden':'true'}));
    box.appendChild(el('h2',{class:'bp-success-title'}, step.title));
    box.appendChild(el('p',{class:'bp-success-body'}, step.body));
    wrap.appendChild(box);
    return wrap;
  }
  function buildSubmitting(){
    var wrap = el('div',{class:'bp-step'});
    wrap.appendChild(el('div',{class:'bp-submit-state'},[
      el('span',{class:'bp-spinner','aria-hidden':'true'}),
      el('span', null, 'Submitting your request\u2026')
    ]));
    return wrap;
  }
  function buildErrorState(retry){
    var wrap = el('div',{class:'bp-step'});
    var box = el('div',{class:'bp-success'});
    box.appendChild(el('h2',{class:'bp-success-title'}, 'Something went wrong'));
    box.appendChild(el('p',{class:'bp-success-body'}, "We couldn't submit your request. Please check your connection and try again."));
    var btn = el('button',{type:'button', class:'bp-btn-next', style:'margin:24px auto 0;'});
    btn.innerHTML = '<span>Try again</span>' + ICON.arrowRight;
    btn.addEventListener('click', retry);
    box.appendChild(btn);
    wrap.appendChild(box);
    return wrap;
  }

  function buildStep(step){
    var num = state.cursor + 1;
    switch(step.type){
      case 'slider':   return buildSlider(step, num);
      case 'cards':    return buildCards(step, num);
      case 'cardlist': return buildCardList(step, num);
      case 'date':     return buildDate(step, num);
      case 'select':   return buildSelect(step, num);
      case 'contact':  return buildContact(step, num);
      case 'verify':   return buildVerify(step, num);
      case 'success':  return buildSuccess(step);
    }
    return el('div');
  }

  function transitionTo(node, direction){
    var existing = stage.querySelector('.bp-step:not(.bp-exit)');
    if(existing){
      existing.classList.add('bp-exit');
      existing.classList.remove('bp-enter');
      setTimeout(function(){ if(existing.parentNode) existing.parentNode.removeChild(existing); }, 260);
    }
    if(direction==='back') node.classList.add('bp-from-left');
    stage.appendChild(node);
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        node.classList.add('bp-enter');
        node.classList.remove('bp-from-left');
      });
    });
  }

  function updateProgress(){
    var step = currentStep();
    if(step && step.type==='success'){ progressWrap.style.display='none'; return; }
    progressWrap.style.display = '';
    var total = STEPS.filter(function(s){ return s.type!=='success'; }).length;
    var num = state.cursor + 1;
    var pct = Math.round(num/total*100);
    if(pct < 5) pct = 5;
    progressFill.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', String(pct));
    stepNumEl.textContent = String(num);
    stepTotalEl.textContent = String(total);
    percentEl.textContent = pct + '% Complete';
  }

  function render(direction){
    var step = currentStep();
    if(!step) return;
    transitionTo(buildStep(step), direction||'forward');
    updateProgress();
  }
  function goNext(){
    if(state.cursor < STEPS.length-1){
      state.history.push(state.cursor);
      state.cursor++;
      persist();
      render('forward');
    }
  }
  function goBack(){
    if(state.history.length===0) return;
    state.cursor = state.history.pop();
    persist();
    render('back');
  }


  function buildPayload(){
    var a = state.answers;

    function scoreLead(){
      var score = 0;

      if(a.location_status==='secured') score += 30;
      else if(a.location_status==='negotiating') score += 22;
      else if(a.location_status==='actively_looking') score += 12;
      else if(a.location_status==='early_planning') score += 5;

      if(a.project_timeline==='asap') score += 25;
      else if(a.project_timeline==='1_3_months') score += 22;
      else if(a.project_timeline==='3_6_months') score += 18;
      else if(a.project_timeline==='6_12_months') score += 10;
      else if(a.project_timeline==='12_plus_months') score += 4;

      if(a.project_budget==='1m_plus') score += 25;
      else if(a.project_budget==='500k_1m') score += 23;
      else if(a.project_budget==='250k_500k') score += 20;
      else if(a.project_budget==='100k_250k') score += 12;
      else if(a.project_budget==='not_sure') score += 8;

      if(a.project_size==='5000_plus') score += 15;
      else if(a.project_size==='3500_5000') score += 13;
      else if(a.project_size==='2000_3500') score += 11;
      else if(a.project_size==='1000_2000') score += 8;
      else if(a.project_size==='under_1000') score += 4;
      else if(a.project_size==='not_sure') score += 5;

      if(a.project_region && a.project_region!=='other_western_canada') score += 5;

      return score;
    }

    var leadScore = scoreLead();
    var leadStage = leadScore >= 75 ? 'Priority' : (leadScore >= 50 ? 'Qualified' : (leadScore >= 30 ? 'Nurture' : 'Early Stage'));

    return {
      submitted_at: new Date().toISOString(),
      form_version: 'medico-project-assessment-v1',
      source: 'medico-paid-traffic-landing-page',
      business: 'Medico Construction & Design Ltd.',
      lead: {
        first_name: a.first_name || '',
        last_name:  a.last_name || '',
        email:      a.email || '',
        phone:      phoneToE164(a.phone)
      },
      project: {
        sector: a.project_sector || null,
        project_type: a.project_type || null,
        location_status: a.location_status || null,
        project_region: a.project_region || null,
        project_size: a.project_size || null,
        project_budget: a.project_budget || null,
        project_timeline: a.project_timeline || null,
        lead_score: leadScore,
        lead_stage: leadStage
      },
      crm_tags: [
        'Medico Landing Page',
        'Healthcare Construction Inquiry',
        a.project_sector ? 'Sector: ' + a.project_sector : null,
        a.project_type ? 'Project: ' + a.project_type : null,
        a.location_status ? 'Location Status: ' + a.location_status : null,
        a.project_region ? 'Region: ' + a.project_region : null,
        a.project_size ? 'Size: ' + a.project_size : null,
        a.project_budget ? 'Budget: ' + a.project_budget : null,
        a.project_timeline ? 'Timeline: ' + a.project_timeline : null,
        leadStage + ' Lead'
      ].filter(Boolean),
      meta: {
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
        page_url: location.href
      }
    };
  }

  function trackMetaLead(){
    try{
      if(typeof fbq === 'function'){
        fbq('track', 'Lead', {
          content_name: 'Medico Healthcare Construction Project Assessment',
          content_category: 'Healthcare Construction Lead Form'
        });
      }
    }catch(e){}
  }

  function submitForm(verification){
    transitionTo(buildSubmitting(), 'forward');
    progressWrap.style.display = 'none';
    var payload = buildPayload();
    payload.verification = verification || null;
    var attempt = 0;
    function tryPost(){
      attempt++;
      fetch(WEBHOOK, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)})
        .then(function(res){ if(!res.ok) throw new Error('HTTP '+res.status); return res; })
        .then(function(){
          trackMetaLead();
          clearPersist();
          state.submitted = true;
          var li = -1;
          for(var i=0;i<STEPS.length;i++){ if(STEPS[i].type==='success'){ li=i; break; } }
          state.cursor = li>=0 ? li : STEPS.length-1;
          render('forward');
        })
        .catch(function(){
          if(attempt < 2){ setTimeout(tryPost, 800); }
          else { transitionTo(buildErrorState(function(){ submitForm(verification); }), 'forward'); }
        });
    }
    tryPost();
  }

  render('forward');
})();
</script>

</div>
</body>
</html>
