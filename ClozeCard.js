// ClozeCard constructor takes two arguments: text and cloze.
// These values represent the full text and the cloze-deleted portion of the flashcard text.

function ClozeCard(text, cloze) {
  this.full = text;
  this.cloze = cloze;

  this.partial = text.replace(cloze, '...');
}


module.exports = ClozeCard;
