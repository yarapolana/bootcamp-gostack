import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = React.useState();

  React.useEffect(() => {
    async function getProjects() {
      const response = await api.get('projects');

      setProjects(response.data);
    }

    getProjects();
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Uploading Information ${Date.now()}`,
      owner: 'Yara Polana',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item}) => (
            <>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.text}>{item.owner}</Text>
            </>
          )}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}>
          <Text style={styles.buttonText}>Add Project</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  list: {
    padding: 20,
  },

  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
  },
});
