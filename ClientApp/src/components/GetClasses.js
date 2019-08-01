export default function classImages() {
  function importAll(r) {
    return r.keys().map(r);
  }  
  const classIcons = importAll(require.context('./../assets/classes/', false, /\.(png|jpe?g|svg)$/));
  return classIcons;
}