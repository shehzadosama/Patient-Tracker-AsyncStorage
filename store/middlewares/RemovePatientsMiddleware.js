import PatientsAction from "./../actions/PatientsAction";
import { AsyncStorage } from 'react-native';


export default class RemovePatientsMiddleware {

    static asyncIncrement(key) {
        
        // console.log("test ", data);
        return (dispatch) => {
            // My Business logic Here
            // var patients = [];
            var storageData;
            // AsyncStorage.removeItem('patients');
            AsyncStorage.getItem('patients').then((value) => {
                storageData = JSON.parse(value);
                storageData.splice(key,1);
                console.log(storageData);
                // if (storageData === null) {
                    // alert('no data in storage');
                    AsyncStorage.setItem('patients', JSON.stringify(storageData)).then(
                        dispatch(PatientsAction.setPatients(storageData))
                    // dispatch(PatientsAction.setPatients([]))


                    );
                // }
                // else {
// alert('hello');
                    // AsyncStorage.setItem('patients', JSON.stringify(storageData.concat(data))).then(
                    // dispatch(PatientsAction.setPatients(storageData));
                // }

            })
           



        }
    }
}
