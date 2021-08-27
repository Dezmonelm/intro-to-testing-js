const upperCaseVowels = ['A', 'E', 'I', 'O', 'U',];
const lowerCaseVowels = ['a', 'e', 'i', 'o', 'u'];
const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const negOddNumbers = [-1, -3, -5, -7, -9, -11, -13, -15, -17, -19];
const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16 ,18 ,20];
const negEvenNumbers = [-2, -4, -6, -8, -10, -12, -14, -16 ,-18 ,-20];
const randomNumber = Math.floor(Math.random() * 10);
const randomEvenNumber = evenNumbers[randomNumber];
const randomOddNumber = oddNumbers[randomNumber];
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

//exercise 10
describe('isFive', function () {
    it('Should be defined as a function', function () {
        expect(typeof ifFive).toBe('function');
    });
    it('should pass as a string when call', function() {
        expect(ifFive('5')).toBe(true);
    });
    it('does 5 return true', function() {
        expect(ifFive(5)).toBe(true);
    });
    it('should pass as a boolean', function() {
        expect(ifFive(5)).toBe(true);
    });
});

//Exercise 11
describe('isEven', function() {
    it('should be define as a function', function(){
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when function is called', function(){
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when an even number is passed', function(){
        expect(isEven(randomEvenNumber)).toBe(true);
    });
    it('should return false when an odd number is passed', function(){
        expect(isEven(randomOddNumber)).toBe(false);
    });
    it('should return false when words pass through as a string', function(){
        expect(isEven('string')).toBe(false);
    });
});

// exercise 12
describe('isVowel', function () {
    it('should be defined as function', function () {
        expect(typeof isVowel).toBe('function');
        });
    it('should pass true as a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
        });
    it('should return false when passing the letter y' , function () {
        expect(isVowel('y')).toBe(false);
        });
});