import './menuButton.css'

export default function Btn(){
    return(
      <div>
          <input id="abrir-cerrar" name="abrir-cerrar" type="checkbox" value="" />
    <label for="abrir-cerrar" class="toggle-button">
        <span class="cerrar" title="Cerrar">Cerrar</span>
        <span class="abrir" title="Abrir">Abrir</span>
    </label>
      </div>
    )
}