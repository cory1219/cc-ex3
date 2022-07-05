module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond) {
        var foundProduct = '';
        for(var i=0; i<mockData.length; i++) {
            if(mockData[i].product_id == msg.productId){
                foundProduct = i;
                break;
            }
        }
        if(foundProduct){
            respond(null, { result: mockData[foundProduct].product_url});
        }
        else{
            respond(null, { result: ''});
        }
    }

    function productName(msg, respond) {
        var foundProduct = '';
        for(var i=0; i<mockData.length; i++) {
            if(mockData[i].product_id == msg.productId){
                foundProduct = i;
                break;
            }
        }
        if(foundProduct){
            respond(null, { result: mockData[foundProduct].product_name});
        }
        else{
            respond(null, { result: ''});
        }
    }

}