const search = (nums, target) => {
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      index = nums.indexOf(target);
    }
  }
  return index;
};

module.exports = search;
