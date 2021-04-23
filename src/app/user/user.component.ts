import { templateJitUrl } from "@angular/compiler";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'Angmy-user',
    templateUrl: '/user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent{
    @Input() user:any;
}