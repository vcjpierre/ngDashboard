import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { Server } from '../../shared/server';
import { ServerMessage } from '../../shared/server-message';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs'
import { timer } from 'rxjs';

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css'],
})
export class SectionHealthComponent implements OnInit, OnDestroy {
  constructor(private _serverService: ServerService) {}

  servers: Server[];
  timerSubscription: Subscription;

  ngOnInit() {
    this.refreshData();
  }

  ngOnDestroy() {}

  refreshData() {
    this._serverService.getServers().subscribe((res) => {
      this.servers = res;
    });

    this.subscribeToData();
  }

  // TODO subscribeToData
  subscribeToData() {
    // this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
    //this.timerSubscription = timer(5000).first().subscribe(() => this.refreshData());
    const source = timer(500);
    const subscribe = source.subscribe(() => this.refreshData())
    this.timerSubscription = subscribe;
  }

  sendMessage(msg: ServerMessage) {
    this._serverService.handleServerMessage(msg).subscribe(
      (res) => console.log('Message sent to server:', msg),
      (err) => console.log('Error:', err)
    );
  }
}
