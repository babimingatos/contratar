import Navbar from '../components/Navbar.js';
import Bottom from '../components/Bottom.js';
import { FaCaretDown } from 'react-icons/fa';

export default function Home() {
  return (
    <div class="containerr">

      <Navbar></Navbar>

      <div class="margin">

        <h6 class="description"> Selecione o dia e horário para o plantão.</h6>

        <input type="text" class="input" placeholder="Nome do paciente"></input>

        <select class="input date white-bg">
          <option value="" readonly>Dia</option>
          <option value="">25/05</option>
        </select>

        <select class="input date white-bg">
          <option value="" readonly>Horário </option>
          <option value="">19h45</option>
        </select>

        <div class="divbutton">
          <button class="button">Continuar</button>
        </div>

        <div class="back">
          <a href="">Voltar</a>
        </div>
      </div>

      <Bottom></Bottom>

    </div>
  )
}
