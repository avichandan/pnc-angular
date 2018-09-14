 import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-legal-disclosure',
    templateUrl: './legal-disclosure.component.html',
    styleUrls: ['./legal-disclosure.component.css']
})

export class LegalDisclosureComponent implements OnInit {
    open: boolean = false;
    constructor() { }

    ngOnInit() { }

    showDisclosure(){
        this.open = !this.open;
    }
}