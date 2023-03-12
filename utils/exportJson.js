const getJson = (rows, columns) => {
    // Format the data. Here we only keep the value
    const data = rows.map((row) => {
      const rowData = {};
      columns.forEach((column) => {
        rowData[column.field] = row[column.field];
      });
      return rowData;
    });
  
    // Stringify with some indentation
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parameters
    return JSON.stringify(data, null, 2);
};

const exportBlob = (blob, filename) => {
    // Save the blob in a json file
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    setTimeout(() => {
        URL.revokeObjectURL(url);
    });
};
export const exportJson = (rows, columns, filename) => {
  const jsonString = getJson(rows, columns);
  const blob = new Blob([jsonString], {
    type: 'text/json',
  });
  exportBlob(blob, `${filename}.json`);
};