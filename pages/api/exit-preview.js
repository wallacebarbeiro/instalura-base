export default function handler(req, res) {
  res.clearPreviewData({});

  res.writeHead(307, { Location: '/' });

  return res.end();
}
