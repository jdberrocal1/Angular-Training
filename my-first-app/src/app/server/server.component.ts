import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: '/server.component.html',
  styles: [`
    .offline {
      background-color: rgba(249,0,0,0.25);
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'Running';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
