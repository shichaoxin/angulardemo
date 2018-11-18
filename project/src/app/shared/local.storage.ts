import { Provider } from '@angular/core';
import { Injectable} from '@angular/core';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';


export class LocalStorage {
    public localStorage:any;
    constructor(){
        if(!localStorage){
            throw new Error('Current browser does not support Local Storage')
        }
        this.localStorage =localStorage
    }
    public set(key:string,value:string):void{
        this.localStorage[key]=value;
    }
    public get(key:string):void{
        return this.localStorage[key]||false;
    }
    public setObject(key:string,value:any):void{
        this.localStorage[key]=JSON.stringify(value);
    }
    public getObject(key:string):void{
       return JSON.parse(this.localStorage[key]||'{}');
    }
    public remove(key:string):any{
        this.localStorage.removeItem(key);
    }
}