// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Exercise 1
describe('sayHello', function() {
    it('should be defined as a function', function(){
        expect(typeof sayHello).toBe('function');
    });
//    exercise 2
    it('should return a string when called.', function() {
        expect(typeof sayHello()).toBe('string');
    });
    // Exercise 3
    it('should return the string "Hello, Jane!" when executed', function(){
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    //exercise 4
    it('should return the string "Hello, Alex!" when passed', function() {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
//    exercise 5
    it('should say "Hello, Pat!" when passed as a string', function() {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should say "Hello, World" when passed true',function()
    {
    expect(sayHello(true)).toBe("Hello, World!")})
});

