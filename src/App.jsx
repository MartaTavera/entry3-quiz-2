import { useState } from "react";

const EJS = { svc:"service_pgxlp1i", tpl:"template_d2xgcnm", key:"P5uiOiNDz1QvWSgCG", toEmail:"martatavera@gmail.com" };

const C = { pri:"#4f46e5",ok:"#16a34a",err:"#dc2626",neu:"#6b7280",bg:"#f8fafc",card:"#fff",bdr:"#e2e8f0",a:"#0369a1",b:"#7c3aed" };

const ImgBox = ({label, src}) => (
  <div style={{border:"2px dashed #94a3b8",borderRadius:8,padding:10,textAlign:"center",marginBottom:18,background:"#f8fafc"}}>
    <div style={{fontSize:12,color:"#64748b",fontWeight:600,marginBottom:4}}>📷 {label}</div>
    {src
      ? <img src={src} alt={label} style={{maxWidth:"100%",maxHeight:380,display:"block",margin:"0 auto"}}/>
      : <div style={{fontSize:11,color:"#94a3b8"}}>Set imgSrc on this question in the questions array</div>}
  </div>
);

const HotelBoxes = () => (
  <div style={{display:"flex",gap:16,marginBottom:20}}>
    {[{name:"Style Hotel",dist:"450 m from stadium",color:"#0369a1",bg:"#e0f2fe"},{name:"Fair Hotel",dist:"1 km from stadium",color:"#7c3aed",bg:"#ede9fe"}].map(h=>(
      <div key={h.name} style={{flex:1,background:h.bg,border:`2px solid ${h.color}22`,borderRadius:14,padding:"20px 18px",textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
        <div style={{fontSize:28,marginBottom:8}}>🏨</div>
        <div style={{fontWeight:700,fontSize:17,color:h.color,marginBottom:8}}>{h.name}</div>
        <div style={{fontWeight:600,fontSize:18,color:h.color}}>{h.dist}</div>
      </div>
    ))}
  </div>
);

const TravelCosts = () => (
  <div style={{display:"flex",gap:16,marginBottom:20}}>
    {[{name:"travel",cost:"£169"},{name:"hotel",cost:"£108"}].map(h=>(
      <div key={h.name} style={{flex:1,background:"#fff",border:"2px solid #334155",borderRadius:14,padding:"20px 18px",textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
        <div style={{fontWeight:600,fontSize:17,color:"#334155",marginBottom:8}}>{h.name}</div>
        <div style={{fontWeight:700,fontSize:26,color:"#334155"}}>{h.cost}</div>
      </div>
    ))}
  </div>
);

const ParcelTable = ({sel,onSel}) => {
  const rows=[{h:27,w:11},{h:21,w:17},{h:24,w:7},{h:30,w:15},{h:25,w:12},{h:22,w:16},{h:14,w:6}];
  return (
    <table style={{width:"100%",borderCollapse:"collapse",fontSize:15,marginBottom:18}}>
      <thead><tr style={{background:"#f1f5f9"}}>
        {["Height (cm)","Weight (kg)","Qualifies? (h<25 & w<15)"].map(h=><th key={h} style={{padding:"9px 10px",textAlign:"left",border:`1px solid ${C.bdr}`,fontSize:14}}>{h}</th>)}
      </tr></thead>
      <tbody>
        {rows.map((r,i)=>{
          const key=`${r.h}/${r.w}`, ok=r.h<25&&r.w<15, active=sel===key;
          return <tr key={i} onClick={ok?()=>onSel(key):undefined}
            style={{background:active?"#ede9fe":ok?"#fff":"#f9fafb",cursor:ok?"pointer":"default",
              outline:active?`2px solid ${C.b}`:"none",transition:"background 0.1s"}}>
            <td style={{padding:"9px 10px",border:`1px solid ${C.bdr}`}}>{r.h}</td>
            <td style={{padding:"9px 10px",border:`1px solid ${C.bdr}`}}>{r.w}</td>
            <td style={{padding:"9px 10px",border:`1px solid ${C.bdr}`}}>
              {ok?<span style={{color:C.ok,fontWeight:600}}>✓ Yes — click to select</span>:<span style={{color:C.neu}}>✗ No</span>}
            </td>
          </tr>;
        })}
      </tbody>
    </table>
  );
};

const questions = [
  {id:"A1",sec:"A",marks:2,type:"number",
   text:"Bret is planning a trip to see a football match.\n\nHe saves £85 each month for the trip.\n\nHe will save for 4 months.\n\nHow much will he save in total?",
   hint:"Multiply: £85 × 4",answer:340,displayAnswer:"£340",
   explanation:"£85 × 4 = £340"},
  {id:"A2",sec:"A",marks:2,type:"yesno",
   preText:"Bret chooses a hotel for his trip.",
   customContent:"hotels",
   text:"Bret says the Style Hotel is 650 m nearer to the stadium than the Fair Hotel.\n\nIs Bret correct?\n\nShow why you think this.",
   hint:"Convert 1 km to metres, then subtract 450 m.",answer:"No",displayAnswer:"No",
   explanation:"1 km = 1000 m. 1000 − 450 = 550 m difference, not 650 m. Bret is incorrect."},
  {id:"A3",sec:"A",marks:2,type:"number",
   preText:"These are the amounts Bret will spend on his trip.",
   customContent:"travel",
   text:"Calculate the total of these amounts.",
   hint:"Add: £169 + £108",answer:277,displayAnswer:"£277",
   explanation:"£169 + £108 = £277"},
  {id:"A4",sec:"A",marks:3,type:"twonumber",
   text:"Bret works for a printing company.\n\nHe prints documents for a customer.\n\nEach document takes 8 sheets of paper.\n\nBret has 500 sheets of paper.\n\nHow many complete documents can Bret print?\n\nShow how many sheets of paper are left over.",
   hint:"Divide 500 ÷ 8. The whole number = complete documents. The remainder = sheets left over.",
   labels:["complete documents","sheets of paper left over"],
   answer:[62,4],displayAnswer:"62 complete documents, 4 sheets left over",
   explanation:"500 ÷ 8 = 62 remainder 4. So 62 complete documents and 4 sheets left over."},
  {id:"B1",sec:"B",marks:3,type:"number",
   text:"Bret works for a printing company.\n\nHe buys 5 packs of card.\n\nEach pack of card costs £14.06\n\nHow much money does Bret pay in total for the packs of card?\n\nUse the correct money format.",
   hint:"Multiply: 14.06 × 5",
   answer:70.30,displayAnswer:"£70.30",
   check:v=>Math.abs(parseFloat(v.replace(/^£/,""))-70.30)<0.01,
   explanation:"£14.06 × 5 = £70.30"},
  {id:"B2",sec:"B",marks:1,type:"choice",
   image:"B2 – Shapes",imgSrc:"images/QuestionB2.png",
   text:"Bret prints labels with different shapes.\n\nWhich shape has the most right angles?",
   hint:"Count the 90° corners in each shape.",
   options:["Triangle","Trapezium","Circle","Pentagon (house shape)","Parallelogram","Right-angled triangle"],
   answer:"Pentagon (house shape)",displayAnswer:"Pentagon (house shape)",
   explanation:"The house-shaped pentagon has 4 right angles — the most of all shapes shown."},
  {id:"B3",sec:"B",marks:1,type:"choice",
   text:"Bret prints documents for customers.\n\nEach document has a number.\n\nBret prints documents in number order from smallest to largest.\n\nWhat is the number of the second document that Bret prints?",
   hint:"Sort all six numbers first.",
   options:["546","504","605","460","560","540"],
   answer:"504",displayAnswer:"504",
   explanation:"Sorted: 460, 504, 540, 546, 560, 605. Second = 504."},
  {id:"B4",sec:"B",marks:2,type:"number",
   text:"Bret needs 450 packs of paper for next week.\n\nHe has 284 packs of paper.\n\nHow many more packs of paper does Bret need?",
   hint:"Subtract: 450 − 284",answer:166,displayAnswer:"166",
   explanation:"450 − 284 = 166"},
  {id:"B5",sec:"B",marks:1,type:"number",
   text:"Round 284 to the nearest 10.",
   hint:"Units digit is 4 — less than 5, so round down.",answer:280,displayAnswer:"280",
   explanation:"284 rounded to nearest 10 = 280"},
  {id:"B6",sec:"B",marks:1,type:"number",
   text:"Bret buys packs of card.\n\nThese are the numbers of sheets of card in different packs:\n\n12\u00a0\u00a0\u00a0\u00a024\u00a0\u00a0\u00a0\u00a036\n\nThe numbers of sheets follow a pattern.\n\nBret wants to buy the pack with the next largest number of sheets.\n\nWhat is the number of sheets in the pack Bret buys?",
   hint:"What is added each time?",answer:48,displayAnswer:"48",
   explanation:"+12 each time: 12, 24, 36, 48."},
  {id:"B7",sec:"B",marks:3,type:"yesno",
   image:"B7 – Copying Costs Chart",imgSrc:"images/QuestionB7.png",
   text:"The chart shows the costs of copying documents.\n\nA customer wants a large size copy.\n\nBret says a large size colour copy costs 48p more than a large size black and white copy.\n\nIs Bret correct?\n\nShow why you think this.",
   hint:"Read the two 'large size' bars, then subtract.",
   answer:"No",displayAnswer:"No",
   explanation:"Large colour ≈ 64p, large B&W ≈ 19p. 64 − 19 = 45p, not 48p. Bret is incorrect."},
  {id:"B8",sec:"B",marks:3,type:"yesno",
   image:"B8 – Business Card Box & Ruler",imgSrc:"images/QuestionB8.png",
   text:"Bret sells business cards in a box.\n\nThe length of the business cards needs to be 20 mm less than the length of the box.\n\nBret says the business cards will be 6 cm in length.\n\nIs Bret correct?\n\nShow why you think this.",
   hint:"20 mm = 2 cm. Subtract 2 cm from the box length.",
   answer:"Yes",displayAnswer:"Yes",
   explanation:"Box = 8 cm. 20 mm = 2 cm. 8 − 2 = 6 cm. Bret is correct."},
  {id:"B9",sec:"B",marks:1,type:"text",
   image:"B9 – Upside Down Logo",imgSrc:"images/QuestionB9.png",
   text:"Bret needs to put a logo on a business card.\n\nHe prints the logo the wrong way up by mistake.\n\nBret needs to turn the logo the correct way up.\n\nWhat fraction does Bret need to turn the logo?",
   hint:"A full turn = 360°. What fraction turns something 180°?",
   answer:"1/2",displayAnswer:"1/2",
   normalize:v=>v.trim().replace(/\s/g,""),
   check:v=>v==="1/2"||v==="0.5" || v=="half",
   explanation:"Half a turn (1/2 = 180°) corrects the logo."},
  {id:"B10",sec:"B",marks:1,type:"yesno",
   text:"Bret designs a page in a newspaper.\n\nThe page has a length of 36 cm.\n\nAn advert will take 1/3 of the length of the page.\n\nBret says the advert needs to be 10 cm in length.\n\nIs Bret correct?\n\nShow why you think this.",
   hint:"Calculate: 36 ÷ 3",answer:"No",displayAnswer:"No",
   explanation:"36 ÷ 3 = 12 cm, not 10 cm. Bret is incorrect."},
  {id:"B11",sec:"B",marks:1,type:"number",
   image:"B11 – Poster Diagram",imgSrc:"images/QuestionB11.png",
   text:"Bret designs a poster about a concert.\n\nHe puts a picture on the poster.\n\nHow far is the top of the picture from the top of the poster?",
   hint:"Remaining space = poster height - picture top  .",
   answer:20,displayAnswer:"20 cm", suffix:"cm",
   explanation:"50 − 30 = 20 cm "},
  {id:"B12",sec:"B",marks:1,type:"choice",
   image:"B12 – Sign Lengths",imgSrc:"images/QuestionB12.png",
   text:"Bret makes a sign for a van.\n\nThe space for the sign is 2.05 m in length.\n\nBret makes signs of different lengths.\n\nWhich is the longest sign that fits in the space?",
   hint:"Must be ≤ 2.05 m. Find the largest value that fits.",
   options:["1.83 m","2.2 m","1.9 m","2.1 m","2.15 m","1.98 m"],
   answer:"1.98 m",displayAnswer:"1.98 m",
   explanation:"2.2, 2.1, 2.15 are all > 2.05 so don't fit. The longest that fits is 1.98 m."},
  {id:"B13",sec:"B",marks:1,type:"choice",
   text:"Bret has information on the number of documents printed.\n\nDocuments printed:\nJuly = 240\nAugust = 180\nSeptember = 200\n\nWhich month had the fewest documents printed?",
   hint:"Compare the three values.",
   options:["July","August","September"],
   answer:"August",displayAnswer:"August",
   explanation:"Aug (180) < Sep (200) < Jul (240). Fewest = August."},
  {id:"B14",sec:"B",marks:2,type:"text",
   image:"B14 – Clock",imgSrc:"images/QuestionB14.png",
   text:"Bret makes a delivery to a customer in the afternoon.\n\nHe looks at the time on a clock.\n\nWhat time does Bret make the delivery?\n\nUse 24 hour time format.",
   hint:"It is afternoon — add 12 to the hour. The minute hand points to the 2.",
   answer:"15:10",displayAnswer:"15:10",
   normalize:v=>v.trim().replace(/\s/g,""),
   check:v=>v==="15:10"||v==="1510",
   explanation:"The clock shows 2:45 pm → 24-hour format: 14:45."},
  {id:"B15",sec:"B",marks:1,type:"parcel",
   text:"Bret sends parcels to customers.\n\nHe has a list of the heights and weights of the parcels.\n\nIt costs £5 to send a parcel of height less than 25 cm and weight less than 15 kg.\n\nWhich is the heaviest parcel that Bret can send for £5?",
   hint:"First filter for rows that qualify, then pick the heaviest weight.",
   answer:"24/7",displayAnswer:"24 cm / 7 kg",
   explanation:"Qualifying parcels: 24cm/7kg ✓ and 14cm/6kg ✓. Heaviest = 24cm/7kg."},
  {id:"B16",sec:"B",marks:2,type:"number",
   image:"B16 – Water Bottle",imgSrc:"images/QuestionB16.png",
   text:"Bret takes a water bottle to work.\n\nHe has 1 litre of water in the bottle at the start of the day.\n\nThe diagram shows the water left over at the end of the day.\n\nHow much water did Bret use to the nearest division? (ml)",
   hint:"Subtract: 1000 − 250",answer:750,displayAnswer:"750 ml",
   explanation:"1000 − 250 = 700 ml used."},
  {id:"B17",sec:"B",marks:1,type:"number",
   image:"B17 – Wages Chart",imgSrc:"images/QuestionB17.png",
   text:"The chart shows the weekly wages of people in different jobs.\n\nBret is paid a wage of £330 each week.\n\nHow much more is Bret paid each week than a person with the least wage?",
   hint:"Find the shortest bar (lowest wage) and read its value, then subtract from £330.",
   answer:40,displayAnswer:"£40",
   check:v=>[38,39,40,41,42,43,44,45].includes(parseInt(v)),
   explanation:"The hairdresser has the lowest wage (~£290). £330 − £290 = £40. (Answers between £38–£45 accepted depending on chart reading.)"},
];

const initA = () => ({input:"",input2:"",selected:null,yesNo:null,submitted:false,correct:false,userDisplay:""});

export default function Quiz() {
  const [answers, setAnswers] = useState(()=>questions.map(initA));
  const [current, setCurrent]  = useState(0);
  const [finished, setFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [name, setName]         = useState("");
  const [emailSent, setEmailSent]       = useState(false);
  const [emailSending, setEmailSending] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  const q  = questions[current];
  const a  = answers[current];
  const sc = q.sec==="A" ? C.a : C.b;
  const upd = patch => setAnswers(prev=>prev.map((x,i)=>i===current?{...x,...patch}:x));

  const canSubmit = q.type==="number"    ? a.input!==""
    : q.type==="text"      ? a.input!==""
    : q.type==="choice"    ? !!a.selected
    : q.type==="yesno"     ? !!a.yesNo
    : q.type==="parcel"    ? !!a.selected
    : q.type==="twonumber" ? a.input!==""&&a.input2!=="" : false;

  const checkAnswer = () => {
    let correct=false, display="";
    if(q.type==="number"){
      correct = q.check ? q.check(a.input) : (Number.isInteger(q.answer)?parseInt(a.input)===q.answer:Math.abs(parseFloat(a.input)-q.answer)<0.01);
      display = a.input;
    } else if(q.type==="text"){
      const norm=q.normalize?q.normalize(a.input):a.input.trim();
      correct = q.check?q.check(norm):norm===q.answer;
      display = a.input;
    } else if(q.type==="choice"){
      correct=a.selected===q.answer; display=a.selected;
    } else if(q.type==="yesno"){
      correct=a.yesNo===q.answer; display=a.yesNo;
    } else if(q.type==="parcel"){
      correct=a.selected===q.answer;
      display=a.selected?a.selected.replace("/"," cm / ")+" kg":"";
    } else if(q.type==="twonumber"){
      const v1=parseInt(a.input), v2=parseInt(a.input2);
      correct = v1===q.answer[0] && v2===q.answer[1];
      display = `${a.input} documents, ${a.input2} sheets`;
    }
    upd({submitted:true,correct,userDisplay:display});
  };

  const goNext = () => { setShowHint(false); if(current+1>=questions.length) setFinished(true); else setCurrent(c=>c+1); };
  const goBack = () => { setShowHint(false); setCurrent(c=>c-1); };
  const retry  = () => upd({input:"",input2:"",selected:null,yesNo:null,submitted:false,correct:false,userDisplay:""});
  const skip   = () => { upd({submitted:true,correct:false,userDisplay:"(skipped)"}); goNext(); };

  const score = answers.filter(x=>x.correct).length;

  const sendEmail = async () => {
    if(!name.trim()){setEmailErr("Please enter your name.");return;}
    setEmailSending(true); setEmailErr("");
    const rows=questions.map((q,i)=>{
      const a=answers[i];
      return `${q.id.padEnd(4)} | ${a.correct?"✓":"✗"} | ${q.text.slice(0,55).padEnd(55)} | Your: ${(a.userDisplay||"—").padEnd(12)} | Answer: ${q.displayAnswer}`;
    }).join("\n");
    const results=`Entry 3 Maths Quiz\nName: ${name.trim()}\nScore: ${score}/${questions.length} (${Math.round(score/questions.length*100)}%)\n\n${"─".repeat(100)}\n${rows}`;
    try {
      const res=await fetch("https://api.emailjs.com/api/v1.0/email/send",{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          service_id: EJS.svc,
          template_id: EJS.tpl,
          user_id: EJS.key,
          template_params:{
            to_email: EJS.toEmail,
            name: name.trim(),
            score: `${score}/${questions.length} (${Math.round(score/questions.length*100)}%)`,
            results
          }
        })
      });
      if(res.ok) setEmailSent(true);
      else {
        const txt = await res.text();
        setEmailErr(`Send failed (${res.status}): ${txt}`);
      }
    } catch(e){ setEmailErr("Network error. Please try again."); }
    setEmailSending(false);
  };

  if(finished){
    const pct=Math.round(score/questions.length*100);
    const secGroups=["A","B"];
    return (
      <div style={{minHeight:"100vh",background:C.bg,padding:"24px 16px",fontFamily:"system-ui,sans-serif"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <div style={{background:C.card,borderRadius:16,padding:32,boxShadow:"0 4px 24px rgba(0,0,0,0.08)",marginBottom:20}}>
            <div style={{textAlign:"center",paddingBottom:20,borderBottom:`1px solid ${C.bdr}`,marginBottom:20}}>
              <div style={{fontSize:48}}>{pct>=80?"🌟":pct>=60?"👍":"📚"}</div>
              <h1 style={{color:C.pri,margin:"8px 0 4px",fontSize:24}}>Quiz Complete!</h1>
              <div style={{fontSize:44,fontWeight:700,color:pct>=60?C.ok:C.err}}>{pct}%</div>
              <div style={{color:C.neu,marginBottom:10,fontSize:16}}>{score} / {questions.length} questions correct</div>
              <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
                {secGroups.map(s=>{
                  const qs=questions.filter(q=>q.sec===s);
                  const sc=qs.filter(q=>answers[questions.indexOf(q)].correct).length;
                  return <span key={s} style={{background:s==="A"?"#e0f2fe":"#ede9fe",color:s==="A"?C.a:C.b,padding:"4px 16px",borderRadius:99,fontSize:14,fontWeight:600}}>
                    Section {s}: {sc}/{qs.length}
                  </span>;
                })}
              </div>
            </div>

            {secGroups.map(sec=>(
              <div key={sec} style={{marginBottom:24}}>
                <h3 style={{color:sec==="A"?C.a:C.b,margin:"0 0 10px",fontSize:16}}>
                  Section {sec} — {sec==="A"?"Non-calculator":"Calculator"}
                </h3>
                <div style={{overflowX:"auto"}}>
                  <table style={{width:"100%",borderCollapse:"collapse",fontSize:14,minWidth:400}}>
                    <thead><tr style={{background:"#f1f5f9"}}>
                      {["Q","✓/✗","Your Answer","Correct Answer"].map(h=><th key={h} style={{padding:"8px 10px",textAlign:"left",border:`1px solid ${C.bdr}`,fontSize:13,whiteSpace:"nowrap"}}>{h}</th>)}
                    </tr></thead>
                    <tbody>
                      {questions.filter(q=>q.sec===sec).map(q=>{
                        const a=answers[questions.indexOf(q)];
                        return <tr key={q.id} style={{background:a.correct?"#f0fdf4":a.userDisplay&&a.userDisplay!=="(skipped)"?"#fef2f2":"#fff"}}>
                          <td style={{padding:"8px 10px",border:`1px solid ${C.bdr}`,fontWeight:700,color:sec==="A"?C.a:C.b}}>{q.id}</td>
                          <td style={{padding:"8px 10px",border:`1px solid ${C.bdr}`,fontWeight:700,color:a.correct?C.ok:C.err,textAlign:"center"}}>{a.correct?"✓":"✗"}</td>
                          <td style={{padding:"8px 10px",border:`1px solid ${C.bdr}`,color:a.userDisplay&&a.userDisplay!=="(skipped)"?"#334155":C.neu}}>{a.userDisplay||"—"}</td>
                          <td style={{padding:"8px 10px",border:`1px solid ${C.bdr}`,color:C.ok,fontWeight:600}}>{q.displayAnswer}</td>
                        </tr>;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            <div style={{background:"#f8fafc",borderRadius:10,padding:18,marginBottom:18,border:`1px solid ${C.bdr}`}}>
              <h3 style={{margin:"0 0 8px",fontSize:16}}>📧 Send your results</h3>
              {emailSent ? (
                <p style={{color:C.ok,fontWeight:600,margin:0}}>✓ Results sent successfully!</p>
              ) : (
                <>
                  <p style={{fontSize:13,color:C.neu,margin:"0 0 10px"}}>Enter your name and click Submit to send your results.</p>
                  <div style={{display:"flex",gap:8}}>
                    <input
                      type="text"
                      placeholder="Your name…"
                      value={name}
                      onChange={e=>setName(e.target.value)}
                      onKeyDown={e=>e.key==="Enter"&&sendEmail()}
                      style={{flex:1,padding:"10px 14px",border:`2px solid ${C.bdr}`,borderRadius:7,fontSize:15,outline:"none"}}
                    />
                    <button onClick={sendEmail} disabled={emailSending}
                      style={{background:C.pri,color:"#fff",border:"none",borderRadius:7,padding:"10px 20px",fontWeight:600,fontSize:15,cursor:"pointer",opacity:emailSending?0.6:1,whiteSpace:"nowrap"}}>
                      {emailSending?"Sending…":"Submit"}
                    </button>
                  </div>
                  {emailErr&&<p style={{color:C.err,fontSize:13,margin:"6px 0 0"}}>{emailErr}</p>}
                </>
              )}
            </div>

            <button onClick={()=>{setAnswers(questions.map(initA));setCurrent(0);setFinished(false);setEmailSent(false);setName("");setEmailErr("");}}
              style={{width:"100%",background:C.pri,color:"#fff",border:"none",borderRadius:8,padding:"14px",fontSize:16,fontWeight:600,cursor:"pointer"}}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progress=(current/questions.length)*100;
  return (
    <div style={{minHeight:"100vh",width:"100vw",background:C.bg,display:"flex",alignItems:"center",justifyContent:"center",padding:"32px 24px",fontFamily:"system-ui,sans-serif",boxSizing:"border-box"}}>
      <div style={{background:C.card,borderRadius:16,padding:"48px 56px",width:780,maxWidth:"100%",minHeight:560,boxShadow:"0 4px 24px rgba(0,0,0,0.08)",boxSizing:"border-box",display:"flex",flexDirection:"column"}}>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <span style={{fontSize:13,fontWeight:700,color:sc,background:q.sec==="A"?"#e0f2fe":"#ede9fe",borderRadius:99,padding:"4px 12px"}}>
            SECTION {q.sec} – {q.sec==="A"?"Non-calculator":"Calculator"}
          </span>
          <span style={{fontSize:15,color:C.neu}}>Q{current+1} / {questions.length}</span>
        </div>

        <div style={{background:"#e2e8f0",borderRadius:99,height:7,marginBottom:20}}>
          <div style={{background:sc,borderRadius:99,height:7,width:`${progress}%`,transition:"width 0.3s"}}/>
        </div>

        {current===4&&<div style={{background:"#ede9fe",border:"1px solid #c4b5fd",borderRadius:8,padding:"9px 14px",fontSize:14,color:C.b,marginBottom:14,fontWeight:600}}>🧮 Section B starts here — calculator allowed!</div>}

        <div style={{display:"flex",gap:8,marginBottom:14}}>
          <span style={{background:q.sec==="A"?"#e0f2fe":"#ede9fe",color:sc,borderRadius:99,padding:"3px 12px",fontSize:13,fontWeight:600}}>{q.marks} mark{q.marks>1?"s":""}</span>
          <span style={{color:C.neu,fontSize:13,lineHeight:"1.8"}}>Question {q.id}</span>
        </div>

        {q.preText && <p style={{fontSize:18,fontWeight:500,color:"#334155",marginBottom:12,marginTop:0}}>{q.preText}</p>}
        {q.customContent==="hotels"&&<HotelBoxes/>}
        {q.customContent==="travel"&&<TravelCosts/>}
        {q.image&&<ImgBox label={q.image} src={q.imgSrc||""}/>}

        <p style={{fontSize:20,fontWeight:600,color:"#1e293b",lineHeight:1.2,marginBottom:18,marginTop:0,whiteSpace:"pre-line"}}>{q.text}</p>

        {!a.submitted&&(
          <button onClick={()=>setShowHint(h=>!h)}
            style={{background:"none",border:"1px dashed #94a3b8",borderRadius:7,padding:"6px 14px",fontSize:13,color:C.neu,cursor:"pointer",marginBottom:showHint?10:16,alignSelf:"flex-start"}}>
            {showHint?"Hide hint ▲":"Show hint 💡"}
          </button>
        )}
        {showHint&&!a.submitted&&(
          <div style={{background:"#fefce8",border:"1px solid #fde047",borderRadius:7,padding:"10px 14px",fontSize:15,color:"#713f12",marginBottom:16}}>{q.hint}</div>
        )}

        {!a.submitted&&<>
          {(q.type==="number"||q.type==="text")&&
            <input type={q.type==="number"?"number":"text"} value={a.input}
              onChange={e=>upd({input:e.target.value})}
              onKeyDown={e=>e.key==="Enter"&&canSubmit&&checkAnswer()}
              placeholder="Enter your answer…"
              style={{width:"100%",padding:"13px 16px",border:`2px solid ${C.bdr}`,borderRadius:8,fontSize:20,outline:"none",boxSizing:"border-box",marginBottom:18}}/>}

          {q.type==="twonumber"&&
            <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:18}}>
              {q.labels.map((label,i)=>(
                <div key={i}>
                  <div style={{fontSize:13,fontWeight:600,color:C.neu,marginBottom:5}}>{label}</div>
                  <input type="number" value={i===0?a.input:a.input2}
                    onChange={e=>upd(i===0?{input:e.target.value}:{input2:e.target.value})}
                    onKeyDown={e=>e.key==="Enter"&&canSubmit&&checkAnswer()}
                    placeholder={`Enter number of ${label}…`}
                    style={{width:"100%",padding:"13px 16px",border:`2px solid ${C.bdr}`,borderRadius:8,fontSize:20,outline:"none",boxSizing:"border-box"}}/>
                </div>
              ))}
            </div>}

          {q.type==="choice"&&
            <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:18}}>
              {q.options.map(opt=><button key={opt} onClick={()=>upd({selected:opt})}
                style={{padding:"12px 16px",border:`2px solid ${a.selected===opt?sc:C.bdr}`,borderRadius:8,
                  background:a.selected===opt?(q.sec==="A"?"#e0f2fe":"#ede9fe"):"#fff",
                  color:a.selected===opt?sc:"#334155",fontSize:16,cursor:"pointer",textAlign:"left",
                  fontWeight:a.selected===opt?600:400,transition:"all 0.12s"}}>{opt}</button>)}
            </div>}

          {q.type==="yesno"&&
            <div style={{display:"flex",gap:14,marginBottom:18}}>
              {["Yes","No"].map(v=><button key={v} onClick={()=>upd({yesNo:v})}
                style={{flex:1,padding:"16px",border:`2px solid ${a.yesNo===v?sc:C.bdr}`,borderRadius:8,
                  background:a.yesNo===v?(q.sec==="A"?"#e0f2fe":"#ede9fe"):"#fff",
                  color:a.yesNo===v?sc:"#334155",fontSize:20,fontWeight:600,cursor:"pointer",transition:"all 0.12s"}}>{v}</button>)}
            </div>}

          {q.type==="parcel"&&<ParcelTable sel={a.selected} onSel={v=>upd({selected:v})}/>}
        </>}

        {a.submitted&&(
          <div style={{background:a.correct?"#f0fdf4":"#fef2f2",border:`2px solid ${a.correct?"#86efac":"#fca5a5"}`,borderRadius:10,padding:16,marginBottom:18}}>
            <div style={{fontSize:20,fontWeight:700,color:a.correct?C.ok:C.err,marginBottom:6}}>{a.correct?"✓ Correct!":"✗ Not quite"}</div>
            <p style={{margin:0,color:"#334155",fontSize:15,lineHeight:1.65}}>{q.explanation}</p>
          </div>
        )}

        <div style={{flex:1}}/>

        <div style={{display:"flex",gap:10}}>
          {current>0&&(
            <button onClick={goBack}
              style={{padding:"13px 16px",background:"#fff",color:C.neu,border:`2px solid ${C.bdr}`,borderRadius:8,fontSize:15,cursor:"pointer",fontWeight:500}}>
              ← Back
            </button>
          )}
          {!a.submitted?(<>
            <button onClick={checkAnswer} disabled={!canSubmit}
              style={{flex:1,background:sc,color:"#fff",border:"none",borderRadius:8,padding:"13px",fontSize:16,fontWeight:600,cursor:"pointer",opacity:canSubmit?1:0.4}}>
              Submit Answer
            </button>
            <button onClick={skip}
              style={{padding:"13px 16px",background:"#fff",color:C.neu,border:`2px solid ${C.bdr}`,borderRadius:8,fontSize:15,cursor:"pointer"}}>
              Skip
            </button>
          </>):(<>
            {!a.correct&&(
              <button onClick={retry}
                style={{flex:1,background:"#fff",color:sc,border:`2px solid ${sc}`,borderRadius:8,padding:"13px",fontSize:15,fontWeight:600,cursor:"pointer"}}>
                Try Again
              </button>
            )}
            <button onClick={goNext}
              style={{flex:1,background:sc,color:"#fff",border:"none",borderRadius:8,padding:"13px",fontSize:16,fontWeight:600,cursor:"pointer"}}>
              {current+1>=questions.length?"Finish Quiz →":"Next →"}
            </button>
          </>)}
        </div>

        <div style={{marginTop:14,textAlign:"center",fontSize:13,color:C.neu}}>
          Score so far: {score} / {current} correct
        </div>
      </div>
    </div>
  );
}