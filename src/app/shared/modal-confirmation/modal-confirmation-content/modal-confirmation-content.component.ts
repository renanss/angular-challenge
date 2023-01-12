import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-confirmation-content',
    templateUrl: './modal-confirmation-content.component.html',
    styleUrls: ['./modal-confirmation-content.component.scss']
})
export class ModalConfirmationContentComponent implements OnInit {


    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit(): void {
    }

}
