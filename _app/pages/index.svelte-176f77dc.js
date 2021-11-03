import{S as qt,i as Rt,s as jt,k as h,e as a,t as p,j as A,J as Ft,d as n,n as m,c as s,a as r,g as d,m as q,K as gt,L as se,b as u,f as ne,E as e,o as R,x as j,u as F,v as K,M as Wt,N as Kt,I as At,O as Ut}from"../chunks/vendor-a94804ce.js";import{B as ke}from"../chunks/Blanchor-7dd5003a.js";var Yt="/your-repo-name/_app/assets/2880px-UDP_encapsulation.svg-53c35d25.png",Jt="/your-repo-name/_app/assets/whatIThought-8a0efce4.png",Qt="/your-repo-name/_app/assets/examplePacketEncapsulation-fa59df75.png";function Xt(b){let l,t;return l=new Wt({props:{class:"icon-button",icon:Kt,style:"color:white;"}}),{c(){A(l.$$.fragment)},l(i){q(l.$$.fragment,i)},m(i,o){R(l,i,o),t=!0},p:At,i(i){t||(j(l.$$.fragment,i),t=!0)},o(i){F(l.$$.fragment,i),t=!1},d(i){K(l,i)}}}function Zt(b){let l,t,i;return t=new Wt({props:{class:"icon-button",icon:Ut}}),{c(){l=p("Google Slides Version "),A(t.$$.fragment)},l(o){l=d(o,"Google Slides Version "),q(t.$$.fragment,o)},m(o,V){ne(o,l,V),R(t,o,V),i=!0},p:At,i(o){i||(j(t.$$.fragment,o),i=!0)},o(o){F(t.$$.fragment,o),i=!1},d(o){o&&n(l),K(t,o)}}}function ea(b){let l;return{c(){l=p("Wikipedia")},l(t){l=d(t,"Wikipedia")},m(t,i){ne(t,l,i)},d(t){t&&n(l)}}}function ta(b){let l;return{c(){l=p("Wikipedia")},l(t){l=d(t,"Wikipedia")},m(t,i){ne(t,l,i)},d(t){t&&n(l)}}}function aa(b){let l;return{c(){l=p("this component")},l(t){l=d(t,"this component")},m(t,i){ne(t,l,i)},d(t){t&&n(l)}}}function sa(b){let l,t,i,o,V,Ve,Pe,U,P,ze,Te,De,Se,xe,Y,z,_t,Ge,le,T,Me,E,re,Ne,Ce,N,Be,D,He,Le,S,C,$t,Oe,B,We,x,Ae,I,oe,qe,Re,ie,je,Fe,w,ce,Ke,Ue,he,Ye,Je,me,Qe,Xe,v,ue,Ze,et,pe,tt,at,be,st,J,H,kt,nt,de,lt,rt,Q,G,bt,ot,_,ve,it,ct,fe,ht,mt,X,L,yt,ut,Z,O,Et,pt,W,dt,M,vt,ye;return P=new ke({props:{href:"https://github.com/harryli0088/improved-packet-encapsulation-visualization",$$slots:{default:[Xt]},$$scope:{ctx:b}}}),T=new ke({props:{href:"https://docs.google.com/presentation/d/1zAoo-gQp8Dvv8wP9MSVR4KtrOzsT9i6xAuVzN9musTs/edit?usp=sharing",$$slots:{default:[Zt]},$$scope:{ctx:b}}}),D=new ke({props:{href:"https://en.wikipedia.org/wiki/Encapsulation_(networking)",$$slots:{default:[ea]},$$scope:{ctx:b}}}),x=new ke({props:{href:"https://en.wikipedia.org/wiki/Encapsulation_(networking)",$$slots:{default:[ta]},$$scope:{ctx:b}}}),M=new ke({props:{href:"https://github.com/harryli0088/improved-packet-encapsulation-visualization/blob/main/src/lib/PacketEncapsulationViz.svelte",$$slots:{default:[aa]},$$scope:{ctx:b}}}),{c(){l=h(),t=a("main"),i=a("header"),o=a("div"),V=a("h1"),Ve=p("Improved Packet Encapsulation Visualization"),Pe=h(),U=a("div"),A(P.$$.fragment),ze=h(),Te=a("br"),De=h(),Se=a("br"),xe=h(),Y=a("div"),z=a("img"),Ge=h(),le=a("section"),A(T.$$.fragment),Me=h(),E=a("section"),re=a("h2"),Ne=p("Background"),Ce=h(),N=a("p"),Be=p(`In computer networking, several communication layers have separate and abstracted responsibilities.
      \u201CEncapsulation takes information from a higher layer and adds a header to it, treating the higher layer information as data\u201D
       - `),A(D.$$.fragment),He=p(`.
      Images that visualize this layered encapsulation usually look like the image below.`),Le=h(),S=a("div"),C=a("img"),Oe=h(),B=a("div"),We=p("Example Image from "),A(x.$$.fragment),Ae=h(),I=a("section"),oe=a("h2"),qe=p("Important Ideas"),Re=h(),ie=a("p"),je=p("The important ideas to capture in this visualization include:"),Fe=h(),w=a("ul"),ce=a("li"),Ke=p("Communication Layers"),Ue=h(),he=a("li"),Ye=p("Each layer adds its own header"),Je=h(),me=a("li"),Qe=p("Each layer encapsulates the data from the previous layer"),Xe=h(),v=a("section"),ue=a("h2"),Ze=p("Main Confusion"),et=h(),pe=a("p"),tt=p(`The main problem I have with the visualization from Wikipedia is that it made me think that all the blocks from all the layers were being transmitted together.
      I have also seen images like the the one below that, without any separation between the layers, make this even more confusing.`),at=h(),be=a("p"),st=h(),J=a("div"),H=a("img"),nt=h(),de=a("p"),lt=p(`In the image above, the first 3 layers visually breakdown the encapsulation, but the bottom layer is that is actually sent.
      I was confused and thought that all the blocks in all the layers were being sent (below).`),rt=h(),Q=a("div"),G=a("img"),ot=h(),_=a("section"),ve=a("h2"),it=p("Improvements"),ct=h(),fe=a("p"),ht=p(`I made (in my opinion) improved packet encapsulation visualizations.
      The main ideas to communicate are preserved, namely that each subsequent layer encapsulates and abstracts the data from the previous layer.
      At the same time, the dotted lines and curly braces make it more evident that the upper layers are not duplicated and also sent along,
      but rather are a way of visually breaking down the encapsulations. I also made a stack for VPN encrypted traffic.`),mt=h(),X=a("div"),L=a("img"),ut=h(),Z=a("div"),O=a("img"),pt=h(),W=a("p"),dt=p(`You can modify and generate these SVG images yourself by cloning the repo and tweaking
      `),A(M.$$.fragment),vt=p("."),this.h()},l(c){Ft('[data-svelte="svelte-1anpopb"]',document.head).forEach(n),l=m(c),t=s(c,"MAIN",{});var f=r(t);i=s(f,"HEADER",{class:!0});var ge=r(i);o=s(ge,"DIV",{});var $=r(o);V=s($,"H1",{});var _e=r(V);Ve=d(_e,"Improved Packet Encapsulation Visualization"),_e.forEach(n),Pe=m($),U=s($,"DIV",{style:!0});var $e=r(U);q(P.$$.fragment,$e),$e.forEach(n),ze=m($),Te=s($,"BR",{}),De=m($),Se=s($,"BR",{}),xe=m($),Y=s($,"DIV",{class:!0});var It=r(Y);z=s(It,"IMG",{src:!0,alt:!0,style:!0,class:!0}),It.forEach(n),$.forEach(n),ge.forEach(n),Ge=m(f),le=s(f,"SECTION",{});var wt=r(le);q(T.$$.fragment,wt),wt.forEach(n),Me=m(f),E=s(f,"SECTION",{});var ee=r(E);re=s(ee,"H2",{});var Vt=r(re);Ne=d(Vt,"Background"),Vt.forEach(n),Ce=m(ee),N=s(ee,"P",{});var Ee=r(N);Be=d(Ee,`In computer networking, several communication layers have separate and abstracted responsibilities.
      \u201CEncapsulation takes information from a higher layer and adds a header to it, treating the higher layer information as data\u201D
       - `),q(D.$$.fragment,Ee),He=d(Ee,`.
      Images that visualize this layered encapsulation usually look like the image below.`),Ee.forEach(n),Le=m(ee),S=s(ee,"DIV",{class:!0});var Ie=r(S);C=s(Ie,"IMG",{src:!0,alt:!0,class:!0}),Oe=m(Ie),B=s(Ie,"DIV",{class:!0});var ft=r(B);We=d(ft,"Example Image from "),q(x.$$.fragment,ft),ft.forEach(n),Ie.forEach(n),ee.forEach(n),Ae=m(f),I=s(f,"SECTION",{});var te=r(I);oe=s(te,"H2",{});var Pt=r(oe);qe=d(Pt,"Important Ideas"),Pt.forEach(n),Re=m(te),ie=s(te,"P",{});var zt=r(ie);je=d(zt,"The important ideas to capture in this visualization include:"),zt.forEach(n),Fe=m(te),w=s(te,"UL",{});var ae=r(w);ce=s(ae,"LI",{});var Tt=r(ce);Ke=d(Tt,"Communication Layers"),Tt.forEach(n),Ue=m(ae),he=s(ae,"LI",{});var Dt=r(he);Ye=d(Dt,"Each layer adds its own header"),Dt.forEach(n),Je=m(ae),me=s(ae,"LI",{});var St=r(me);Qe=d(St,"Each layer encapsulates the data from the previous layer"),St.forEach(n),ae.forEach(n),te.forEach(n),Xe=m(f),v=s(f,"SECTION",{});var k=r(v);ue=s(k,"H2",{});var xt=r(ue);Ze=d(xt,"Main Confusion"),xt.forEach(n),et=m(k),pe=s(k,"P",{});var Gt=r(pe);tt=d(Gt,`The main problem I have with the visualization from Wikipedia is that it made me think that all the blocks from all the layers were being transmitted together.
      I have also seen images like the the one below that, without any separation between the layers, make this even more confusing.`),Gt.forEach(n),at=m(k),be=s(k,"P",{}),r(be).forEach(n),st=m(k),J=s(k,"DIV",{class:!0});var Mt=r(J);H=s(Mt,"IMG",{src:!0,alt:!0,class:!0}),Mt.forEach(n),nt=m(k),de=s(k,"P",{});var Nt=r(de);lt=d(Nt,`In the image above, the first 3 layers visually breakdown the encapsulation, but the bottom layer is that is actually sent.
      I was confused and thought that all the blocks in all the layers were being sent (below).`),Nt.forEach(n),rt=m(k),Q=s(k,"DIV",{class:!0});var Ct=r(Q);G=s(Ct,"IMG",{src:!0,alt:!0,style:!0,class:!0}),Ct.forEach(n),k.forEach(n),ot=m(f),_=s(f,"SECTION",{});var y=r(_);ve=s(y,"H2",{});var Bt=r(ve);it=d(Bt,"Improvements"),Bt.forEach(n),ct=m(y),fe=s(y,"P",{});var Ht=r(fe);ht=d(Ht,`I made (in my opinion) improved packet encapsulation visualizations.
      The main ideas to communicate are preserved, namely that each subsequent layer encapsulates and abstracts the data from the previous layer.
      At the same time, the dotted lines and curly braces make it more evident that the upper layers are not duplicated and also sent along,
      but rather are a way of visually breaking down the encapsulations. I also made a stack for VPN encrypted traffic.`),Ht.forEach(n),mt=m(y),X=s(y,"DIV",{class:!0});var Lt=r(X);L=s(Lt,"IMG",{src:!0,alt:!0,class:!0}),Lt.forEach(n),ut=m(y),Z=s(y,"DIV",{class:!0});var Ot=r(Z);O=s(Ot,"IMG",{src:!0,alt:!0,class:!0}),Ot.forEach(n),pt=m(y),W=s(y,"P",{});var we=r(W);dt=d(we,`You can modify and generate these SVG images yourself by cloning the repo and tweaking
      `),q(M.$$.fragment,we),vt=d(we,"."),we.forEach(n),y.forEach(n),f.forEach(n),this.h()},h(){document.title="Home",gt(U,"font-size","2em"),se(z.src,_t="./improvedPacketEncapsulation.svg")||u(z,"src",_t),u(z,"alt","improved packet encapsulation"),gt(z,"background-color","white"),u(z,"class","svelte-o0vgmk"),u(Y,"class","img-parent svelte-o0vgmk"),u(i,"class","svelte-o0vgmk"),se(C.src,$t=Yt)||u(C,"src",$t),u(C,"alt","Wikipedia packet encapsulation"),u(C,"class","svelte-o0vgmk"),u(B,"class","caption svelte-o0vgmk"),u(S,"class","img-parent svelte-o0vgmk"),se(H.src,kt=Qt)||u(H,"src",kt),u(H,"alt","example packet encapsulation"),u(H,"class","svelte-o0vgmk"),u(J,"class","img-parent svelte-o0vgmk"),se(G.src,bt=Jt)||u(G,"src",bt),u(G,"alt","what I thought was being sent"),gt(G,"max-width","100%"),u(G,"class","svelte-o0vgmk"),u(Q,"class","img-parent svelte-o0vgmk"),se(L.src,yt="./improvedPacketEncapsulation.svg")||u(L,"src",yt),u(L,"alt","improved packet encapsulation"),u(L,"class","svelte-o0vgmk"),u(X,"class","img-parent svelte-o0vgmk"),se(O.src,Et="./improvedPacketEncapsulationVpn.svg")||u(O,"src",Et),u(O,"alt","improved packet encapsulation VPN"),u(O,"class","svelte-o0vgmk"),u(Z,"class","img-parent svelte-o0vgmk")},m(c,g){ne(c,l,g),ne(c,t,g),e(t,i),e(i,o),e(o,V),e(V,Ve),e(o,Pe),e(o,U),R(P,U,null),e(o,ze),e(o,Te),e(o,De),e(o,Se),e(o,xe),e(o,Y),e(Y,z),e(t,Ge),e(t,le),R(T,le,null),e(t,Me),e(t,E),e(E,re),e(re,Ne),e(E,Ce),e(E,N),e(N,Be),R(D,N,null),e(N,He),e(E,Le),e(E,S),e(S,C),e(S,Oe),e(S,B),e(B,We),R(x,B,null),e(t,Ae),e(t,I),e(I,oe),e(oe,qe),e(I,Re),e(I,ie),e(ie,je),e(I,Fe),e(I,w),e(w,ce),e(ce,Ke),e(w,Ue),e(w,he),e(he,Ye),e(w,Je),e(w,me),e(me,Qe),e(t,Xe),e(t,v),e(v,ue),e(ue,Ze),e(v,et),e(v,pe),e(pe,tt),e(v,at),e(v,be),e(v,st),e(v,J),e(J,H),e(v,nt),e(v,de),e(de,lt),e(v,rt),e(v,Q),e(Q,G),e(t,ot),e(t,_),e(_,ve),e(ve,it),e(_,ct),e(_,fe),e(fe,ht),e(_,mt),e(_,X),e(X,L),e(_,ut),e(_,Z),e(Z,O),e(_,pt),e(_,W),e(W,dt),R(M,W,null),e(W,vt),ye=!0},p(c,[g]){const f={};g&1&&(f.$$scope={dirty:g,ctx:c}),P.$set(f);const ge={};g&1&&(ge.$$scope={dirty:g,ctx:c}),T.$set(ge);const $={};g&1&&($.$$scope={dirty:g,ctx:c}),D.$set($);const _e={};g&1&&(_e.$$scope={dirty:g,ctx:c}),x.$set(_e);const $e={};g&1&&($e.$$scope={dirty:g,ctx:c}),M.$set($e)},i(c){ye||(j(P.$$.fragment,c),j(T.$$.fragment,c),j(D.$$.fragment,c),j(x.$$.fragment,c),j(M.$$.fragment,c),ye=!0)},o(c){F(P.$$.fragment,c),F(T.$$.fragment,c),F(D.$$.fragment,c),F(x.$$.fragment,c),F(M.$$.fragment,c),ye=!1},d(c){c&&n(l),c&&n(t),K(P),K(T),K(D),K(x),K(M)}}}class ra extends qt{constructor(l){super();Rt(this,l,null,sa,jt,{})}}export{ra as default};
