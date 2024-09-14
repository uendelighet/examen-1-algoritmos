
// Componente  <patients-board>: 
// Incluir un formulario que reciba el nombre, especie, raza, fecha de ingreso (input type date) y 
// síntomas del paciente, para añadir nuevos pacientes y mostrarlos haciendo uso del componente <patient-card>.
// Debe contener una lista de pacientes pendientes, representada por múltiples <patient-card>.
// Debe contener otra lista del historial de pacientes donde se muestran los atendidos, representada 
// por múltiples <patient-card>.

class PatientsItem extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['nombre', 'especie', 'raza', 'fecha', 'sintomas']; 
	}

	connectedCallback() {
		this.render();

	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (propName === 'atendido'){
			this.updateStatus()
		}
	}

	updateStatus (){
		const patientContainer = this.shadowRoot.querySelector(".patient-item")
		patientContainer.patientList.toggle("atendido", this.getAttribute("atendido") === "true")

	}

	render() {
        this.shadowRoot.innerHTML = `
        <style>
        </style>
        <div class="patient-item"> 
		<div>
        <input>${this.getAttribute("Nombre")}</input>
        <input>${this.getAttribute("Especie")}</input>
        <input>${this.getAttribute("Raza")}</input>
        <input>${this.getAttribute("Fecha")}</input>
        <input>${this.getAttribute("Sintomas")}</input>
        </div> `


		this.shadowRoot.querySelector('#toggle-atendido').addEventListener('click', () => {
            const newPatient = this.getAttribute('atendido') === "true"; 
			this.setAttribute('atendido', fueAtendido ? 'false' : 'true');
            <input type="checkbox" value = "checked"></input>}
	)}}
    
		this.updateStatus()



			

customElements.define('patients-item', PatientsItem);
export default PatientsItem;
