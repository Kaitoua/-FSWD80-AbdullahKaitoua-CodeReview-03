describe("calculate insurance for austria, hungary, greece", function() {
    //what it should do
    it("should calculate insurance cost for austria", function() {
        //expect something
        expect(calcInsAustria(29, 150))
            .toEqual(567);
    });
    //what it should do
    it("should calculate insurance cost for hungary", function() {
        //expect something
        expect(calcInsHungary(29, 150))
            .toEqual(720);
    });
    it("should calculate insurance cost for greece", function() {
        //expect something
        expect(calcInsGreece(29, 159))
            .toEqual(795);
    });

});


describe("calculate my current age", function() {
    //what it should do
    it("should print out my current age", function() {
        //expect something
        expect(calcMycurrentage(2019, 1991))
            .toEqual(28);
    });
    //what it should do
    it("should print out my  sister current age", function() {
        //expect something
        expect(calcMycurrentage(2019, 1998))
            .toEqual(21);
    });
    //what it should do
    it("should print out my mother current age", function() {
        //expect something
        expect(calcMycurrentage(2019, 1962))
            .toEqual(57);
    });
    
    
     
});
