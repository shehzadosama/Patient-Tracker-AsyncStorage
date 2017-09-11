import PatientsAction from "./../actions/PatientsAction";
import { AsyncStorage } from 'react-native';

//Update in counter 13 -- create Middleware
export default class PatientsMiddleware {
    //Update in counter 13 -- This function will be called 
    static asyncIncrement(data) {
        console.log("test ", data);
        return (dispatch) => {
            // My Business logic Here
            // var patients = [];
            var storageData;
            // AsyncStorage.removeItem('patients');
            AsyncStorage.getItem('patients').then((value) => {
                storageData = JSON.parse(value);
                console.log(storageData);
                if (storageData === null) {
                    alert('hello');
                    AsyncStorage.setItem('patients', JSON.stringify([data])).then(

                        // dispatch(PatientsAction.addPatients(data))


                    );
                }
                else {
                    // console.log(storageData);

                    // patients = JSON.parse(value);
                    // console.log(patients);
                    // patients.concat(data);
                    // console.log(patients);
                    AsyncStorage.setItem('patients', JSON.stringify(storageData.concat(data))).then(
                        alert("data added")
                        // dispatch(PatientsAction.addPatients(data))
                    
                    
                    );
                }
                // AsyncStorage.getItem('patients').then((value) => console.log('async', JSON.parse(value)));

            })

            //     }
            //   console.log('asyn',AsyncStorage.getItem('patients'));
            // data = data * 2;


            // AsyncStorage.getItem('patients').then((value) => console.log('async', JSON.parse(value)));
            // this.setState({ 'name': value }))

        }
    }
}
