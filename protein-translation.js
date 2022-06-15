
export const translate = (rna) => {
  
  const mapping = [
    ['Methionine', ['AUG']],
    ['Phenylalanine', ['UUU', 'UUC']],
    ['Leucine', ['UUA', 'UUG']],
    ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
    ['Tyrosine', ['UAU', 'UAC']],
    ['Cysteine', ['UGU', 'UGC']],
    ['Tryptophan', ['UGG']],
    ['STOP', ['UAA', 'UAG', 'UGA']]
  ];
  
  if (!rna) {
    return [];
  }
  
  const split = rna.match(/.{1,3}/g);
  // Splits the given RNA into 3-char length elms
  const result = [];

  // Loop thru splitArr, compare against mapping
  for (const rna of split) {
    for (const protein of mapping) {
      if (protein[1].includes(rna)) {
        // Check each rna elm from splitArr against the arrays of each protein
        // Push the protein name into result when it matches
        result.push(protein[0]);
      }
    }
  }

  if ((!result.length && split) || (split[split.length - 1].length < 3 && !result.includes("STOP"))) {
    // 1st: If result is empty, but split has elements, means the codon elms do not exist
    // 2nd: If final elm in split is less than 3, it's incomplete. But if result includes STOP, it cancels out the incomplete codon
    throw new Error('Invalid codon');
  }
  
  // If the result contains STOP, remove it with every protein after
  if (result.includes("STOP")) {
    const stop = result.indexOf("STOP");
    result.splice(stop);
  }

  return result;

};
