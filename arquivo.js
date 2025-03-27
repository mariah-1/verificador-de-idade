function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anodig = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (anodig.value > ano || anodig.value.length <4 || anodig.value == "") {
        alert('[ERRO] verifique os dados')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(anodig.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        var idadeTexto = document.createElement('p');

        if (sex[0].checked) {
            genero = 'Homem' 
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src','criança.menino.jpg')
                document.body.style.background = '#caf4ff'
                document.body.style.color = '#023847'

            } else if (idade > 10 && idade <= 15){
                img.setAttribute('src','jovem.homem.jpg')
                genero += ' adolescente'
                document.body.style.background = '#2A4880'

            } else if (idade > 15 && idade <= 20){
                img.setAttribute('src','jovem.homem.jpg')
                genero += ' jovem'
                document.body.style.background = '#2A4880'

            }else if (idade > 20 && idade <= 59) {
                img.setAttribute('src','homem.jpg')
                document.body.style.background = '#2A4880'

            } else if (idade >=60) {
                img.setAttribute('src','idoso.jpg')
                document.body.style.background = '#2A4880'
            }
        } 
        else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src','criança.menina.jpg')
                document.body.style.background = '#ffb8dc'
                document.body.style.color = '#620032'

            } else if (idade > 10 && idade <= 15) {
                img.setAttribute('src', 'jovem.mulher.jpg')
                genero += ' adolescente'
                document.body.style.background = '#800b46'

            }else if (idade > 15 && idade <= 20) {
                img.setAttribute('src', 'jovem.mulher.jpg')
                genero += ' jovem'
                document.body.style.background = '#800b46'

            } else if (idade > 20 && idade <= 59) {
                img.setAttribute('src', 'mulher.jpg')
                document.body.style.background = '#800b46'

            } else if (idade >= 60) {
                img.setAttribute('src', 'idosa.jpg')
                document.body.style.background = '#800b46'
            }
        }
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.borderRadius = '100px'

        res.innerHTML = `${genero} de ${idade} Anos`
        res.appendChild(idadeTexto);
        res.appendChild(img)
    }
}