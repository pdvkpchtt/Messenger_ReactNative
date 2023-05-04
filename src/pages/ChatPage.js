import { View } from "react-native";
import ChatListItem from "../components/chat/ChatListItem";

import Layout from "../hoc/Layout";
import TextMain from "../shared/ui/TextMain";

const ChatPage = () => {
  return (
    <Layout statusBar>
      <View>
        <ChatListItem />
        <ChatListItem />
      </View>
    </Layout>
  );
};

export default ChatPage;
