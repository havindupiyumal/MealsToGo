import styled from "styled-components/native";
import WebView from "react-native-webview";

export const CompactImage = styled.Image`
  border-radius: 10px;
  width: 100px;
  height: 80px;
`;

export const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 100px;
  height: 80px;
`;

export const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
