

// let xhr = new XMLHttpRequest();


// xhr.addEventListener('load',()=>{
//     console.log(xhr.response);
// })


// xhr.open('GET', 'https://supersimplebackend.dev/greeting');
// xhr.send();


// let ans = fetch('https://supersimplebackend.dev/greeting').then((response)=>{
//     return response.text();
// }).then((text)=>{
//     console.log(text);
// });

async function requestNote(){

    const response = await fetch('https://supersimplebackend.dev/greeting');

    const text =  await response.text();

    console.log(text);

}
requestNote();
 