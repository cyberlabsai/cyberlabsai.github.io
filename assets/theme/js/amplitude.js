function logEvent(ampEventName, ampEventProp) {
  amplitude.getInstance().logEvent(ampEventName, ampEventProp);
}
function setUserProp(identifyObj) {
  amplitude.getInstance().identify(identifyObj);
}
function setAmplitudeEvent(eventName) {
  logEvent(eventName);
}
