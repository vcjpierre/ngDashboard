import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { Server } from '../../shared/server';
import { ServerMessage } from '../../shared/server-message';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css'],
})
export class SectionHealthComponent implements OnInit, OnDestroy {
  constructor(private _serverService: ServerService) {}

  servers: Server[];
  // timerSubscription: AnonymousSubscription;

  ngOnInit() {
    this.refreshData();
  }

  ngOnDestroy() {}

  refreshData() {
    this._serverService.getServers().subscribe((res) => {
      this.servers = res;
    });

    // this.subscribeToData();
  }

  // subscribeToData() {
  //   this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
  // }

  sendMessage(msg: ServerMessage) {
    this._serverService.handleServerMessage(msg).subscribe(
      (res) => console.log('Message sent to server:', msg),
      (err) => console.log('Error:', err)
    );
  }
}
