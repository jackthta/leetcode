function twoSum(nums: number[], target: number): number[] {
  // Hash table to store number->index mapping
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const numDiff = target - num;

    // Latter condition prevents using self index twice
    if (numsMap.has(numDiff) && numsMap.get(numDiff) !== i) {
      return [i, numsMap.get(numDiff)];
    }
  }
}
