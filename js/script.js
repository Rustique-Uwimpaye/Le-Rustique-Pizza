$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
//Get inputs
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        //check price
        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };
        let price, totalPrice;
        switch (flavour) {
            case flavour = "pepperoni":
                switch (size) {
                    case size = "regular":
                        price = 550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "vegan-free") {
                            totalPrice =(price * number)+ 100;
                        } else if (crust === "neapolitan") {
                            totalPrice =(price * number)+ 200;
                        } else {
                            totalPrice = (price * number) + 320;
                        }
                        break;
                        case size = "medium":
                            price = 830;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "gluten-free") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "vegan-free") {
                                totalPrice =(price * number)+ 100;
                            } else if (crust === "neapolitan") {
                                totalPrice =(price * number)+ 200;
                            } else {
                                totalPrice = (price * number) + 320;
                            }
                            break;
                        case size = "large":
                            price = 1050;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "gluten-free") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "vegan-free") {
                                totalPrice =(price * number)+ 100;
                            } else if (crust === "neapolitan") {
                                totalPrice =(price * number)+ 200;
                            } else {
                                totalPrice = (price * number) + 320;
                            }
                            break;
                    }
                    break;
                    case flavour = "bbq-steak":
                switch (size) {
                    case size = "regular":
                        price = 550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "vegan-free") {
                            totalPrice =(price * number)+ 100;
                        } else if (crust === "neapolitan") {
                            totalPrice =(price * number)+ 200;
                        } else {
                            totalPrice = (price * number) + 320;
                        }
                        break;
                        case size = "medium":
                            price = 830;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "gluten-free") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "vegan-free") {
                                totalPrice =(price * number)+ 100;
                            } else if (crust === "neapolitan") {
                                totalPrice =(price * number)+ 200;
                            } else {
                                totalPrice = (price * number) + 320;
                            }
                            break;
                        case size = "large":
                            price = 1050;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "gluten-free") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "vegan-free") {
                                totalPrice =(price * number)+ 100;
                            } else if (crust === "neapolitan") {
                                totalPrice =(price * number)+ 200;
                            } else {
                                totalPrice = (price * number) + 320;
                            }
                            break;
                    }
                    break;
                    case flavour = "cheese":
                switch (size) {
                    case size = "regular":
                        price = 550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "vegan-free") {
                            totalPrice =(price * number)+ 100;
                        } else if (crust === "neapolitan") {
                            totalPrice =(price * number)+ 200;
                        } else {
                            totalPrice = (price * number) + 320;
                        }
                        break;
                        case size = "medium":
                            price = 830;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "gluten-free") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "vegan-free") {
                                totalPrice =(price * number)+ 100;
                            } else if (crust === "neapolitan") {
                                totalPrice =(price * number)+ 200;
                            } else {
                                totalPrice = (price * number) + 320;
                            }
                            break;
                        case size = "large":
                            price = 1050;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "gluten-free") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "vegan-free") {
                                totalPrice =(price * number)+ 100;
                            } else if (crust === "neapolitan") {
                                totalPrice =(price * number)+ 200;
                            } else {
                                totalPrice = (price * number) + 320;
                            }
                            break;
                    }
                    break;
                    case flavour = "chicken-bbq":
                switch (size) {
                    case size = "regular":
                        price = 550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "vegan-free") {
                            totalPrice =(price * number)+ 100;
                        } else if (crust === "neapolitan") {
                            totalPrice =(price * number)+ 200;
                        } else {
                            totalPrice = (price * number) + 320;
                        }
                        break;
                        case size = "medium":
                            price = 830;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "gluten-free") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "vegan-free") {
                                totalPrice =(price * number)+ 100;
                            } else if (crust === "neapolitan") {
                                totalPrice =(price * number)+ 200;
                            } else {
                                totalPrice = (price * number) + 320;
                            }
                            break;
                        case size = "large":
                            price = 1050;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "gluten-free") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "vegan-free") {
                                totalPrice =(price * number)+ 100;
                            } else if (crust === "neapolitan") {
                                totalPrice =(price * number)+ 200;
                            } else {
                                totalPrice = (price * number) + 320;
                            }
                            break;
                    }
                    break;
                    case flavour = "vegie":
                switch (size) {
                    case size = "regular":
                        price = 550;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "vegan-free") {
                            totalPrice =(price * number)+ 100;
                        } else if (crust === "neapolitan") {
                            totalPrice =(price * number)+ 200;
                        } else {
                            totalPrice = (price * number) + 320;
                        }
                        break;
                        case size = "medium":
                            price = 830;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "gluten-free") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "vegan-free") {
                                totalPrice =(price * number)+ 100;
                            } else if (crust === "neapolitan") {
                                totalPrice =(price * number)+ 200;
                            } else {
                                totalPrice = (price * number) + 320;
                            }
                            break;
                        case size = "large":
                            price = 1050;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "gluten-free") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "vegan-free") {
                                totalPrice =(price * number)+ 100;
                            } else if (crust === "neapolitan") {
                                totalPrice =(price * number)+ 200;
                            } else {
                                totalPrice = (price * number) + 320;
                            }
                            break;
                    }
                    break;
    
        switch (topping) {
            case topping = "chicken":
                totalPrice = totalPrice + 200;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 50;
                break;
            case topping = "sausage":
                totalPrice = totalPrice + 100;
                break;
            case topping = "extra-cheese":
                totalPrice = totalPrice + 100;
                break;
            case topping = "bacon":
                totalPrice = totalPrice + 200;
                break;
           
        }

        //Execute order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder); // test func

        //create a new object
        // let myOrder = JSON.stringify(JSON.parse(newOrder));

        //Write to the order
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });
    //Pick Up
    $(".delivernot").click(function () {

    });

    //Scrollify
    $(function () {
        $.scrollify.move('#sum-order');
    });
});