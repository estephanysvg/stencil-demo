import { Component,h, State } from '@stencil/core';

@Component({
  tag: 'mi-contador',
  shadow: true
})

export class MiContador {

  // Usamos @State porque el contador cambiará internamente
  @State() contador: number = 0;

  incrementar() {
    // Cambia el valor de @State, lo que hará que el componente se re-renderice
    this.contador += 1;
  }

  render() {
    return (
      <div>
        <p>Contador: {this.contador}</p>
        <button onClick={() => this.incrementar()}>Incrementar</button>
      </div>
    );
  }
}
