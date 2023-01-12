import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbModalConfig, NgbModal,} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmationContentComponent} from './modal-confirmation-content/modal-confirmation-content.component';

@Component({
    selector: 'app-modal-confirmation',
    templateUrl: './modal-confirmation.component.html',
    styleUrls: ['./modal-confirmation.component.scss'],
    providers: [NgbModalConfig, NgbModal]

})
export class ModalConfirmationComponent implements OnInit {

	@Output() didConfirmed = new EventEmitter<boolean>();

	constructor(config: NgbModalConfig, private modalService: NgbModal) {
			config.backdrop = 'static';
			config.keyboard = false;
	}

	ngOnInit(): void {
	}

	public open(modalComponent = undefined): void {
		console.log('open modal')
			const modalRef = this.modalService.open(modalComponent == undefined ? ModalConfirmationContentComponent : modalComponent);
			modalRef.result.then(res => {
					this.didConfirmed.emit(res);
			}).catch(res => {
					this.didConfirmed.emit(res);
			});
	}

}
