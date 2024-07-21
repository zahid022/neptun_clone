import go from "./slider.js"

let DATA = null

const sidebar = document.getElementById("sidebar")

function getData() {
    axios.get('https://api.mirafgan.me/neptun/catalog')
        .then(res => {
            DATA = res.data
            showCategory(DATA)
            go()
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

