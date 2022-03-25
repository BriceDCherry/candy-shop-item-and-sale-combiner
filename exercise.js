// Your code goes here
function getItemById(items, id){
    return items.find(item => item.id === id)
}

function buildTransactions(sales, items) {
    return sales.map(sale => {
        const item = getItemById(items, sale.itemId)

        return {
            ...sale,
            description: item.description,
            price: item.price,
        }
    })
}

function getTransactionsByItemDescription(transactions, itemDescription){
    return transactions.filter(transaction => transaction.description === itemDescription);
}

module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}
