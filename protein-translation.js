
export const translate = (rna) => {
  if (!rna) {
    return [];
  }
  let split = rna.match(/.{1,3}/g);
  console.log(split);
};
