const search = (nums, target) => {
  if (target === nums[0] || target === nums[1]) {
    return nums.indexOf(target);
  } else {
    return -1;
  }
};

module.exports = search;
