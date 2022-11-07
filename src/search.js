const search = (nums, target) => {
  // Set left and right pointers.
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // Set middle pointer.
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    // When dividing the rotated array into two halves, one must me sorted.

    // Check if the left half is sorted.
    if (nums[left] <= nums[mid]) {
      // Check if target is in the left half.
      if (target >= nums[left] && target < nums[mid]) {
        // If so, move the right pointer to the left of the middle pointer.
        right = mid - 1;
        // Else, move the left pointer to the right of the middle pointer
      } else {
        left = mid + 1;
      }
    }
    // Else, the right half is sorted.
    else {
      // Check if target is in the right half.
      if (target > nums[mid] && target <= nums[right]) {
        // If so, move the left pointer to the right of the middle pointer.
        left = mid + 1;
      } else {
        // Else, move the right pointer to the left of the middle pointer.
        right = mid - 1;
      }
    }
  }
  return -1;
};

module.exports = search; 
