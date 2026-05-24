class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums = new Set(nums);

    if (nums.size == 0 || nums.size == 1) return nums.size;

    let longest = 0;

    for (let num of nums) {
        let current = 0;
        let k = num;

        if (!nums.has(k - 1)) {
            while (nums.has(k++)) {
                current++;
            }
            if (current > longest) longest = current;
        }
    }

    return longest;
    }
}
