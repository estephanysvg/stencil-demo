import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-input',
  shadow: true,
  styleUrl: 'my-input.css'
})

export class MyInput {

@Prop({mutable: true}) value: string = 'Esteph'

handleChange(event: Event) {
  this.value = (event.target as HTMLInputElement).value;
}

  render() {
    return (
    <div>
      {/* <h1>Mi nombre es {this.value}</h1> */}
      <input type="text" class="input" onInput={(event) => {this.handleChange(event)}}/>
    </div>
    );
  }
}
