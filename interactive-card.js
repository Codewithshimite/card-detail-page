const btn = document.querySelector(".confirm-button");
const errorMessage = "Please Enter name";
const errorMessage2 = "Please enter  Number";
const vmonth = document.getElementById("vMonth");
const vyear = document.getElementById("vyear");
const vcvv = document.getElementById("vcvv");
const vnumber = document.getElementById("vnumber");




function displayMessage() {
  const inputElement =
    document.querySelector(".name-input" ); 
  document.querySelector(".name").innerHTML = inputElement.value;

  const inputCardNumber = document.querySelector(".num-input");
  document.querySelector(".card").innerHTML = inputCardNumber.value;

  const inputExpirymonth = document.querySelector(".exp-month");
  document.querySelector(".exp").innerHTML = inputExpirymonth.value;

  const inputExpiryyear = document.querySelector(".exp-year");
  document.querySelector(".exp-Y").innerHTML = inputExpiryyear.value;

  const inputcvv = document.querySelector(".exp-cvv");
  document.querySelector(".cvv").innerHTML = inputcvv.value;

  const removeSlash = document.querySelector(".slash");
  document.querySelector(".slash").innerHTML = "/";

  // validations

  if (
    inputElement.value === "" &&
    inputCardNumber.value === "" &&
    inputExpirymonth.value === "" &&
    inputExpiryyear.value === "" &&
    inputcvv.value === ""
  ) {
    /**Here, if the inputs are left blank   */

    document.querySelector(".name").innerHTML = errorMessage;
    document.querySelector(".card").innerHTML = errorMessage2;
    document.querySelector(".exp").innerHTML = "invalid";
    document.querySelector(".exp-Y").innerHTML = "";
    document.querySelector(".cvv").innerHTML = "invalid";
    document.querySelector(".slash").innerHTML = "";

    /**Here, if only  the inputs are left blank   */
  }

  if (inputElement.value === "") {
    document.querySelector(".name").innerHTML = errorMessage;
  }

  if (inputCardNumber.value === "") {
    document.querySelector(".card").innerHTML = errorMessage2;
  }

  if (inputExpirymonth.value === "") {
    document.querySelector(".exp").innerHTML = "invalid";
    document.querySelector(".exp-Y").innerHTML = "";
    document.querySelector(".slash").innerHTML = "";
    document.querySelector(".cvv").innerHTML = "Invalid";
  }

  if (inputExpiryyear.value === "") {
    document.querySelector(".exp-Y").innerHTML = "invalid";
    document.querySelector(".exp").innerHTML = "";
    document.querySelector(".slash").innerHTML = "";
    document.querySelector(".cvv").innerHTML = "Invalid";
  }

  /**Here, if the month is above 12 months*/
  if (inputExpirymonth.value > 12) {
    document.querySelector(".exp").innerHTML = "Invalid";
    document.querySelector(".exp-Y").innerHTML = "";
    document.querySelector(".slash").innerHTML = "";
    document.querySelector(".cvv").innerHTML = "Invalid";
  } /**Here, if the month is expired or the year is above 4 years  */
  if (inputExpiryyear.value < 23) {
    document.querySelector(".exp-Y").innerHTML = "Expired";
    document.querySelector(".exp").innerHTML = "";
    document.querySelector(".slash").innerHTML = "";
    document.querySelector(".cvv").innerHTML = "Expired";
   
  }

  /**Here, if the month is correct and year is invalid   */
  if (inputExpirymonth.value >= 0 && inputExpiryyear.value > 27) {
    document.querySelector(".exp-Y").innerHTML = "Invalid";
    document.querySelector(".exp").innerHTML = " ";
    document.querySelector(".slash").innerHTML = "";
    document.querySelector(".cvv").innerHTML = "Invalid";
  }

 
}



vmonth.addEventListener("input", () => {
  (vmonth.value);
  const reg = /^\d+$/;
  if(!reg.test(vmonth.value)){
   document.querySelector(".exp-Y").innerHTML = "Invalid";
   document.querySelector(".exp").innerHTML = " ";
   document.querySelector(".slash").innerHTML = "";
   document.querySelector(".cvv").innerHTML = "Invalid";

  }
  
   

  }
  )

  vyear.addEventListener("input", () => {
   (vyear.value);
   const reg2 = /^\d+$/;
   if(!reg2.test(vyear.value)){
    document.querySelector(".exp-Y").innerHTML = "Invalid";
    document.querySelector(".exp").innerHTML = " ";
    document.querySelector(".slash").innerHTML = "";
    document.querySelector(".cvv").innerHTML = "Invalid";
 
   }
   
    
 
   }
   )

   vcvv.addEventListener("input", () => {
      (vcvv.value);
      const reg3 = /^\d+$/;
      if(!reg3.test(vyear.value)){
       document.querySelector(".cvv").innerHTML = "Invalid";
    
      }
      
       
    
      }
      )
  

      vnumber.addEventListener("input", () => {
         (vnumber.value);
         const reg4 = /^\d+$/;
         if(!reg4.test(vnumber.value)){
          document.querySelector(".card").innerHTML = "Invalid";
       
         }
         
          
       
         }
         )

   


         
 





