function getTeamHTML(team) {
  return;
  ` <tr>
  <td>${team.promotion}</td>
  <td>${team.members}</td>
  <td>${team.name}</td>
  <td>
    <a href="${team.url}"
      >github</a
    >
  </td>
  <td>x e</td>
</tr>`;
}

function displayTeams(teams) {
  // transforma in html
  var teamsHTML = "";
  teams.forEach(function (team) {
    teamsHTML += getTeamHTML(team);
  });
  document.querySelector("table tbody").innerHTML = teamsHTML;
}

function loadTeams() {
  fetch("data/teams.json")
    .then(function (r) {
      console.info(r);
      return r.json();
    })
    .then(function (teams) {
      displayTeams(teams);
    });
}
loadTeams();
