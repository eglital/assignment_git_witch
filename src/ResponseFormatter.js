class ResponseFormatter {
  format(responseObj) {
    responseObj.then(response => {
      let output = "";
      if (response.query === "details") {
        output += `${response.username}'s ${response.subject}:'\n`;
        response.result.forEach(repo => {
          output += `${repo.name} - ${repo.description}\n`;
        });
      } else if (response.query === "count") {
        output += `the user ${response.username} has ${response.result} ${response.subject}`;
      }
      return new Promise(resolve => { resolve(output) });
    });
  }
}

module.exports = ResponseFormatter;
