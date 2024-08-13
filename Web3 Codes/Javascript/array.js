function filterAdultFemales(arr) {
    /*Using filter: The filter method is a built-in function that allows us to quickly select elements based on a condition.
     We use an arrow function to specify that we're interested in users with an age greater than 18 and gender equal to "female". */
    // Use the filter method to select users who are female and older than 18
    
    //return arr.filter(user => user.age > 18 && user.gender === "female");

    /*Using a Loop and push: This approach demonstrates how to manually create a new array and add elements that meet the specified conditions. The for loop iterates over each user,
     checks the conditions, and uses the push method to add qualifying users to the result array. */
    const result = [];

  // Loop through each user in the array
  for (let i = 0; i < arr.length; i++) {
    const user = arr[i];
    
    // Check if the user is female and older than 18
    if (user.age > 18 && user.gender === "female") {
      // Push the user to the new array
      result.push(user);
    }
}
   return result;
  }
  
  const users = [
    { name: "Pranita", age: 21, gender: "female" },
    { name: "Priya", age: 12, gender: "female" },
    { name: "Tom", age: 15, gender: "male" }
  ];
  
  // Call the function and log the result
  const adultFemales = filterAdultFemales(users);
  console.log(adultFemales);
  