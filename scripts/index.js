const speGrad = 1.974714803;
const speInt = 221.2076729;
const zoomGrad = 1.974714803;
const zoomInt = 221.2076729;
const hbGrad = 3.949065339;
const hbInt = 100.2986412;


function calculateTestsPerBottle(testsPerSession) {

  if (testsPerSession > 500) {
    return null;
  }

  let grad;
  let yInt;

  const method = $("#method-selection option:selected").val();

  if (method === "spe") {
    grad = speGrad;
    yInt = speInt;
  } else if (method === "zoom") {
    grad = zoomGrad;
    yInt = zoomInt;
  } else if (method === "hb") {
    grad = hbGrad;
    yInt = hbInt;
  }

  let tests = (testsPerSession * grad) + yInt;

  if (tests > 500) {
    return 500;
  }

  return tests;
};


function calculateBottles(testsPerSession, daysPerWeek, weeksPerYear) {

  let testsPerBottle = calculateTestsPerBottle(testsPerSession);
  let daysPerYear = daysPerWeek * weeksPerYear;
  let testsPerYear = daysPerYear * testsPerSession;

  return Math.round(testsPerYear / testsPerBottle);
};

$(".calculate").click(function() {

  let tps = parseInt($("#tps").val());
  let dpw = parseInt($("#dpw").val());
  let wpy = parseInt($("#wpy").val());

  let bottles = calculateBottles(tps, dpw, wpy);

  $("#result").val(bottles);
});
