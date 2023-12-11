const nums = [2, 7, 11, 12, 15];
let sum = 0;
let n = nums.length;
for(let i=0; i<n; i++) {
    if(nums[i] % 2 == 0){
        sum += nums[i];
    }
}
console.log(sum);
