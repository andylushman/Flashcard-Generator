// ClozeCard constructor takes two arguments: text and cloze.
// These values represent the full text and the cloze-deleted portion of the flashcard text.

function ClozeCard(text, cloze) {
  // Convert the incoming strings to lower case
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	// Confirm that the cloze statement appears within the complete text
	if (!textToLower.includes(clozeToLower)) {
		console.log("ERROR: " + "'" + cloze + "'" + " does not appear within the answer");
		return;
	}

  this.full = text;
  this.cloze = cloze;

  this.partial = text.replace(cloze, '...');
}


module.exports = ClozeCard;
