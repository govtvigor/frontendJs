describe("Find minimum and maximum number functions", function() {

    // Test for findMin function
    describe("findMin", function() {
      it("should return the minimum number in the array", function() {
        expect(findMin([11, 13, 56, 27, 18, 42, 78])).toEqual(11);
        expect(findMin([-5, 0, 10, -15, 20])).toEqual(-15);
        expect(findMin([100])).toEqual(100);
      });
      
      it("should return undefined for empty array", function() {
        expect(findMin([])).toBeUndefined();
      });
    });
  
    // Test for findMax function
    describe("findMax", function() {
      it("should return the maximum number in the array", function() {
        expect(findMax([11, 13, 56, 27, 18, 42, 78])).toEqual(78);
        expect(findMax([-5, 0, 10, -15, 20])).toEqual(20);
        expect(findMax([100])).toEqual(100);
      });
      
      it("should return undefined for empty array", function() {
        expect(findMax([])).toBeUndefined();
      });
    });
  
  });
  
  describe("Accumulator", function() {
    var accumulator;
  
    beforeEach(function() {
      accumulator = new Accumulator(5);
    });
  
    it("should have a starting value of 5", function() {
      expect(accumulator.value).toEqual(5);
    });
  
    it("should increment the value by 1", function() {
      accumulator.increment();
      expect(accumulator.value).toEqual(6);
    });
  
    it("should decrement the value by 1", function() {
      accumulator.decrement();
      expect(accumulator.value).toEqual(4);
    });
  });
  
  describe("CancelableAccumulator", function() {
    var cancelableAccumulator;
  
    beforeEach(function() {
      cancelableAccumulator = new CancelableAccumulator(10);
    });
  
    it("should have a starting value of 10", function() {
      expect(cancelableAccumulator.value).toEqual(10);
    });
  
    it("should have an original value of 10", function() {
      expect(cancelableAccumulator.originalValue).toEqual(10);
    });
  
    it("should increment the value by 1", function() {
      cancelableAccumulator.increment();
      expect(cancelableAccumulator.value).toEqual(11);
    });
  
    it("should decrement the value by 1", function() {
      cancelableAccumulator.decrement();
      expect(cancelableAccumulator.value).toEqual(9);
    });
  
    it("should clear the value to the original value", function() {
      cancelableAccumulator.increment();
      cancelableAccumulator.increment();
      cancelableAccumulator.clear();
      expect(cancelableAccumulator.value).toEqual(10);
    });
  
    it("should be an instance of Accumulator", function() {
      expect(cancelableAccumulator instanceof Accumulator).toEqual(true);
    });
  
    it("should be an instance of CancelableAccumulator", function() {
      expect(cancelableAccumulator instanceof CancelableAccumulator).toEqual(true);
    });
  });
  