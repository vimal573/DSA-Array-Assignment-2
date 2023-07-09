// Question 6
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise,
// return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// Explanation: 9 exists in nums and its index is 4

const search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = start + (end - start / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));

// TC: O(logn)
// SC: O(1)
