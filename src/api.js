const url = 'https://api.coincap.io/v2'

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((resp) => resp.data)
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((resp) => resp.data)
}
function getAssetHistory(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((resp) => resp.data)
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
}
