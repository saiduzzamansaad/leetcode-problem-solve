function strStr(haystack, needle) {
    const hLen = haystack.length;
    const nLen = needle.length;

    if (nLen === 0) return 0; // Edge case: empty needle

    for (let i = 0; i <= hLen - nLen; i++) {
        if (haystack.slice(i, i + nLen) === needle) {
            return i;
        }
    }

    return -1;
}
