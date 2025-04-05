class TimeLimitedCache {
    constructor() {
        this.cache = {};
    }

    set(key, value, duration) {
        const currentTime = Date.now();
        const expirationTime = currentTime + duration;
        const existing = this.cache[key];
        if (existing && existing.expirationTime > currentTime) {
            this.cache[key] = { value, expirationTime };
            return true;
        } else {
            this.cache[key] = { value, expirationTime };
            return false;
        }
    }

    get(key) {
        const currentTime = Date.now();
        const entry = this.cache[key];
        if (entry && entry.expirationTime > currentTime) {
            return entry.value;
        } else {
            return -1;
        }
    }

    count() {
        const currentTime = Date.now();
        let count = 0;
        for (const key in this.cache) {
            if (this.cache[key].expirationTime > currentTime) {
                count++;
            } else {
                delete this.cache[key];
            }
        }
        return count;
    }
}

// Example usage:
const obj = new TimeLimitedCache();
console.log(obj.set(1, 42, 100)); // false
setTimeout(() => {
    console.log(obj.get(1)); // 42
    console.log(obj.count()); // 1
}, 50);
setTimeout(() => {
    console.log(obj.get(1)); // -1
}, 150);