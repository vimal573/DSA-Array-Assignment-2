// Question 5
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

const maximumProduct = function (nums) {
  nums = nums.sort((a, b) => b - a);

  const product = nums[0] * nums[1] * nums[2];
  const numsLength = nums.length;
  if (nums[0] < 0) return product;

  if (nums[numsLength - 1] * nums[numsLength - 2] * nums[0] > product) {
    return nums[numsLength - 1] * nums[numsLength - 2] * nums[0];
  }
  if (nums[2] < 0 && numsLength >= 5 && nums[3] * nums[4] < nums[0] * nums[1]) {
    return nums[2] * nums[3] * nums[4];
  }
  return product;
};

console.log(maximumProduct([1, 2, 3]));

// TC: O(logn)
// SC: O(1)
