import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
apiKey: "",
databaseURL: "https://vue-crud-ad825.firebaseio.com",
projectId: "vue-crud-ad825"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
