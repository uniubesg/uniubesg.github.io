const NetworkLinks = {
  github: 'jhongmoreira',
  instagram: 'jhongmoreira',
  linkedin: 'in/jhongmoreira',
  twitter: 'lowdenzBR'
}

function ChangeSocialLinks() {
  for (let li of ListSocialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${NetworkLinks[social]}`
  }
}

ChangeSocialLinks()

function GetGithubInfos() {
  const url = `https://api.github.com/users/${NetworkLinks.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      NameGithub.textContent = data.name
      UserNameGithub.textContent = data.login
      userGit.href = data.html_url
      BioGithub.textContent = data.bio
      PhotoGithub.src = data.avatar_url
    })
}

GetGithubInfos()
