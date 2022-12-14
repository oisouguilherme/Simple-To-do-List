let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('arealist');

function addTarefa () {
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        
        ++contador;

        let novoItem = `<div id = "${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="itemicon">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="itemname">
            ${valorInput}
        </div>
        <div class="itembottom">
            <button onclick="deletar(${contador})" class="delete"> <i class= "mdi mdi-delete"></i>Delete</button>
        </div>`;

        main.innerHTML += novoItem;

        input.value = "";
        input.focus();

        

    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa (id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == "item"){
        item.classList.add('Clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
        } else {
        item.classList.remove('Clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}


input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})