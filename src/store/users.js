import firebase from '../firebase';
import { db } from '../firebase';

export const sendWallet = (targetId, amount, uid) => {
  return () => {
    Promise.all([
      db
        .collection('users')
        .doc(targetId)
        .update({
          possession: firebase.firestore.FieldValue.increment(parseInt(amount)),
        }),
      db
        .collection('users')
        .doc(uid)
        .update({
          possession: firebase.firestore.FieldValue.increment(
            parseInt(-amount)
          ),
        }),
    ])
      .then(() => {
        console.log('sent wallet');
      })
      .catch(error => {
        console.log('send wallet error', error);
      });
  };
};
