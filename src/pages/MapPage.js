import { View } from "react-native";

import Layout from "../hoc/Layout";
import TextMain from "../shared/ui/TextMain";

const MapPage = () => {
  return (
    <Layout statusBar>
      <View>
        <TextMain text="MapPage" />
      </View>
    </Layout>
  );
};

export default MapPage;
