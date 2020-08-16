import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SalesforceEngineService {

  constructor() {

  }
  invoke(methodName: string, parameterList): Subject<any>{
    let callbackHandler: Subject<any>;
    callbackHandler = new Subject<any>();
    let VisualforceEngine = window["Visualforce"];
    parameterList.splice(0, 0, methodName);
    parameterList[parameterList.length] = function (result, event) {
      if (event.status) {
        callbackHandler.next({result,event});
      } else {
        callbackHandler.error({result,event});
      }
    };
    parameterList[parameterList.length] = function (result, event) {
      callbackHandler.error({result, event});
    };
    parameterList[parameterList.length] = { escape: false };
    VisualforceEngine.remoting.Manager.invokeAction.apply(VisualforceEngine.remoting.Manager, parameterList);
    return callbackHandler;
  }
  invokeAction(methodName: string, parameterList): Subject<any> {
    return this.invoke(methodName, parameterList);
  }
}
