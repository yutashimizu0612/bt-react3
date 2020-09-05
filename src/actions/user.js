import firebase from '../firebase';
import { db } from '../firebase';

export const SEND_WALLET_SUCCESS = 'SEND_WALLET_SUCCESS';
export const SEND_WALLET_ERROR = 'SEND_WALLET_ERROR';

export const sendWallet = (targetId, amount, uid) => {
  return dispatch => {
    Promise.all([
      db
        .collection('users')
        .doc(targetId)
        .update({
          possession: firebase.firestore.FieldValue.increment(amount),
        }),
      db
        .collection('users')
        .doc(uid)
        .update({
          possession: firebase.firestore.FieldValue.increment(-amount),
        }),
    ])
      .then(() => {
        dispatch({ type: SEND_WALLET_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: SEND_WALLET_ERROR, error });
      });
  };
};
