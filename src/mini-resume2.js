import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "mini-resume2/src/mini-resume2.js";

//const profpic = new URL('../Desktop/prof-pic.png', import.meta.url).href;

export class MiniResume extends LitElement {

static properties = {
  name: { type: String },
  profilepicture: { type: String },
  major: { type: String },
  school: { type: String },
  skills: { type: String },
  workexperience: { type: String },
  relativeschoolwork: { type: String },
  infotag: {type: String},
  imagetoptext: {type: String},
  imagebottomtext: {type: String},
  newColor: {type: String, reflect: true, attribute: 'new-color'},
  shadowEnable: {type: Boolean, reflect: true, attribute: "shadow-enable",},
  opened: {type: Boolean, reflect: true},
  };

static get styles(){
    return css`

.mainframe
{
  background: #2f3e46;
  border: 5px solid black;
  width: 300px;
  float: left; 
}
:host([shadow-enable]) .mainframe{
      box-shadow: 2px 2px 15px red;
      margin: 12px;
    }
.name-header
{
  text-align: center;
  color: #cad2c5;
}
.name-header h1:hover{
    color: lightsteelblue;
    font-style: italic;
    
}
@media only screen and (max-width: 600px){
      .mainframe{
        width: 500px;
      }
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
  color: #e0e1dd;
}
.school-box :hover{
      color: lightsteelblue;
      font-style: italic;
}

.info-box
{
  border: 3px solid black;
  padding-left: 10px;
  color: #e0e1dd;
}

:host([shadow-enable]) .mainframe{
      box-shadow: 10px 10px 10px lightsteelblue;
      margin: 10px;
    }

    :host([new-color="blue"]) .mainframe{
      background-color: var(--mini-resume2-new-color, blue);
    }
     :host([new-color="green"]) .mainframe{
      background-color: var(--mini-resume2-new-color, green);
    }
    :host([new-color="default"]) .mainframe{
      background-color: var(--mini-resume2-new-color, default);
    }
    `;
  }






  constructor() {
    super();
    this.name = "John Appleseed";
    this.profilepicture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    this.major = "Some Major";
    this.school = "Example University";
    this.skills = "Insert Skills Here";
    this.workexperience = "Worked at Example Inc."; 
    this.relativeschoolwork = "Studied examples in these classes...";
    this.infotag = "Extra Info";
    this.newColor = null;
    this.shadowEnable = false;  
    this.opened = false;
  }

  toggleEvent(){
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
    this.opened = state;
  }

  updated(changedProperties){
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'opened'){
        this.dispatchEvent(new CustomEvent('opened-changed', 
          { 
            composed: true,
            bubbles: true,
            cancelable: false,
            detail: { value: this[propName] } 
          }));
        console.log(`${propName} changed. oldValue: ${oldValue}`);
      };
    });
  }



  render() {
    return html`

  <div class="mainframe">
  
   <mini-resume2 
        name="Jawn Luke" profilepicture="https://pyxis.nymag.com/v1/imgs/b25/753/ef0495a30eac613c74c5db75f6036ba7fc-14-the-room-tommy-wiseau.rsquare.w700.jpg" major="French Food" school="Morris College" new-color="blue" shadow-enable imagetoptext="oui oui" imagebottomtext="bagette">
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>skills go here</li>
              </details>
              <details class="exp">
                <summary>Work Experience</summary>
                <li>work experince goes here</li>
              </details>
              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>relevant coursework goes here</li>
              </details>
            </ul>
          </div>
        </mini-resume2>
  
</div>

    `;
  }

}
customElements.define('mini-resume2', MiniResume);
