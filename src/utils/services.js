export default {
  getKeyValue: (event, key) => {
    const found = event.custom_data.find((data) => {
      if (data.key === key) {
        return data.value;
      }
    });
    if (found) {
      return found.value;
    }
    return null;
  },
};
