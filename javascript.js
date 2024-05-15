const form=document.querySelector("form");

form.addEventListener("submit",function (e){
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector("#result");
    if (height===""||height<0||isNaN(height)){
        result.innerHTML=`Invalid Height ${height}`;
    }
    else if (weight===""||weight<0||isNaN(weight)){
        result.innerHTML=`Invalid Height ${weight}`;
    }
    else{
        const body=document.querySelector("body");
        const heading=document.querySelector("#heading");
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`;
        if (bmi<18.5){
            body.style.backgroundColor="#ADD8E6";
            heading.style.backgroundColor="#ADD8E6";
        }
        else if (bmi>=18.5&& bmi<=24.9){
            body.style.backgroundColor="#D1FFBD";
            heading.style.backgroundColor="#D1FFBD";
        }
        else if (bmi>=25 && bmi<=29.9){
            body.style.backgroundColor="orange";
            heading.style.backgroundColor="orange";
        }
        else if (bmi>=30){
            body.style.backgroundColor="red";
            heading.style.backgroundColor="red";
        }
    }

});