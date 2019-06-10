function logEvent(ampEventName, ampEventProp) {
  amplitude.getInstance().logEvent(ampEventName, ampEventProp);
}
function setUserProp(identifyObj) {
  amplitude.getInstance().identify(identifyObj);
}
function setAmplitudeEvent(eventName) {
  var clickedNextButton = new amplitude.Identify().set('clicked on next button', '1');
  var clickedTryHereButton = new amplitude.Identify().set('clicked on teste aqui button', '1');
  var clickedInSightNowButton = new amplitude.Identify().set('clicked on insight now button', '1');
  var clickedLogisticsButton = new amplitude.Identify().set('clicked on logistica button', '1');
  var clickedFacialRecognitionButton = new amplitude.Identify().set('clicked on reconhecimento facial button', '1');
  var clickedHealthButton = new amplitude.Identify().set('clicked on health button', '1');
  var clickedAboutUsButton = new amplitude.Identify().set('clicked on about us button', '1');
  var clickedlinkedinButton = new amplitude.Identify().set('clicked on linkedin button', '1');
  var clickedFacebookButton = new amplitude.Identify().set('clicked on facebook button', '1');
  var clickedInstagramButton = new amplitude.Identify().set('clicked on instagram button', '1');
  var clickedFacialRecogntionProduct = new amplitude.Identify().set('clicked on facial recogntion product button', '1');
  var clickedLogisticsProduct = new amplitude.Identify().set('clicked on logistics product button', '1');
  var clickedHealthKnowMoreButton = new amplitude.Identify().set('clicked on health know more button', '1');

  logEvent(eventName);
}
