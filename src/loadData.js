export default function(hash) {
  const url = `http://eve.kassikas.net/ore/?result=${hash}&json=1`;
  return fetch(url)
  .then(res => res.json())
  .catch(err => {
    console.error('err', url, err)
  });
}
