const header = document.querySelector('header');
window.addEventListener('scroll', function(){

    header.classList.toggle('active', this.window.scrollY > 0)

})

document.getElementById("icon_menu").addEventListener("click", mostrar_menu);
function mostrar_menu()
{
    document.querySelector("nav").classList.toggle("mostrar_menu");
}

const skill_btn = document.querySelector(".skill");
const edu_btn = document.querySelector(".educacion");
const interes_btn = document.querySelector(".intereses");

const skill = document.querySelector(".habilidades");
const edi = document.querySelector(".edu");
const interes = document.querySelector(".interes");


skill_btn.onclick = () =>
{
    skill_btn.classList.add("activo");
    edu_btn.classList.remove("activo");
    interes_btn.classList.remove("activo");

    skill.style.display = "grid";
    edi.style.display = "none";
    interes.style.display = "none";
}

edu_btn.onclick = () =>
{
    edu_btn.classList.add("activo");
    skill_btn.classList.remove("activo");
    interes_btn.classList.remove("activo");

    edi.style.display = "block";
    skill.style.display = "none";
    interes.style.display = "none";
}

interes_btn.onclick = () =>
{
    interes_btn.classList.add("activo");
    edu_btn.classList.remove("activo");
    skill_btn.classList.remove("activo");

    interes.style.display = "grid";
    edi.style.display = "none";
    skill.style.display = "none";
}

function validarFormulario() 
{
    var checkbox = document.getElementById('acepto_checkbox');
    var nombre = document.getElementsByName('nombre')[0].value;
    var tel = document.getElementsByName('telefono')[0].value;
    var correo = document.getElementsByName('correo')[0].value;
    var coment = document.getElementsByName('mensaje')[0].value;

    if (nombre.trim() === "" || tel.trim() === "" || correo.trim() === "" || coment.trim() === "") 
    {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    if (!checkbox.checked) 
    {
        alert("Debes aceptar el tratamiento de tus datos.");
        return false;
    }
    
    location.reload();

    alert("Los datos se han enviado correctamente.");

    return true;
}
