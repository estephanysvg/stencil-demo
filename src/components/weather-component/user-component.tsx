import { Component, h, State, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'user-component',
  styleUrl: 'user-component.css',
  shadow: true,
})
export class UserComponent {
  // Estado de carga
  @State() APIData: string = 'Cargando...';
  @State() userData: any = null;

  componentWillLoad() {
    this.fetchRandomUser();
  }

  @Event() completeStretch: EventEmitter<string>

  todoCompletedHandler(complete: string) {
    this.completeStretch.emit(complete);
  }

  fetchRandomUser() {
    fetch(`https://randomuser.me/api/`)
      // Convertir la respuesta a json
      .then((res) => res.json())
      .then((parsedRes) => {
        this.APIData = '';
        console.log(parsedRes);
        // Nos posicionamos en la primera entrada del array (los datos del usuario)
        this.userData = parsedRes.results[0];
        console.log(this.userData.picture);

      });
  }

  render() {
    return (
      <div class="card">
        {/* Para que no de error a la hora de acceder */}
        {this.APIData && <p>{this.APIData}</p>}
        {this.userData && (
          <div class="user-info">
            <img src={this.userData.picture.large} />
            <h2>
              {this.userData.name.first} {this.userData.name.last}
            </h2>
            <p>
              <strong>Email:</strong> {this.userData.email}
            </p>
            <p>
              <strong>Teléfono:</strong> {this.userData.phone}
            </p>
            <p>
              <strong>País:</strong> {this.userData.location.country}
            </p>
            <button onClick={() => this.fetchRandomUser()}>usuario random</button>
          </div>
        )}
      </div>
    );
  }
}
