import JuliaImage from '../assets/images/julia.jpeg'
import UesleiImage from '../assets/images/ueslei.jpg'

export default function Sobre() {
    return (
        <div id="team" class="team">
        <div class="container">
           <div class="row">
              <div class="col-md-12">
                 <div class="titlepage">
                    <h2>Nosso Time</h2>
                    <p>O sucesso nunca ver por acaso, vem pelo nosso esforço!</p>
                    <br/>
                    <br/>
                 </div>
              </div>
           </div>
           <div class="row">
              <div class="col-md-4">
                 <div class="team_box">
                    <figure><img src={ UesleiImage } alt="Imagem de Ueslei"/></figure>
                    <div class="social_box">
                       <ul class="social_team"></ul>
                       <h3>Ueslei Dalmina</h3>
                       <p>Sales Consultant</p><br/>
                    </div>
                 </div>
                 <div class="team_box">
                    <figure><img src={ JuliaImage } alt="Imagem de Julia"/></figure>
                    <div class="social_box">
                       <ul class="social_team">  </ul>
                       <h2>Júlia Bianchi</h2>
                       <p>Software Developer</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>



    )
}