import go from "./slider.js"

let DATA = null

const ajax = new XMLHttpRequest()
const main = document.querySelector("main")

loadPage(location.hash.slice(1) || 'main')

function loadPage(page) {
    ajax.open('GET', `content/${page}.html`)
    ajax.send()
    ajax.onload = () => {
        main.innerHTML = ajax.responseText
        go()
    }
}

const sidebar = document.getElementById("sidebar")

function getData() {
    axios.get('https://api.mirafgan.me/neptun/catalog')
        .then(res => {
            DATA = res.data
            showCategory(DATA)
        })
}
getData()

function sideOpen() {
    sidebar.classList.toggle('sidebar-active')
}

function showCategory(data) {
    const leftmenulists = document.getElementById("left-menu-lists")

    data.forEach(item => {
        let submenuitems = item.submenu.map(element => `<li><a href="#" class="menu-links">${element.name}</a></li>`).join('')

        leftmenulists.innerHTML += `<li>
                                        <div class="cat-icon">
                                            <img src="${item.icon}" />
                                        </div>
                                        <a class="menu-links" href="#">${item.name}</a>
                                        <div class="menu-sub">
                                            <ul class="${item.submenu.length ? '' : 'none'}">
                                                ${submenuitems}
                                            </ul>
                                        </div>
                                    </li>`
    });
}

