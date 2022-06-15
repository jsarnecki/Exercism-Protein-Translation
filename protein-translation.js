
export const translate = (rna) => {
  
  if (!rna) {
    return [];
  }

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

  const split = rna.match(/.{1,3}/g);
  const result = [];

  // Loop thru rnaSplitArr, compare against mapping
  for (const rna of split) {
    for (const protein of mapping) {
      if (protein[1].includes(rna)) {
        //Push mapping[x][0] into result
        result.push(protein[0]);
      }
    }
  }

  if ((!result.length && split) || (split[split.length - 1].length < 3 && !result.includes("STOP"))) {
    throw new Error('Invalid codon');
  }
  
  // Remove STOP proteins
  if (result.includes("STOP")) {
    const stop = result.indexOf("STOP");
    result.splice(stop);
  }

  return result;

};
