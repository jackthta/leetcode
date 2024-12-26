// For Loop solution (most optimal of the two)
function searchInsert(nums: number[], target: number): number {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;

  // Optimization: Decrease the search area by checking whether
  // the target index should land in the left or right half of `nums`
  const middleIndex = Math.floor(nums.length / 2);
  if (target > nums[middleIndex]) {
      // Search right half of `nums`
      for (let i = middleIndex; i < nums.length; i++) {
          if (nums[i] === target || nums[i] > target) return i;
      }
  }
  if (target < nums[middleIndex]) {
      // Search left half of `nums`
      for (let i = 0; i <= middleIndex; i++) {
          if (nums[i] === target || nums[i] > target) return i;
      }
  }
  if (target === nums[middleIndex]) return middleIndex;
}



// Binary Search solution (least optimal of the two)
// function searchInsert(nums: number[], target: number): number {
//     if (target < nums[0]) return 0;
//     if (target > nums[nums.length - 1]) return nums.length;

//     // Optimization: Decrease the search area by checking whether
//     // the target index should land in the left or right half of `nums`
//     const middleIndex = Math.floor(nums.length / 2);
//     let targetIndex;
//     if (target > nums[middleIndex]) {
//         // Search right half of `nums`
//         targetIndex = binarySearch(nums, target, middleIndex);
//     }
//     if (target < nums[middleIndex]) {
//         // Search left half of `nums`
//         targetIndex = binarySearch(nums, target, 0, middleIndex);
//     }
//     if (target === nums[middleIndex]) return middleIndex;

//     return targetIndex;
// };

// function binarySearch(nums: number[], target: number, start: number = 0, end: number = nums.length - 1): number {
//     if (start > end) return -1;

//     const mid = Math.floor((start + end) / 2);

//     if (nums[mid] === target) return mid;

//     const isLastNumberToCheck = mid + 1 > end || start > mid - 1;
//     if (isLastNumberToCheck) {
//         if (nums[mid] < target) return mid + 1;
//         if (nums[mid] > target) return mid;
//     }

//     if (nums[mid] < target) return binarySearch(nums, target, mid, end);
//     if (nums[mid] > target) return binarySearch(nums, target, start, mid);
// }