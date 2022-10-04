import React from 'react'

const Test1 = () => {


    // let person : string = "Mehtab"  //  defining string variable
    // let age: number = 44  // defining number variable
    // let hobbies : (string | number)[] = [person, age, "email"] // defining array of string or number or both variable
    // let isStudying : boolean = true  // defining boolean variable
    // let info: object = {}  //  defining  a empty object 

    // // --------------------------------------------

    // // type for tuples
    // // should be exact as the types are defined
    // let array: [string, number, string, number]
    // array = ["sartaj", 23,"salman", 22 ]   

    // // -----------------------------------------
    // //  using type for objects
    // type Person =  {
    //     person : string;
    //     age? : number; // used --> ? <-- to make age optional
    //     email : string;
    //     hobby? : Array<string |number>
    // }

    // let sartaj : Person = {
    //     person : "good",
    //     age: 28,
    //     email : "test@test.com"
    // }

    // // ------------------------------------------

    // // type can be extend just like es6 classes

    // type X = {
    //     a: string;
    //     b: number;
    // }

    // type Y = X & {
    //     c: string;
    //     d: number
    // }

    // let y: Y = {
    //     a: "hello",
    //     b: 44,
    //     c: "hi",
    //     d: 44
    // }

    // // ------------------------------------------------------------

    // //   Interface 

    // interface PersonalInfo {
    //     name : string;
    //     age : number;
    //     gender : string;
    //     mobile : number;
    // }
    // interface OtherInfo extends PersonalInfo {
    //     address : string;
    // }

    // let entry: OtherInfo = {
    // name : "hello",
    // gender : "male",
    // mobile : 9958566549,
    // address : "xyz",
    // age : 44

    // }

    // // --------------------------------------------

    // // extending both to eachother type and interface

    // type A = {
    //     x: string;
    //     y: number
    // }

    // interface B extends A {
    //     z: string;
    // }

    // let useInfo: B = {x:"user", y: 22, z:"xyz"}   // extending type A inside B


    // interface D {
    //     x: string;
    //     y: number
    // }

    // type E = D &{
    //     z: string
    // }
    // let userInfo: E = {x: "user", y :22 , z: "xyz"}

    // //----------------------------------------------------

    // // defining functions in typescript



    return (
        <div>
            Test1
        </div>
    )
}

export default Test1
