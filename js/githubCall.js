 //  now in vanilla.js
 var xhr = new XMLHttpRequest();
     xhr.open('GET', 'https://api.github.com/users/sidjayisaok');
     xhr.onload = function() {
        if (xhr.status === 200) {
           var res = xhr.responseText;
           var result = JSON.parse(res);
           var myDate = new Date(result.created_at);
           var myGithub = document.getElementsByClassName('myGithub')[0];
           var div = document.createElement('div');
           var p1 = document.createElement('p');
           var p2 = document.createElement('p');
           var p3 = document.createElement('p');
           var p4 = document.createElement('p');
           var p5 = document.createElement('p');
           var p6 = document.createElement('p');
           var img = document.createElement('img');
           var a = document.createElement('a');
           myGithub.appendChild(div);
           div.appendChild(a);
           a.href = "https://github.com/sidjayisaok";
           a.target = "_blank";
           a.rel = "noopener";
           a.appendChild(img);
           div.style.margin = "5%";
           div.style.padding = "5%";
           div.style.backgroundColor = '#003A88';
           div.style.color = "#FFFFFF";
           p1.append(result.name + " Github handle : " + result.login);
           p2.append("Public Repos on Github : " + result.public_repos);
           p3.append("Public Gists on Github : " + result.public_gists);
           p4.append("Github acct. created on : " + myDate);
           p5.append("Number of Github accts. I follow : " + result.following);
           p6.append("Github users currently following me : " + result.followers);
           div.appendChild(p1);
           div.appendChild(p2);
           div.appendChild(p3);
           div.appendChild(p4);
           div.appendChild(p5);
           div.appendChild(p6);
           img.src = result.avatar_url;
           img.alt = "My Github Avatar";
        }
        else {
            console.log('An error occured' + xhr.status);
        }
    };
    xhr.send();



   





