export default function originImages() {
  function importAll(r) {
    return r.keys().map(r);
  }  
  const originIcons = importAll(require.context('./../assets/origins/', false, /\.(png|jpe?g|svg)$/));
  return originIcons;
}