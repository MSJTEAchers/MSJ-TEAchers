const userCardTemplate = document.querySelector("[data-user-template]")
const teacherCatalog = document.querySelector("[data-teacher-catalog]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.body.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://mocki.io/v1/8224d6c4-69cc-4829-abea-cb9393a09843")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const url = card.querySelector("[data-url]")
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const email = card.querySelector("[data-email]")
      url.href = user.url
      header.textContent = user.name
      body.textContent = user.body
      email.textContent = user.email
      teacherCatalog.append(card)
      return { url: user.url, name: user.name, body: user.body, email: user.email, element: card }
    })
  })

/*
const userCardTemplate = document.querySelector("[data-user-template]")
const teacherCatalog = document.querySelector("[data-teacher-catalog]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("./teacherlist.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const email = card.querySelector("[data-email]")
      header.textContent = user.name
      body.textContent = user.body
      email.textContent = user.email
      teacherCatalog.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })
 */