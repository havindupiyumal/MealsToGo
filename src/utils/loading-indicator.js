import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

export const LoadingIndicator = styled(ActivityIndicator)`
  color: ${(props) => props.theme.colors.ui.error};
  margin-left: -20px;
  position: absolute;
  top: 50%;
  left: 50%;
`;
