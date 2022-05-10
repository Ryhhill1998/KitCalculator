function calculateTestsPerBottle(testsPerSession) {

  if (testsPerSession > 500) {
    return null;
  }

  const grad = 1.974714803;
  const yInt = 221.2076729;

  let tests = (testsPerSession * grad) + yInt;

  if (tests > 500) {
    return 500;
  }

  return Math.round(tests);
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
