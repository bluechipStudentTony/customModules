'use strict';

var yaeyo = {
    $: function (element_req) {
        //check if element is a string
        if (element_req typeof == 'string') {
            if (element_req) {
                return document.getElementById(element_req);
            }
            
        }
    },
        
    //form validation functions
    //check if text in element is of a certain number of characters
    checkNumber: function (element_req, number, message) {
        //check if element_req is available
        
        if (element_req)  {
            if (document.getElementById(element_req).value.length < number) {
                //if number of elements less that expected assign value to message
                message = "Please fill in some values"
                return message
            } else {
            
            }
        } else {
        
        }
    },
    
    checkType: function
    
};