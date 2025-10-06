const express = require("express");
const router = express.Router();
const TransactionModel = require("../models/transactionModel");

router.post("/", async (req, res) => {
  try {
    const tx = await TransactionModel.createTransaction(req.body);
    res.status(201).send(tx);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const txs = await TransactionModel.getUserTransactions(req.params.userId);
    res.status(200).send(txs);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
