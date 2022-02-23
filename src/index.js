module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    } else {
        let copyMatrix = matrix;
        for (let i = 0; i < copyMatrix.length; i++) {
            if ((i + 1) % 2 === 0) {
                copyMatrix[i].reverse();
            }
        };

        return Array = copyMatrix.join(',');
    };
}
