import { Image, Text, View, StyleSheet } from "react-native";
import styled from "styled-components";
import TextMain from "../../shared/ui/TextMain";

const View_Container = styled.View`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
  height: 70px;
`;

const View_SubContainer = styled.View`
  flex: 1;
`;

const View_Row = styled.View`
  flex-direction: row;
  padding: 0 0 5px 0;
`;

const ChatListItem = () => {
  return (
    <View_Container
      style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "lightgray",
      }}
    >
      <Image
        source={{
          uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
        }}
        style={{ width: 60, height: 60, borderRadius: 12, marginRight: 10 }}
      />
      <View_SubContainer>
        <View_Row>
          <TextMain
            text="Lucas"
            numberOfLines={1}
            med
            style={{ flex: 1, fontSize: 16 }}
          />
          <TextMain text="8:30" style={{ fontSize: 12, color: "gray" }} />
        </View_Row>

        <TextMain
          text="hello there"
          numberOfLines={2}
          style={{ color: "gray" }}
        />
      </View_SubContainer>
    </View_Container>
  );
};

export default ChatListItem;
