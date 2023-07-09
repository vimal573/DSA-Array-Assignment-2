// Question 8
// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

const smallestRangeI = (nums, k) => {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  if (max - min <= 2 * k) return 0;
  return max - min - 2 * k;
};

smallestRangeI([1]);

// TC: O(n)
// SC: O(1)
