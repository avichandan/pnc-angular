import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-legal-disclosure',
    templateUrl: './legal-disclosure.component.html',
    styleUrls: ['./legal-disclosure.component.css']
})

export class LegalDisclosureComponent implements OnInit {
    open: boolean = false;
    icon_expand: string = 'add';
    constructor() { }

    ngOnInit() { }

    showDisclosure() {
        this.icon_expand = 'minimize';

    }

    showDisclosure1() {
        this.icon_expand = 'add';
    }
}