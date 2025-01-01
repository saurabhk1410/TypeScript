"use strict";
// let random:any;  //avoid
// let a:number=24;    
// let names:string;
// let b=<number>24;    
// let surname:number|string;
// let lastname=<number|string>23;
// const func=(a:number,b:number):number=>{    return a*b; }
// function fn(n:number,m:number):number { return n*m;}
// type newDataType=string|number;
// let a:newDataType=24;
// let b=<newDataType>"hello";
// type funcDataType=(a:number,b:number)=>number;
// const newFunc:funcDataType=(a,b)=>(a*b);
// const func:funcDataType=function(a,b){return a*b}; // can't do this without storing into a variable
// const arr_2:number[]=new Array(20);
// const arr2_2:Array<number>=new Array(20);
// const arr2:Array<number>=[2,4,5,7];
// const arr:(number|string)[]=[1,2,3,4.45,4543.33,-34];
// const arr2_3:Array<number|string>=[2,4,5,7,"ak"];
// const newArr:[number,string,boolean]=[24,"sk",true]; //Fixed Size and Order
// const newArr2:Array<string,number>=["sk",25];         // WRONG ,we can't do this way
// const obj:{ name:string, age:number, gender:boolean}={ name:"sk",age:21, gender:true }
// type objDataTypes={name:string,age:number,gender?:boolean};
// const onj2:objDataTypes={name:"sk",age:24,gender:true};
// const onj3:objDataTypes={name:"sk",age:24};
// type funcDataType=(a:number,b:number)=>number; //void
// interface objDataTypes {name:string|number , age:number , func?:funcDataType} ;//for classes & objects use interface
// const newObj:objDataTypes={name:"sk",age:23,func:(a,b)=>(a*b)};  
// const newObj2:objDataTypes={name:"sk",age:23};
// console.log(newObj.func?.(2,3));
// console.log(newObj2.func?.(2,3)); // gives undefined ,? checks if func exists , if exists executes otherwise returns undefined
// interface bigObjDataTypes extends objDataTypes {
//     mob:number;
// }
