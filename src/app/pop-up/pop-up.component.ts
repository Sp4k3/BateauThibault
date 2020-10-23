import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  @Input() shipPoints: any[]
  private modal: HTMLIonModalElement

  constructor() {}

  ngOnInit() {}

  async dismissModal(shipPoint) {
    if (this.modal) {
      await this.modal.dismiss(shipPoint)
      this.modal = null
    }
  }
}
