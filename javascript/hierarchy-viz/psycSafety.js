questionSets = {
  "Psychological Safety": {
    regularScoredQuestions: ["itissafetotakeariskinthisteam.", "membersofthisteamareabletobringupproblemsandtoughissues.", "nooneonthisteamwoulddeliberatelyactinawaythatunderminesmyefforts.", "workingwithmembersofthisteammyuniqueskillsandtalentsarevaluedandutilized."],
    reverseScoredQuestions: ["ifimakeamistakeinthisteamitisheldagainstme.", "itisdifficulttoaskothermembersofthisteamforhelp.", "peopleonthisteamsometimesrejectothersforthinkingdifferently."],
    scaleSize: 7,
  },
};

// var urlForSheetCSV = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTSoSayr0gkUklH7LpOmka5E42TjsKnM5DLRHNJiqJ2I3NJmDKxfKGXXjniaKxTLWvy6aNzw6EeeURS/pub?gid=1735811038&single=true&output=csv`

// fetch(urlForSheetCSV).then((response) => {
//   fetch(response.url).then((response) => {
//     debugger;
//   })
// })

var weightedValue = (accumulator, currentValue) => accumulator + currentValue.value * currentValue.averageHealth;

var totalPeople = (accumulator, currentValue) => accumulator + currentValue.value;

var calculateRoundedHealthForCollection = (collection) => {
  // debugger;
  var value = collection.reduce(weightedValue, 0) / collection.reduce(totalPeople, 0);
  return Math.round(value);
};

// var calculateRoundedHealth2ForCollection = (collection) => {
//   // debugger;
//   var value = collection.reduce(weightedValue, 0) / collection.reduce(totalPeople, 0);
//   return Math.round(value);
// }

var calculateTotalPeopleForCollection = (collection) => {
  return collection.reduce(totalPeople, 0);
};

// sampleHardCodedHierarchyData.children = sampleHardCodedHierarchyData.children.map((team) => {
//   team.averageHealth = calculateRoundedHealthForCollection(team.children);
//   team.value = calculateTotalPeopleForCollection(team.children);
//   return team;
// });

// sampleHardCodedHierarchyData.averageHealth = calculateRoundedHealthForCollection(sampleHardCodedHierarchyData.children);

function uniq(array) {
  return [...new Set(array)];
}

function formatDataForBubbles(json) {
  var allDepartmentNames = uniq(json.map((row) => row.department));
  var departmentObjects = allDepartmentNames.map((departmentName) => {
    var allRecordsForDepartment = json.filter((row) => row.department === departmentName);
    var allTeamNamesForDepartment = uniq(allRecordsForDepartment.map((row) => row.team));
    var teamObjectsForDepartment = allTeamNamesForDepartment.map((teamName) => {
      var recordForTeam = json.find((row) => row.team === teamName);
      return {
        name: teamName,
        value: Number(recordForTeam["teamsize"]),
        averageHealth: calculatePsycSafetyForTeam(recordForTeam),
      };
    });
    return {
      name: departmentName,
      children: teamObjectsForDepartment,
    };
  });
  return {
    name: "Company",
    children: departmentObjects,
  };
}

function calculateReverseScore(value, scaleSize) {
  return scaleSize + 1 - value;
}

function calculatePsycSafetyForTeam(team) {
  var questionSet = questionSets["Psychological Safety"];
  var scaleSize = questionSet.scaleSize;
  var positiveScore = questionSet.regularScoredQuestions.reduce((accumulator, question) => {
    return accumulator + Number(team[question]);
  }, 0); // reduce needs a 0
  var reverseScore = questionSet.reverseScoredQuestions.reduce((accumulator, question) => {
    var scoreForQuestion = calculateReverseScore(Number(team[question]), scaleSize);
    return accumulator + scoreForQuestion;
  }, 0); // reduce needs a 0
  var numberOfQuestions = questionSet.regularScoredQuestions.length + questionSet.reverseScoredQuestions.length;
  var psycSafetyRounded = Math.round((positiveScore + reverseScore) / numberOfQuestions);
  return psycSafetyRounded;
}

function fillInDataForBubbles(company) {
  company.children = company.children.map((department) => {
    department.averageHealth = calculateRoundedHealthForCollection(department.children);
    department.value = calculateTotalPeopleForCollection(department.children); // must be on for circle pack, but off for others
    return department;
  });
  company.averageHealth = calculateRoundedHealthForCollection(company.children);
  return company;
}
