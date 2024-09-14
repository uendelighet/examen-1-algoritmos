// Componente  <patients-board>: 
// Incluir un formulario que reciba el nombre, especie, raza, fecha de ingreso (input type date) y 
// síntomas del paciente, para añadir nuevos pacientes y mostrarlos haciendo uso del componente <patient-card>.
// Debe contener una lista de pacientes pendientes, representada por múltiples <patient-card>.
// Debe contener otra lista del historial de pacientes donde se muestran los atendidos, representada 
// por múltiples <patient-card>.

class PatientsList extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        this.patient = []; //almacenar las tareas al presionar el boton añadir tarea y eso lo trae el abuelo
	}
	
	connectedCallback() {
		this.render();

		this.shadowRoot.querySelector('form').addEventListener('submit', (e) => this.addPatient (e)); //shadowroot es todo el html
		}

		addPatient (e) {
		e.preventDefault(); //para que no se recargue la pagina


		const Nombre = this.shadowRoot.querySelector("#Nombre").value; //aqui llama al valor de lo que hay en render
		const Especie = this.shadowRoot.querySelector("#Especie").value;
        const Raza = this.shadowRoot.querySelector("#Raza").value;
        const Fecha = this.shadowRoot.querySelector("#Fecha").value;
        const Sintomas = this.shadowRoot.querySelector("#Sintomas").value;


		if (Nombre && Especie && Raza && Fecha && Sintomas){ //si se escribe title y descripcion,
			const patients = document.createElement("patient-item"); //se crea una tarea (componente)
			patients.setAttribute("nombre", Nombre); //aqui se pone el nuevo valor de titulo
			patients.setAttribute("especie", Especie);
            patients.setAttribute("raza", Raza);
            patients.setAttribute("fecha", Fecha);
            patients.setAttribute("sintomas", Sintomas);
			

		this.shadowRoot.querySelector(".list").appendChild(patient);
		this.shadowRoot.querySelector("form").reset();
		}



		}

	render() {
		this.shadowRoot.innerHTML = `
		<style>
		.list{
		max-width: 500px;
		margin: 0 auto;
		}
		</style>
		<div class="list">
		<form  class ="patients-form">
		<input type="text" id="Nombre" required minlength="4" maxlength="8" size="10"/>
		<input type="text" id="Especie" required minlength="4" maxlength="8" size="10" />
        <input type="text" id="Raza" required minlength="4" maxlength="8" size="10" />
        <input type="date" id="Fecha" required minlength="4" maxlength="8" size="10" />
        <input type="text" id="Sintomas"required minlength="4" maxlength="8" size="10" />
		<input type="submit" value = "Add patients" />
		</form>
		</div>


    `;
	}
}

customElements.define('patient-list', PatientsList);
export default PatientsList;