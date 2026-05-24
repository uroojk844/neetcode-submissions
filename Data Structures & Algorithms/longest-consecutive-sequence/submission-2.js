class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums = new Set(nums);

        if (nums.size == 0 || nums.size == 1) return nums.size;

        let longest = 0;
        let iterator = nums.values();

        function find(start) {
            let next = iterator.next();
            if (!nums.has(start - 1)) {
                let current = 0;
                while (nums.has(start++)) current++;
                if (current > longest) longest = current;
            }
            if (!next.done) find(next.value)
        }

        find(iterator.next().value);

        return longest;
    }
}
