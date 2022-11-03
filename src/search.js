const search = (nums, target) => {
  if (target === nums[0]) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = search;
