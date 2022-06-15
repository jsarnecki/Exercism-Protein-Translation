
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
  const result = [];

  // Loop thru rnaSplitArr, compare against mapping
  for (let rna of split) {
    for (let pro of mapping) {
      if (pro[1].includes(rna)) {
        //Push mapping[x][0] into result
        result.push(pro[0]);
      }
    }
  }
  
  // Remove STOP proteins
  if (result.includes("STOP")) {
    const stop = result.indexOf("STOP");
    result.splice(stop);
  }

  return result;

};
