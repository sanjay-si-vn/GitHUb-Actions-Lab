const add = require("./app");

if (add(2, 3) === 5) {
    console.log("Test Passed");
} else {
    throw new Error("Test Failed");
}
