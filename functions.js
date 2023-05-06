function generate_table(dati, div){
    // console.log(Object.keys(dati[0]));
    let table = document.createElement('table')
    div.appendChild(table)

    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')
    table.appendChild(thead)
    table.appendChild(tbody)
    
    // Generate table head
    let tr = document.createElement('tr')
    thead.appendChild(tr)
    for (const i of Object.keys(dati[0])){
        // console.log(i);
        let th = document.createElement('th')
        th.innerText = i
        tr.appendChild(th)
    }
    // Generate table body
    for (const row of dati){
        let tr = document.createElement('tr')
        tbody.appendChild(tr)
        for (const col of Object.values(row)){
            let td = document.createElement('td')
            td.innerText = col
            tr.appendChild(td)
        }
    }
}
