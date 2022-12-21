

var viewer;

function launchViewer(urn) {
  var options = {
    env: 'AutodeskProduction',
    getAccessToken: getAPSToken
  };

  var config3d = {
    extensions: ['CustomPropertyPanelExtension'],
  };

  Autodesk.Viewing.Initializer(options, function onInitialized() {
    viewer = new Autodesk.Viewing.GuiViewer3D(document.getElementById('apsViewer'), config3d);
    viewer.start();
    var documentId = 'urn:' + urn;
    Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
  });
}

function onDocumentLoadSuccess(doc) {
  var viewables = doc.getRoot().getDefaultGeometry();
  viewer.loadDocumentNode(doc, viewables).then(i => {
    // documented loaded, any action?
  });
}

function onDocumentLoadFailure(viewerErrorCode) {
  console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
}

function getAPSToken(callback) {
    fetch('/api/aps/oauth/v1/token').then(res => {
      res.json().then(data => {
        callback(data.access_token, data.expires_in);
      });
  });
}