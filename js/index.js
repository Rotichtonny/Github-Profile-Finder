function getProfile(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    if (!username || username == '') {
        username = 'Rotichtonny';
    }
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let user = JSON.parse(xhttp.responseText);
            document.getElementById('profile').innerHTML = `<div class="panel panel-default">
                <div class="panel-heading">${user.name}</div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${user.avatar_url}">
                            </div>
                            <div class="col-md-9">
                                <span class="label label-primary">Public Repos ${user.public_repos}</span>
                                <span class="label label-danger">Public Gists ${user.public_gists}</span>
                                <br><br>
                                <ul class="list-group">
                                    <li class="list-group-item">Website: ${user.blog}</li>
                                    <li class="list-group-item">Location: ${user.location}</li>
                                </ul>
                                <a class="btn btn-primary" target="_blank" href="${user.html_url}">Vist Profile on Github</a>
                            </div>
                        </div>
                    </div>
            </div>`;
        }
    }
    xhttp.open('GET', 'https://api.github.com/users/' + username, true);
    xhttp.send();
}

document.getElementById('userform').addEventListener('submit', getProfile, false);