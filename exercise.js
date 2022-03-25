// Your code goes here
function getItemById(items, id){
    return items.find(item => item.id === id)
}

module.exports = {
    // Uncomment these as you write them
     getItemById,
    // buildTransactions,
    // getTransactionsByItemDescription
}
