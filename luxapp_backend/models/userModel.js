const { db } = require("../firebase");

const UserModel = {
  async createUser(data) {
    const userRef = db.collection("users").doc(data.id);
    await userRef.set(data);
    return data;
  },

  async getUser(id) {
    const doc = await db.collection("users").doc(id).get();
    return doc.exists ? doc.data() : null;
  },

  async updateBalance(id, newBalance) {
    const userRef = db.collection("users").doc(id);
    await userRef.update({ balance: newBalance });
    return { id, newBalance };
  }
};

module.exports = UserModel;
