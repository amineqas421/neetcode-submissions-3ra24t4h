class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s1 = s.split("").sort().join("")
        const s2 = t.split("").sort().join("")
        if(s1 === s2) return true;
        return false;
        

    }
}
