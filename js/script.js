$("input[name='delivery']").on("click", function () {
    $(".deladdress").toggle(this.value == "50" && this.checked);
  });
  
  var price = function (size, crust, toppings, quantity, deliver) {
    return ((size + crust + toppings) * quantity) + deliver
  };
  
  var toppingsPrice = function checkTotal() {
    document.orderform.total.value = '';
    var sum = 0;
    for (i = 0; i < document.orderform.toppings.length; i++) {
      if (document.orderform.toppings[i].checked) {
        sum = sum + parseInt(document.orderform.toppings[i].value);
      }
    }
    document.orderform.total.value = sum;
  }
  
  function totalprice(form) {
    var fname = document.forms["orderform"]["fname"].value;
    if (fname == "") {
      alert("First name must be filled out");
      return false;
    }
    var lname = document.forms["orderform"]["lname"].value;
    if (lname == "") {
      alert("Last name must be filled out");
      return false;
    }
    var size = parseInt(document.forms["orderform"]["sizes"].value);
    if (size == "") {
      alert("size must be filled out");
      return false;
    }
    var crust = parseInt(document.forms["orderform"]["crust"].value);
    if (crust == "") {
      alert("Crust must be filled out");
      return false;
    }
    var toppings = parseInt(document.getElementById("total").value);
    if (toppings == "") {
      alert("Toppings must be filled out");
      return false;
    }
    var quantity = parseInt(document.forms["orderform"]["quantity"].value);
    if (quantity == "") {
      alert("Quantity must be filled out");
      return false;
    }
    var deliver = parseInt(document.querySelector('input[name="delivery"]:checked').value);
    // if (deliver == "") {
    //     alert("Delivery option must be  selected")();
    //     return false;
    //   }
    var result = price(size, crust, toppings, quantity, deliver);
    //  document.getElementById("output").innerHTML = result;
    alert(result);
  
  
    var fullName = lname + (" ") + fname;
    // var crustey = crust;
    // var sizey = size;
    // var top = toppings;
    document.getElementById("custname").innerHTML = ("Name: ") + fullName;
    document.getElementById("output").innerHTML = ("Your order Total is = ") + result + (" KES");
    // document.getElementById("sizeof").innerHTML = ("Pizza size: ") + sizey;
    // document.getElementById("crustType").innerHTML = (" Pizza crust: ") + crust;
    // document.getElementById("toppingsType").innerHTML = (" Pizza toppings: ") + toppings;
  
  
      $("body, html").animate({
        scrollBottom: $("#summary").offset().bottom
      }, 1000)
  }
  
  
  $(document).ready(function () {
    $("button#button2").click(function () {
      var name = $("input#subject").val();
      var name = $("textarea#message").val();
      var name = $("input#email").val();
      var name = $("input#name").val();
      if ($("input#name").val() && $("input#email").val() && $("textarea#message").val() && $("input#subject").val() != "") {
        alert(name + " Thankyou for contacting us!!");
      } else {
        alert("please enter your name,email,subject and message.")
      }
    });
  });
  
  // $(document).ready(function () {
  //   $("button#button1").click(function(){
  //     var location = prompt("Enter location: ");
  //     {
  //       alert("your pizza will be delivered to your location " +location + " delivery fee is 200ksh");
  //     }
  
  //   });
  // });
  
  
  // function order(size,crust,toppings,total){
  //     this.pizzaSize = size;
  //     this.pizzaCrust = crust;
  //     this.pizzaToppings = toppings;
  //     this.total = total;
  // }
  // // $(document).ready(function(){
  // //     $("button#order").click(function(){
  // //         var pizza = $(#size)
  // //     }
  // // }