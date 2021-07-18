/* eslint-disable prettier/prettier */
import { firebase } from '../lib/firebase';

const doesUserNameExist = async (username) => {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();

    console.log('result', result);

    return result.docs.length > 0;
};

export { doesUserNameExist }