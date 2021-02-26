import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() secretServerCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    if (serverName.value === '' || serverContent.value === '') return;

    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value,
    });

    serverName.value = '';
    serverContent.value = '';
  }

  onAddBlueprint(
    serverName: HTMLInputElement,
    serverContent: HTMLInputElement
  ) {
    if (serverName.value === '' || serverContent.value === '') return;

    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value,
    });

    serverName.value = '';
    serverContent.value = '';
  }

  onAddSecretServer(
    serverName: HTMLInputElement,
    serverContent: HTMLInputElement
  ) {
    if (serverName.value === '' || serverContent.value === '') return;

    this.secretServerCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value,
    });

    serverName.value = '';
    serverContent.value = '';
  }
}
