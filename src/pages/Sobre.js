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
                     <br />
                     <br />
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-4">
                  <div class="team_box">
                     <figure><img src={UesleiImage} alt="Imagem de Ueslei" /></figure>
                     <div class="social_box">
                        <ul class="social_team"></ul>
                        <h1>Ueslei Dalmina</h1>
                        <h3>Sales Consultant</h3>
                        <ul class="social_team">
                           <a href="https://www.linkedin.com/in/ueslei-s-695548142/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/></a>
                           <a href="https://www.instagram.com/ueslei_dalmina/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"/></a>
                        </ul>
                        <br/><br/><br/>
                     </div>
                  </div>
                  <div class="team_box">
                     <figure><img src={JuliaImage} alt="Imagem de Julia" /></figure>
                     <div class="social_box">
                        <h1>Júlia Spader Bianchi</h1>
                        <h3>Software Developer</h3>
                        <ul class="social_team">
                           <a href="https://www.linkedin.com/in/juliaspaderbianchi" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/></a>
                           <a href="https://instagram.com/julia.sbianchi" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"/></a>
                        </ul>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>



   )
}