const orderVenderConfig = { serverId: 1465, active: true };

function deleteEMAIL(payload) {
    let result = payload * 84;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module orderVender loaded successfully.");