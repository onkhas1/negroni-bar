/* Подставляет данные оператора и контакты из config.js в политику и согласие */
(function(){
  var C=Object.assign({operator:'Владелец выездного бара Negroni',inn:'',email:'',city:'Барнаул',phone:'+79967076653',phoneText:'+7 (996) 707-66-53',telegram:'Negroni_Barnaul'},window.NEGRONI_CONFIG||{});
  var each=function(s,f){[].forEach.call(document.querySelectorAll(s),f);};
  each('[data-c="operator"]',function(el){el.textContent=C.operator;});
  each('[data-c="city"]',function(el){el.textContent=C.city;});
  each('[data-c="inn"]',function(el){if(C.inn) el.textContent=', ИНН '+C.inn; else el.remove();});
  each('[data-c="contacts"]',function(el){
    var parts=[];
    if(C.email) parts.push('<a href="mailto:'+C.email+'">'+C.email+'</a>');
    parts.push('<a href="tel:'+C.phone+'">'+C.phoneText+'</a>');
    parts.push('<a href="https://t.me/'+C.telegram+'" target="_blank" rel="noopener">Telegram @'+C.telegram+'</a>');
    el.innerHTML=parts.join(', ');
  });
})();
