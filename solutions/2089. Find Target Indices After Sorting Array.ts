function targetIndices(nums: number[], target: number): number[] {
  insertionSort(nums);

  const targetIndices: number[] = [];

  const firstIndexOccurrence = binarySearch(nums, target);
  if (firstIndexOccurrence == null) return [];

  targetIndices.push(firstIndexOccurrence);

  // Fill in remainder target indices (if they exist)
  for (let i = firstIndexOccurrence + 1; i < nums.length; i++) {
      if (nums[i] === target) {
          targetIndices.push(i)
      } else {
          break;
      }
  }

  return targetIndices;
};

function insertionSort(nums: number[]): number[] {

  for (let i = 1; i < nums.length; i++) {

      const curr = nums[i];
      let j = i - 1;

      while (j >= 0 && nums[j] > curr) {
          nums[j + 1] = nums[j];
          j--;
      }

      nums[j + 1] = curr;
  }

  return nums;
}

function binarySearch(nums: number[], target: number, start: number = 0, end: number = nums.length - 1): number | null {

  while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
          // This is for sure the first occurrence of target
          if (mid === 0) return mid;

          if (mid > 0 && nums[mid - 1] !== target) {
              // This is the first occurrence of target
              return mid;
          }

          // Otherwise, search left
          end = mid - 1;
      }


      if (target < nums[mid]) end = mid - 1;
      if (target > nums[mid]) start = mid + 1;
  }

  return null;

}