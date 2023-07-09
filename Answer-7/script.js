// Question 7
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
// monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

const isMonotonic = nums => {
  return (
    nums.every((val, i) => i === 0 || val <= nums[i - 1]) ||
    nums.every((val, i) => i === 0 || val >= nums[i - 1])
  );
};

isMonotonic([1, 2, 2, 3]);

// TC: O(n)
// SC: O(1)
