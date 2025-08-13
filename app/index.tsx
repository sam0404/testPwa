import React from "react";
import { Platform, StyleSheet } from "react-native";

import { WebView } from 'react-native-webview';


export default class Index extends React.Component {
  render() {
    if (Platform.OS === "web") {
      // window.location.href = "https://toloto.by";

      // return null;

      return (
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="manifest" href="manifest.json" />
            <link rel="stylesheet" href="style.css" />
          </head>
          <body>
            <div className="overlay" id='modal'>
              <div className="menu-window">
                <div className="game-title">То!Лото</div>
                <button className="menu-button" id='install'>Установить</button>
                <button className="menu-button" id='close'>Отмена</button>
              </div>
            </div>
            <iframe src="https://example.com/" />
          </body>
        </html>
      )
    }

    return <WebView
      source={{ uri: 'https://toloto.by' }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      mixedContentMode="always"
      startInLoadingState
      originWhitelist={['*']}
      androidHardwareAccelerationDisabled={true}
      injectedJavaScript={`
              (function() {
                window.open = function(url) {
                  window.location.href = url;
                };
            
                function cleanLinks() {
                  const links = document.querySelectorAll('a[target="_blank"]');
                  links.forEach(link => link.removeAttribute('target'));
                }
            
                cleanLinks();
            
                const observer = new MutationObserver(() => cleanLinks());
            
                observer.observe(document.body, {
                  childList: true,
                  subtree: true
                });
              })();
              true;
            `}
      style={styles.container}
    />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

