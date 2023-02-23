import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const profpic = new URL('../Desktop/prof-pic.png', import.meta.url).href;

export class MiniResume extends LitElement {

static properties = {
  name: { type: String },
  profilepicture: { type: String },
  major: { type: String },
  school: { type: String },
  skills: { type: String },
  workexperience: { type: String },
  relativeschoolwork: { type: String },
  };

static get styles(){
    return css`

.mainframe
{
  background: gray;
  border: 5px solid black;
  width: 300px;
}

.name-header
{
  text-align: center;
}

.profilepic
{
  display: flex;
  justify-content: center;
  align-items: center;
}

.school-box
{
  text-align: center;
}

.info-box
{
  border: 3px solid black;
  padding-left: 10px;
}



    `;
  }






  constructor() {
    super();
    this.name = "John Appleseed";
    this.profilepicture = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    this.major = "Some Major";
    this.school = "Example University";
    this.skills = "Insert Skills Here";
    this.workexperience = "Worked at Example Inc."; 
    this.relativeschoolwork = "Studied examples in these classes...";
  }



  render() {
    return html`








  <div class="mainframe">
  
  <div class="name-header">
    <h1>${this.name}</h1>
  </div>

  
  <div class="profilepic-box">
    <div class="profilepic">
    <meme-maker 
    image-url=${this.profilepicture}
    top-text="Example" bottom-text="Image">
  </meme-maker>
    </div>
  </div>





  
  <div class="school-box">
    
    <div class="user-major">
      <h2>${this.major}</h2>
    </div>
    
    <div class="user-school">
      <h2>${this.school}</h2>
    </div>
  </div>
  
  <div class="info-box">

    <details class="userskills">
      <summary>Skills</summary>
      <slot name="skillslot"></slot>
    </details>
    
     <details class="work-xp">
      <summary>Work Experience</summary>
      <slot name="infoslot"></slot>
    </details>
    
     <details class="rel-school">
      <summary>Relative Schoolwork</summary>
      <slot name="schoolslot"></slot>
    </details>
    
 
  </div>
  
</div>

    `;
  }

}
customElements.define('mini-resume', MiniResume);