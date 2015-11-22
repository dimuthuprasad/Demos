describe("the let keyword", function () {

    it("The  let keyword", function () {

        function test() {
            for (var i; i < 10; i++) {
                console.log(i);
            }
            i = 10;

            expect(i).toBe(10);}

        test();

    });
});