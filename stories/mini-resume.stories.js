import { html } from 'lit';
import '../src/mini-resume.js';

export default {
  title: 'MiniResume',
  component: 'mini-resume',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <mini-resume
      style="--mini-resume-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </mini-resume>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
