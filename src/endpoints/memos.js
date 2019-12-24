const express = require('express');
const router = express.Router();
const Memo = require('../schemas/memo');

router.get('/', (req, res) => {
  Memo.find({}, (err, memos) => {
    if (err) return res.status(500).send('GET MEMOS failed');

    res.status(200).json({ data: memos });
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  const memo = new Memo(body);

  memo.createdAt = (new Date()).getTime();

  memo.save((err, savedMemo) => {
    if (err) return res.status(500).send('POST MEMO failed');

    res.status(200).json({ data: savedMemo });
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Memo.deleteOne({ _id: id }, function(err) {
    if (err) return res.status(500).send('DELETE MEMO failed');

    res.status(200).json({ id: id });
  });
});

module.exports = router;