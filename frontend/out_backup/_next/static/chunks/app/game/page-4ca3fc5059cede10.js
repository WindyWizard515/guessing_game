(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{4353:function(e,s,n){Promise.resolve().then(n.bind(n,3577))},7907:function(e,s,n){"use strict";var r=n(5313);n.o(r,"useRouter")&&n.d(s,{useRouter:function(){return r.useRouter}})},3577:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l}});var r=n(7437),t=n(2265),o=n(7908);let u=()=>(0,o.Z)({method:"POST",url:"".concat("","/round/start/randomquestion"),validateStatus:()=>!0}),i=()=>(0,o.Z)({method:"GET",url:"".concat("","/round/current/answers")});var a=n(7907);function l(){let e=(0,a.useRouter)(),[s,n]=(0,t.useState)(void 0),[o,l]=(0,t.useState)(30),[c,d]=(0,t.useState)(void 0),[h,f]=(0,t.useState)(void 0);return(0,t.useEffect)(()=>{u().then(s=>{410===s.status&&e.push("/gameover"),console.log("Response from starting random round",s),f(s),n(s.data.questions.prompt)}).catch(e=>{console.error("Error starting random round",e)})},[]),(0,t.useEffect)(()=>{if(o<=0)return;let e=setInterval(()=>{l(o-1)},1e3);return()=>{clearInterval(e)}},[o]),(0,t.useEffect)(()=>{o>0||i().then(e=>{console.log("Response from getRoundAnswers:",e),d(e.data),setTimeout(()=>{window.location.reload(!1)},1e4)}).catch(e=>{console.error("Error from getting round answers",e)})},[o]),(0,r.jsxs)("div",{children:[o<=0?c&&c.results&&c.overallGamePoints&&c.roundAnswer?(console.log("hi",c),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:["Answer: ",(0,r.jsx)("b",{children:c.roundAnswer})]}),(0,r.jsx)("h4",{children:"Here are the answers:"}),c.results.map((e,s)=>(0,r.jsxs)("p",{children:[e.player," guessed ",e.guess," -- ",e.points," points (",e.difference," off)"]},s)),(0,r.jsx)("h4",{children:"This brings the overall score to:"}),c.overallGamePoints.map((e,s)=>(0,r.jsxs)("p",{children:[e.name,": ",e.points]},s))]})):null:(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Question!"}),(0,r.jsx)("p",{className:"question",children:s}),(0,r.jsxs)("p",{children:["Make a guess on your device! Time left: ",o]}),o<=0?null:(0,r.jsx)("img",{src:"images/secret_agent_guessing.jpg",alt:"Secret Agent"})]}),o<=0?(0,r.jsx)("h4",{children:"New question soon!"}):null]})}}},function(e){e.O(0,[908,971,69,744],function(){return e(e.s=4353)}),_N_E=e.O()}]);