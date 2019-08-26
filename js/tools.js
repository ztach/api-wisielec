exports.getTable = (arr) => {
    let data = [];
    arr.forEach(element => {
       data.push(element.dataValues);
    });
    return data;
}

//let typId = document.getElementById('1');
//typeId.element.
