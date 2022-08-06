function displayTeams(teams) {
  var teamsHTML = "";
  teams.forEach(function (team) {
    console.info(team);
    teamsHTML += ` 
    <tr>
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
