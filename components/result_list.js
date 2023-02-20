import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import ResultItem from "./result_item";

function renderResultItem(resultData) {
  return <ResultItem {...resultData.item} />;
}

export default function ResultList({ results }) {
  return (
    <SafeAreaView>
      <FlatList
        data={results}
        renderItem={renderResultItem}
        keyExtractor={(item) => item.country}
      />
    </SafeAreaView>
  );
}
