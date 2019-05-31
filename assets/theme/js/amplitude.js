function logEvent(ampEventName, ampEventProp) {
  amplitude.getInstance().logEvent(ampEventName, ampEventProp);
}
function setUserProp(identifyObj) {
  amplitude.getInstance().identify(identifyObj);
}
function setAmplitudeEvent(eventName) {
  var clickedArrowButton = new amplitude.Identify().set('clicked on next button', '1');
  var clickedTryHereButton = new amplitude.Identify().set('clicked on teste aqui button', '1');
  var clickedInSightNowButton = new amplitude.Identify().set('clicked on insight now button', '1');
  var clickedLogisticsButton = new amplitude.Identify().set('clicked on logistica button', '1');
  var clickedFacialRecognitionButton = new amplitude.Identify().set('clicked on reconhecimento facial button', '1');
  var clickedHealthButton = new amplitude.Identify().set('clicked on health button', '1');
  var copiedCyberlabsEmail = new amplitude.Identify().set('copied cyberlabs email', '1');
  var clickedLinkdlinButton = new amplitude.Identify().set('clicked on linkedlin button', '1');
  var clickedFacebookButton = new amplitude.Identify().set('clicked on facebook button', '1');
  var clickedInstagramButton = new amplitude.Identify().set('clicked on instagram button', '1');
  var clickedSobreNosButton = new amplitude.Identify().set('clicked on sobre nos button', '1');
  logEvent(eventName);
}
