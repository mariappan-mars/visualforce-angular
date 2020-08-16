import { Component, OnInit } from '@angular/core';
import { SalesforceService } from '../shared/services/salesforce.service';
import { SalesforceEngineService } from '../shared/services/salesforce-engine.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  queryText: string = "select ID,Name FROM Feedback__c";
  queryResult: any;

  constructor(private sfService: SalesforceService, private _salesforce: SalesforceEngineService) { }

  ngOnInit(): void {
    // this.sfService.remoteAction('ContactSearch.searchForContacts', [])
    //   .subscribe(res => {
    //     this.result = res;
    //     console.log(res);
    //   });
    
    // this._salesforce.invokeAction('ContactSearch.searchForContacts',[])
    //   .subscribe(res => {
    //     this.queryResult = res;
    //     console.log(res);
    //   });
  }

  runQuery() {
    this._salesforce.invokeAction('ContactSearch.executeQuery',[this.queryText])
      .subscribe(res => {
        this.queryResult = res;
        console.log(res);
      });
  }

}
