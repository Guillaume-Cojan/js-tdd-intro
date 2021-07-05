const capitalizeFirstLetters = (str) => {
    return str.length > 0
        ? str
              .split(" ")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ")
        : "";
};

module.exports = capitalizeFirstLetters;
