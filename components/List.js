import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";

const students = [
  { id: 1, name: "Andrés", age: 25 },
  { id: 2, name: "Nicolás", age: 28 },
  { id: 3, name: "Camilo", age: 29 },
  { id: 4, name: "Jean", age: 28 },
];

export const List = () => {
  return (
    <View>
      <Text>Esta es una Lista</Text>
      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const contacts = [
  {
    title: "M",
    data: [
      { id: 1, name: "Maria", age: 33 },
      { id: 2, name: "Martín", age: 30 },
    ],
  },
  {
    title: "B",
    data: [{ id: 1, name: "Boli", age: 26 }],
  },
  {
    title: "P",
    data: [{ id: 1, name: "Pía", age: 38 }],
  },
];

export const SList = () => {
  return (
    <SectionList
      sections={contacts}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section }) => (
        <Text style={style.sectionTitle}>{section.title}</Text>
      )}
      renderItem={({ item }) => (
        <View>
          <Text>Name: {item.name}</Text>
          <Text>Age: {item.age}</Text>
        </View>
      )}
    />
  );
};

const style = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "red",
  },
});
