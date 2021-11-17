function mean(nums) {
    sumOfNums = 0
    for (let i = 0; i < nums.length; i++) {
        sumOfNums += nums[i]
    }
    return sumOfNums/nums.length
}

function median(nums) {
    nums = nums.sort((a, b) => a - b)

    if (nums.length % 2 !== 0) {
        return nums[Math.floor(nums.length / 2)]
    } else {
        let midNum1 = nums[nums.length / 2]
        let midNum2 = nums[nums.length / 2]
        return (midNum1 + midNum2) / 2
    }
}

function mode() {
    const instanceOfNumCount = {}

    nums.forEach( num => {
        if (!instanceOfNumCount[num]) instanceOfNumCount[num] = 0
        instanceOfNumCount[num]++
    })

    let result = []
    let max = 0

    for(let key in instanceOfNumCount) {
        if (instanceOfNumCount[key] > max) {
            result = [key]
            max = instanceOfNumCount[key]
        } else if (instanceOfNumCount[key] === max) {
            result.push(key)
        }
    }

    if (Object.keys(instanceOfNumCount).length === result.length) {
        result = []
    }
    return result
}

function callOperationOnNums(nums, operation) {
    const outputValue = operation(nums)
    return outputValue
}

function checkValuesAreNums(valuesAsStrings) {
    let result = []

    for(let i = 0; i < valuesAsStrings.length; i++) {
        let value = Number(valuesAsStrings[i])

        if (Number.isNaN(value)) {
            return [NaN, value]
        } else {
            result.push(value)
        }
    }
    return result
}

class ExpressError extends Error {
    constructor(message, status) {
        super()
        this.message = message
        this.status = status
        console.error(this.stack)
    }
}

module.exports = {
    mean: mean,
    median: median,
    mode: mode,
    callOperationOnNums: callOperationOnNums,
    checkValuesAreNums: checkValuesAreNums,
    ExpressError: ExpressError
}