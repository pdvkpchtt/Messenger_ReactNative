import { View, FlatList } from "react-native";
import ChatListItem from "../components/chat/ChatListItem";

import Layout from "../hoc/Layout";
import chats from "../../assets/data/chats.json";

const ChatPage = () => {
  return (
    <Layout statusBar noPadding>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
        style={{ paddingTop: 5, paddingHorizontal: 8 }}
      />
    </Layout>
  );
};

export default ChatPage;
