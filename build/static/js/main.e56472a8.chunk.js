(this["webpackJsonprummy-client"]=this["webpackJsonprummy-client"]||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),i=a.n(s),d=(a(29),a(4)),o=a.n(d),c=a(5),l=a(8),u=a(9),h=a(1),m=a(10),p=a(12),f=a(15),g=r.a.createContext(),v=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(g.Provider,{value:Object(f.a)({},this.props.value)},this.props.children)}}]),a}(n.Component),k=g.Consumer,b=(a(31),a(32),a(11)),w=function(e){var t=e.handleInputUsername,a=e.handleInputPassword,n=e.username,s=e.password,i=e.signin,d=function(e){e.preventDefault(),i()};return r.a.createElement(k,null,(function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Welcome to Rummy")),r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"Signin")),r.a.createElement("div",{className:"row"},r.a.createElement("form",null,r.a.createElement("div",{className:"row w-100"},r.a.createElement("label",{htmlFor:"username"},"Username: \xa0",r.a.createElement("input",{maxLength:50,type:"text",name:"username",value:n,onChange:t})),r.a.createElement("br",null)),r.a.createElement("div",{className:"row w-100"},r.a.createElement("label",{htmlFor:"username"},"Password: \xa0",r.a.createElement("input",{maxLength:50,type:"password",name:"password",value:s,onChange:a})),r.a.createElement("br",null)),r.a.createElement("div",{className:"row"},r.a.createElement("input",{type:"submit",value:"Signin",onClick:d})))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"Don't have an account yet?"),r.a.createElement(b.b,{to:"/signup"},"Click here")))}))},S=function(e){var t=e.handleInputUsername,a=e.handleInputPassword,n=e.username,s=e.password,i=e.signup,d=function(e){e.preventDefault(),i()};return r.a.createElement(k,null,(function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Welcome to Rummy")),r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"Signup")),r.a.createElement("div",{className:"row"},r.a.createElement("form",null,r.a.createElement("div",{className:"row w-100"},r.a.createElement("label",{htmlFor:"username"},"Username: \xa0",r.a.createElement("input",{minLength:3,maxLength:50,type:"text",name:"username",value:n,onChange:t})),r.a.createElement("br",null)),r.a.createElement("div",{className:"row w-100"},r.a.createElement("label",{htmlFor:"username"},"Password: \xa0",r.a.createElement("input",{minLength:5,maxLength:50,type:"password",name:"password",value:s,onChange:a})),r.a.createElement("br",null)),r.a.createElement("div",{className:"row"},r.a.createElement("input",{type:"submit",value:"Signup",onClick:d})))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"Already have an account?"),r.a.createElement(b.b,{to:"/"},"Click here")))}))},y=a(3),C=function(e){var t=e.isSignedIn,a=e.type;return"guest"===a&&t?r.a.createElement(y.a,{to:"/game"}):"private"!==a||t?r.a.createElement(y.b,e):r.a.createElement(y.a,{to:"/"})},E=a(14),M=a(2),O=a.n(M),j=function(){var e={cardSize:{width:69,height:94,padding:18},animationSpeed:100,table:"body",cardback:"red",acesHigh:!1,cardsUrl:"img/cards.png",blackJoker:!1,redJoker:!1,type:0,loop:1},t=1,a=[],n=1,r=n+12;function s(e){var t=O()(this).data("card");if(t.container){var a=t.container._click;a&&a.func.call(a.context||window,t,e)}}function i(e){var t=e.length;if(0!=t)for(;--t;){var a=Math.floor(Math.random()*(t+1)),n=e[t],r=e[a];e[t]=r,e[a]=n}}function d(e,t,a){this.init(e,t,a)}function o(){}function c(e){this.init(e)}function l(e){this.init(e)}function u(e){this.init(e)}return d.prototype={init:function(t,a,n){this.shortName=t+a,this.suit=t,this.rank=a,this.name=t.toUpperCase()+a,this.faceUp=!1,this.el=O()("<div/>").css({width:e.cardSize.width,height:e.cardSize.height,"background-image":"url("+e.cardsUrl+")",position:"absolute",cursor:"pointer"}).addClass("card").data("card",this).appendTo(O()(n)),this.showCard(),this.moveToFront()},resize:function(t){switch(t){case"small":O()(this.el).css({width:20,height:47});break;case"default":O()(this.el).css({width:e.cardSize.width,height:e.cardSize.height})}},toString:function(){return this.name},moveTo:function(t,a,n,r){var s={top:a-e.cardSize.height/2,left:t-e.cardSize.width/2};O()(this.el).animate(s,n||e.animationSpeed,r)},rotate:function(e){O()(this.el).css("-webkit-transform","rotate("+e+"deg)").css("-moz-transform","rotate("+e+"deg)").css("-ms-transform","rotate("+e+"deg)").css("transform","rotate("+e+"deg)").css("-o-transform","rotate("+e+"deg)")},showCard:function(){var t,a,n=this.rank;14==n&&(n=1),t=-n*e.cardSize.width,a=-{c:0,d:1,h:2,s:3,rj:2,bj:3}[this.suit]*e.cardSize.height,this.rotate(0),O()(this.el).css("background-position",t+"px "+a+"px")},hideCard:function(t){var a="red"==e.cardback?0*e.cardSize.height:-1*e.cardSize.height;O()(this.el).css("background-position","0px "+a+"px"),this.rotate(0)},moveToFront:function(){O()(this.el).css("z-index",t++)}},o.prototype=new Array,o.prototype.extend=function(e){for(var t in e)this[t]=e[t]},o.prototype.extend({addCard:function(e){this.addCards([e])},addCards:function(e){for(var t=0;t<e.length;t++){var a=e[t];a.container&&a.container.removeCard(a),this.push(a),a.container=this}},removeCard:function(e){for(var t=0;t<this.length;t++)if(this[t]==e)return this.splice(t,1),!0;return!1},init:function(t){t=t||{},this.x=t.x||O()(e.table).width()/2,this.y=t.y||O()(e.table).height()/2,this.faceUp=t.faceUp},click:function(e,t){this._click={func:e,context:t}},mousedown:function(e,t){this._mousedown={func:e,context:t}},mouseup:function(e,t){this._mouseup={func:e,context:t}},render:function(a){var n=(a=a||{}).speed||e.animationSpeed;this.calcPosition(a);for(var r=0;r<this.length;r++){var s=this[r];t++,s.moveToFront();var i=parseInt(O()(s.el).css("top")),d=parseInt(O()(s.el).css("left"));if(i!=s.targetTop||d!=s.targetLeft){var o={top:s.targetTop,left:s.targetLeft,queue:!1};a.immediate?O()(s.el).css(o):O()(s.el).animate(o,n)}}var c=this,l=function(){for(var e=0;e<c.length;e++)c.faceUp?c[e].showCard():c[e].hideCard()};a.immediate?l():setTimeout(l,n/2),a.callback&&setTimeout(a.callback,n)},topCard:function(){return this[this.length-1]},toString:function(){return"Container"}}),c.prototype=new o,c.prototype.extend({calcPosition:function(t){t=t||{};for(var a=Math.round(this.x-e.cardSize.width/2,0),n=Math.round(this.y-e.cardSize.height/2,0),r=0;r<this.length;r++)r>0&&r%6==0&&(n-=1,a-=1),this[r].targetTop=n,this[r].targetLeft=a},toString:function(){return"Deck"},deal:function(e,t,a,n){var r=this,s=0,i=e*t.length;!function e(){0!=r.length&&s!=i?(t[s%t.length].addCard(r.topCard()),t[s%t.length].render({callback:e,speed:a}),s++):n&&n()}()}}),l.prototype=new o,l.prototype.extend({calcPosition:function(t){t=t||{};for(var a=e.cardSize.width+(this.length-1)*e.cardSize.padding,n=Math.round(this.x-a/2),r=Math.round(this.y-e.cardSize.height/2,0),s=0;s<this.length;s++)this[s].targetTop=r,this[s].targetLeft=n+s*e.cardSize.padding},resize:function(e){switch(e){case"small":this.forEach((function(e,t){e.resize("small")}));break;case"default":this.forEach((function(e,t){e.resize("default")}))}},sort:function(){for(var e=0;e<this.length-1;e++)for(var t=0;t<this.length-e-1;t++)if(this[t].suit<this[t+1].suit||this[t].suit==this[t+1].suit&&this[t].rank>this[t+1].rank){var a=this[t];this[t]=this[t+1],this[t+1]=a}},toString:function(){return"Hand"}}),u.prototype=new o,u.prototype.extend({calcPosition:function(e){e=e||{}},toString:function(){return"Pile"},deal:function(e,t){this.dealCounter||(this.dealCounter=e*t.length)}}),{init:function(t){if(t)for(var o in t)e.hasOwnProperty(o)&&(e[o]=t[o]);e.acesHigh=!1,n=e.acesHigh?2:1,r=n+12,e.table=O()(e.table)[0],"static"==O()(e.table).css("position")&&O()(e.table).css("position","relative");for(var c=0;c<e.loop;c++)for(o=n;o<=r;o++)a.push(new d("c",o,e.table)),a.push(new d("d",o,e.table)),a.push(new d("h",o,e.table)),a.push(new d("s",o,e.table));e.blackJoker&&a.push(new d("bj",0,e.table)),e.redJoker&&a.push(new d("rj",0,e.table)),O()(".card").on("click",s),i(a)},all:a,getFakeCards:function(){return new d("bj",0,e.table)},options:e,SIZE:e.cardSize,Card:d,Container:o,Deck:c,Hand:l,Pile:u,shuffle:i}};function T(e,t){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://localhost:3000/join/"+t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+a}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,200===n.status){e.next=9;break}throw r.message;case 9:return e.abrupt("return",r);case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var D=function(e){var t=JSON.parse(e.data);console.log("data from server",t),"cards"===t.cmd?this.dealing(t):"draw"==t.cmd?this.draw(t):"discard"==t.cmd?this.discard(t):"newmeld"==t.cmd?this.moveMeldToPile(t):"addmeld"==t.cmd?this.moveCardToMeld(t):"win"==t.cmd||"loss"==t.cmd?this.declareWinner(t):"exit"==t.cmd?this.props.setErrorMessage("Lobby is full. Please choose another lobby code. "):t.cmd},P=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isMelding:!1,isAddingToMeld:!1,isWaiting:!1,isDrawing:!1,isDiscarding:!1,hasDrawn:!1,hasDiscarded:!1,cards:null,tableName:null,deck:null,myhand:null,ophand:null,discardPile:null,meldPile:null,currentMeld:null,currentSelectedCardHand:null,currentSelectedCardDeck:null,currentSelectedCardDiscard:null,currentSelectedMeld:null,code:"",token:"",hint:"",hasGameEnded:!1,winner:!1,score:0},n.handRef=r.a.createRef(),n.startGame=n.startGame.bind(Object(h.a)(n)),n.handleMeld=n.handleMeld.bind(Object(h.a)(n)),n.handleAddToMeld=n.handleAddToMeld.bind(Object(h.a)(n)),n.cancelMeldOrAddToMeld=n.cancelMeldOrAddToMeld.bind(Object(h.a)(n)),n.dealing=n.dealing.bind(Object(h.a)(n)),n.sortHand=n.sortHand.bind(Object(h.a)(n)),n.draw=n.draw.bind(Object(h.a)(n)),n.discard=n.discard.bind(Object(h.a)(n)),n.setGameState=n.setGameState.bind(Object(h.a)(n)),n.joinGameWithCode=n.joinGameWithCode.bind(Object(h.a)(n)),n.sendWSData=n.sendWSData.bind(Object(h.a)(n)),n.gameHandler=D.bind(Object(h.a)(n)),n.moveMeldToPile=n.moveMeldToPile.bind(Object(h.a)(n)),n.setHint=n.setHint.bind(Object(h.a)(n)),n.declareWinner=n.declareWinner.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"declareWinner",value:function(e){this.setState({hasGameEnded:!0,winner:"win"==e.cmd,score:e.score}),this.state.cards.all.forEach((function(e){return O()(e.el).hide()})),this.state.ophand.forEach((function(e){return O()(e.el).hide()}))}},{key:"setHint",value:function(e){this.setState({hint:e})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.websocket;t.onopen=function(e){console.log("Connected to server.")};var a=j();a.init({table:"#card-table"}),this.setState({cards:a,tableName:"#card-table"}),t.onmessage=function(t){e.gameHandler(t)},window.addEventListener("beforeunload",(function(){t&&t.close()}))}},{key:"sendWSData",value:function(e){var t=this.props,a=t.websocket,n=t.userToken,r=this.state,s=r.code,i=r.token;e.lobby=s,e.token=i,e.userToken=n,a.send(JSON.stringify(e))}},{key:"joinGameWithCode",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,a,n,r,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"12345678979",a=s.length>1?s[1]:void 0,e.prev=2,e.next=5,T(t,a);case 5:n=e.sent,r=n.token,console.log(r),this.setState({code:t,token:r}),this.sendWSData({cmd:"join"}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("An error occurs when trying to join: ",e.t0),this.props.setErrorMessage("An error occurs when trying to join "+e.t0);case 16:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"discard",value:function(e){var t=this.state,a=(t.currentSelectedCardHand,t.isDiscarding,t.myhand),n=t.discardPile,r=t.ophand,s=t.deck,i=e.card;"me"==e.player?(n.addCard(a.find((function(e){return e.suit==i.suit&&e.rank==i.rank}))),a.removeCard(a.find((function(e){return e.suit==i.suit&&e.rank==i.rank}))),this.setGameState("isWaiting",{hasDiscarded:!0,currentSelectedCardHand:null})):(O()(r.topCard().el).hide(),r.removeCard(r.topCard()),r.addCard(s.find((function(e){return e.suit==i.suit&&e.rank==i.rank}))),r.render({immediate:!0}),s.render({immediate:!0}),n.addCard(r.topCard()),this.setGameState("isDrawing",{hasDiscarded:!1,hasDrawn:!1})),r.sort(),a.render(),r.render(),n.render(),s.render()}},{key:"setGameState",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n="";switch(e){case"isMelding":n="Please choose 3 cards that have the same rank but different suit, or same suit but in sequence.";break;case"isAddingToMeld":n="Please choose a card, then click on a preexisiting meld that you want to lay off to.";break;case"isWaiting":n="Waiting for other player move.";break;case"isDrawing":n="Please draw a card from the deck or the discard pile.";break;case"isDiscarding":n="Please choose a card from your hand to discard or you can create a meld."}this.setState(Object(f.a)({isMelding:"isMelding"==e,isAddingToMeld:"isAddingToMeld"==e,isWaiting:"isWaiting"==e,isDrawing:"isDrawing"==e,isDiscarding:"isDiscarding"==e,hint:n},t),a)}},{key:"draw",value:function(e){var t=this.state,a=(t.isDrawing,t.deck),n=t.discardPile,r=t.myhand,s=(t.currentSelectedCardDeck,t.currentSelectedCardDiscard,t.ophand),i=t.cards;if("me"==e.player){var d=e.card;"deck"==e.from?(r.addCard(a.find((function(e){return e.suit==d.suit&&e.rank==d.rank}))),this.setGameState("isDiscarding",{currentSelectedCardDeck:null,currentSelectedCardDiscard:null,hasDrawn:!0})):(r.addCard(n.topCard()),this.setGameState("isDiscarding",{currentSelectedCardDeck:null,currentSelectedCardDiscard:null,hasDrawn:!0})),a.render(),r.render(),s.render(),n.render()}else"deck"==e.from?(a.addCard(i.getFakeCards()),a.render({immediate:!0}),s.addCard(a.topCard()),a.render(),r.render(),s.render(),n.render()):(s.addCard(n.topCard()),s.render(),n.render(),a.addCard(s.topCard()),s.addCard(i.getFakeCards()),s.render({immediate:!0}),a.render({immediate:!0}))}},{key:"cancelMeldOrAddToMeld",value:function(){var e=this.state,t=e.currentMeld,a=e.myhand,n=e.isMelding,r=e.isAddingToMeld;if(n||r){for(var s=t.length,i=0;i<s;i++){var d=t.pop();a.addCard(d),t.removeCard(d),a.render(),t.render()}this.setGameState("isDiscarding",{currentSelectedCardHand:null})}}},{key:"sortHand",value:function(){var e=this.state.myhand;e.sort(),e.render()}},{key:"startGame",value:function(e){e&&(e.stopPropagation(),e.preventDefault()),this.props.startingGame(),console.log("Starting game");var t=this.state.cards,a=new t.Deck;a.x-=50,a.addCards(t.all),a.render({immediate:!0});var n=new t.Hand({faceUp:!0,y:340}),r=new t.Hand({faceUp:!0,y:60}),s=new t.Deck({faceUp:!0});s.x+=50;var i=new t.Hand({faceUp:!0,x:a.x+20,y:a.y+20}),d=this;n.click((function(e){d.state.isMelding&&d.setState({currentSelectedCardHand:e},(function(){return d.handleMeld()})),d.state.isDiscarding&&d.setState({currentSelectedCardHand:e},(function(){d.sendWSData({cmd:"discard",suit:e.suit,rank:e.rank})})),d.state.isAddingToMeld&&d.setState({currentSelectedCardHand:e},(function(){return d.handleAddToMeld()}))})),a.click((function(e){d.state.isDrawing&&d.setState({currentSelectedCardDeck:e},(function(){d.sendWSData({cmd:"draw",from:"deck"})}))})),s.click((function(e){d.state.isDrawing&&d.setState({currentSelectedCardDiscard:e},(function(){d.sendWSData({cmd:"draw",from:"discardPile",rank:e.rank,suit:e.suit})}))})),this.setState({cards:t,deck:a,myhand:n,ophand:r,discardPile:s,meldPile:[],currentMeld:i}),this.joinGameWithCode("12131313",this.props.userToken)}},{key:"dealing",value:function(e){var t,a=this,n=this.state,r=n.cards,s=n.discardPile,i=n.deck,d=n.myhand,o=n.ophand,c=n.meldPile,l=Object(E.a)(e.cards);try{var u=function(){var e=t.value,a=r.all.find((function(t,a){return t.suit==e.suit&&t.rank==e.rank}));d.addCard(a)};for(l.s();!(t=l.n()).done;)u()}catch(b){l.e(b)}finally{l.f()}var h,m=Object(E.a)(e.discardPile);try{var p=function(){var e=h.value;s.addCard(r.all.find((function(t,a){return t.suit==e.suit&&t.rank==e.rank})))};for(m.s();!(h=m.n()).done;)p()}catch(b){m.e(b)}finally{m.f()}for(var f=0;f<e.opcards;f++)o.addCard(r.getFakeCards());var g,v=Object(E.a)(e.melds);try{var k=function(){var e,t=g.value,n=[],s=Object(E.a)(t);try{var i=function(){var t=e.value,a=r.all.find((function(e,a){return e.suit==t.suit&&e.rank==t.rank}));n.push(a)};for(s.s();!(e=s.n()).done;)i()}catch(b){s.e(b)}finally{s.f()}for(var d=new r.Hand({faceUp:!0,y:1}),o=n.length,l=0;l<o;l++){var u=n.pop();d.addCard(u)}d.sort(),d.x=d.x-230,d.y=d.y+250*(c.length+1)/5;var h=a;d.click((function(e){h.state.isAddingToMeld&&h.setState({currentSelectedMeld:d},(function(){return h.handleAddToMeld()}))})),c.push(d),d.resize("small"),d.render()};for(v.s();!(g=v.n()).done;)k()}catch(b){v.e(b)}finally{v.f()}i.render(),s.render(),d.render(),o.render(),e.myturn?e.drawPhase?this.setGameState("isDrawing"):this.setGameState("isDiscarding",{hasDrawn:!0}):this.setGameState("isWaiting")}},{key:"moveCardToMeld",value:function(e){var t=this,a=e.card,n=this.state,r=n.currentMeld,s=n.myhand,i=n.ophand,d=n.deck,o=n.meldPile;if("me"==e.player){var c=this.state.currentSelectedMeld;if(a.rank==r[0].rank&&a.suit==r[0].suit)c.addCard(r.topCard());else{this.cancelMeldOrAddToMeld();var l=s.find((function(e){return e.rank==a.rank&&e.rank==a.rank}));c.addCard(l)}this.setState({currentSelectedCardHand:null,currentSelectedMeld:null},(function(){return setTimeout((function(){return t.setGameState("isDiscarding")}),500)})),c.sort(),c.resize("small"),c.render(),r.render(),i.render(),s.render()}else{var u=d.find((function(e){return e.suit==a.suit&&e.rank==a.rank}));O()(i.topCard().el).hide(),i.removeCard(i.topCard()),i.addCard(u),i.render({immediate:!0}),d.render({immediate:!0});var h=o[e.meldId];h.addCard(i.topCard()),h.sort(),h.resize("small"),h.render(),i.render()}}},{key:"handleAddToMeld",value:function(){var e=this.state,t=e.isAddingToMeld,a=e.currentMeld,n=e.myhand,r=e.currentSelectedCardHand,s=e.currentSelectedMeld;if(t)if(0===a.length)a.addCard(r),n.removeCard(r),a.sort(),n.render(),a.render();else if(1===a.length&&null!=s){var i=a[0];s[0].suit===i.suit&&s[0].rank-1===i.rank||s[s.length-1].suit===i.suit&&s[s.length-1].rank+1===i.rank||s[0].suit!=i.suit&&s[0].rank==i.rank&&s[1].rank==i.rank&&s[2].rank==i.rank?this.sendWSData({cmd:"addmeld",card:{suit:i.suit,rank:i.rank},meldId:s.id}):alert("Cannot add this card into this meld")}}},{key:"handleMeld",value:function(){var e=!1,t=this.state,a=(t.cards,t.myhand),n=t.currentMeld,r=(t.meldPile,this.state.currentSelectedCardHand);n.length<2?(n.addCard(r),a.removeCard(r),n.sort(),a.render(),n.render()):2==n.length&&(n.addCard(r),a.removeCard(r),n.sort(),n[0].suit==n[1].suit&&n[1].suit==n[2].suit?1==Math.abs(n[0].rank-n[1].rank)&&1==Math.abs(n[1].rank-n[2].rank)&&(e=!0):n[0].rank==n[1].rank&&n[1].rank==n[2].rank&&(e=!0),e?this.sendWSData({cmd:"newmeld",player:"me",meld:n.map((function(e){return{suit:e.suit,rank:e.rank}}))}):alert("meld not valid"),a.render(),n.render())}},{key:"moveMeldToPile",value:function(e){var t=this,a=this.state,n=a.cards,r=a.meldPile,s=a.currentMeld,i=a.myhand,d=a.ophand,o=a.deck,c=e.meld,l=new n.Hand({faceUp:!0,y:1});if("me"==e.player){var u=!0;if(c.length===s.length)for(var h=function(e){if(!s.some((function(t){return t.rank==c[e].rank&&t.suit==c[e].suit})))return u=!1,"break"},m=0;m<c.length;m++){if("break"===h(m))break}else u=!1;if(u)for(var p=c.length,f=0;f<p;f++){var g=s.pop();l.addCard(g),s.removeCard(g)}else{this.cancelMeldOrAddToMeld();for(var v=c.length,k=0;k<v;k++){var b=i.pop();l.addCard(b),s.removeCard(b)}}this.setState({currentSelectedCardHand:null},(function(){return setTimeout((function(){return t.setGameState("isDiscarding")}),500)}))}else if("op"==e.player){for(var w=0;w<c.length;w++)O()(d.topCard().el).hide(),d.removeCard(d.topCard()),d.render({immediate:!0});for(var S=function(e){d.addCard(o.find((function(t){return t.suit==c[e].suit&&t.rank==c[e].rank})))},y=0;y<c.length;y++)S(y);d.render({immediate:!0}),o.render({immediate:!0});for(var C=0;C<c.length;C++)l.addCard(d.topCard())}l.sort(),l.render({immediate:!0}),l.x=l.x-230,l.y=l.y+250*(r.length+1)/5;var E=this;l.id=e.meldId,l.click((function(e){E.state.isAddingToMeld&&E.setState({currentSelectedMeld:l},(function(){return E.handleAddToMeld()}))})),r.push(l),l.resize("small"),l.render(),s.render()}},{key:"render",value:function(){var e=this,t=this.props.hasGameStarted,a=this.state,n=a.isMelding,s=a.hasDiscarded,i=a.hasDrawn,d=a.isWaiting,o=a.isAddingToMeld,c=a.hint,l=a.winner,u=a.score,h=a.hasGameEnded,m=function(){return!!d||(!(!n&&!o)||!(i&&!s))};this.handRef;return r.a.createElement("div",null,r.a.createElement("p",null,"Welcome to the game"),r.a.createElement("div",{id:"hint"},t&&!h?c:null),r.a.createElement("button",{id:"start-btn",style:{display:t?"none":"inline"},onClick:this.startGame},"Start the game"),h?r.a.createElement("div",{id:"game-winner"},r.a.createElement("h1",null,l?"You have won":"You have lost"),r.a.createElement("h2",null,l?"Your score: ":"Your opponent score: "," ",u),r.a.createElement("button",{id:"replay",onClick:function(){return window.location.reload()}},"Play another game")):r.a.createElement("div",{id:"card-table"},r.a.createElement("button",{disabled:m(),style:{display:t?"block":"none"},id:"meld",onClick:function(){return e.setGameState("isMelding")}},"Meld"),r.a.createElement("button",{disabled:m(),style:{display:t?"block":"none"},id:"addtomeld",onClick:function(){return e.setGameState("isAddingToMeld")}},"Add to meld"),r.a.createElement("button",{style:{display:t&(n||o)?"block":"none"},id:"cancel-meld",onClick:this.cancelMeldOrAddToMeld},"Cancel"),r.a.createElement("button",{style:{display:t?"block":"none"},id:"sort-hand",onClick:this.sortHand},"Sort hand")))}}]),a}(n.Component),A="https://localhost:3000",G="/user/signin",W="/user/signup",I="/user/checkJWTToken";function H(e,t){return z.apply(this,arguments)}function z(){return(z=Object(c.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(A+G,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({username:t,password:a})});case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,200===n.status||!1!==n.ok){e.next=11;break}throw new Error(r.err.message);case 11:return e.abrupt("return",r);case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function U(e,t){return N.apply(this,arguments)}function N(){return(N=Object(c.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(A+W,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({username:t,password:a})});case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,200==n.status||0!=n.ok){e.next=11;break}throw new Error(r.err.message);case 11:return e.abrupt("return",r);case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function L(e){return F.apply(this,arguments)}function F(){return(F=Object(c.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(A+I,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+t}});case 3:return a=e.sent,e.next=6,a.json();case 6:if(0!=(n=e.sent).success||"JWT invalid"!=n.status){e.next=11;break}return e.abrupt("return",!1);case 11:return e.abrupt("return",!0);case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}var J=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={message:"Hello from context store",errorMsg:"",username:"",password:"",user:"",userToken:"",hasGameStarted:!1,websocket:null,isFinishedLoading:!1},n.toggleLoading=n.toggleLoading.bind(Object(h.a)(n)),n.signin=n.signin.bind(Object(h.a)(n)),n.signup=n.signup.bind(Object(h.a)(n)),n.validate=n.validate.bind(Object(h.a)(n)),n.handleInputUsername=n.handleInputUsername.bind(Object(h.a)(n)),n.handleInputPassword=n.handleInputPassword.bind(Object(h.a)(n)),n.setErrorMessage=n.setErrorMessage.bind(Object(h.a)(n)),n.startingGame=n.startingGame.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).WSS||"wss://localhost:3000",e.prev=1,a=JSON.parse(localStorage.getItem("appState")),console.log(a),!a){e.next=9;break}return e.next=7,L(a.userToken);case 7:e.sent?this.setState({user:a.user,username:a.username,userToken:a.userToken}):localStorage.clear();case 9:this.setState({isFinishedLoading:!0,websocket:new WebSocket(t)}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),this.setState({isFinishedLoading:!0,errorMsg:"Cannot check user's token. Please signin again."});case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.state.websocket&&this.state.websocket.close()}},{key:"startingGame",value:function(){this.setState({hasGameStarted:!0})}},{key:"handleInputUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handleInputPassword",value:function(e){this.setState({password:e.target.value})}},{key:"setErrorMessage",value:function(e){this.setState({errorMsg:e})}},{key:"signin",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({isLoading:!0,errorMsg:""}),e.prev=1,this.validate()){e.next=5;break}return this.setErrorMessage("Username or password is invalid. Please try again."),e.abrupt("return");case 5:return e.next=7,H(this.state.username,this.state.password);case 7:t=e.sent,this.setState({userToken:t.token,user:t.user}),localStorage.setItem("appState",JSON.stringify({username:this.state.username,user:this.state.user,userToken:this.state.userToken})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),this.setErrorMessage(e.t0.message);case 15:return e.prev=15,this.setState({isLoading:!1}),e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[1,12,15,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"signup",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({isLoading:!0,errorMsg:""}),e.prev=1,this.validate()){e.next=5;break}return this.setErrorMessage("Username or password is invalid. Please try again."),e.abrupt("return");case 5:return e.next=7,U(this.state.username,this.state.password);case 7:t=e.sent,this.setState({userToken:t.token,user:t.user}),localStorage.setItem("appState",JSON.stringify({username:this.state.username,user:this.state.user,userToken:this.state.userToken})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),this.setErrorMessage(e.t0.message);case 15:return e.prev=15,this.setState({isLoading:!1}),e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[1,12,15,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"validate",value:function(){var e=this.state,t=e.username,a=e.password;return!(t.length>50||a.length>50)}},{key:"toggleLoading",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.errorMsg,a=e.username,n=e.password,s=e.user,i=e.userToken,d=e.hasGameStarted,o=e.websocket,c=e.isFinishedLoading,l=null!==s&&""!==i;return r.a.createElement(b.a,null,r.a.createElement(v,{value:this.state},r.a.createElement("div",{className:"App"},c?r.a.createElement("div",null,r.a.createElement("div",{className:"error-message"},t||null),r.a.createElement(y.d,null,r.a.createElement(C,{isSignedIn:l,type:"guest",path:"/signup"},r.a.createElement(S,{signup:this.signup,handleInputUsername:this.handleInputUsername,handleInputPassword:this.handleInputPassword,username:a,password:n})),null!=o?r.a.createElement(C,{isSignedIn:l,type:"private",path:"/game"},r.a.createElement(P,{hasGameStarted:d,startingGame:this.startingGame,setErrorMessage:this.setErrorMessage,websocket:o,userToken:i})):null,r.a.createElement(C,{isSignedIn:l,type:"guest",path:"/"},r.a.createElement(w,{signin:this.signin,handleInputUsername:this.handleInputUsername,handleInputPassword:this.handleInputPassword,username:a,password:n})))):r.a.createElement("p",null,"Is Loading"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.e56472a8.chunk.js.map