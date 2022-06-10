function addHeadingTime(id) {
    const response = await fetch(`/api/tasks/headings${id}`, {
        method: 'GET'
      });
    let sum = 0;
    console.log(response);
   /* for (let i = 0; i < taskArray.length; i++) {
        sum += taskArray[i];
    }*/
}

module.exports = addHeadingTime;