module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(msg, respond) {
        var foundProduct = '';
        for(var i=0; i<mockData.length; i++) {
            if(mockData[i].product_id == msg.productId){
                foundProduct = i;
                break;
            }
        }
        if(foundProduct){
            respond(null, { result: mockData[foundProduct].product_price});
        }
        else{
            respond(null, { result: ''});
        }
    }
}