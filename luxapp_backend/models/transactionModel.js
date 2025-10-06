const { db } = require("../firebase");

const TransactionModel = {
  async createTransaction(data) {
    const txRef = db.collection("transactions").doc();
    await txRef.set({
      ...data,
      createdAt: new Date(),
    });
    return data;
  },

  async getUserTransactions(userId) {
    const snapshot = await db
      .collection("transactions")
      .where("userId", "==", userId)
      .get();

    return snapshot.docs.map((doc) => doc.data());
  }
};

module.exports = TransactionModel;
