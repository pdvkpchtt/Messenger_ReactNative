import { useContext } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import styled from "styled-components";
import dayjs from "dayjs";
import relativetime from "dayjs/plugin/relativeTime";
dayjs.extend(relativetime);

import TextMain from "../../shared/ui/TextMain";
import themeContext from "../../config/themeContext";

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

const ChatListItem = ({ chat }) => {
  const theme = useContext(themeContext);

  return (
    <View_Container
      style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: theme.primary,
      }}
    >
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={{ width: 60, height: 60, borderRadius: 12, marginRight: 10 }}
      />
      <View_SubContainer>
        <View_Row>
          <TextMain
            text={chat.user.name}
            numberOfLines={1}
            med
            style={{ flex: 1, fontSize: 16 }}
          />
          <TextMain
            text={dayjs(chat.lastMessage.createdAt).fromNow(true)}
            style={{ fontSize: 12, color: "gray" }}
          />
        </View_Row>

        <TextMain
          text={chat.lastMessage.text}
          numberOfLines={2}
          style={{ color: "gray" }}
        />
      </View_SubContainer>
    </View_Container>
  );
};

export default ChatListItem;
