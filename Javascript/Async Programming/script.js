

// function hello(){
//     console.log('Hello');
// }

// setTimeout(() => {
//     hello();
// }, 2000);


// console.log('1');
// console.log('2');

// setTimeout(()=>{
//     console.log("I watied too long");
// },2000)

// console.log('3');


// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallBack){
//     sumCallBack(a, b);
// }

// calculator(9, 3, sum);


// function getData(dataId, getNextData){
//     console.log('Data Req sent');
//     setTimeout(() => {
//         console.log('Data ' + dataId); 
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

//data1
//data2
//data3

// callback hell
// getData(1, ()=>{
//     console.log('Getting data 2....');
//     getData(2, ()=>{
//         console.log('Getting data 3....');
//         getData(3);
//     });
// });
 

// let promise = new Promise((resolve, reject)=>{
//     console.log('I am a promise');
//     resolve('Completed');
// }) 

// console.log('One ' + 1);
// console.log('Twoo ' + 2);
// console.log('Three ' + 3);


// function hello(){
//     console.log('Hello');
// }

// setTimeout(()=>{
//     hello();
// }, 2000);


// console.log('One');
// setTimeout(hello, 2000);
// console.log('Two');


// setTimeout(() => {
//     console.log('Waited too long now I am here');
// }, 1000);


// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, doSum){
//     doSum(a, b);
// }


// calculator(1, 2, sum);


// let hellos = ()=>{
//     console.log('Hello');
// }

// setTimeout(hellos, 2000);


// function getData(dataId, getNextData){
    
//     setTimeout(()=>{
//         console.log('Data ', dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// // Call back hell
// getData(2, ()=>{
//     getData(4, ()=>{
//         getData(5);
//     });
// });


// let promise = new Promise((resolve, reject)=>{
//     console.log('I am a promise');
//     reject('Failed to Deliver');
// });

// console.log(promise);


// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('I came via Promise');
//             resolve('Sucess');
//         }, 1000);
//         // reject('Unsuccessfull');
//     });
// }


// getData();

 
// let getPromise = () => {
//     return new Promise((resolve, reject)=>{
//         console.log('I am a promsoe');
//         resolve('Sucess');
//         reject('Due to Network error');
//     });
// };


// let promise = getPromise();

// promise.then((res)=>{
//     console.log('Promise Fullfilled', res);
// });

// promise.catch((err)=>{
//     console.log('Rejected', err);
// })




// function asyncFun1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('Some data 1');
//             resolve('Success');
//         }, 4000);
//     });
// }

// function asyncFun2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('Some data 2');
//             resolve('Success');
//         }, 4000);
//     });
// }

// console.log('Fetching Data1....')
// let p1 =  asyncFun1();

// p1.then((res)=>{
//     console.log(res);
//     console.log('Fetching Data2....');
//     let p2 = asyncFun2();

//     p2.then((res)=>{
//         console.log(res);
//     });

    
// });                           

// console.log('Fetching Data2....');

// let p2 = asyncFun2();

// p2.then((res)=>{
//     console.log(res);
// });


// function calculator(a, b, sum){
//     sum(a, b);
// }

// function sum(a, b){
//     console.log(a + b);
// }

// calculator(1, 2, sum);


// const hello = ()=>{
//     console.log('Hello');
// }

// setTimeout(hello, 2000);
                                                              

// function getData(dataId, getNextData){
   
//     setTimeout(() => {
//         console.log('Data', dataId);

//         if(getNextData){
//             getNextData();
//         }

//     }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);

// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3);
//     })
// })



// let promise = new Promise((resolve, reject)=>{
//     console.log('I am a promise');
//     reject('Failed');
// });           


// function getData(dataId, getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('Data ', dataId);
//             resolve('success');
//             if(getNextData){
//                 getNextData();
//             }
//         }, 3000);
//     })
// }
         

// let prim =  getData(2);


// const getpromise = ()=>{
//     return new Promise((resolve, reject)=>{

//         console.log('I am a promise');
//         // resolve('success');
//         reject('Rejected');
//     });

// }

// getpromise().then((res)=>{
//     console.log('Promise Fullfilled');
// });

// getpromise().catch((res)=>{
//     console.log('Promise Rejected');
// })



// function asyncFun(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log('Some data 1');
//             resolve('Success');
//         }, 2000);
//     });
// }

// let p1 =  asyncFun();
// p1.then((res)=>{
//     console.log(res);
// });


function asyncFun1(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Some data 1');
            resolve('Success');
        }, 2000);
    });
}

function asyncFun2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Some data 2');
            resolve('Success');
        }, 4000);
    });
}

// console.log('Fetching Data 1');
// asyncFun1().then((res)=>{
//     // console.log(res);
//     console.log('Fetching Data 2');
//     asyncFun2().then((res)=>{
//         // console.log(res);
//     })
// });


// asyncFun1().then((res)=>{
//     return asyncFun2();
// }).then((res)=>{
//     console.log('Recieved both data');
// });

