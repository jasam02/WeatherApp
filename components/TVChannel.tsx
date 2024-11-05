import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TVChannelComponent = () => {
    //Hardcoded data
  const [channels] = useState([
    {
      showtype: "Golf",
      episodetitle: "Genesis Championship, Final Round",
      listdatetime: "2024-10-27 13:30:00",
    },
    {
      showtype: "Golf",
      episodetitle: "Genesis Championship, Final Round",
      listdatetime: "2024-10-27 13:30:00",
    },
    {
      showtype: "Golf",
      episodetitle: "Genesis Championship, Final Round",
      listdatetime: "2024-10-27 13:30:00",
    },
    {
      showtype: "Soccer",
      episodetitle: "Motagua vs. Olimpia",
      listdatetime: "2024-10-27 14:30:00",
    },
  ]);

  return (
    <View style={styles.container}>
      {channels.map((channel, index) => (
        <View key={index} style={styles.box}>
          <Text style={styles.showType}>{channel.showtype}</Text>
          <Text style={styles.episodeTitle}>{channel.episodetitle}</Text>
          <Text style={styles.listDateTime}>{new Date(channel.listdatetime).toLocaleString()}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'gray',
  },
  box: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  showType: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  episodeTitle: {
    fontSize: 14,
    color: '#333',
  },
  listDateTime: {
    fontSize: 12,
    color: '#666',
  },
});

export default TVChannelComponent;
